import React, { useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/menu';
import Card from '../components/card';
import useAuth from '../../hook/useAuth';

const List: React.FC = () => {
  const [cars, setCars] = React.useState<any>([]);
  const { token } = useAuth();
  const fetchCars = () => {
    axios
      .get('http://ride.francecentral.cloudapp.azure.com:8000/api/.car/car', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setCars(response.data);
      });
  };
  useEffect(() => {
    if (!token) return;
    fetchCars();
  }, [token]);

  return (
    <div className="h-screen p-4">
      <header className="mb-4">
        <Menu/>
      </header>
      <h1 className="font-[800] text-[36px] tracking-wide">Nos véhicules</h1>
      <p className="text-sm leading-1">
        Choisissez un véhicule pour consulter les détails du modèle et les
        tarifs.
      </p>
      <div className="flex flex-row flex-wrap gap-4 mt-6">
        {cars.map((car: any) => (
          <Card
            key={car.id}
            id={car.id}
            name={`${car.brand} ${car.model}`}
            image={car.image}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
};
export default List;
