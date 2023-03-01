import React from "react";

const datas = [
    {
        'Marque' : 'BMW',
        'Modele' : 'X1',
        'Action' : 'Modifier'
    },
    {
        'Marque' : 'BMW',
        'Modele' : 'X2',
        'Action' : 'Modifier'
    },
    {
        'Marque' : 'BMW',
        'Modele' : 'X3',
        'Action' : 'Modifier'
    },
    {
        'Marque' : 'BMW',
        'Modele' : 'X4',
        'Action' : 'Modifier'
    },
    {
        'Marque' : 'BMW',
        'Modele' : 'X5',
        'Action' : 'Modifier'
    },
]

const CarsComponent = () => {
    return (
        <table className={"table-car"}>
            <thead>
                <tr>
                    <th>Marque</th>
                    <th>Modèle</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((data, index) => (
                    <tr className={"car-line"}>
                        <th >{data.Statut}</th>
                        <th>{data.Modele}</th>
                        <th>{data.Action}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CarsComponent;
