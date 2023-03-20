import React, { useState } from 'react';
import { ButtonComponent } from 'my-lib-ui';
import { useNavigate } from 'react-router-dom';
import menu from '../../../assets/menu.png';
import close from '../../../assets/close-menu.png';

function Menu() {
  const [isMenuOpen, toggleMenu] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <div
        onClick={() => toggleMenu(!isMenuOpen)}
        className="cursor-pointer custom-shadow bg-white rounded-full w-[65px] h-[65px] flex items-center justify-center"
      >
        <img src={menu} className="m-5 z-10" alt="menu"/>
      </div>
      <div
        className="bg-black bg-opacity-80 fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-end p-5 gap-4"
        style={{display: isMenuOpen ? 'flex' : 'none'}}
      >
        <img
          src={close}
          className="z-10 cursor-pointer absolute top-0 left-0 m-5"
          alt="menu"
          onClick={() => toggleMenu(!isMenuOpen)}
        />
        <ButtonComponent className="w-full menu-variant" label="Mentions légales"/>
        <ButtonComponent className="w-full" label="Se déconnecter" onClick={logout}/>
      </div>
    </>
  );
}

export default Menu;
