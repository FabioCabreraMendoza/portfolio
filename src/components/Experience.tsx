import { content, type Lang } from "@/content";
import { Reveal } from "./Reveal";

type Entry = (typeof content)["es"]["experience"]["jobs"][number];

function Group({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{title}</h3>
      <ol className="mt-4">
        {entries.map((e) => (
          <li
            key={`${e.title}-${e.period}`}
            className="grid gap-2 border-t border-line py-7 sm:grid-cols-4 sm:gap-6"
          >
            <p className="font-mono text-xs text-muted sm:pt-1.5">{e.period}</p>
            <div className="flex flex-col gap-4 sm:col-span-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              {e.logo && (
                <img
                  src={e.logo.src}
                  alt={e.logo.alt}
                  width={e.logo.width}
                  height={e.logo.height}
                  loading="lazy"
                  className="order-first h-12 w-auto max-w-28 shrink-0 self-start rounded-ui border border-line bg-white object-contain sm:order-last"
                />
              )}
              <div>
                <p className="text-lg font-medium tracking-tight">{e.title}</p>
                {e.org && <p className="text-muted">{e.org}</p>}
                {e.points.length > 0 && (
                  <ul className="mt-3 max-w-[56ch] list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-line">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Experience({ lang }: { lang: Lang }) {
  const t = content[lang].experience;
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-32">
        <Reveal className="md:col-span-4">
          <h2 className="text-3xl font-medium tracking-tighter md:sticky md:top-28 md:text-5xl">
            {t.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="space-y-14 md:col-span-8">
          <Group title={t.work} entries={t.jobs} />
          <Group title={t.education} entries={t.studies} />
        </Reveal>
      </div>
    </section>
  );
}
