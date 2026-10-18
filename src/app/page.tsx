import { About } from "@/components/home/about";
import { Faq } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Honest } from "@/components/home/honest";
import { Journey } from "@/components/home/journey";
import { Posts } from "@/components/home/posts";

export const ensureStatic = "navigation";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Journey />
      <Honest />
      <Faq />
      <Posts />
    </>
  );
}
