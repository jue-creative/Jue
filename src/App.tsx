const skills = ['React', 'TypeScript', 'Tailwind CSS', 'UI Design', 'Accessibility', 'Performance'];

const projects = [
  {
    title: 'Commerce UI',
    description: 'A conversion-focused storefront built with responsive components, clean motion, and reusable design patterns.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'A dashboard concept for product teams, featuring clear KPIs, interactive charts, and a focused visual hierarchy.',
    stack: ['TypeScript', 'Charts', 'Design System'],
  },
  {
    title: 'Portfolio CMS',
    description: 'A content-first portfolio site for creative professionals, optimized for fast load times and easy updates.',
    stack: ['React', 'Vite', 'Tailwind'],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827_0%,_#020617_45%,_#020617_100%)] text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 lg:px-10">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <a href="#home" className="text-xl font-semibold tracking-[0.35em] text-cyan-200 uppercase">AR</a>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <a href="#projects" className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 hover:border-cyan-400/70 hover:text-cyan-100">Projects</a>
              <a href="#skills" className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 hover:border-cyan-400/70 hover:text-cyan-100">Skills</a>
              <a href="#contact" className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300">Contact</a>
            </div>
          </nav>
        </header>

        <section id="home" className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-14">
          <article className="space-y-8">
            <p className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-100">Frontend Developer • UI Engineer</p>
            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">I build polished web experiences that feel as good as they look.</h1>
              <p className="max-w-lg text-lg text-slate-300 md:text-xl">I design and ship intuitive interfaces with React, TypeScript, and Tailwind CSS—focused on speed, clarity, and conversion.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-glow hover:bg-cyan-300">View projects</a>
              <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-100 hover:border-cyan-400/70 hover:text-cyan-100">Start a project</a>
            </div>
            <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">3+ years building UI</li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Fast, responsive interfaces</li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Design-aware implementation</li>
            </ul>
          </article>

          <aside className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
            <div className="rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">Now available</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Frontend developer for SaaS, e-commerce, and creative brands.</h2>
              <p className="mt-4 text-slate-300">I love turning product goals into elegant interfaces with thoughtful interactions and clear content hierarchy.</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-200">
                <p className="font-medium text-cyan-100">Current focus</p>
                <ul className="mt-3 space-y-2">
                  <li>• React + TypeScript component systems</li>
                  <li>• Tailwind-driven design consistency</li>
                  <li>• Smooth onboarding and landing pages</li>
                </ul>
              </div>
            </div>
          </aside>
        </section>

        <section id="skills" className="grid gap-6 pb-10 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">About</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">A developer who blends product thinking with visual detail.</h2>
            <p className="mt-4 text-slate-300">I care about the details users feel: spacing, motion, contrast, and quick feedback. I build interfaces that stay simple to use and memorable to see.</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Core skills</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-50">{skill}</span>
              ))}
            </div>
          </article>
        </section>

        <section id="projects" className="pb-10">
          <div className="mb-6 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Selected work</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Recent projects I’m proud of</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Built for conversion & clarity</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/60">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-xs uppercase tracking-[0.25em] text-cyan-100">Case study</span>
                </div>
                <p className="text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-16">
          <article className="rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-fuchsia-400/10 p-8 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Let’s build</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Ready to create a fast, modern site for your brand?</h2>
            <p className="mt-4 max-w-2xl text-slate-200">I can help with landing pages, product interfaces, and polished React experiences from concept to launch.</p>
            <a href="mailto:alex@example.com" className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">alex@example.com</a>
          </article>
        </section>
      </section>
    </main>
  );
}

export default App;
