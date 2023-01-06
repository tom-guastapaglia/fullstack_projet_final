import { Express } from "express";
import axios from "axios";

import {
  endPointServiceUserAdminInfo,
  endPointServiceUserHello,
  urlApiAdminInfo,
  urlApiCheckRole,
  urlApiUser,
  urlApiUserInfo,
  urlApiUserLogin,
  urlApiUserInscription,
} from "../types";
import { checkRole, checkUserInfo, connection, inscription } from "../userFunctions";

const initUrls = (app: Express) => {
  app.get(urlApiUser, (_, res) => {
    axios.get(endPointServiceUserHello).then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
  });

  app.post(urlApiUserLogin, (req, res) => {
    const body: { username: string; password: string } = req.body;
    connection(body.username, body.password).then((data) => {
      res.send(data);
    });
  });

  app.post(urlApiUserInscription, (req, res) => {
    const body: { email: string; fisrtName: string; lastName: string; phone: string; country: string; } = req.body;
    inscription(body.email, body.fisrtName, body.lastName, body.phone, body.country).then((data) => {
      res.send(data);
    })
  })

  app.get(urlApiUserInfo, (req, res) => {
    const token = req.header("Authorization");
    checkUserInfo(token).then((onfulfilled) => res.send(onfulfilled));
  });

  app.get(urlApiAdminInfo, (req, res) => {
    axios
      .get(endPointServiceUserAdminInfo, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((onfulfilled) => res.send(onfulfilled.data));
  });

  app.post(urlApiCheckRole, (req, res) => {
    const body: { role: string } = req.body;
    const token = req.header("Authorization");
    checkRole(body.role, token).then((onfulfilled) => {
      res.send(onfulfilled);
    });
  });
};

export default { initUrls };
