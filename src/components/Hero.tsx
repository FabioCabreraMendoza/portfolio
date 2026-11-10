import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/ssr";
import { content, site, type Lang } from "@/content";
import { Reveal } from "./Reveal";

export function Hero({ lang }: { lang: Lang }) {
  const t = content[lang].hero;
  return (
    <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-12 md:gap-8 md:px-8 md:pt-12">
      <div className="md:col-span-7">
        <Reveal>
          <h1 className="max-w-[20ch] text-4xl font-medium leading-[1.05] tracking-tighter sm:text-5xl xl:text-6xl">
            {t.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg">
            {t.text}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-ui bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform active:scale-[0.98]"
          >
            {t.primary}
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
              aria-hidden
            />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-ui border border-line px-5 py-3 text-sm font-medium transition-[transform,border-color] hover:border-fg active:scale-[0.98]"
          >
            {t.secondary}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="md:col-span-5">
        <img
          src={site.heroImage}
          alt={t.imageAlt}
          width={1024}
          height={1536}
          fetchPriority="high"
          className="aspect-[4/5] max-h-[68dvh] w-full rounded-ui border border-line object-cover object-top"
        />
      </Reveal>
    </section>
  );
}
