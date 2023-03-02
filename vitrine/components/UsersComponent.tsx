import axios from "axios";
import React, {useEffect, useState} from "react";
import {ButtonComponent} from "my-lib-ui";


type UserProps = {
    id: number;
    email: string;
    nom: string;
    prenom: string;
    tel: string;
    nationalite: string;
    inscriptionValidee: boolean;
};

const UsersComponent: React.FC = (prop) => {
    const [futureUsers, setFutureUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        fetchFutureUsers();
    }, []);


    const fetchFutureUsers = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        axios.get("http://localhost:8000/api/.user/futureUsers",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                    setFutureUsers(response.data);
                }
            );
    }

    const validate = (id: number) => {
        const token = localStorage.getItem("token");
        if (!token) return;
        axios.post(`http://localhost:8000/api/.user/inscription/valideUser` + `/${id}`
            , {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(() => {
                console.log("ok");
                fetchFutureUsers();
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <table className={"table-user"}>
            <thead>
            <tr>
                <th>Statut</th>
                <th>Nom / Prénom</th>
                <th>Coordonnées</th>
                <th>Nationalité</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {futureUsers.map(
                (index) => (
                    <tr key={index.id} className={"user-line"}>
                        <th className={"user-status"}>{index.inscriptionValidee ? '✅ Validé' : '⚠️ En attente'}</th>
                        <th>
                            {index.nom}
                            <br/>
                            {index.prenom}
                        </th>
                        <th>
                            {index.email}
                            <br/>
                            {index.tel}
                        </th>
                        <th>{index.nationalite}</th>
                        <th className={"user-status"}>{index.inscriptionValidee ? 'Aucune action' :
                            <ButtonComponent label="Valider" onClick={() => validate(index.id)}/>}</th>
                    </tr>

                ))}
            </tbody>
        </table>
    );
};

export default UsersComponent;