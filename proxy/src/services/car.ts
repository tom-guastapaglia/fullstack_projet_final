import { Express } from "express";
import axios from "axios";

const urlApi = "/api/.car";
const urlApiCarList = `${urlApi}/car`;
const urlApiCarDetail = `${urlApi}/car/:id`;
const urlApiCarCreate = `${urlApi}/car/create`;
const urlApiCarUpdate = `${urlApi}/car/update/:id`;
const urlApiCarDelete = `${urlApi}/car/delete/:id`;

const endPointCar = "http://car:5000";
const endPointCarList = `${endPointCar}/car`;
const endPointCarDetail = `${endPointCar}/car/:id`;
const endPointCarCreate = `${endPointCar}/car/create`;
const endPointCarUpdate = `${endPointCar}/car/update/:id`;
const endPointCarDelete = `${endPointCar}/car/delete/:id `;

const carApi = (app: Express) => {
    app.get(urlApiCarList, (req, res) => {
        axios
            .get(endPointCarList)
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.get(urlApiCarDetail, (req, res) => {
        const id = req.params.id;
        let endPoint = endPointCarDetail.replace(":id", id);
        axios
            .get(endPoint)
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });

    app.post(urlApiCarCreate, (req, res) => {
        const data = req.body;
        axios
            .post(endPointCarCreate, {data})
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });

    app.post(urlApiCarUpdate, (req, res) => {
        const data = req.body;
        const id = req.params.id;
        let endPoint = endPointCarUpdate.replace(":id", id);
        axios
            .post(endPoint, {data})
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });

    app.get(urlApiCarDelete, (req, res) => {
        const id = req.params.id;
        let endPoint = endPointCarDelete.replace(":id", id);
        axios
            .get(endPoint)
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });
};

export default { carApi };
