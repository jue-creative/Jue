import { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const expertise = [
  'React & TypeScript',
  'Tailwind UI systems',
  'Conversion-driven design',
  'Fast responsive experiences',
];

const projects = [
  {
    title: 'Motorcycle Showroom System',
    summary: 'A refined showroom dashboard for browsing, filtering, and managing bike inventory with a premium visual experience.',
    impact: 'Built to help riders discover models faster and keep showroom operations organized.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'Web Dev',
  },
  {
    title: 'Luxury Retail Landing Page',
    summary: 'An editorial-style storefront concept focused on storytelling, layout rhythm, and higher engagement.',
    impact: 'Balanced product-first visuals with clear calls to action for better conversion.',
    stack: ['React', 'Vite', 'Tailwind'],
    category: 'Web Dev',
  },
  {
    title: 'Creative Portfolio CMS',
    summary: 'A content-first portfolio layout with elegant sections, smooth transitions, and accessible navigation.',
    impact: 'Designed to give creators a polished home for projects, process, and contact details.',
    stack: ['React', 'UI Design', 'Accessibility'],
    category: 'Logic',
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/jue-creative', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:hello@juecreative.dev', icon: FaEnvelope },
];

function App() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web Dev' | 'Logic'>('All');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (window.localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.backgroundColor = isDark ? '#14110D' : '#F9F6F0';
    window.localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  const filteredProjects = projects.filter((project) => activeFilter === 'All' || project.category === activeFilter);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  function HomePage() {
    return (
      <>
        <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
          <article className="space-y-7">
            <div className="flex items-center gap-3 rounded-full border border-[#C5A059]/30 bg-[#FFF9F2] px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#8B7142] shadow-[0_6px_18px_rgba(197,160,89,0.12)]"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(74,222,128,0.12)]" />Available for Work</div>
            <div className="space-y-4">
              <p className={isDark ? 'text-sm uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-sm uppercase tracking-[0.35em] text-[#7B604A]'}>I am a</p>
              <h1 className={isDark ? 'font-display max-w-xl text-4xl font-black tracking-tight text-[#F8F4EE] md:text-5xl lg:text-6xl' : 'font-display max-w-xl text-4xl font-black tracking-tight text-[#1A1512] md:text-5xl lg:text-6xl'}>
                <span className="inline-block animate-[fadeInUp_450ms_ease-out] text-[#C5A059]">Computer Science Student</span>
              </h1>
              <p className={isDark ? 'max-w-xl text-lg text-[#E7DFD5] md:text-xl' : 'max-w-xl text-lg text-[#4A3C33] md:text-xl'}>A modern creative developer blending warm vintage tones, thoughtful interaction, and conversion-focused design for brands that want to feel memorable.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className={isDark ? 'rounded-full bg-[#F8F4EE] px-5 py-3 font-semibold text-[#17110D] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-white' : 'rounded-full bg-[#1A1512] px-5 py-3 font-semibold text-[#F9F6F0] shadow-[0_12px_30px_rgba(44,37,32,0.20)] transition hover:bg-[#2D2721]'}>View projects</Link>
              <a href="/my-cv.pdf" download className={isDark ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-[#F8F4EE] shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:border-[#C5A059] hover:bg-white/15' : 'inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-5 py-3 font-semibold text-[#1A1512] shadow-[0_10px_30px_rgba(44,37,32,0.12)] hover:border-[#C5A059] hover:bg-white'}>Download CV</a>
              <Link to="/contact" className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-[#F8F4EE] hover:border-[#C5A059] hover:bg-white/15' : 'rounded-full border border-stone-200 bg-white/80 px-5 py-3 font-semibold text-[#1A1512] hover:border-[#C5A059] hover:bg-white'}>Start a project</Link>
            </div>
            <ul className="grid gap-3 text-sm sm:grid-cols-2"><li className={isDark ? 'rounded-3xl border border-white/10 bg-white/8 p-4 text-[#F8F4EE]' : 'rounded-3xl border border-stone-200 bg-white/80 p-4 text-[#3D342D]'}><span className="mr-2 text-[#C5A059]">•</span>Warm, editorial visuals with a premium feel</li><li className={isDark ? 'rounded-3xl border border-white/10 bg-white/8 p-4 text-[#F8F4EE]' : 'rounded-3xl border border-stone-200 bg-white/80 p-4 text-[#3D342D]'}><span className="mr-2 text-[#C5A059]">•</span>Fast React interfaces built for clarity and trust</li></ul>
          </article>

          <aside className={isDark ? 'rounded-[32px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[32px] border border-stone-200 bg-white/85 p-5 shadow-[0_18px_45px_rgba(44,37,32,0.10)]'}>
            <div className="rounded-[28px] border border-[#C88C50]/20 bg-[linear-gradient(135deg,#2C2520_0%,#4A3C33_45%,#7B604A_100%)] p-6 text-[#F4EAE1]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#F3D6B8]">Currently focused on</p>
              <h2 className="mt-3 text-2xl font-semibold">Refined web experiences with strong brand personality.</h2>
              <p className="mt-4 text-[#F5EBE4]">I design pages that feel calm, premium, and easy to explore—perfect for creatives, boutique brands, and product teams.</p>
              <div className="mt-6 rounded-3xl border border-white/10 bg-black/15 p-4 text-sm text-[#F5EBE4]"><p className="font-semibold text-[#FFE6C7]">Highlights</p><ul className="mt-3 space-y-2"><li>• React + TypeScript systems</li><li>• Tailwind-driven design consistency</li><li>• High-impact portfolio and product pages</li></ul></div>
            </div>
          </aside>
        </section>

        <section className="pb-10">
          <div className="mb-6 flex items-end justify-between gap-3"><div><p className={isDark ? 'text-xs uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-xs uppercase tracking-[0.35em] text-[#7B604A]'}>Featured Projects</p><h2 className={isDark ? 'font-display mt-2 text-2xl font-semibold text-[#F5EFE7]' : 'font-display mt-2 text-2xl font-semibold text-[#1A1512]'}>Recent work with premium structure and clear storytelling.</h2></div><Link to="/projects" className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-[#F8F4EE] transition hover:border-[#C5A059] hover:bg-white/12' : 'rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-sm text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white'}>See all projects</Link></div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.slice(0, 3).map((project) => <article key={project.title} className={isDark ? 'rounded-[28px] border border-stone-800 bg-stone-900/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(44,37,32,0.08)]'}><p className={isDark ? 'text-[11px] uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-[11px] uppercase tracking-[0.35em] text-[#7B604A]'}>{project.category}</p><h3 className={isDark ? 'mt-3 text-xl font-semibold text-[#F5EFE7]' : 'mt-3 text-xl font-semibold text-[#2C2520]'}>{project.title}</h3><p className={isDark ? 'mt-3 text-[#EDE4DB]' : 'mt-3 text-[#4A3C33]'}>{project.summary}</p></article>)}</div>
        </section>
      </>
    );
  }

  function AboutPage() {
    return (
      <section className="grid gap-6 py-8 md:grid-cols-[1.02fr_0.98fr]">
        <article className={isDark ? 'rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(44,37,32,0.08)]'}>
          <p className={isDark ? 'text-xs uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-xs uppercase tracking-[0.35em] text-[#7B604A]'}>About</p>
          <h1 className={isDark ? 'font-display mt-3 text-3xl font-semibold text-[#F5EFE7]' : 'font-display mt-3 text-3xl font-semibold text-[#1A1512]'}>Creative developer with a sharp eye for detail and calm, premium interfaces.</h1>
          <p className={isDark ? 'mt-4 text-[#EDE4DB]' : 'mt-4 text-[#4A3C33]'}>My practice combines visual storytelling, interface architecture, and a strong sense of rhythm so every page feels unmistakably polished. I enjoy building responsive, modern systems that help brands stand out without becoming noisy.</p>
          <p className={isDark ? 'mt-4 text-[#EDE4DB]' : 'mt-4 text-[#4A3C33]'}>From elegant landing pages to portfolio experiences, I focus on content hierarchy, motion, and trust-building details that make interfaces memorable.</p>
        </article>
        <article className={isDark ? 'rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(44,37,32,0.08)]'}>
          <p className={isDark ? 'text-xs uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-xs uppercase tracking-[0.35em] text-[#7B604A]'}>Skills & Education</p>
          <div className="mt-4 grid gap-4"><div className="rounded-[24px] border border-[#C5A059]/20 bg-[#FFF9F2] p-4"><h2 className="text-xl font-semibold text-[#2C2520]">Core Skills</h2><div className="mt-3 flex flex-wrap gap-2">{expertise.map((item) => <span key={item} className="rounded-full border border-[#C5A059]/20 bg-white px-3 py-2 text-sm text-[#2C2520]">{item}</span>)}</div></div><div className="rounded-[24px] border border-white/10 bg-black/10 p-4"><h2 className="text-xl font-semibold text-[#F5EFE7]">Education</h2><p className="mt-2 text-[#EDE4DB]">Computer Science student with a strong interest in product design, frontend systems, and thoughtful user experiences.</p></div></div>
        </article>
      </section>
    );
  }

  function ProjectsPage() {
    return (
      <section className="py-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3"><div><p className={isDark ? 'text-xs uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-xs uppercase tracking-[0.35em] text-[#7B604A]'}>Projects</p><h1 className={isDark ? 'font-display mt-2 text-3xl font-semibold text-[#F5EFE7]' : 'font-display mt-2 text-3xl font-semibold text-[#1A1512]'}>Comprehensive case studies and interactive concepts.</h1></div><span className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-[#EDE4DB]' : 'rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-sm text-[#1A1512]'}>Filter by focus</span></div>
        <div className="mb-6 flex flex-wrap gap-3">{(['All', 'Web Dev', 'Logic'] as const).map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? (isDark ? 'rounded-full border border-[#C5A059]/70 bg-[#C5A059] px-4 py-2 text-sm font-semibold text-[#14110D]' : 'rounded-full border border-[#C5A059]/70 bg-[#C5A059] px-4 py-2 text-sm font-semibold text-[#1A1512]') : (isDark ? 'rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-[#F8F4EE] transition hover:border-[#C5A059] hover:bg-white/12' : 'rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-sm text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white')}>{filter}</button>)}</div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredProjects.map((project) => <article key={project.title} className={isDark ? 'rounded-[28px] border border-stone-800 bg-stone-900/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(44,37,32,0.08)]'}><p className={isDark ? 'text-[11px] uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-[11px] uppercase tracking-[0.35em] text-[#7B604A]'}>{project.category}</p><h2 className={isDark ? 'mt-3 text-xl font-semibold text-[#F5EFE7]' : 'mt-3 text-xl font-semibold text-[#2C2520]'}>{project.title}</h2><p className={isDark ? 'mt-3 text-[#EDE4DB]' : 'mt-3 text-[#4A3C33]'}>{project.summary}</p><p className={isDark ? 'mt-3 text-sm text-[#D9CFC2]' : 'mt-3 text-sm text-[#6B5D52]'}>{project.impact}</p><div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-[#F5EFE7]' : 'rounded-full border border-stone-200 bg-[#F4EAE1] px-3 py-1 text-xs text-[#2C2520]'}>{item}</span>)}</div></article>)}</div>
      </section>
    );
  }

  function ContactPage() {
    return (
      <section className="py-8">
        <article className="rounded-[32px] border border-[#2C2520]/10 bg-[linear-gradient(135deg,#2C2520_0%,#4A3C33_45%,#7B604A_100%)] p-8 text-[#F4EAE1] shadow-[0_18px_45px_rgba(44,37,32,0.18)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#F3D6B8]">Contact</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold">A clean, dedicated contact page for new projects and collaborations.</h1>
          <p className="mt-4 max-w-2xl text-[#F5EBE4]">Use the form below to start a conversation about a portfolio, landing page, or refined product interface.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <form onSubmit={handleSubmit} className="space-y-4 rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md"><div className="grid gap-4 sm:grid-cols-2"><label className="space-y-2 text-sm text-[#F5EBE4]"><span>Name</span><input value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-[#F8F4EE] outline-none transition placeholder:text-[#E7DFD5] focus:border-[#C5A059] focus:bg-white/12" placeholder="Your name" /></label><label className="space-y-2 text-sm text-[#F5EBE4]"><span>Email</span><input type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-[#F8F4EE] outline-none transition placeholder:text-[#E7DFD5] focus:border-[#C5A059] focus:bg-white/12" placeholder="you@example.com" /></label></div><label className="space-y-2 text-sm text-[#F5EBE4]"><span>Message</span><textarea value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} rows={5} className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-[#F8F4EE] outline-none transition placeholder:text-[#E7DFD5] focus:border-[#C5A059] focus:bg-white/12" placeholder="Tell me about your project or idea." /></label><div className="flex flex-wrap items-center justify-between gap-3 pt-1"><button type="submit" className="rounded-full bg-[#F8F4EE] px-5 py-3 text-sm font-semibold text-[#17110D] shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:bg-white">Send Message</button>{submitted && <p className="text-sm text-[#F3D6B8]">Thanks — your message is ready to send.</p>}</div></form>
            <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md"><p className="text-xs uppercase tracking-[0.35em] text-[#F3D6B8]">Reach out</p><ul className="mt-4 space-y-3 text-[#F5EBE4]"><li className="rounded-2xl border border-white/10 bg-white/8 p-4">Reply typically within one business day.</li><li className="rounded-2xl border border-white/10 bg-white/8 p-4">Ideal for freelance design, product pages, and portfolio upgrades.</li><li className="rounded-2xl border border-white/10 bg-white/8 p-4">Includes visual direction, motion notes, and polished implementation support.</li></ul></div>
          </div>
        </article>
      </section>
    );
  }

  return (
    <>
      <main className={isDark ? 'min-h-screen bg-[#14110D] text-[#F8F4EE]' : 'min-h-screen bg-[#F9F6F0] text-[#1A1512]'}>
        <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
          <header className={isDark ? 'static top-0 z-20 mt-2 rounded-[28px] border border-white/10 bg-[#17110D]/90 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-md' : 'static top-0 z-20 mt-2 rounded-[28px] border border-stone-200 bg-[#F9F6F0]/95 p-4 shadow-[0_18px_45px_rgba(44,37,32,0.10)] backdrop-blur-md'}>
            <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <Link to="/" className={isDark ? 'text-lg font-black uppercase tracking-[0.35em] text-[#F5EFE7]' : 'text-lg font-black uppercase tracking-[0.35em] text-[#2C2520]'}>JUE</Link>
              <div className="flex flex-wrap items-center gap-2">{navLinks.map(({ to, label }) => <NavLink key={to} to={to} className={({ isActive }) => (isActive ? (isDark ? 'rounded-full border border-[#C5A059]/70 bg-[#C5A059] px-4 py-2 font-semibold text-[#17110D]' : 'rounded-full border border-[#C5A059]/70 bg-[#C5A059] px-4 py-2 font-semibold text-[#17110D]') : (isDark ? 'rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[#F5EFE7] transition hover:border-[#C5A059] hover:bg-white/12' : 'rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white'))}>{label}</NavLink>)}
                <button type="button" onClick={() => setTheme(isDark ? 'light' : 'dark')} className={isDark ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[#F5EFE7] transition hover:border-[#C5A059] hover:bg-white/15' : 'inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-3 py-2 text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white'} aria-label="Toggle theme">{isDark ? <FaSun /> : <FaMoon />}<span className="text-xs uppercase tracking-[0.25em]">{isDark ? 'Light' : 'Dark'}</span></button>
              </div>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <footer className={isDark ? 'pb-8 pt-8 text-[#E7DFD5]' : 'pb-8 pt-8 text-[#4A3C33]'}>
            <div className={isDark ? 'rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-md' : 'rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-[0_18px_45px_rgba(44,37,32,0.08)] backdrop-blur-md'}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p className="text-xs uppercase tracking-[0.35em] text-[#C5A059]">Portfolio</p><p className="mt-2 text-sm text-current">Elegant interfaces, thoughtful motion, and a vintage-first visual language.</p></div><div className="flex items-center gap-3 text-sm">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" className={isDark ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 hover:border-[#C5A059] hover:bg-white/15' : 'inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-3 py-2 hover:border-[#C5A059] hover:bg-white'}><Icon />{label}</a>)}</div></div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

export default App;
