import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.es.htmlTitle,
  description: content.es.htmlDescription,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="es">{children}</Shell>;
}
