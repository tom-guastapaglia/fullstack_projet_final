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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let data = new FormData(e.target);
        axios
            .post(
                "http://localhost:8000/api/.user/inscription",
                {
                    lastName: data.get("lastname"),
                    firstName: data.get("firstName"),
                    email: data.get("email"),
                    phone: data.get("phoneNumber"),
                    country: data.get("nationality"),
                }
            ).then((res) => {
            router.push("/");
            setMessage("Votre inscription a été effectuée avec succès");
        })
    };


    return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <main>
        <HeroComponent />
          <div className="message">{message}</div>
          <form action="" onSubmit={handleSubmit}>
          <InscriptionComponent />
          </form>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
