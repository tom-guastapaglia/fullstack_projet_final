import axios from "axios";
import {
    endPointServiceUserCheckRole,
    endPointServiceUserInfo,
    endPointServiceUsersInfo,
    endPointServiceUserInscription,
    endPointServiceUserLogin,
} from "./types";

export const connection = (username: string, password: string) => {
    return new Promise((resolve) => {
        axios
            .post(
                endPointServiceUserLogin,
                { username, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });
};

export const inscription = (email: string, fisrtName: string, lastName: string, phone: string, country: string) => {
    return new Promise((resolve) => {
        axios
            .post(
                endPointServiceUserInscription,
                {email, fisrtName, lastName, phone, country},
            )
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    })
}

export const checkUserInfo = (token: string) => {
    return new Promise((resolve) => {
        axios
            .get(endPointServiceUserInfo, {
                headers: {
                    Authorization: token,
                },
            })
            .then((response) => resolve(response.data));
    });
};

export const checkRole = (role: string, token: string) => {
    return new Promise((resolve) => {
        axios
            .post(
                endPointServiceUserCheckRole,
                { role },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            )
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });
};