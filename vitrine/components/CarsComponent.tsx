import React, {useEffect, useState} from "react";
import axios from "axios";
import {ButtonComponent, InputTextComponent} from "my-lib-ui";


type CarProps = {
    id: number;
    brand: string;
    model: string;
    price: number;
    image: string;
}

const CarsComponent = () => {
    const [cars, setCars] = useState<CarProps[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        fetchCars();
    }, []);

    const fetchCars = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        axios.get("http://localhost:8000/api/.car/car",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                setCars(response.data);
            }
        );
    }

    const deleteCar = (id: number) => {
        const token = localStorage.getItem("token");
        if (!token) return;
        axios.get(`http://localhost:8000/api/.car/car/delete` + `/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(() => {
                console.log("deleted");
                fetchCars();
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const [brand, setBrand] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [price, setPrice] = useState<number>(0);


    const addCar = () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        axios.post(`http://localhost:8000/api/.car/car/create`, {
                brand: brand,
                model: model,
                price: price,
                image: "",
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(() => {
                console.log("created");
                fetchCars();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    return (
        <div>
            <table className={"table-car"}>
                <thead>
                <tr>
                    <th>Marque</th>
                    <th>Modèle</th>
                    <th>Prix</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {cars.map((data, index) => (
                    <tr key={data.id} className={"car-line"}>
                        <th>{data.brand}</th>
                        <th>{data.model}</th>
                        <th>{data.price}</th>
                        <th><ButtonComponent label="Supprimer" onClick={() => deleteCar(data.id)}/></th>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <InputTextComponent label="Marque" name="marque" onChange={e => setBrand(e.target.value)}/>
                <InputTextComponent label="Modèle" name="model" onChange={e => setModel(e.target.value)}/>
                <InputTextComponent label="Prix" name="price" type="number"
                                    onChange={e => setPrice(e.target.valueAsNumber)}/>
                <ButtonComponent label="Ajouter" onClick={() => addCar()}/>
            </div>
        </div>
    );
};

export default CarsComponent;
