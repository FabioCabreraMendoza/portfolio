import { content, site, type Lang } from "@/content";

export function Nav({ lang }: { lang: Lang }) {
  const t = content[lang];
  const home = lang === "es" ? "/" : "/en/";
  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8"
      >
        <a href={home} className="whitespace-nowrap text-base font-medium tracking-tight">
          {site.shortName}
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={t.switchLang.href}
          hrefLang={t.switchLang.hrefLang}
          lang={t.switchLang.hrefLang}
          className="rounded-ui border border-line px-3 py-1.5 font-mono text-xs tracking-wider transition-colors hover:border-fg"
        >
          {t.switchLang.label}
        </a>
      </nav>
    </header>
  );
}
