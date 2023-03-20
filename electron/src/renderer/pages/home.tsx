import React, { useEffect } from 'react';
import { ButtonComponent, InputComponent } from 'my-lib-ui';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import background from '../../../assets/bg.png';
import logo from '../../../assets/logo.png';

const Home: React.FC = () => {
  const [errors, setErrors] = React.useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/list');
    }
  }, [navigate]);
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    try {
      const response = await axios.post(
        'http://ride.francecentral.cloudapp.azure.com:8000/api/.user/login',
        {
          username,
          password,
        }
      );
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/list');
    } catch (e) {
      setErrors(e.response.data.message);
    }
  };

  return (
    <div className="h-screen">
      <header className="flex flex-row items-start h-1/3">
        <img
          src={background}
          className="z-0 absolute h-1/3 w-full object-cover object-left"
          alt="background"
        />
        <img src={logo} className="m-5 z-10" alt="logo"/>
      </header>
      <div className="p-6 mt-1/3">
        <h1 className="font-[800] text-[36px] tracking-wide">Connexion</h1>
        <span className="text-sm leading-1">
          Connectez-vous à l’aide de vos identifiants après validation par un administrateur.
        </span>
        <form className="flex flex-col gap-6 mt-6" onSubmit={handleLogin}>
          {errors && <span className="text-red text-sm">{errors}</span>}
          <InputComponent label="Identifiant" name="username"/>
          <InputComponent
            label="Mot de passe"
            name="password"
            type="password"
          />
          <ButtonComponent
            label="Connexion"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
