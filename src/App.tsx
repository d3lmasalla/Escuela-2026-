/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

const Ticker = () => {
  const items = [
    "Dirección de Arte",
    "24 Sesiones",
    "Profes activos en la industria",
    "Certificación Head of Art",
    "Cupos limitados",
    "Brother Ad School",
    "Santiago · Chile",
  ];

  return (
    <div className="w-full bg-lime overflow-hidden py-2.5 border-b-2 border-black sticky top-0 z-[100]">
      <div className="flex whitespace-nowrap animate-ticker">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-mono text-[11px] font-medium text-black tracking-[0.12em] uppercase px-10"
          >
            {item} <span className="text-[#555] mx-2.5">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => (
  <div className="flex justify-between items-center px-10 py-6 border-b border-[#222]">
    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#888]">
      Brother Ad School — Stgo.
    </span>
    <nav className="flex gap-8 items-center">
      <a href="#" className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#888] hover:text-lime transition-colors">
        Cursos
      </a>
      <a href="#" className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#888] hover:text-lime transition-colors">
        Podcast
      </a>
      <a href="#" className="bg-lime text-black px-5 py-2 rounded-full font-mono text-[10px] tracking-[0.15em] uppercase font-medium hover:scale-105 transition-transform">
        Matricúlate
      </a>
    </nav>
  </div>
);

const Hero = () => (
  <section className="min-h-[100svh] grid grid-rows-[auto_1fr_auto] relative overflow-hidden">
    <Navbar />

    <div className="flex flex-col justify-end p-5 tablet:p-10 relative">
      <div className="font-bebas text-[clamp(150px,25vw,380px)] leading-[0.82] text-transparent text-stroke absolute top-1/2 right-[-5vw] desktop:right-[-2vw] -translate-y-1/2 pointer-events-none select-none tracking-[-0.02em]">
        24
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="font-mono text-[clamp(9px,1.2vw,11px)] tracking-[0.2em] uppercase text-lime mb-5 flex items-center gap-3 before:content-[''] before:block before:w-10 before:h-[1px] before:bg-lime"
      >
        Diplomado Intensivo — 2026
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="font-bebas text-[clamp(72px,12vw,200px)] leading-[0.88] tracking-[-0.01em] max-w-full tablet:max-w-[70vw] relative z-10"
      >
        Poder<br />
        <em className="font-barlow italic font-light text-lime">visual</em><br />
        real.
      </motion.h1>
    </div>

    <div className="grid grid-cols-1 tablet:grid-cols-3 border-t border-[#222]">
      {[
        { num: "24", label: "Sesiones de entrenamiento" },
        { num: "100%", label: "Profes activos en agencias" },
        { num: "≠", label: "No es una academia. Es industria." },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.1 }}
          className="p-7 tablet:p-10 border-b tablet:border-b-0 tablet:border-r border-[#222] last:border-r-0"
        >
          <div className="font-bebas text-[clamp(40px,5vw,52px)] text-lime leading-none mb-1">{stat.num}</div>
          <div className="font-mono text-[clamp(9px,1.1vw,10px)] tracking-[0.15em] uppercase text-[#888]">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Statement = () => (
  <section className="px-5 tablet:px-10 py-20 tablet:py-32 border-b border-[#222] grid grid-cols-1 desktop:grid-cols-2 gap-12 desktop:gap-20 items-end">
    <div className="font-bebas text-[clamp(42px,6vw,90px)] leading-[0.92] tracking-[-0.01em]">
      La dirección de arte no es <span className="text-lime">hacer que se vea bonito.</span> Es hacer que nadie pueda dejar de mirar.
    </div>
    <div className="flex flex-col gap-8">
      <p className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.5] text-[#999]">
        Es la diferencia entre una marca que <strong className="text-white font-bold">domina el mercado</strong> y una que pasa desapercibida. Entre un creativo que ejecuta y uno que <strong className="text-white font-bold">toma decisiones.</strong>
      </p>
      <p className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.5] text-[#999]">
        En este diplomado no te enseñamos a usar programas. Te entrenamos a pensar como un <strong className="text-white font-bold">Head of Art.</strong>
      </p>
      <div className="flex flex-wrap gap-2">
        {["Pensamiento visual", "Conceptualización", "Criterio estético", "Book profesional", "Campaña real"].map((pill) => (
          <span key={pill} className="font-mono text-[9px] tablet:text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-[#333] rounded-full text-[#888]">
            {pill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <div className="px-5 tablet:px-10 border-b border-[#222]">
    <div className="flex items-center justify-between py-6 border-b border-[#222] mb-10">
      <span className="font-mono text-[clamp(9px,1.2vw,11px)] tracking-[0.2em] uppercase text-[#888]">Preview — ¿De qué va esto?</span>
      <div className="flex items-center gap-2 text-lime text-[10px] tracking-[0.2em] uppercase">
        <div className="w-2 h-2 bg-lime rounded-full animate-pulse" />
        <span>Play</span>
      </div>
    </div>
    <div className="relative pb-[52%] h-0 overflow-hidden rounded mb-10">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/MHKhQaSZVHU"
        title="Dirección de Arte — Brother Ad School"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
);

const Curriculum = () => {
  const modules = [
    { num: "01", name: "Amplificar tu pensamiento visual", desc: "De la ejecución simple a ideas que rompen el scroll. Aprendes a pensar antes de abrir Figma.", tag: "Fundamentos" },
    { num: "02", name: "Mensaje persuasivo", desc: "Campañas que conectan emocionalmente en cualquier formato. Lo que se queda en la cabeza.", tag: "Estrategia", outline: true },
    { num: "03", name: "Elevar tu competitividad", desc: "Criterio estético + técnico para cumplir objetivos de negocio reales. No solo que se vea bien.", tag: "Craft", outline: true },
    { num: "04", name: "Pensar como Head of Art", desc: "Liderar proyectos visuales. Tomar decisiones. Defender ideas ante clientes y directores.", tag: "Liderazgo", outline: true },
    { num: "05", name: "Tu Book. Tu arma.", desc: "Tu portafolio pesa más que tu currículum. Muestras proceso creativo, no solo resultado final.", tag: "⭐ Clave" },
    { num: "06", name: "Certificación Profesional", desc: "Egresas como Director de Arte / Head of Art. Con respaldo de la escuela de creatividad más premiada de Chile.", tag: "Certificado" },
  ];

  return (
    <section className="px-5 tablet:px-10 pb-20 tablet:pb-32">
      <div className="flex items-baseline justify-between py-10 border-b border-[#222] mb-0">
        <h2 className="font-bebas text-[clamp(32px,4.5vw,64px)] tracking-[-0.01em] leading-none">Lo que vas a trabajar</h2>
        <span className="font-mono text-[clamp(9px,1.2vw,11px)] tracking-[0.15em] uppercase text-[#888]">24 sesiones / Presencial + Online</span>
      </div>
      <ul className="list-none">
        {modules.map((m, i) => (
          <li key={i} className="group grid grid-cols-[40px_1fr_auto] tablet:grid-cols-[60px_1fr_auto] items-start py-8 border-b border-[#1A1A1A] gap-4 tablet:gap-6 transition-colors hover:bg-[#0D0D0D] tablet:hover:-mx-10 tablet:hover:px-10">
            <span className="font-mono text-[clamp(9px,1.1vw,11px)] tracking-[0.1em] text-[#333] pt-1">{m.num} —</span>
            <div>
              <div className="font-barlow text-[clamp(18px,3vw,24px)] font-bold uppercase tracking-[0.05em] mb-1.5">{m.name}</div>
              <div className="font-barlow text-[clamp(14px,1.8vw,16px)] font-light text-[#888] leading-[1.4]">{m.desc}</div>
            </div>
            <span className={`font-mono text-[8px] tablet:text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full whitespace-nowrap self-start ${m.outline ? 'bg-transparent text-[#333] border border-[#333]' : 'bg-lime text-black'}`}>
              {m.tag}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const QuoteBand = () => (
  <div className="bg-lime px-5 tablet:px-10 py-16 tablet:py-20 overflow-hidden relative">
    <div className="max-w-[900px]">
      <div className="font-mono text-[clamp(9px,1.2vw,11px)] tracking-[0.2em] uppercase text-[#666] mb-6">Brother — Filosofía</div>
      <div className="font-bebas text-[clamp(42px,8vw,110px)] leading-[0.9] text-black tracking-[-0.01em]">
        Creativx<br />
        se es las 24 hs<br />
        <em className="font-barlow italic font-light text-[0.7em]">del día.</em>
      </div>
    </div>
    <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-bebas text-[clamp(150px,25vw,280px)] text-black/10 leading-none pointer-events-none select-none">B</div>
  </div>
);

const ForWho = () => (
  <section className="px-5 tablet:px-10 py-20 tablet:py-32 border-b border-[#222] grid grid-cols-1 desktop:grid-cols-2 gap-12 desktop:gap-20">
    <div>
      <div className="font-mono text-[clamp(9px,1.2vw,11px)] tracking-[0.2em] uppercase text-lime mb-8">¿Para quién es?</div>
      <h2 className="font-bebas text-[clamp(42px,5vw,80px)] leading-[0.92] tracking-[-0.01em]">Esto es para vos si ya creás.<br />Y querés crecer.</h2>
    </div>
    <ul className="list-none flex flex-col">
      {[
        "Diseñadores que quieren <strong>pasar de ejecutar a dirigir</strong>.",
        "Creativos con feeling visual pero sin <strong>metodología.</strong>",
        "Personas que hacen contenido y quieren darle <strong>peso conceptual.</strong>",
        "Gente que quiere entrar a una agencia <strong>con el book listo.</strong>",
        "Profesionales que necesitan validar su criterio <strong>en la industria real.</strong>",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-5 py-6 border-b border-[#1A1A1A] first:border-t">
          <span className="font-mono text-sm text-lime mt-0.5 flex-shrink-0">→</span>
          <span className="font-barlow text-[clamp(16px,2vw,20px)] font-normal leading-[1.4] text-[#ccc]" dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  </section>
);

const ProfeSection = () => (
  <div className="px-5 tablet:px-10 py-16 tablet:py-20 border-b border-[#222] flex flex-col tablet:flex-row items-center gap-10 tablet:gap-15">
    <div className="w-[100px] h-[100px] tablet:w-[120px] tablet:h-[120px] rounded-full border border-[#333] bg-[#111] flex items-center justify-center flex-shrink-0 font-bebas text-3xl tablet:text-4xl text-lime">DA</div>
    <div className="text-center tablet:text-left">
      <div className="font-mono text-[clamp(9px,1.1vw,10px)] tracking-[0.2em] uppercase text-lime mb-2">Tu profe — Activo en la industria</div>
      <div className="font-bebas text-[clamp(36px,5vw,48px)] leading-none mb-2">Director de Arte</div>
      <div className="font-barlow text-[clamp(16px,1.8vw,18px)] font-light text-[#888] max-w-[600px] leading-[1.5]">
        Profes de McCann, BBDO, MRM y las agencias que mueven Chile. Gente que no viene a contar lo que leyó, sino lo que vivió adentro de un brief.
      </div>
    </div>
  </div>
);

const CTASection = () => (
  <section className="grid grid-cols-1 desktop:grid-cols-2 min-h-[50vh]">
    <div className="bg-lime p-10 tablet:p-15 desktop:p-20 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute bottom-[-40px] right-[-40px] font-bebas text-[clamp(150px,20vw,220px)] leading-none text-black/10 pointer-events-none select-none">→</div>
      <div className="mb-10">
        <div className="font-mono text-[clamp(9px,1.1vw,10px)] tracking-[0.2em] uppercase text-[#555] mb-6">Diplomado 2026 — Cupos limitados</div>
        <h2 className="font-bebas text-[clamp(48px,6vw,96px)] text-black leading-[0.88] tracking-[-0.01em] relative z-10">Lidera<br />la industria.</h2>
      </div>
      <a href="#" className="inline-flex items-center gap-3 bg-black text-lime font-mono text-[clamp(11px,1.4vw,13px)] tracking-[0.15em] uppercase px-7 py-4 tablet:px-9 tablet:py-5 rounded-full relative z-10 transition-all hover:scale-105 hover:shadow-2xl self-start group">
        Matricúlate ahora
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
    <div className="bg-dim p-10 tablet:p-15 desktop:p-20 flex flex-col justify-between border-t desktop:border-t-0 desktop:border-l border-[#222]">
      <ul className="list-none flex flex-col">
        {[
          { k: "Formato", v: "Presencial + Online" },
          { k: "Duración", v: "24 Sesiones" },
          { k: "Certificación", v: "Head of Art" },
          { k: "Cupos", v: "Limitados", lime: true },
          { k: "Pago", v: "Hasta 12 cuotas" },
        ].map((d, i) => (
          <li key={i} className="flex justify-between items-baseline py-5 border-b border-[#252525] first:border-t">
            <span className="font-mono text-[clamp(9px,1.1vw,10px)] tracking-[0.15em] uppercase text-[#888]">{d.k}</span>
            <span className={`font-barlow text-[clamp(16px,2vw,20px)] font-bold uppercase ${d.lime ? 'text-lime' : 'text-white'}`}>{d.v}</span>
          </li>
        ))}
      </ul>
      <p className="font-mono text-[clamp(9px,1.1vw,10px)] tracking-[0.12em] uppercase text-[#444] mt-8 leading-[1.8]">
        Escuela de creatividad más premiada de Chile.<br />
        16 años formando creativos de la industria.<br />
        #BROTHERSANTIAGO
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-10 py-6 border-t border-[#111] flex justify-between items-center">
    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#333]">© 2026 Brother Ad School — Santiago</span>
    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#333]">#ESCUELADECREATIV@</span>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Ticker />
      <Hero />
      <Statement />
      <VideoSection />
      <Curriculum />
      <QuoteBand />
      <ForWho />
      <ProfeSection />
      <CTASection />
      <Footer />
    </div>
  );
}
