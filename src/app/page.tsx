import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { ForgeModel } from "@/components/home/ForgeModel";
import { CapabilitiesSummary } from "@/components/home/CapabilitiesSummary";
import { Outcomes } from "@/components/home/Outcomes";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <ForgeModel />
      <CapabilitiesSummary />
      <Outcomes />
      <FinalCta />
    </main>
  );
}
