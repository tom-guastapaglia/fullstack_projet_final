import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import { InputTextComponent, ButtonComponent } from "my-lib-ui";
import HeaderComponent from "../components/HeaderComponent";


const Login: NextPage = () => {
  const router = useRouter();
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
          <InputTextComponent label="Identifiant" placeholder="identifiant" />
          <InputTextComponent label="Mot de passe" placeholder="mot de passe" type="password" />
          <ButtonComponent label="Connexion" />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
