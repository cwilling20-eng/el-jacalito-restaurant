import { Phone, MapPin, Clock, Music, Beer, Tv, Facebook } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

const hours = [
  { day: 'Monday', time: '10:30 AM – 9:30 PM' },
  { day: 'Tuesday', time: '10:30 AM – 9:30 PM' },
  { day: 'Wednesday', time: '10:30 AM – 9:30 PM' },
  { day: 'Thursday', time: '10:30 AM – 9:30 PM' },
  { day: 'Friday', time: '10:30 AM – 10:30 PM' },
  { day: 'Saturday', time: '8:00 AM – 10:30 PM' },
  { day: 'Sunday', time: '8:00 AM – 9:30 PM' },
];

export default function Contact() {
  return (
    <main>
      <section
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/El_Jacalito_Seven_Points_TX.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/80 to-bark-900/70" />
        <div className="relative z-10 text-center px-4 pt-32 md:pt-40">
          <span className="section-script text-gold-400 text-2xl">Visit</span>
          <h1 className="font-display text-4xl md:text-5xl text-white mt-1">Us</h1>
          <p className="text-sand-200/80 mt-3 text-lg font-body">Come Hungry, Leave Happy</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="section-script text-chili-500 text-2xl">Come</span>
              <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-1 mb-6">
                See Us
              </h2>
              <SectionDivider />

              <div className="mt-8 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-chili-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-chili-500" />
                  </div>
                  <div className="font-body">
                    <p className="font-bold text-bark-800 text-lg">127 E Cedar Creek Pkwy</p>
                    <p className="text-bark-800/70">Seven Points, TX 75143</p>
                  </div>
                </div>

                <a href="tel:9034324808" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-chili-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-chili-500" />
                  </div>
                  <span className="font-body font-bold text-3xl text-bark-800 group-hover:text-chili-500 transition-colors">
                    (903) 432-4808
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-chili-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={20} className="text-chili-500" />
                  </div>
                  <div className="font-body flex-1">
                    <p className="font-bold text-bark-800 mb-3">Hours</p>
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between gap-8 py-2 border-b border-bark-800/10 last:border-0"
                      >
                        <span className="font-bold text-bark-800 text-sm">{h.day}</span>
                        <span className="text-bark-800/70 text-sm">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-2">
                  <span className="flex items-center gap-2 text-sm font-body text-bark-800/70">
                    <Clock size={16} className="text-terracotta-500" />
                    Happy Hour
                  </span>
                  <span className="flex items-center gap-2 text-sm font-body text-bark-800/70">
                    <Music size={16} className="text-terracotta-500" />
                    Live Music
                  </span>
                  <span className="flex items-center gap-2 text-sm font-body text-bark-800/70">
                    <Beer size={16} className="text-terracotta-500" />
                    Full Bar
                  </span>
                  <span className="flex items-center gap-2 text-sm font-body text-bark-800/70">
                    <Tv size={16} className="text-terracotta-500" />
                    Big Screen TVs
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://www.google.com/maps/dir//127+E+Cedar+Creek+Pkwy,+Seven+Points,+TX+75143"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MapPin size={18} className="mr-2" />
                    Get Directions
                  </a>
                  <a
                    href="https://www.facebook.com/ElJacalitoSevenPointsTexas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-bark-800/20 text-bark-800 font-bold rounded-lg transition-all duration-300 hover:border-chili-500 hover:text-chili-500"
                  >
                    <Facebook size={18} />
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px] lg:h-full min-h-[450px]">
              <iframe
                title="El Jacalito location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.5!2d-96.2148!3d32.3206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f1c5c0a0001%3A0x0!2s127+E+Cedar+Creek+Pkwy%2C+Seven+Points%2C+TX+75143!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
