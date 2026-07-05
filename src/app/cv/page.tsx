import { getCVContent } from "@/lib/content";
import { CVClient } from "./cv-client";

export const metadata = {
  title: "Curriculum Vitae",
  description:
    "Curriculum Vitae of Crescenzo De Palma — ML Engineer, Data Scientist, Algorithm Engineer.",
};

export default async function CVPage() {
  const cvEn = await getCVContent("en");
  const cvIt = await getCVContent("it");

  return <CVClient cvEn={cvEn} cvIt={cvIt} />;
}
