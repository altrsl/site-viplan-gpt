const navigation = [
  { label: "Início", href: "/" },
  { label: "A VIplan", href: "/sobre" },
  { label: "Fabricação", href: "/fabricacao" },
  { label: "Produtos", href: "/produtos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Qualidade", href: "/qualidade" },
  { label: "Contato", href: "/contato" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="site-shell flex min-h-20 items-center justify-between gap-8">
        <a
          aria-label="VIplan — página inicial"
          className="shrink-0 text-2xl font-black tracking-[-0.07em] text-[var(--color-ink)]"
          href="/"
        >
          VIplan<span className="text-[var(--color-cyan)]">.</span>
          <span className="sr-only"> — logotipo oficial aguardando aplicação</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[var(--color-blue)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden rounded-full bg-[var(--color-blue)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-ink)] sm:inline-flex"
          href="/contato"
        >
          Fale com a VIplan
        </a>
      </div>
    </header>
  );
}
