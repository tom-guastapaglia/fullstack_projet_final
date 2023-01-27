import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import { InputTextComponent, ButtonComponent } from "my-lib-ui";
import HeaderComponent from "../components/HeaderComponent";
import {useState} from "react";



const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const connection = () => {
      fetch("/login", {
          body: JSON.stringify({email, password})
      }).then(response => response.json()).then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
          router.push("/admin");
      })
  }

  return (
    <div className="login-page">
      <HeadComponent />
      <HeaderComponent />
      <main>
        <a href="..">
          <span className="hero-text-delta">
            ←
          </span>
          retour
        </a>
        <div className="container-login">
          <h1>CONNEXION</h1>
          <InputTextComponent label="Identifiant" placeholder="identifiant" onChange={e => setEmail(e.target.value)} />
          <InputTextComponent label="Mot de passe" placeholder="mot de passe" type="password" onChange={e => setPassword(e.target.value)} />
          <ButtonComponent label="Connexion" onClick={connection} />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
