import type { NextPage } from "next";
import {useRouter} from "next/router";
import { useEffect } from "react";

import axios from 'axios'
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import TabUserComponent from "../components/TabUserComponent";
import AdminComponent from "../components/AdminComponent";

const Admin: NextPage = () => {
    const router = useRouter();

    return (
        <div className="admin-container">
            <HeadComponent />
            <HeaderComponent />
            <main className="admin-main">
                <AdminComponent />
            </main>
            <FooterComponent />
        </div>
    );     
};

export default Admin;