import axios from "axios";
import React from "react";




type Props = {
    data: {
        firstname: string;
        lastname: string;
        email: string;
        phoneNumber: string;
        nationality: string;
        inscriptionValidee: boolean;
    };
};

const UsersComponent: React.FC<Props> = (props) => {
    const [futureUsers, setFutureUsers] = React.useState([]);
    const {data} = props;

    console.log(data);

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
            {data.map(
                (index) => (
                    <tr key={index.id} className={"user-line"}>
                        <th className={"user-status"}>{data.inscriptionValidee ? '✅ Validé' : '⚠️ En attente'}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersComponent;