"use client";

import { useState, useEffect } from 'react';

const content = {
  en: {
    hero: {
      title: "Marc Hampshire",
      subtitle: "Licensed Psychologist (General Sanitario)",
      tagline: "Supporting your journey toward healing and growth",
      email: "terapiaham@gmail.com",
      whatsapp: "+34624080367",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp"
    },
    about: {
      intro: "I’m Marc Hampshire, a psychologist licensed in Spain (General Sanitario), trained in Mentalization Based Therapy and Gestalt therapy.",
      bullets: [
        "Academic training: Universitat Autònoma de Barcelona (UAB)",
        "Gestalt training: Institut Gestalt",
        "Approach: humanistic + cognitive-behavioural",
        "Populations: adults and adolescents",
        "COPC registration number: 30868",
        "Collaboration: ART project",
        "Languages: Spanish, Catalan, English"
      ],
      personal: [
        "Born in Horta (Barcelona)",
        "Bicultural background (British & Catalan)",
        "Interests: music, martial arts, cooking",
        "Personal growth & mindfulness path"
      ],
      heading: "About Me",
      personalHeading: "Personal Notes"
    },
    services: {
      title: "Individual Therapy (Online & In-Person)",
      description: "Personalised sessions, either online or face-to-face, to process emotions, build resilience and cultivate healthier relationships with yourself and others."
    },
    testimonials: [
      { text: "Clara M.", quote: "Marc es un gran profesional, me ayudó muchísimo." },
      { text: "M.T.B.", quote: "Su escucha y acompañamiento fueron claves en mi proceso." },
      { text: "Eloisa S.R.", quote: "Gracias a Marc, ahora entiendo mis emociones." },
      { text: "Sebastián", quote: "Muy recomendable, cercano y profesional." },
      { text: "C.G.", quote: "Su terapia me dio herramientas para mi día a día." },
      { text: "S.I.", quote: "Me sentí apoyado y comprendido en todo momento." },
      { text: "F.P.", quote: "Excelente terapeuta, muy humano." },
      { text: "S. Portus", quote: "Gran experiencia, repetiría sin duda." },
      { text: "Mònica T.", quote: "Su enfoque humanista me encantó." },
      { text: "Bp", quote: "Marc me ayudó a encontrar mi camino." }
    ],
    books: [
      { title: "Cuando todo se derrumba", author: "Pema Chödrön", description: "" },
      { title: "La locura lo cura", author: "Guillermo Borja", description: "" },
      { title: "Cuando el cuerpo dice no", author: "Gabor Maté", description: "" }
    ],
    contact: {
      headline: "Ready to start your journey?",
      subtext: "Get in touch via email or WhatsApp.",
      email: "terapiaham@gmail.com",
      whatsapp: "+34 624 080 367"
    },
    footer: "© 2025 Marc Hampshire. All rights reserved."
  },
  es: {
    hero: {
      title: "Marc Hampshire",
      subtitle: "Psicólogo General Sanitario",
      tagline: "Apoyando tu camino hacia la sanación y el crecimiento",
      email: "terapiaham@gmail.com",
      whatsapp: "+34624080367",
      emailLabel: "Correo",
      whatsappLabel: "WhatsApp"
    },
    about: {
      intro: "Soy Marc Hampshire, psicólogo habilitado en España (General Sanitario), formado en Terapia Basada en la Mentalización y Gestalt.",
      bullets: [
        "Formación académica: Universitat Autònoma de Barcelona (UAB)",
        "Formación Gestalt: Institut Gestalt",
        "Enfoque: humanista + cognitivo-conductual",
        "Poblaciones: adultos y adolescentes",
        "Número de colegiado COPC: 30868",
        "Colaboración con el proyecto ART",
        "Idiomas: español, catalán, inglés"
      ],
      personal: [
        "Nacido en Horta (Barcelona)",
        "Origen bicultural (británico y catalán)",
        "Intereses: música, artes marciales, cocina",
        "Camino de crecimiento personal y mindfulness"
      ],
      heading: "Sobre mí",
      personalHeading: "Notas personales"
    },
    services: {
      title: "Terapia individual (Online y Presencial)",
      description: "Sesiones personalizadas, ya sea online o presenciales, para procesar emociones, construir resiliencia y cultivar relaciones más saludables contigo mismo y con los demás."
    },
    testimonials: [
      { text: "Clara M.", quote: "Marc es un gran profesional, me ayudó muchísimo." },
      { text: "M.T.B.", quote: "Su escucha y acompañamiento fueron claves en mi proceso." },
      { text: "Eloisa S.R.", quote: "Gracias a Marc, ahora entiendo mis emociones." },
      { text: "Sebastián", quote: "Muy recomendable, cercano y profesional." },
      { text: "C.G.", quote: "Su terapia me dio herramientas para mi día a día." },
      { text: "S.I.", quote: "Me sentí apoyado y comprendido en todo momento." },
      { text: "F.P.", quote: "Excelente terapeuta, muy humano." },
      { text: "S. Portus", quote: "Gran experiencia, repetiría sin duda." },
      { text: "Mònica T.", quote: "Su enfoque humanista me encantó." },
      { text: "Bp", quote: "Marc me ayudó a encontrar mi camino." }
    ],
    books: [
      { title: "Cuando todo se derrumba", author: "Pema Chödrön", description: "" },
      { title: "La locura lo cura", author: "Guillermo Borja", description: "" },
      { title: "Cuando el cuerpo dice no", author: "Gabor Maté", description: "" }
    ],
    contact: {
      headline: "¿Listo para empezar tu viaje?",
      subtext: "Ponte en contacto por correo o WhatsApp.",
      email: "terapiaham@gmail.com",
      whatsapp: "+34 624 080 367"
    },
    footer: "© 2025 Marc Hampshire. Todos los derechos reservados."
  }
};

export default function Page() {
  const [lang, setLang] = useState('en');
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % content[lang].testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [lang]);

  useEffect(() => {
    const container = document.getElementById('verification-seal');
    if (container) {
      container.innerHTML = '';
      const anchor = document.createElement('a');
      anchor.href = 'https://www.psychologytoday.com/profile/1533085';
      anchor.className = 'sx-verified-seal';
      const script = document.createElement('script');
      script.src = 'https://member.psychologytoday.com/verified-seal.js';
      script.type = 'text/javascript';
      script.setAttribute('data-badge', '10');
      script.setAttribute('data-id', '1533085');
      script.setAttribute('data-code', 'aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMC9wcm9maWxlLzE1MzMwODU/Y2FsbGJhY2s9c3hjYWxsYmFjaw==');
      container.appendChild(anchor);
      container.appendChild(script);
    }
  }, [lang]);

  const t = content[lang];

  return (
    <main className="bg-gray-50 text-gray-800">
      <header className="flex justify-between items-center md:px-16 px-4 py-4">
        <div className="font-serif text-xl">{t.hero.title}</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="hover:underline">{t.about.heading}</a>
          <a href="#services" className="hover:underline">{t.services.title}</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#books" className="hover:underline">Book Recommendations</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-3 py-1 border rounded">
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center text-center py-16 md:px-16 px-4">
        <img src="/marc.jpg" alt="Marc Hampshire" className="rounded-full w-64 h-64 object-cover shadow-md" />
        <h1 className="text-3xl md:text-5xl font-serif mt-6">{t.hero.title}</h1>
        <h2 className="text-xl md:text-2xl mt-2">{t.hero.subtitle}</h2>
        <p className="mt-4 mb-6">{t.hero.tagline}</p>
        <div className="flex space-x-4">
          <a href={'mailto:' + t.hero.email} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">{t.hero.emailLabel || 'Email'}</a>
          <a href={'https://wa.me/' + t.hero.whatsapp.replace(/[^0-9]/g, '')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">{t.hero.whatsappLabel || 'WhatsApp'}</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="md:px-16 px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">{t.about.heading}</h2>
        <p className="mb-4">{t.about.intro}</p>
        <ul className="list-disc pl-5 text-red-500 mb-4">
          {t.about.bullets.map((item, idx) => (
            <li key={idx} className="mb-1 text-gray-800">{item}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">{t.about.personalHeading}</h3>
        <ul className="list-disc pl-5 text-red-500">
          {t.about.personal.map((item, idx) => (
            <li key={idx} className="mb-1 text-gray-800">{item}</li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section id="services" className="md:px-16 px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">{t.services.title}</h2>
        <p>{t.services.description}</p>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="md:px-16 px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">Testimonials</h2>
        <blockquote className="italic text-lg">
          "{t.testimonials[quoteIndex].quote}"
        </blockquote>
        <p className="mt-2">— {t.testimonials[quoteIndex].text}</p>
      </section>

      {/* Books */}
      <section id="books" className="md:px-16 px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">Book Recommendations</h2>
        <ul className="space-y-3">
          {t.books.map((book, idx) => (
            <li key={idx}>
              <span className="font-semibold">{book.title}</span> — {book.author}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="md:px-16 px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">{t.contact.headline}</h2>
        <p className="mb-4">{t.contact.subtext}</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href={'mailto:' + t.contact.email} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Email</a>
          <a href={'https://wa.me/' + t.contact.whatsapp.replace(/[^0-9]/g, '')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">WhatsApp</a>
        </div>
        <div id="verification-seal" className="flex justify-center"></div>
      </section>

      <footer className="text-center py-4">
        {t.footer}
      </footer>
    </main>
  );
}
