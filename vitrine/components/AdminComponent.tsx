import React from "react";
import {useRouter} from "next/router";

import UsersComponent from "./UsersComponent";
import CarsComponent from "./CarsComponent";

import { useEffect } from "react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useState } from "react";


const AdminComponent = () => {
    const router = useRouter();
    const [listActive, setActive] = React.useState("users");


    return (
        <div>
            <h1 className="admin-title">GESTION BACK-OFFICE</h1>
            <div className="admin-list">
                <span className={listActive === "users" ? "list-active" : "list-inactive" } onClick={() => setActive("users")}>Liste des utilisateurs inscrits</span>
                <span className={listActive === "cars" ? "list-active" : "list-inactive" } onClick={() => setActive("cars")}>Liste des véhicules</span>
            </div>
            {listActive === "users" ? <UsersComponent /> : <CarsComponent />}
        </div>
    );
};

export default AdminComponent;