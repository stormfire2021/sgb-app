export class User {
  id: string;
  email: string;
  user: string;
  password: string;
  permission: string;

  constructor( email: string, user: string, password: string, permission: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.email = email;
    this.user = user;
    this.password = password;
    this.permission = permission;
  }
}
