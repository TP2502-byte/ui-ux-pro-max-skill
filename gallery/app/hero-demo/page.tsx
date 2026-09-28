import type { Metadata } from "next";
import MinimalistHeroDemo from "@/components/minimalist-hero-demo";

export const metadata: Metadata = {
  title: "Minimalist Hero — UI/UX Pro Max",
};

export default function HeroDemoPage() {
  return <MinimalistHeroDemo />;
}
