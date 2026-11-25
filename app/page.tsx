const plannedPages = [
  "Sobre a VIplan",
  "Fabricação",
  "Produtos",
  "Projetos",
  "Qualidade",
  "Contato",
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(32,184,210,0.16),rgba(32,184,210,0)_68%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 left-[28%] -z-10 h-[460px] w-[760px] rotate-[-16deg] bg-[linear-gradient(110deg,rgba(7,91,145,0.04),rgba(32,184,210,0.10),rgba(72,166,106,0.06),transparent)]"
        />
        <div className="site-shell grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <span className="eyebrow">VIplan · Vidros Temperados</span>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              Uma nova forma de apresentar a{" "}
              <span className="bg-gradient-to-r from-[var(--color-blue)] via-[var(--color-cyan)] to-[var(--color-green)] bg-clip-text text-transparent">
                VIplan.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              Estamos construindo um espaço digital para apresentar a empresa,
              seus produtos, processos e projetos com clareza e personalidade.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-full bg-[var(--color-blue)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                href="/produtos"
              >
                Conheça os produtos <span aria-hidden="true" className="ml-3">↗</span>
              </a>
              <a
                className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-cyan)]"
                href="/contato"
              >
                Entre em contato
              </a>
            </div>
            <p className="mt-8 text-xs text-slate-400">
              Prévia estrutural — textos, imagens e identidade final serão refinados nas próximas etapas.
            </p>
          </div>

          <div aria-label="Composição gráfica provisória inspirada em transparências de vidro" className="relative mx-auto aspect-[4/4.2] w-full max-w-[520px]">
            <div className="absolute inset-[12%_8%_10%_12%] rotate-[-8deg] rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(32,184,210,0.22),rgba(255,255,255,0.58)_42%,rgba(7,91,145,0.14))] shadow-[0_35px_100px_rgba(16,43,67,0.12)] backdrop-blur-sm" />
            <div className="absolute inset-[5%_18%_20%_4%] rotate-[7deg] rounded-[2.5rem] border border-white/80 bg-[linear-gradient(145deg,rgba(72,166,106,0.15),rgba(255,255,255,0.72)_48%,rgba(32,184,210,0.12))] shadow-[0_25px_80px_rgba(16,43,67,0.08)] backdrop-blur-sm" />
            <div className="absolute inset-[22%_4%_4%_24%] rotate-[3deg] rounded-[2rem] border border-white/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(32,184,210,0.12)_55%,rgba(242,201,76,0.12))] shadow-[0_30px_80px_rgba(16,43,67,0.10)] backdrop-blur-md" />
            <div className="absolute bottom-[15%] left-[12%] rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-xl backdrop-blur-md">
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-blue)]">Identidade em evolução</span>
              <span className="mt-1 block text-sm text-slate-600">Transparência · Cor · Movimento</span>
            </div>
            <span aria-hidden="true" className="absolute right-[12%] top-[12%] h-4 w-4 rounded-full bg-[var(--color-yellow)] shadow-[0_0_0_10px_rgba(242,201,76,0.14)]" />
          </div>
        </div>
      </section>

      <section className="site-shell py-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Estrutura do site</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl">
            Conteúdo organizado para explorar a VIplan.
          </h2>
          <p className="mt-4 leading-7 text-[var(--color-muted)]">
            As áreas abaixo representam a estrutura prevista. O conteúdo definitivo
            será inserido e validado ao longo do desenvolvimento.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {plannedPages.map((page, index) => (
            <li className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-200/60" key={page}>
              <span className="text-xs font-bold tracking-[0.16em] text-[var(--color-cyan)]">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-ink)]">{page}</h3>
              <span aria-hidden="true" className="mt-8 inline-block text-xl text-[var(--color-blue)] transition-transform group-hover:translate-x-1">↗</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
