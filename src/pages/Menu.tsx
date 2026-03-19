import { useState, useEffect, useRef } from 'react';
import { menuCategories } from '../data/menuData';
import SectionDivider from '../components/SectionDivider';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveCategory(visible[0].target.id);
        }
      },
      { rootMargin: '-160px 0px -60% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(`[data-cat="${activeCategory}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeCategory]);

  const scrollToCategory = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 200;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/Napoles.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/80 to-bark-900/70" />
        <div className="relative z-10 text-center px-4 pt-32 md:pt-40">
          <span className="section-script text-gold-400 text-2xl">Our</span>
          <h1 className="font-display text-4xl md:text-5xl text-white mt-1">Menu</h1>
          <p className="text-sand-200/80 mt-3 text-lg font-body">
            Authentic Tex-Mex Made Fresh Daily
          </p>
        </div>
      </section>

      <div
        ref={navRef}
        className="sticky top-[108px] z-40 bg-bark-900 border-b border-bark-800 shadow-lg overflow-x-auto scrollbar-hide"
      >
        <div className="flex min-w-max px-4 py-3 gap-1">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              data-cat={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 font-body ${
                activeCategory === cat.id
                  ? 'bg-chili-500 text-white'
                  : 'text-sand-300 hover:text-white hover:bg-bark-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {menuCategories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            className="mb-16 scroll-mt-40"
          >
            <div className="mb-8">
              <h2 className="font-display text-2xl md:text-3xl text-bark-800">{cat.title}</h2>
              {cat.note && (
                <p className="text-terracotta-500 text-sm font-body font-bold mt-1">{cat.note}</p>
              )}
              <SectionDivider />
            </div>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              {cat.items.map((item, idx) => (
                <div
                  key={`${cat.id}-${idx}`}
                  className="flex justify-between items-start py-3 border-b border-sand-300/50 last:border-0"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="font-body font-bold text-bark-800 text-[15px]">{item.name}</h3>
                    {item.desc && (
                      <p className="text-bark-800/60 text-sm font-body mt-0.5 leading-snug">{item.desc}</p>
                    )}
                  </div>
                  {item.price && (
                    <span className="text-chili-500 font-bold text-sm font-body whitespace-nowrap flex-shrink-0">
                      {item.price}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center py-8 border-t border-sand-300">
          <p className="text-bark-800/50 text-sm font-body italic">
            15% gratuity will be added to parties of 8 or more. Changes, substitutions, or extras
            require an additional charge.
          </p>
        </div>
      </div>
    </main>
  );
}
