"use client";

import { useLanguage, t } from "@/lib/language";
import type { CVSection } from "@/lib/content";

interface CVData {
  meta: { title: string; [key: string]: unknown };
  sections: CVSection[];
}

export function CVClient({
  cvEn,
  cvIt,
}: {
  cvEn: CVData | null;
  cvIt: CVData | null;
}) {
  const { lang } = useLanguage();
  const s = t[lang];
  const cv = lang === "it" && cvIt ? cvIt : cvEn;

  if (!cv || cv.sections.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-mono font-bold">{s.cv}</h1>
        <p className="mt-4 text-muted-foreground">
          CV content is not available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-12">
        <h1 className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
          {s.cv}
        </h1>
        <p className="mt-2 text-muted-foreground">
          ML Engineer · Data Scientist · Algorithm Engineer
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {lang === "it" ? "Milano, Italia" : "Milan, Italy"} ·{" "}
          <a
            href="https://linkedin.com/in/crescenzodepalma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </header>

      <div className="space-y-12">
        {cv.sections.map((sec) => (
          <section key={sec.title} className="scroll-mt-20">
            <h2 className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-foreground border-b-2 border-border pb-2 mb-5">
              {sec.title}
            </h2>
            <div
              className="prose prose-zinc dark:prose-invert max-w-none
                prose-headings:font-mono
                prose-h3:mt-2 prose-h3:mb-0 prose-h3:text-lg prose-h3:font-bold prose-h3:text-foreground
                prose-hr:my-8 prose-hr:border-border
                prose-p:my-1.5 prose-p:leading-relaxed prose-p:text-foreground
                prose-li:my-1 prose-li:leading-relaxed
                prose-strong:text-foreground prose-strong:font-bold
                prose-em:text-muted-foreground
                prose-a:text-primary prose-a:no-underline"
              dangerouslySetInnerHTML={{ __html: sec.body }}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
