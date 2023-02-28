import axios from "axios";
import React from "react";

const datas = [
    {
        'Statut' : 'En attente',
        'Nom' : 'FERRALI',
        'Prenom' : 'Mario',
        'Mail' : 'marioferrali@orange.fr',
        'Tel' : '0123456789',
        'Nationalite' : 'Français',
        'Actions' : 'Verifier'
    },
    {
        'Statut' : 'Validé',
        'Nom' : 'Dubois',
        'Prenom' : 'Marie',
        'Mail' : 'marie.dubois@gmail.com',
        'Tel' : '0612345678',
        'Nationalite' : 'Française',
        'Actions' : 'Editer'
    },
    {
        'Statut' : 'En attente',
        'Nom' : 'Smith',
        'Prenom' : 'John',
        'Mail' : 'john.smith@yahoo.com',
        'Tel' : '0777777777',
        'Nationalite' : 'Américaine',
        'Actions' : 'Verifier'
    },
    {
        'Statut' : 'Validé',
        'Nom' : 'Garcia',
        'Prenom' : 'Juan',
        'Mail' : 'juangarcia@gmail.com',
        'Tel' : '0498765432',
        'Nationalite' : 'Espagnole',
        'Actions' : 'Editer'
    },
    {
        'Statut' : 'En attente',
        'Nom' : 'Lefèvre',
        'Prenom' : 'Sophie',
        'Mail' : 'sophie.lefevre@hotmail.com',
        'Tel' : '0321654987',
        'Nationalite' : 'Française',
        'Actions' : 'Verifier'
    }
]
const UsersComponent = () => {
    const [futureUsers, setFutureUsers] = React.useState([]);

    // axios.get('http://localhost:8000/api/future-users', {
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //     }
    // })
    // .then((res) => {
    //     setFutureUsers(res.data);
    // });
    //
    // console.log(futureUsers);

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
                {datas.map((data, index) => (
                    <tr className={"user-line"}>
                        <th className={"user-status"}>{data.Statut === 'Validé' ? '✅ Validé' : '⚠️ En attente'}</th>
                        <th>
                            {data.Nom}
                            <br/>
                            {data.Prenom}
                        </th>
                        <th>
                            {data.Mail}
                            <br/>
                            {data.Tel}
                        </th>
                        <th>{data.Nationalite}</th>
                        <th>{data.Actions}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersComponent;