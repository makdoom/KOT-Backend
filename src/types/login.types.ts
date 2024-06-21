export type loginPayload = {
  username: string;
  userpassword: string;
  machinename: string;
};

export type loginReponsePayload = {
  sessionid: number | null;
  userid: number | null;
  locationid: number | null;
  clientid: number | null;
  roleid: number | null;
  message: string | null;
};
