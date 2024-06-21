export type StatusCode = 200 | 300 | 400 | 500;

export type RequestType = {
  username: string;
  password: string;
  machinename: string;
};

export type LoginType = {
  clientid: number;
  locationid: number;
  message: string;
  roleid: number;
  sessionid: number;
  userid: number;
};
