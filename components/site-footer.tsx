import Link from "next/link";

const institutionalLinks = [
  { label: "A Viplan", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__main">
        <div className="site-footer__brand">
          <Link aria-label="Viplan — página inicial" className="site-footer__wordmark" href="/">
            Viplan<span aria-hidden="true">.</span>
          </Link>
          <p>
            Viplan Vidros Temperados. Fabricação e comercialização de peças
            de vidro temperado para diferentes projetos e aplicações.
          </p>
        </div>

        <div className="site-footer__column">
          <h2>Institucional</h2>
          <nav aria-label="Links institucionais">
            {institutionalLinks.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__column">
          <h2>Redes sociais</h2>
          <p className="site-footer__pending">
            Em breve, os canais oficiais da Viplan.
          </p>
        </div>

        <div className="site-footer__column site-footer__contact">
          <h2>Fale com a Viplan</h2>
          <Link href="/contato" className="site-footer__contact-link">
            Entre em contato <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-shell">
          <span>© {new Date().getFullYear()} Viplan Vidros Temperados.</span>
          <span>Transparência que transforma espaços.</span>
        </div>
      </div>
    </footer>
  );
}
