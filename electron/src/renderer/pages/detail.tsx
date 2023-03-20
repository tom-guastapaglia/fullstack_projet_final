import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import back from '../../../assets/back.png';
import useAuth from '../../hook/useAuth';

const Detail: React.FC = () => {
  const [detail, setDetail] = React.useState<any>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useAuth();
  const fetchDetail = () => {
    axios
      .get(`http://ride.francecentral.cloudapp.azure.com:8000/api/.car/car/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDetail(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    if (!token) return;
    fetchDetail();
  }, [token]);

  return (
    <div className="h-screen p-4">
      <header
        className="mb-4 flex flex-row cursor-pointer"
        onClick={() => navigate('/list')}
      >
        <img src={back} alt="back" />
        <span className="underline ml-3 text-sm">
          Retour à la liste des véhicules
        </span>
      </header>
      <main>
        <h1 className="font-[800] text-[36px] tracking-wide uppercase">
          {detail?.brand} {detail?.model}
        </h1>
        <p className="text-sm">
          {detail?.description ??
            'Aucune description disponible pour ce véhicule.'}
        </p>
        <img src={detail?.image} alt="detail" />
        <div className="border rounded mt-4">
          <table className="w-full table-auto font-[Abel]">
            <tr className="p-2">
              <td className="p-2">Modèle</td>
              <td className="p-2">{detail?.model}</td>
            </tr>
            <tr>
              <td className="p-2">Marque</td>
              <td className="p-2">{detail?.brand}</td>
            </tr>
            <tr>
              <td className="p-2">Prix</td>
              <td className="p-2">{detail?.price} €</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Detail;
