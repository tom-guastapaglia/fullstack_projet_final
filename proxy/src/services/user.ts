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
} from "../types";
import { checkRole, checkUserInfo, connection } from "../userFunctions";

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
