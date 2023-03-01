import type {NextPage} from "next";
import {useRouter} from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import {InputTextComponent, ButtonComponent} from "my-lib-ui";
import HeaderComponent from "../components/HeaderComponent";
import {useEffect, useState} from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';


const Login: NextPage = () => {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     useEffect(() => {
            if (localStorage.getItem("token")) {
                const decoded = jwt_decode(localStorage.getItem("token"));
                if (decoded.roles.includes("ROLE_ADMIN")) {
                    router.push("/admin");
                }
                else {
                    router.push("/");
                }
            }
     });
     

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const username = data.get("username");
        const password = data.get("password");
        axios.post("http://localhost:8000/api/.user/login", {username, password}).then((response) => {
            if (response.data.token) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                const decoded = jwt_decode(token);
                if (decoded.roles.includes("ROLE_ADMIN")) {
                    router.push("/admin");
                }
                else {
                    router.push("/");
                }
            }
        }).catch(() => {
            setError("Identifiant ou mot de passe incorrect");
            console.log("Identifiant ou mot de passe incorrect");
        });
    }

    const login = () => {
    }

    return (
        <div className="login-page">
            <HeadComponent/>
            <HeaderComponent/>
            <main>
                <a href="..">
          <span className="hero-text-delta">
            ←
          </span>
                    retour
                </a>
                <div className="container-login">
                    <h1>CONNEXION</h1>
                    <form onSubmit={handleSubmit} action="">
                        <InputTextComponent label="Identifiant" placeholder="identifiant"
                                            onChange={e => setEmail(e.target.value)}
                                            name="username"/>
                        <InputTextComponent label="Mot de passe" placeholder="mot de passe" type="password"
                                            onChange={e => setPassword(e.target.value)}
                                            name="password"/>
                        <ButtonComponent label="Se connecter" onClick={login} />
                    </form>
                </div>
            </main>
            <FooterComponent/>
        </div>
    );
};

export default Login;
