"use client";

import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="site-shell flex min-h-[78px] items-center justify-between gap-6">
        <a
          aria-label="VIplan — página inicial"
          className="brand-placeholder shrink-0"
          href="/"
        >
          <span className="brand-placeholder__name">VIplan</span>
          <span className="brand-placeholder__dot" aria-hidden="true" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <a
              className="nav-link"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="header-cta hidden sm:inline-flex" href="/contato">
            Fale com a VIplan <span aria-hidden="true">↗</span>
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="menu-toggle xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navegação móvel"
          className="mobile-navigation xl:hidden"
          id="mobile-navigation"
        >
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a className="mobile-navigation__cta" href="/contato" onClick={() => setMenuOpen(false)}>
            Fale com a VIplan
          </a>
        </nav>
      )}
    </header>
  );
}
