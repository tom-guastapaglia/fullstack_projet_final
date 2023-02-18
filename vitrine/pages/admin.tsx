import type { NextPage } from "next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import axios from 'axios'
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import TabUserComponent from "../components/TabUserComponent";
import NavAdminComponent from "../components/NavAdminComponent";


const Admin: NextPage = () => {
    const router = useRouter();
    const [futureUsers, setFutureUsers] = useState([]);

    let token = null;
    if (typeof window !== "undefined") {
        token = localStorage.getItem('token');
    }

    const getAllFutureUsers = () => {
        axios.get("http://localhost:8000/api/.user/allFutureUsers",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ${token}'
                }
            }).then((response) => {
                const futureUsers = response.data;
                setFutureUsers(futureUsers);
        })
    }

    return (
        <div>
            <HeadComponent />
            <HeaderComponent />
            <main>
                <NavAdminComponent label={'user'} />
                <table>
                    <TabUserComponent />
                    <tr>
                        {
                            futureUsers.map((futureUser) => (
                                <th>{futureUser}</th>
                            ))
                        }
                    </tr>
                </table>
            </main>
            <FooterComponent />
        </div>
    );
};

export default Admin;