const siteAreas = [
  {
    number: "01",
    title: "A VIplan",
    description: "Conheça a empresa, sua atuação e os valores que orientam seu trabalho.",
    href: "/sobre",
    tone: "blue",
  },
  {
    number: "02",
    title: "Fabricação",
    description: "Uma visão do processo produtivo e dos cuidados em cada etapa.",
    href: "/fabricacao",
    tone: "cyan",
  },
  {
    number: "03",
    title: "Produtos",
    description: "Explore as soluções e possibilidades em vidro temperado.",
    href: "/produtos",
    tone: "green",
  },
  {
    number: "04",
    title: "Projetos",
    description: "Veja aplicações, ambientes e referências de projetos.",
    href: "/projetos",
    tone: "yellow",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div aria-hidden="true" className="hero-orbit hero-orbit--one" />
        <div aria-hidden="true" className="hero-orbit hero-orbit--two" />
        <div aria-hidden="true" className="hero-ribbon hero-ribbon--blue" />
        <div aria-hidden="true" className="hero-ribbon hero-ribbon--cyan" />
        <div aria-hidden="true" className="hero-ribbon hero-ribbon--green" />

        <div className="site-shell hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">VIplan · Vidros Temperados</span>
            <h1>
              O vidro abre
              <br />
              <span className="hero-title-accent">novas possibilidades.</span>
            </h1>
            <p className="hero-description">
              Um novo espaço para conhecer a VIplan, explorar seus produtos,
              acompanhar seus processos e descobrir diferentes aplicações do vidro.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/produtos">
                Explore nossos produtos <span aria-hidden="true">↗</span>
              </a>
              <a className="button-text" href="/sobre">
                Conheça a VIplan <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note__line" />
              <span>Transparência que transforma espaços.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Composição abstrata de planos translúcidos inspirados no vidro">
            <div className="glass-scene">
              <div className="glass-scene__shadow" />
              <div className="glass-sheet glass-sheet--back">
                <span className="glass-sheet__shine" />
              </div>
              <div className="glass-sheet glass-sheet--middle">
                <span className="glass-sheet__shine" />
              </div>
              <div className="glass-sheet glass-sheet--front">
                <span className="glass-sheet__shine" />
              </div>
              <div className="glass-color glass-color--blue" />
              <div className="glass-color glass-color--green" />
              <div className="glass-color glass-color--yellow" />
              <div className="glass-caption">
                <span className="glass-caption__eyebrow">VIplan</span>
                <span className="glass-caption__title">Luz, cor<br />e transparência.</span>
                <span className="glass-caption__index">01 — 04</span>
              </div>
              <span className="glass-spark glass-spark--one" />
              <span className="glass-spark glass-spark--two" />
            </div>
            <span className="hero-art-label">Material · Forma · Possibilidade</span>
          </div>
        </div>
        <div className="hero-bottom site-shell">
          <span>Uma experiência digital em construção</span>
          <span aria-hidden="true">↓</span>
        </div>
      </section>

      <section className="intro-section section-space">
        <div className="site-shell intro-layout">
          <div>
            <span className="eyebrow">Conheça a VIplan</span>
            <h2 className="section-heading">
              Mais do que vidro.
              <br />
              <span>Novas formas de viver os espaços.</span>
            </h2>
          </div>
          <div className="intro-aside">
            <p>
              Cada ambiente pede uma solução. Aqui você encontra um ponto de
              partida para conhecer a empresa, entender seu trabalho e descobrir
              o universo de possibilidades do vidro.
            </p>
            <a className="inline-link" href="/sobre">
              Saiba mais sobre a VIplan <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div aria-hidden="true" className="intro-decoration site-shell">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="areas-section section-space">
        <div className="site-shell">
          <div className="section-topline">
            <div>
              <span className="eyebrow">Explore</span>
              <h2 className="section-heading">Um olhar sobre<br /><span>o que fazemos.</span></h2>
            </div>
            <p className="section-topline__text">
              Navegue pelas áreas do site e conheça diferentes aspectos da VIplan.
            </p>
          </div>

          <div className="area-grid">
            {siteAreas.map((area) => (
              <a className={`area-card area-card--${area.tone}`} href={area.href} key={area.number}>
                <div className="area-card__top">
                  <span>{area.number}</span>
                  <span aria-hidden="true" className="area-card__arrow">↗</span>
                </div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
                <span aria-hidden="true" className="area-card__line" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-strip">
        <div className="site-shell quality-strip__inner">
          <div>
            <span className="eyebrow eyebrow--light">VIplan</span>
            <h2>Conhecimento, cuidado<br />e atenção aos detalhes.</h2>
          </div>
          <a className="button-light" href="/qualidade">
            Conheça nossa qualidade <span aria-hidden="true">↗</span>
          </a>
          <div aria-hidden="true" className="quality-strip__ribbon quality-strip__ribbon--one" />
          <div aria-hidden="true" className="quality-strip__ribbon quality-strip__ribbon--two" />
        </div>
      </section>

      <section className="contact-section section-space">
        <div className="site-shell contact-panel">
          <div>
            <span className="eyebrow">Vamos conversar?</span>
            <h2 className="section-heading">Seu próximo projeto<br /><span>começa com uma conversa.</span></h2>
          </div>
          <a className="button-primary" href="/contato">
            Entre em contato <span aria-hidden="true">↗</span>
          </a>
          <span aria-hidden="true" className="contact-panel__accent" />
        </div>
      </section>
    </>
  );
}
