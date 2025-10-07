import { CTA } from "@/components/CTA";
import { Demo } from "@/components/Demo";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { SocialProof } from "@/components/SocialProof";
import Image from "next/image";

export default function Home() {
  return (
       <div className="size-full overflow-x-hidden bg-white">
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <Demo />
      <CTA />
    </div>
  );
}
