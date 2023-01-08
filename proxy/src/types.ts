/** Server URL */
export const urlApi = "/api";
export const urlApiUser = `${urlApi}/.user`;
export const urlApiUserLogin = `${urlApiUser}/login`;
export const urlApiUserInfo = `${urlApiUser}/user`;
export const urlApiUsersInfo = `${urlApiUser}/users`;
export const urlApiAdminInfo = `${urlApiUser}/admin`;
export const urlApiCheckRole = `${urlApiUser}/checkRole`;
export const urlApiUserInscription = `${urlApiUser}/inscription`;
export const urlApiUserInscriptionValide = `${urlApiUserInscription}/valideUser{id}`;

/** Service User */
export const urlServerServiceUser = "http://nginx/api";
export const endPointServiceUserHello = `${urlServerServiceUser}/hello`;
export const endPointServiceUserLogin = `${urlServerServiceUser}/login_check`;
export const endPointServiceUserInfo = `${urlServerServiceUser}/user`;
export const endPointServiceUsersInfo = `${urlServerServiceUser}/users`;
export const endPointServiceUserAdminInfo = `${urlServerServiceUser}/admin`;
export const endPointServiceUserCheckRole = `${endPointServiceUserInfo}/check_role`;
export const endPointServiceUserInscription = `${urlServerServiceUser}/inscription`;
export const endPointServiceUserInscriptionValide = `${endPointServiceUserInscription}/valide_user`;

export const urlsAcceptedWithoutConnection = [
  urlApi,
  urlApiUser,
  urlApiUserLogin,
  urlApiUserInscription,
];
