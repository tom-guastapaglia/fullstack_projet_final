import { RadioComponent, SelectComponent, ButtonComponent, InputTextComponent, CheckboxComponent } from "my-lib-ui";
import type { NextPage } from "next";
import {useRouter} from "next/router";
import { useEffect } from "react";

import axios from 'axios'
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import TabUserComponent from "../components/TabUserComponent";
import NavAdminComponent from "../components/NavAdminComponent";

const Admin: NextPage = () => {
    const router = useRouter();
    // const { user } = useAuth();
    //
    // useEffect(() => {
    //     if (!user) {
    //         router.push("/login");
    //     }
    // });

    return (
        <div>
            <HeadComponent />
            <HeaderComponent />
            <main>
                <NavAdminComponent label={'user'} />
                <table>
                    <TabUserComponent />
                    <tr>
                        
                    </tr>
                </table>
            </main>
            <FooterComponent />
        </div>
    );
};

export default Admin;