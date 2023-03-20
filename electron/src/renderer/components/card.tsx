import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface CardProps {
  id: number;
  className?: string;
  name: string;
  price: number;
  image: string;
}

const Card: React.FC<CardProps> = ({id, className, name, price, image}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detail/${id}`)}
      className={clsx(
        'flex flex-col items-center justify-center rounded-lg bg-white custom-shadow-card w-full cursor-pointer',
        className
      )}
    >
      <img src={image} alt="image" className="h-32 w-full object-cover rounded-t-lg"/>
      <div className="flex flex-row items-start justify-between w-full p-4 ">
        <h1 className="text-lg uppercase font-bold w-1/2">{name}</h1>
        <span className="font-[Abel]">à partir de
          <span className="font-bold text-red"> {price} €</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
