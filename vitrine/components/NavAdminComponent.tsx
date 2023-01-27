import React from "react";

type Props = { label: string };

const NavAdminComponent: React.FC<Props> = (props) => {
    const { label } = props;
    if (label == 'user') {
        return (
            <div>
                <h2>GESTION BACK-OFFICE</h2>
                <div>
                    <span><a>Liste des utilisateurs inscrits</a></span>
                    <span><a>Liste des véhicules</a></span>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h2>GESTION BACK-OFFICE</h2>
                <div>
                    <span><a>Liste des utilisateurs inscrits</a></span>
                    <span><a>Liste des véhicules</a></span>
                </div>
            </div>
        );
    }
};

export default NavAdminComponent;