import { Authority } from "@/components/sections/Authority";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { OperationalRoi } from "@/components/sections/OperationalRoi";
import { Symptoms } from "@/components/sections/Symptoms";

export default function Home() {
  return (
    <>
      <Hero />
      <Symptoms />
      <Authority />
      <OperationalRoi />
      <Founder />
      <ClosingCta />
    </>
  );
}
