import Navbar from "./component/navbar/navbar";
import HeroComponet from "./component/heroPage/page";
import Section from "./component/section2/page";
import { Outfit } from "@next/font/google";
import TshirtCollection from "./component/tshirt-collection/page";
import TrouserCollection from "./component/trousers-collection/page";
import FullSleeveTshirt from "./component/full-sleeve-t-shirts/page";
import HomeDisplay1 from "./component/home-display1/page";
import HomeFooter2 from "./component/home-footer-1/page";

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
      <TshirtCollection />
      <TrouserCollection />
      <FullSleeveTshirt />
      <HomeDisplay1/>
      <HomeFooter2/>
     
    </main>
  );
}
