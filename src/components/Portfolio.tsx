import { content, site, type Lang } from "@/content";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Stack } from "./Stack";
import { Contact } from "./Contact";

export function Portfolio({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <>
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Stack lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted md:px-8">
          © {new Date().getFullYear()} {site.name}. {t.footer}
        </p>
      </footer>
    </>
  );
}
