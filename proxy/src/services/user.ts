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
  urlApiFutureUser,
  urlApiUserInscription,
  urlApiUserInscriptionValide,
  urlApiUsersInfo
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

  // app.post(urlApiUserInscriptionValide, (req, res) => {
  //   const id = req.params.id;
  //   //const futurUser = entityManager.find(FutureUser, id);
  //
  //   if (!req.user.isAdmin()) {
  //     res.status(403).send({ message: 'Vous n\'avez pas les droits nécessaires' });
  //     return;
  //   }
  //
  //   const user = new User({
  //     ...futureUser,
  //     password: 'mot-de-passe-par-defaut',
  //     role: 'ROLE_USER'
  //   });
  //
  //   entityManager.remove(futureUser);
  //   entityManager.persist(user);
  //   entityManager.flush();
  //
  //   res.status(200).send({ message: 'Inscription validée' });
  //
  // })
  //
  // app.post('/api/inscription/valide-user/:id', function(req, res) {
  //   const id = req.params.id;
  //   const futureUser = entityManager.find(FutureUser, id);
  //
  //
  // });
  //
  // app.get('/api/future-users', function(req, res) {
  //   const futureUsers = entityManager.getRepository(FutureUser).findAll();
  //   res.send(futureUsers);
  // });


  app.get(urlApiUsersInfo, (req, res) => {
    const body: { id: string; } = req.body;
    const token = req.header("Authorization");
    /* checkUsersInfo(token).then((data) => {
      res.send(data);
    }) */
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