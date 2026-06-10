import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

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
  },
  {
    title: 'Luxury Retail Landing Page',
    summary: 'An editorial-style storefront concept focused on storytelling, layout rhythm, and higher engagement.',
    impact: 'Balanced product-first visuals with clear calls to action for better conversion.',
    stack: ['React', 'Vite', 'Tailwind'],
  },
  {
    title: 'Creative Portfolio CMS',
    summary: 'A content-first portfolio layout with elegant sections, smooth transitions, and accessible navigation.',
    impact: 'Designed to give creators a polished home for projects, process, and contact details.',
    stack: ['React', 'UI Design', 'Accessibility'],
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/jue-creative', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:hello@juecreative.dev', icon: FaEnvelope },
];

const rotatingTitles = ['Computer Science Student', 'Web Developer', 'Problem Solver'];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (window.localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.backgroundColor = isDark ? '#14110D' : '#F9F6F0';
    window.localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 90;

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === currentTitle) {
        window.setTimeout(() => setIsDeleting(true), 1200);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        return;
      }

      setText((prev) =>
        isDeleting
          ? currentTitle.slice(0, prev.length - 1)
          : currentTitle.slice(0, prev.length + 1),
      );
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <main className={isDark ? 'min-h-screen bg-[#14110D] text-[#F8F4EE]' : 'min-h-screen bg-[#F9F6F0] text-[#1A1512]'}>
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className={isDark ? 'sticky top-4 z-20 rounded-[28px] border border-white/10 bg-[#17110D]/80 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-md' : 'sticky top-4 z-20 rounded-[28px] border border-stone-200 bg-[#F9F6F0]/80 p-4 shadow-[0_18px_45px_rgba(44,37,32,0.10)] backdrop-blur-md'}>
          <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <a href="#home" className={isDark ? 'text-lg font-black uppercase tracking-[0.35em] text-[#F5EFE7]' : 'text-lg font-black uppercase tracking-[0.35em] text-[#2C2520]'}>JUE</a>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#about" className={isDark ? 'rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[#F5EFE7] transition hover:border-[#C5A059] hover:bg-white/12' : 'rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white'}>About</a>
              <a href="#projects" className={isDark ? 'rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[#F5EFE7] transition hover:border-[#C5A059] hover:bg-white/12' : 'rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white'}>Projects</a>
              <a href="#contact" className={isDark ? 'rounded-full bg-[#F5EFE7] px-4 py-2 font-semibold text-[#17110D] transition hover:bg-white' : 'rounded-full bg-[#2C2520] px-4 py-2 font-semibold text-[#F4EAE1] transition hover:bg-[#4A3C33]'}>Contact</a>
              <button
                type="button"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={isDark ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[#F5EFE7] transition hover:border-[#C5A059] hover:bg-white/15' : 'inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-3 py-2 text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white'}
                aria-label="Toggle theme"
              >
                {isDark ? <FaSun /> : <FaMoon />}
                <span className="text-xs uppercase tracking-[0.25em]">{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </nav>
        </header>

        <section id="home" className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-7"
          >
            <div className="flex items-center gap-3 rounded-full border border-[#C5A059]/30 bg-[#FFF9F2] px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#8B7142] shadow-[0_6px_18px_rgba(197,160,89,0.12)]">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(74,222,128,0.12)]">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/60" />
              </span>
              Available for Work
            </div>
            <div className="space-y-4">
              <p className={isDark ? 'text-sm uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-sm uppercase tracking-[0.35em] text-[#7B604A]'}>I am a</p>
              <h1 className={isDark ? 'font-display max-w-xl text-4xl font-black tracking-tight text-[#F8F4EE] md:text-5xl lg:text-6xl' : 'font-display max-w-xl text-4xl font-black tracking-tight text-[#1A1512] md:text-5xl lg:text-6xl'}>
                <span className="text-[#C5A059]">{text}</span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className={isDark ? 'max-w-xl text-lg text-[#E7DFD5] md:text-xl' : 'max-w-xl text-lg text-[#4A3C33] md:text-xl'}>A modern creative developer blending warm vintage tones, thoughtful interaction, and conversion-focused design for brands that want to feel memorable.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className={isDark ? 'rounded-full bg-[#F8F4EE] px-5 py-3 font-semibold text-[#17110D] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-white' : 'rounded-full bg-[#1A1512] px-5 py-3 font-semibold text-[#F9F6F0] shadow-[0_12px_30px_rgba(44,37,32,0.20)] transition hover:bg-[#2D2721]'}>View projects</a>
              <a href="/my-cv.pdf" download className={isDark ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-[#F8F4EE] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-[#C5A059] hover:bg-white/15' : 'inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-5 py-3 font-semibold text-[#1A1512] shadow-[0_10px_24px_rgba(44,37,32,0.12)] transition hover:-translate-y-0.5 hover:border-[#C5A059] hover:bg-white'}>Download CV</a>
              <a href="#contact" className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-[#F8F4EE] transition hover:border-[#C5A059] hover:bg-white/15' : 'rounded-full border border-stone-200 bg-white/80 px-5 py-3 font-semibold text-[#1A1512] transition hover:border-[#C5A059] hover:bg-white'}>Start a project</a>
            </div>
            <ul className="grid gap-3 text-sm sm:grid-cols-2">
              <li className={isDark ? 'rounded-3xl border border-white/10 bg-white/8 p-4 text-[#F8F4EE]' : 'rounded-3xl border border-stone-200 bg-white/80 p-4 text-[#3D342D]'}><span className="mr-2 text-[#C5A059]">•</span>Warm, editorial visuals with a premium feel</li>
              <li className={isDark ? 'rounded-3xl border border-white/10 bg-white/8 p-4 text-[#F8F4EE]' : 'rounded-3xl border border-stone-200 bg-white/80 p-4 text-[#3D342D]'}><span className="mr-2 text-[#C5A059]">•</span>Fast React interfaces built for clarity and trust</li>
            </ul>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className={isDark ? 'rounded-[32px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[32px] border border-stone-200 bg-white/85 p-5 shadow-[0_18px_45px_rgba(44,37,32,0.10)]'}
          >
            <div className="rounded-[28px] border border-[#C88C50]/20 bg-[linear-gradient(135deg,#2C2520_0%,#4A3C33_45%,#7B604A_100%)] p-6 text-[#F4EAE1]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#F3D6B8]">Currently focused on</p>
              <h2 className="mt-3 text-2xl font-semibold">Refined web experiences with strong brand personality.</h2>
              <p className="mt-4 text-[#F5EBE4]">I design pages that feel calm, premium, and easy to explore—perfect for creatives, boutique brands, and product teams.</p>
              <div className="mt-6 rounded-3xl border border-white/10 bg-black/15 p-4 text-sm text-[#F5EBE4]">
                <p className="font-semibold text-[#FFE6C7]">Highlights</p>
                <ul className="mt-3 space-y-2">
                  <li>• React + TypeScript systems</li>
                  <li>• Tailwind-driven design consistency</li>
                  <li>• High-impact portfolio and product pages</li>
                </ul>
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 pb-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <article className={isDark ? 'rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[28px] border border-[#2C2520]/10 bg-white/70 p-6 shadow-[0_18px_45px_rgba(44,37,32,0.08)]'}>
            <p className={isDark ? 'text-xs uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-xs uppercase tracking-[0.35em] text-[#7B604A]'}>About</p>
            <h2 className={isDark ? 'font-display mt-3 text-2xl font-semibold text-[#F5EFE7]' : 'font-display mt-3 text-2xl font-semibold text-[#1A1512]'}>A developer who pairs thoughtful craft with warm storytelling.</h2>
            <p className={isDark ? 'mt-4 text-[#EDE4DB]' : 'mt-4 text-[#4A3C33]'}>My work focuses on balancing visual personality and usability. I build interfaces that invite attention, make information easy to scan, and feel genuinely inviting to use.</p>
          </article>
          <article className={isDark ? 'rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]' : 'rounded-[28px] border border-[#2C2520]/10 bg-white/70 p-6 shadow-[0_18px_45px_rgba(44,37,32,0.08)]'}>
            <p className={isDark ? 'text-xs uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-xs uppercase tracking-[0.35em] text-[#7B604A]'}>Core focus</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {expertise.map((item) => (
                <span key={item} className={isDark ? 'rounded-full border border-[#C88C50]/30 bg-white/10 px-4 py-2 text-sm text-[#F5EFE7]' : 'rounded-full border border-[#C88C50]/30 bg-[#FFF7F1] px-4 py-2 text-sm text-[#2C2520]'}>{item}</span>
              ))}
            </div>
            <p className={isDark ? 'mt-5 text-[#EDE4DB]' : 'mt-5 text-[#4A3C33]'}>Every detail, from spacing to motion, is chosen to support a calm and memorable experience.</p>
          </article>
        </motion.section>

        <section id="projects" className="pb-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className={isDark ? 'text-xs uppercase tracking-[0.35em] text-[#F3D6B8]' : 'text-xs uppercase tracking-[0.35em] text-[#7B604A]'}>Projects</p>
              <h2 className={isDark ? 'font-display mt-2 text-2xl font-semibold text-[#F5EFE7]' : 'font-display mt-2 text-2xl font-semibold text-[#1A1512]'}>Selected work with a strong sense of craft</h2>
            </div>
            <span className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-[#EDE4DB]' : 'rounded-full border border-[#2C2520]/10 bg-white/75 px-4 py-2 text-sm text-[#4A3C33]'}>Mapped from a clean project data set</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={isDark ? 'rounded-[28px] border border-stone-800 bg-stone-900/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#C5A059]/60' : 'rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(44,37,32,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#C5A059]/60'}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className={isDark ? 'text-xl font-semibold text-[#F5EFE7]' : 'text-xl font-semibold text-[#2C2520]'}>{project.title}</h3>
                  <span className={isDark ? 'rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#F3D6B8]' : 'rounded-full bg-[#FFF7F1] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#7B604A]'}>Case study</span>
                </div>
                <p className={isDark ? 'text-[#EDE4DB]' : 'text-[#4A3C33]'}>{project.summary}</p>
                <p className={isDark ? 'mt-3 text-sm text-[#D9CFC2]' : 'mt-3 text-sm text-[#6B5D52]'}>{project.impact}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-[#F5EFE7]' : 'rounded-full border border-[#2C2520]/10 bg-[#F4EAE1] px-3 py-1 text-xs text-[#2C2520]'}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-16">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[32px] border border-[#2C2520]/10 bg-[linear-gradient(135deg,#2C2520_0%,#4A3C33_45%,#7B604A_100%)] p-8 text-[#F4EAE1] shadow-[0_18px_45px_rgba(44,37,32,0.18)]"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <p className="text-xs uppercase tracking-[0.35em] text-[#F3D6B8]">Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold">Let’s create a portfolio or product page that feels intentional, warm, and easy to trust.</h2>
            <p className="mt-4 max-w-2xl text-[#F5EBE4]">I’m available for freelance work, creative collaborations, and UI-focused product builds that need a polished experience from day one.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-[#F4EAE1] transition hover:border-[#F3D6B8] hover:bg-white/15"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </motion.article>
        </section>

        <footer className={isDark ? 'pb-8 pt-2 text-[#E7DFD5]' : 'pb-8 pt-2 text-[#4A3C33]'}>
          <div className={isDark ? 'rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-md' : 'rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-[0_18px_45px_rgba(44,37,32,0.08)] backdrop-blur-md'}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059]">Portfolio</p>
                <p className="mt-2 text-sm text-current">Elegant interfaces, thoughtful motion, and a vintage-first visual language.</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={isDark ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[#C5A059] hover:bg-white/15' : 'inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[#C5A059] hover:bg-white'}
                  >
                    <Icon />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default App;
