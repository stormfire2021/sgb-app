export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  permission: string;

  constructor( username: string ,email: string,  password: string, permission: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.username = username;
    this.email = email;
    this.password = password;
    this.permission = permission;
  }


}
