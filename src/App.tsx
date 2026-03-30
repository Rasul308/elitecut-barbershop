/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight,
  Languages,
  Star
} from 'lucide-react';

type Language = 'ru' | 'uz';

interface Content {
  nav: {
    services: string;
    gallery: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: { name: string; price: string; desc: string }[];
  };
  about: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    hours: string;
    hoursVal: string;
  };
  footer: string;
}

const translations: Record<Language, Content> = {
  ru: {
    nav: {
      services: 'Услуги',
      gallery: 'Галерея',
      about: 'О нас',
      contact: 'Контакты',
    },
    hero: {
      title: 'Ваш Идеальный Образ Начинается Здесь',
      subtitle: 'Профессиональные стрижки, уход за бородой и классическое бритье. Более 200+ довольных клиентов уже выбрали нас.',
      cta: 'Записаться',
    },
    services: {
      title: 'Наши Услуги',
      items: [
        { name: 'Мужская стрижка', price: '100 000 сум', desc: 'Классика или тренд — выбор за вами.' },
        { name: 'Стрижка бороды', price: '60 000 сум', desc: 'Идеальный контур и уход.' },
        { name: 'Королевское бритье', price: '80 000 сум', desc: 'Традиционное бритье опасной бритвой.' },
        { name: 'Детская стрижка', price: '70 000 сум', desc: 'Для юных джентльменов до 12 лет.' },
      ],
    },
    about: {
      title: 'О Барбершопе',
      text: 'Elite Cut — это место, где традиции встречаются с современностью. Наши мастера — профессионалы своего дела, которые знают толк в стиле и качественном сервисе. Мы создаем атмосферу комфорта и мужественности.',
    },
    contact: {
      title: 'Свяжитесь с нами',
      address: 'г. Ташкент, ул. Гейдар Алиев, 103',
      phone: '+998 90 123 45 67',
      hours: 'Режим работы',
      hoursVal: 'Пн-Вс: 10:00 - 22:00',
    },
    footer: '© 2026 Elite Cut Barbershop. Все права защищены.',
  },
  uz: {
    nav: {
      services: 'Xizmatlar',
      gallery: 'Galereya',
      about: 'Biz haqimizda',
      contact: 'Kontaktlar',
    },
    hero: {
      title: 'Sizning Mukammal Qiyofangiz Shu Yerdan Boshlanadi',
      subtitle: 'Professional soch turmagi, soqol parvarishi va klassik soqol olish. 200 dan ortiq mamnun mijozlar allaqachon bizni tanlashgan.',
      cta: 'Yozilish',
    },
    services: {
      title: 'Bizning Xizmatlar',
      items: [
        { name: 'Erkaklar soch turmagi', price: '100 000 so\'m', desc: 'Klassika yoki trend — tanlov sizda.' },
        { name: 'Soqol turmagi', price: '60 000 so\'m', desc: 'Mukammal kontur va parvarish.' },
        { name: 'Qirollik soqol olishi', price: '80 000 so\'m', desc: 'Xavfli ustara bilan an\'anaviy soqol olish.' },
        { name: 'Bolalar soch turmagi', price: '70 000 so\'m', desc: '12 yoshgacha bo\'lgan yosh jentlmenlar uchun.' },
      ],
    },
    about: {
      title: 'Barbershop Haqida',
      text: 'Elite Cut — bu an\'analar zamonaviylik bilan uchrashadigan joy. Bizning ustalarimiz o\'z ishining professionallari bo\'lib, uslub va sifatli xizmatni yaxshi bilishadi. Biz qulaylik va mardlik muhitini yaratamiz.',
    },
    contact: {
      title: 'Biz bilan bog\'laning',
      address: 'Toshkent sh., Haydar Aliyev ko\'chasi, 103',
      phone: '+998 90 123 45 67',
      hours: 'Ish tartibi',
      hoursVal: 'Du-Ya: 10:00 - 22:00',
    },
    footer: '© 2026 Elite Cut Barbershop. Barcha huquqlar himoyalangan.',
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];
  const altegioLink = "https://barbershopsardor.altegio.me";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'ru' ? 'uz' : 'ru');

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] selection:bg-[#8b5e3c] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter serif flex items-center gap-2"
          >
            <Scissors className="text-[#8b5e3c]" size={28} />
            <span>ELITE<span className="text-[#8b5e3c]">CUT</span></span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <a 
                key={key} 
                href={`#${key}`} 
                className="text-xs uppercase tracking-widest hover:text-[#8b5e3c] transition-colors font-semibold"
              >
                {label}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-[10px] border border-black/10 px-3 py-1 rounded-full hover:bg-black/5 transition-colors uppercase font-bold tracking-tighter"
            >
              <Languages size={12} />
              {lang === 'ru' ? 'O\'zbekcha' : 'Русский'}
            </button>
          </div>

          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {Object.entries(t.nav).map(([key, label]) => (
                <a 
                  key={key} 
                  href={`#${key}`} 
                  className="text-2xl serif"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button 
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="mt-4 flex items-center justify-center gap-2 text-lg border border-black/10 py-3 rounded-xl"
              >
                <Languages size={20} />
                {lang === 'ru' ? 'O\'zbekcha' : 'Русский'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
                alt="Barbershop interior" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-[#fcfcfc]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="h-[1px] w-8 bg-[#8b5e3c]" />
                    <span className="text-[#8b5e3c] uppercase tracking-[0.3em] text-xs font-bold">Elite Cut Barbershop</span>
                    <div className="h-[1px] w-8 bg-[#8b5e3c]" />
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl serif mb-8 leading-tight text-black drop-shadow-sm">
                    {t.hero.title}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-black/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                    {t.hero.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.a 
                      href={altegioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-[#8b5e3c] text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-[#6d4a2f] transition-all shadow-xl"
                    >
                      {t.hero.cta}
                    </motion.a>
                    
                    <div className="flex items-center gap-3 text-black/60">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm font-bold">200+ {lang === 'ru' ? 'довольных клиентов' : 'mamnun mijozlar'}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 bg-white border-y border-black/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <span className="text-[#8b5e3c] uppercase tracking-widest text-xs mb-2 block font-bold">Menu</span>
                  <h2 className="text-4xl md:text-5xl serif text-black">{t.services.title}</h2>
                </div>
                <div className="flex items-center gap-2 text-black/40 text-sm">
                  <Star size={16} className="text-[#8b5e3c]" />
                  <span>Only premium products used</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                {t.services.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group border-b border-black/5 pb-8"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl serif group-hover:text-[#8b5e3c] transition-colors text-black">{item.name}</h3>
                      <span className="text-[#8b5e3c] font-mono font-bold">{item.price}</span>
                    </div>
                    <p className="text-black/40 text-sm font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="aspect-[4/5] relative z-10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074" 
                    alt="Barber at work" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -top-6 -left-6 w-full h-full border border-[#8b5e3c]/20 -z-10" />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl serif mb-8 text-black">{t.about.title}</h2>
                <p className="text-lg text-black/60 leading-relaxed mb-8 font-light">
                  {t.about.text}
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-3xl serif text-[#8b5e3c] block mb-1">10+</span>
                    <span className="text-xs uppercase tracking-widest text-black/40 font-bold">Years Experience</span>
                  </div>
                  <div>
                    <span className="text-3xl serif text-[#8b5e3c] block mb-1">5k+</span>
                    <span className="text-xs uppercase tracking-widest text-black/40 font-bold">Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl serif mb-16 text-center text-black">{t.nav.gallery}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                 
                  "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800",
                  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyfGVufDB8fDB8fHww",
                  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800",
                  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800"
                ].map((src, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="aspect-[3/4] overflow-hidden shadow-lg"
                  >
                    <img 
                      src={src} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl serif mb-12 text-black">{t.contact.title}</h2>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <MapPin className="text-[#8b5e3c] shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-widest text-black/40 block mb-1 font-bold">Address</span>
                        <p className="text-lg text-black/80">{t.contact.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="text-[#8b5e3c] shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-widest text-black/40 block mb-1 font-bold">Phone</span>
                        <p className="text-lg text-black/80">{t.contact.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="text-[#8b5e3c] shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-widest text-black/40 block mb-1 font-bold">{t.contact.hours}</span>
                        <p className="text-lg text-black/80">{t.contact.hoursVal}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 mt-12">
                    <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:border-[#8b5e3c] hover:text-[#8b5e3c] transition-all text-black/60">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:border-[#8b5e3c] hover:text-[#8b5e3c] transition-all text-black/60">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>

                <div className="bg-white p-8 md:p-12 border border-black/5 shadow-xl flex flex-col items-center justify-center text-center">
                  <Scissors className="text-[#8b5e3c] mb-6" size={48} />
                  <h3 className="text-2xl serif mb-4 text-black">{t.hero.cta}</h3>
                  <p className="text-black/40 mb-8 font-light">
                    {lang === 'ru' 
                      ? 'Забронируйте свое время прямо сейчас через нашу онлайн-систему Altegio.' 
                      : 'Altegio onlayn tizimi orqali hoziroq o\'z vaqtingizni band qiling.'}
                  </p>
                  <motion.a 
                    href={altegioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#8b5e3c] text-white py-4 uppercase tracking-widest font-bold hover:bg-[#6d4a2f] transition-colors shadow-lg text-center"
                  >
                    {t.hero.cta}
                  </motion.a>
                  <p className="mt-6 text-[10px] text-black/30 uppercase tracking-widest">
                    Powered by Altegio
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xl font-bold tracking-tighter serif mb-6 text-black">
            ELITE<span className="text-[#8b5e3c]">CUT</span>
          </div>
          <p className="text-black/20 text-xs tracking-widest uppercase font-bold">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
