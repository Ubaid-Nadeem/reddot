
import Navbar from "./component/navbar/navbar";
import HeroComponet from "./component/heroPage/page";
import Section from "./component/section2/page";
import { Outfit } from "@next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={outfit.className}>
      <Navbar />
      <HeroComponet />
      <Section />
    </main>
  );
}
