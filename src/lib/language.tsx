"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "it";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "it") setLangState("it");
    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  if (!ready) return null;

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export const t = {
  en: {
    blog: "Blog",
    projects: "Projects",
    cv: "Curriculum Vitae",
    tags: "Tags",
    language: "Language",
    back: "← Back",
    noPosts: "No posts yet.",
    noProjects: "No projects yet.",
    latestCommits: "latest commits:",
    viewProject: "View project →",
    madeWith: "made with pixels & gradients",
    projectsIntro:
      "A selection of algorithms and systems I've built — from real-time computer vision on embedded hardware to multi-modal ML.",
    allPosts: "← All posts",
  },
  it: {
    blog: "Blog",
    projects: "Progetti",
    cv: "Curriculum Vitae",
    tags: "Tag",
    language: "Lingua",
    back: "← Indietro",
    noPosts: "Nessun articolo.",
    noProjects: "Nessun progetto.",
    latestCommits: "ultimi commit:",
    viewProject: "Vedi progetto →",
    madeWith: "fatto con pixel e gradienti",
    projectsIntro:
      "Una selezione di algoritmi e sistemi che ho costruito — dalla computer vision real-time su hardware embedded al ML multi-modale.",
    allPosts: "← Tutti gli articoli",
  },
} as const;
