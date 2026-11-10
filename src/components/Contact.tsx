import { ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react/ssr";
import { content, site, type Lang } from "@/content";
import { Reveal } from "./Reveal";

export function Contact({ lang }: { lang: Lang }) {
  const t = content[lang].contact;
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tighter md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-[48ch] leading-relaxed text-muted">{t.text}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block break-words text-2xl font-medium tracking-tighter underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-accent sm:text-4xl md:text-6xl"
          >
            {site.email}
          </a>
          <div className="mt-10">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-ui border border-line px-5 py-3 text-sm font-medium transition-[transform,border-color] hover:border-fg active:scale-[0.98]"
            >
              <LinkedinLogo size={18} aria-hidden />
              {t.linkedin}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
