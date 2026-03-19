import StarRating from '../components/StarRating';
import SectionDivider from '../components/SectionDivider';

const knownFor = [
  {
    title: 'Sizzling Fajitas',
    desc: 'Beef or chicken, served with all the fixings',
    img: '/steak_fajitas.jpg',
  },
  {
    title: 'Weekend Breakfast',
    desc: 'Menudo, barbacoa, huevos & more — Saturday & Sunday starting at 8am',
    img: '/enchiladas.jpg',
  },
  {
    title: 'Live Music & Full Bar',
    desc: 'Margaritas, cold beer & good times every weekend',
    img: '/margaritas.jpg',
  },
  {
    title: 'Family Friendly',
    desc: 'Kids plates, senior plates & something for everyone',
    img: '/El_Jacalito_Seven_Points_TX.jpg',
  },
];

const reviews = [
  {
    name: 'Christopher Pitts',
    text: 'Absolutely amazing food, the chips and salsa is to kill for. Also the service is fantastic!',
    ratings: 'Food: 5/5 | Service: 5/5 | Atmosphere: 5/5',
  },
  {
    name: 'C E',
    text: 'Well seasoned food with reasonable prices. Everything we ate was really good so we will be back. Margaritas could have had a teeny bit more alcohol but they were still good.',
    ratings: null,
  },
  {
    name: 'Maria Colon',
    text: "This is my third time coming to El Jacalito! The food is amazing, staff is very professional and friendly. Barbacoa plate, fajitas and their guiso are my favorites.",
    ratings: 'Food: 5/5 | Service: 5/5 | Atmosphere: 5/5',
  },
  {
    name: 'Austin Cheatham',
    text: "You get the quality and quantity here. You can't beat this place's price point. This is the best Mexican food I've had in many years.",
    ratings: 'Food: 5/5 | Service: 5/5 | Atmosphere: 5/5',
  },
  {
    name: 'Amber Khan',
    text: 'Food was amazing. Staff was super friendly. Fast service. And great value!',
    ratings: null,
  },
  {
    name: 'John Curtis',
    text: "Best Mexican food around Cedar Creek Lake! We get the steak fajitas all the time. For lunch you could get it for $10 — it's an amazing deal and highly recommend it!",
    ratings: 'Food: 5/5 | Service: 5/5 | Atmosphere: 5/5',
  },
];

export default function About() {
  return (
    <main>
      <section
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/street_tacos_catering.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/80 to-bark-900/70" />
        <div className="relative z-10 text-center px-4 pt-32 md:pt-40">
          <span className="section-script text-gold-400 text-2xl">Our</span>
          <h1 className="font-display text-4xl md:text-5xl text-white mt-1">Story</h1>
          <p className="text-sand-200/80 mt-3 text-lg font-body">A Cedar Creek Lake Tradition</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="section-script text-chili-500 text-2xl">About</span>
              <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-2 mb-6">
                El Jacalito
              </h2>
              <SectionDivider />
              <p className="text-bark-800/80 text-lg leading-relaxed mt-6 font-body">
                El Jacalito is where Cedar Creek Lake comes to eat. Tucked right on Cedar Creek
                Parkway in Seven Points, we've been serving up authentic Tex-Mex — the kind made
                from scratch with recipes passed down through generations. Our fajitas sizzle, our
                margaritas are cold, and our doors are always open.
              </p>
              <p className="text-bark-800/80 text-lg leading-relaxed mt-4 font-body">
                From weekend breakfast with menudo and barbacoa to Friday night fajitas with live
                music, El Jacalito is more than a restaurant. It's where the community gathers.
              </p>
            </div>
            <div className="relative">
              <img
                src="/michalada.jpg"
                alt="El Jacalito atmosphere"
                className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-terracotta-500 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-script text-chili-500 text-2xl">What We're</span>
            <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-1">Known For</h2>
            <SectionDivider />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {knownFor.map((item) => (
              <div
                key={item.title}
                className="group relative h-[280px] rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/90 via-bark-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-sand-200/80 text-sm font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-script text-chili-500 text-2xl">What Folks Are</span>
            <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-1">Saying</h2>
            <SectionDivider />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-bark-800 rounded-2xl p-8 shadow-xl"
              >
                <StarRating />
                <blockquote className="text-sand-200/90 mt-4 mb-6 leading-relaxed font-body italic">
                  "{review.text}"
                </blockquote>
                <div className="border-t border-sand-400/10 pt-4">
                  <p className="text-chili-500 font-bold font-body text-sm">{review.name}</p>
                  {review.ratings && (
                    <p className="text-sand-400/60 text-xs font-body mt-1">{review.ratings}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://share.google/GQnfoySTs5MOAJwD2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Leave Us a Review on Google
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
