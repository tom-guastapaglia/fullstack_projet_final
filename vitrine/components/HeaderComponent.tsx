import { InputTextComponent, ButtonComponent } from "my-lib-ui";
import {router} from "next/client";
import {useRouter} from "next/router";



const HeaderComponent: React.FC = () => {
    const router = useRouter();

    //redirect to login onclick
    const login = () => {
        router.push("/login");
    }

    return (
    <header>
      <img src="/logo.svg" alt="" />
      <ButtonComponent label="Connexion admin" onClick={login} />
    </header>
  );
};

export default HeaderComponent;
