import { RadioComponent, SelectComponent, ButtonComponent, InputTextComponent, CheckboxComponent } from "my-lib-ui";
import type { NextPage } from "next";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import InscriptionComponent from "../components/InscriptionComponent";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <main>
        <HeroComponent />
        <InscriptionComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
