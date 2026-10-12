import { About } from "@/components/home/about";
import { Features } from "@/components/home/features";
import { Follow } from "@/components/home/follow";
import { Hero } from "@/components/home/hero";
import { Honest } from "@/components/home/honest";
import { Journey } from "@/components/home/journey";
import { Offer } from "@/components/home/offer";
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
      <Offer />
      <Posts />
      <Follow />
    </>
  );
}
