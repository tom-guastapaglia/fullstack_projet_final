import { RadioComponent, SelectComponent, ButtonComponent, InputTextComponent, CheckboxComponent } from "my-lib-ui";
import type { NextPage } from "next";
import axios from "axios";
import React, { useState } from "react";
import {useRouter} from "next/router";


import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import InscriptionComponent from "../components/InscriptionComponent";

const Home: NextPage = () => {
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(true);
    const router = useRouter();

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
