import { content, type Lang } from "@/content";
import { Reveal } from "./Reveal";

export function Stack({ lang }: { lang: Lang }) {
  const t = content[lang].stack;
  return (
    <section id="stack" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tighter md:text-5xl">{t.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          {t.groups.map((g, i) => (
            <Reveal
              key={g.name}
              delay={i * 0.08}
              className={i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-4" : "md:col-span-3"}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{g.name}</h3>
              <ul className="mt-5 space-y-2 text-2xl font-medium tracking-tight md:text-3xl">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
