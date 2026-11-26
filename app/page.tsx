import { getSupabaseImageUrl } from "@/lib/supabase-images";

const siteAreas = [
  {
    number: "01",
    title: "A Viplan",
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
    description: "Explore as peças e possibilidades em vidro temperado.",
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
            <span className="eyebrow">Viplan · Vidros Temperados</span>
            <h1>
              O vidro abre
              <br />
              <span className="hero-title-accent">novas possibilidades.</span>
            </h1>
            <p className="hero-description">
              Peças de vidro temperado com qualidade, cuidado e possibilidades
              para diferentes projetos e aplicações.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/produtos">
                Explore nossos produtos <span aria-hidden="true">↗</span>
              </a>
              <a className="button-text" href="/sobre">
                Conheça a Viplan <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note__line" />
              <span>Transparência que transforma espaços.</span>
            </div>
          </div>

          <div
            aria-label="Fachada da Viplan"
            className="hero-photo"
            role="img"
          >
            <div className="hero-photo__wash" />
            <div className="hero-photo__caption">
              <span>Viplan</span>
              <strong>Vidros temperados</strong>
            </div>
          </div>
        </div>
        <div className="hero-bottom site-shell">
          <span>Qualidade e confiança em cada peça</span>
          <span aria-hidden="true">↓</span>
        </div>
      </section>

      <section className="intro-section section-space">
        <div className="site-shell intro-layout">
          <div>
            <span className="eyebrow">Conheça a Viplan</span>
            <h2 className="section-heading">
              Mais do que vidro.
              <br />
              <span>Novas formas de viver os espaços.</span>
            </h2>
          </div>
          <div className="intro-aside">
            <p>
              Cada projeto pede uma solução. A Viplan trabalha com fabricação
              e comercialização de peças de vidro temperado para diferentes
              necessidades, aplicações e ambientes.
            </p>
            <a className="inline-link" href="/sobre">
              Saiba mais sobre a Viplan <span aria-hidden="true">↗</span>
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
              Conheça a Viplan, suas peças, processos e possibilidades em vidro temperado.
            </p>
          </div>

          <div className="area-grid">
            {siteAreas.map((area) => {
              const imageNames: Record<string, string> = {
                "01": "a-viplan.webp",
                "02": "fabricacao.webp",
                "03": "produtos.webp",
                "04": "projetos.webp",
              };

              return (
                <a className={`area-card area-card--${area.tone}`} href={area.href} key={area.number}>
                  <div
                    aria-label={`Fotografia: ${area.title}`}
                    className="area-card__image"
                    role="img"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(16,43,67,.02), rgba(16,43,67,.20)), url("${getSupabaseImageUrl(`home/explore/${imageNames[area.number]}`)}")`,
                    }}
                  />
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="partnerships-section section-space">
        <div className="site-shell partnerships-layout">
          <div className="partnerships-copy">
            <span className="eyebrow">Relacionamentos que constroem</span>
            <h2 className="section-heading">Parcerias<br /><span>que fortalecem.</span></h2>
            <p>
              Acreditamos que bons resultados começam com boas parcerias.
              Queremos estar ao lado de empresas, profissionais e clientes
              que valorizam qualidade, confiança e relações duradouras.
            </p>
            <a className="button-primary partnerships-cta" href="/contato">
              Seja nosso parceiro/cliente <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a className="partners-placeholder" href="/parceiros" aria-label="Conheça os parceiros da Viplan">
            <span className="partners-placeholder__mark">V</span>
            <strong>Nossos parceiros</strong>
            <span>Conheça as empresas que caminham com a Viplan</span>
            <span className="partners-placeholder__link">Conheça nossos parceiros <span aria-hidden="true">↗</span></span>
          </a>
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
