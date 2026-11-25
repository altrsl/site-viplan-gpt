const highlights = [
  { number: "01", title: "A Viplan", text: "Conheça nossa empresa e a forma como atuamos.", href: "/sobre" },
  { number: "02", title: "Produtos", text: "Descubra as peças de vidro temperado e suas possibilidades.", href: "/produtos" },
  { number: "03", title: "Projetos", text: "Veja referências de aplicações e soluções em vidro.", href: "/projetos" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__photo" role="img" aria-label="Fachada da empresa Viplan" />
        <div className="home-hero__veil" aria-hidden="true" />
        <div className="home-hero__ribbons" aria-hidden="true"><i /><i /><i /></div>
        <div className="home-hero__content site-shell">
          <span className="home-kicker home-kicker--light">Viplan · Vidros Temperados</span>
          <h1 id="home-title">A transparência<br />de boas <em>escolhas.</em></h1>
          <p>Fabricação e comercialização de peças de vidro temperado para diferentes projetos, aplicações e ambientes.</p>
          <div className="home-hero__actions">
            <a className="home-button home-button--light" href="/produtos">Conheça nossos produtos <span aria-hidden="true">↗</span></a>
            <a className="home-text-link home-text-link--light" href="/sobre">Conheça a Viplan <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="home-hero__foot site-shell">
          <span>Vidro temperado · Viplan</span>
          <a href="#apresentacao">Descubra <span aria-hidden="true">↓</span></a>
        </div>
        <div className="home-hero__side-note" aria-hidden="true">MATÉRIA · LUZ · ARQUITETURA</div>
      </section>

      <section className="home-intro section-space" id="apresentacao">
        <div className="site-shell home-intro__grid">
          <div className="home-intro__lead">
            <span className="home-kicker">Sobre a Viplan</span>
            <h2>O vidro tem um papel.<br /><em>A escolha faz a diferença.</em></h2>
          </div>
          <div className="home-intro__body">
            <p>A Viplan trabalha com fabricação e comercialização de peças de vidro temperado, atendendo diferentes necessidades com atenção ao material, às especificações e à aplicação de cada projeto.</p>
            <a className="home-inline-link" href="/sobre">Um pouco mais sobre nós <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="home-spectrum" aria-hidden="true"><span /><span /><span /><span /></div>
      </section>

      <section className="home-explore section-space">
        <div className="site-shell">
          <div className="home-explore__heading">
            <div>
              <span className="home-kicker">Explore a Viplan</span>
              <h2>Conheça de perto<br /><em>o nosso universo.</em></h2>
            </div>
            <p>Informação clara para conhecer a empresa, encontrar produtos e descobrir possibilidades de aplicação do vidro temperado.</p>
          </div>
          <div className="home-explore__list">
            {highlights.map((item) => (
              <a className="home-explore__item" href={item.href} key={item.number}>
                <span className="home-explore__number">{item.number}</span>
                <span className="home-explore__title">{item.title}</span>
                <span className="home-explore__description">{item.text}</span>
                <span className="home-explore__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-partners section-space">
        <div className="site-shell home-partners__grid">
          <div className="home-partners__copy">
            <span className="home-kicker">Relacionamentos que somam</span>
            <h2>Boas parcerias<br /><em>constroem confiança.</em></h2>
            <p>Valorizamos relações profissionais pautadas pela confiança, pelo diálogo e pelo compromisso com bons resultados.</p>
          </div>
          <div className="home-partners__visual" aria-label="Área reservada para apresentação dos parceiros da Viplan">
            <div className="home-partners__glass" aria-hidden="true"><span /><span /><span /></div>
            <span className="home-partners__label">Viplan · Parcerias</span>
            <p>Em breve, marcas e empresas parceiras.</p>
          </div>
        </div>
      </section>

      <section className="home-contact">
        <div className="site-shell home-contact__inner">
          <div>
            <span className="home-kicker home-kicker--light">Vamos conversar?</span>
            <h2>Seu projeto começa<br /><em>com uma boa conversa.</em></h2>
          </div>
          <a className="home-button home-button--outline" href="/contato">Fale com a Viplan <span aria-hidden="true">↗</span></a>
          <div className="home-contact__ribbon" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
