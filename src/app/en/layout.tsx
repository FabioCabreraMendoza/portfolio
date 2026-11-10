import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.en.htmlTitle,
  description: content.en.htmlDescription,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
