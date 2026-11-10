import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/ssr";
import { content, site, type Lang } from "@/content";
import { Reveal } from "./Reveal";

type Item = (typeof content)["es"]["projects"]["items"][number];

function Meta({ p, className = "" }: { p: Item; className?: string }) {
  return (
    <div className={className}>
      <p className="font-mono text-xs text-muted">{p.role}</p>
      <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-fg">
        {p.tags.map((tag, i) => (
          <span key={`${tag}-${i}`}>{tag}</span>
        ))}
      </p>
      {p.links && p.links.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {p.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
              >
                {l.label}
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      )}
      {p.note && <p className="mt-3 max-w-[40ch] text-sm text-muted">{p.note}</p>}
    </div>
  );
}

export function Projects({ lang }: { lang: Lang }) {
  const t = content[lang].projects;
  const [featured, ...rest] = t.items;

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-medium tracking-tighter md:text-5xl">{t.title}</h2>
      </Reveal>

      {/* Proyecto principal: imagen ancha + texto */}
      <Reveal className="mt-12 grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
        <img
          src={featured.image}
          alt={featured.imageAlt}
          width={1858}
          height={1069}
          className="aspect-[16/10] w-full rounded-ui border border-line object-cover object-top md:col-span-8"
        />
        <div className="md:col-span-4">
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{featured.name}</h3>
          <p className="mt-3 max-w-[40ch] leading-relaxed text-muted">{featured.description}</p>
          <Meta p={featured} className="mt-6" />
        </div>
      </Reveal>

      {/* Capturas del proyecto principal */}
      {featured.gallery && featured.gallery.length > 0 && (
        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {featured.gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 2) * 0.08} className={g.wide ? "md:col-span-2" : ""}>
              <img
                src={g.src}
                alt={g.alt}
                width={1858}
                height={g.wide ? 505 : 1060}
                loading="lazy"
                className={`w-full rounded-ui border border-line object-cover object-top ${
                  g.wide ? "" : "aspect-[16/10]"
                }`}
              />
              <p className="mt-3 max-w-[60ch] text-sm text-muted">{g.caption}</p>
            </Reveal>
          ))}
        </div>
      )}

      {/* Más proyectos (opcional): rejilla de dos columnas con alturas desfasadas */}
      {rest.length > 0 && (
        <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <img
                src={p.image}
                alt={p.imageAlt}
                width={960}
                height={720}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-ui object-cover"
              />
              <h3 className="mt-6 text-xl font-medium tracking-tight md:text-2xl">{p.name}</h3>
              <p className="mt-2 max-w-[46ch] leading-relaxed text-muted">{p.description}</p>
              <Meta p={p} className="mt-5" />
            </Reveal>
          ))}
        </div>
      )}

      <Reveal className="mt-14">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-ui border border-line px-5 py-3 text-sm font-medium transition-[transform,border-color] hover:border-fg active:scale-[0.98]"
        >
          <GithubLogo size={18} aria-hidden />
          {t.moreLabel}
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>
      </Reveal>
    </section>
  );
}
