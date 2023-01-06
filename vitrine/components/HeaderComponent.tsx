import { InputTextComponent, ButtonComponent } from "my-lib-ui";



const HeaderComponent: React.FC = () => {
  return (
    <header>
      <img src="/logo.svg" alt="" />
      <ButtonComponent label="Connexion admin" />
    </header>
  );
};

export default HeaderComponent;
