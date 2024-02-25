type CustomString = string | string[] | undefined;

interface WhoAmIResponse {
  ip: CustomString;
  ipv4: CustomString;
  lang: CustomString;
  useragent: CustomString;
}

interface UserHeaders extends WhoAmIResponse {}

export {
  CustomString,
  WhoAmIResponse,
  UserHeaders
}