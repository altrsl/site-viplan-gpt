"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "A Viplan", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Projetos", href: "/projetos" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="site-shell flex min-h-[78px] items-center justify-between gap-6">
        <Link
          aria-label="Viplan — página inicial"
          className="brand-placeholder shrink-0"
          href="/"
        >
          <span className="brand-placeholder__symbol-wrap" aria-hidden="true">
            <img
              alt=""
              aria-hidden="true"
              className="brand-placeholder__symbol"
              src="/favicon.ico"
              width={38}
              height={38}
              style={{
                display: "block",
                width: "38px",
                height: "38px",
                minWidth: "38px",
                objectFit: "contain",
                objectPosition: "center",
                opacity: 1,
                visibility: "visible",
              }}
            />
          </span>
          <span className="brand-placeholder__name">Viplan</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

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

      {menuOpen && (
        <nav
          aria-label="Navegação móvel"
          className="mobile-navigation xl:hidden"
          id="mobile-navigation"
        >
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
