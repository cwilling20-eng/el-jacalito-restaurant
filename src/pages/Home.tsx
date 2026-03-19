import { Link } from 'react-router-dom';
import { Phone, Music, Beer, Clock, Tv, MapPin, ArrowRight } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';
import StarRating from '../components/StarRating';

const featuredDishes = [
  {
    name: 'Steak Fajitas',
    desc: 'Sizzling beef fajitas with all the fixings',
    img: '/steak_fajitas.jpg',
  },
  {
    name: 'Barbacoa Plate',
    desc: 'Slow-cooked and served with beans & pico',
    img: '/Barbacoa%20Plate.png',
  },
  {
    name: 'Guiso de Puerco',
    desc: 'Mexican pork stew in green or red sauce',
    img: '/Guiso%20de%20Puerco.png',
  },
  {
    name: 'Top Shelf Margarita',
    desc: 'Frozen or on the rocks',
    img: '/margaritas.jpg',
  },
  {
    name: 'Cotija Steak',
    desc: 'Marinated steak with ranchero sauce & monterrey jack',
    img: '/Steak.jpg',
  },
  {
    name: 'Tacos al Pastor',
    desc: 'Seasoned pork tacos with onion, cilantro & fresh salsa',
    img: '/Pastor_Tacos.jpg',
  },
];

const reviews = [
  {
    name: 'Christopher Pitts',
    text: 'Absolutely amazing food, the chips and salsa is to kill for. Also the service is fantastic!',
    ratings: 'Food: 5/5 | Service: 5/5 | Atmosphere: 5/5',
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
];

const hours = [
  { day: 'Monday', time: '10:30 AM – 9:30 PM' },
  { day: 'Tuesday', time: '10:30 AM – 9:30 PM' },
  { day: 'Wednesday', time: '10:30 AM – 9:30 PM' },
  { day: 'Thursday', time: '10:30 AM – 9:30 PM' },
  { day: 'Friday', time: '10:30 AM – 10:30 PM' },
  { day: 'Saturday', time: '8:00 AM – 10:30 PM' },
  { day: 'Sunday', time: '8:00 AM – 9:30 PM' },
];

export default function Home() {
  return (
    <main>
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/El_Jacalito_Mexican_Food_Restaurant_Cedar_Creek_Lake.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/80 via-bark-900/60 to-bark-900/80" />
        <div className="relative z-10 text-center px-4 pt-32 md:pt-40 pb-16 max-w-4xl mx-auto">
          <img
            src="/El_Jacalito_logo.png"
            alt="El Jacalito"
            className="h-40 md:h-56 mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="font-display text-3xl md:text-5xl text-white mb-4 leading-tight">
            Fajitas, Margaritas & Good Times on Cedar Creek Lake
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/menu" className="btn-primary text-lg px-10 py-4">
              View Our Menu
            </Link>
            <a href="tel:9034324808" className="btn-outline text-lg px-10 py-4">
              <Phone size={20} className="mr-2" />
              Call to Order
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 md:gap-10 mt-10 text-sand-200/80 text-sm font-body">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold-400" />
              Happy Hour
            </span>
            <span className="flex items-center gap-2">
              <Music size={16} className="text-gold-400" />
              Live Music
            </span>
            <span className="flex items-center gap-2">
              <Beer size={16} className="text-gold-400" />
              Full Bar
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img
                src="/El_Jacalito_Seven_Points_TX.jpg"
                alt="El Jacalito restaurant"
                className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-chili-500 rounded-2xl -z-10" />
            </div>
            <div>
              <span className="section-script text-chili-500 text-2xl">Welcome to</span>
              <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-2 mb-6">
                El Jacalito
              </h2>
              <SectionDivider />
              <p className="text-bark-800/80 text-lg leading-relaxed mt-6 font-body">
                El Jacalito has been a Cedar Creek Lake favorite for authentic Tex-Mex done right.
                From sizzling fajitas and handmade tamales to ice-cold margaritas and live music on
                weekends, we're the kind of place where everyone feels at home. Whether you're
                grabbing a quick lunch plate or settling in for a Saturday night, pull up a chair
                — you're family here.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-chili-500 font-bold mt-8 hover:gap-3 transition-all duration-300 font-body"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-script text-chili-500 text-2xl">Our</span>
            <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-1">
              House Favorites
            </h2>
            <SectionDivider />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="group relative h-[320px] rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/90 via-bark-900/30 to-transparent transition-opacity duration-300 group-hover:from-bark-900/70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl text-white mb-1">{dish.name}</h3>
                  <p className="text-sand-200/80 text-sm font-body">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center parallax"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-bark-800/60" />
        <div className="relative z-10 text-center px-6 py-16 max-w-3xl mx-auto">
          <div className="w-20 h-px bg-gold-400 mx-auto mb-8" />
          <blockquote className="font-body text-xl md:text-2xl text-white/95 leading-relaxed italic">
            "Best Mexican food around Cedar Creek Lake! The steak fajitas are amazing — you can
            get lunch for $10. Highly recommend!"
          </blockquote>
          <div className="mt-6">
            <p className="text-gold-400 font-bold font-body">— John Curtis</p>
            <div className="flex justify-center mt-2">
              <StarRating />
            </div>
          </div>
          <div className="w-20 h-px bg-gold-400 mx-auto mt-8" />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-script text-chili-500 text-2xl">What Folks Are</span>
            <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-1">Saying</h2>
            <SectionDivider />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-bark-800 rounded-2xl p-8 shadow-xl border border-bark-800/50"
              >
                <StarRating />
                <blockquote className="text-sand-200/90 mt-4 mb-6 leading-relaxed font-body italic">
                  "{review.text}"
                </blockquote>
                <div className="border-t border-sand-400/10 pt-4">
                  <p className="text-chili-500 font-bold font-body text-sm">{review.name}</p>
                  <p className="text-sand-400/60 text-xs font-body mt-1">{review.ratings}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/about"
              className="text-chili-500 font-bold hover:text-chili-600 transition-colors font-body inline-flex items-center gap-2"
            >
              See More Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="section-script text-chili-500 text-2xl">Find Us</span>
              <h2 className="font-display text-3xl md:text-4xl text-bark-800 mt-1 mb-6">
                Visit El Jacalito
              </h2>
              <SectionDivider />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-chili-500 mt-1 flex-shrink-0" />
                  <div className="font-body">
                    <p className="font-bold text-bark-800">127 E Cedar Creek Pkwy</p>
                    <p className="text-bark-800/70">Seven Points, TX 75143</p>
                  </div>
                </div>

                <a href="tel:9034324808" className="flex items-center gap-4 group">
                  <Phone size={22} className="text-chili-500 flex-shrink-0" />
                  <span className="font-body font-bold text-2xl text-bark-800 group-hover:text-chili-500 transition-colors">
                    (903) 432-4808
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <Clock size={22} className="text-chili-500 mt-1 flex-shrink-0" />
                  <div className="font-body text-sm">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8 py-1.5 border-b border-bark-800/10 last:border-0">
                        <span className="font-bold text-bark-800">{h.day}</span>
                        <span className="text-bark-800/70">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 text-sm font-body text-bark-800/70">
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-terracotta-500" />
                    Happy Hour
                  </span>
                  <span className="flex items-center gap-2">
                    <Music size={16} className="text-terracotta-500" />
                    Live Music
                  </span>
                  <span className="flex items-center gap-2">
                    <Beer size={16} className="text-terracotta-500" />
                    Full Bar
                  </span>
                  <span className="flex items-center gap-2">
                    <Tv size={16} className="text-terracotta-500" />
                    Big Screen TVs
                  </span>
                </div>

                <a
                  href="https://www.google.com/maps/dir//127+E+Cedar+Creek+Pkwy,+Seven+Points,+TX+75143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4"
                >
                  <MapPin size={18} className="mr-2" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-full min-h-[400px]">
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
