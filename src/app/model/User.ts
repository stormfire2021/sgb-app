export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  permission: string;

<<<<<<< HEAD
  constructor(
    username: string,
    email: string,
    password: string,
    permission: string
  ) {
    this.id = String(Math.round(Math.random() * 100));
    this.username = username;
    this.email = email;
=======
  constructor( username: string ,email: string,  password: string, permission: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.email = email;
    this.username = username;
>>>>>>> develop
    this.password = password;
    this.permission = permission;
  }

<<<<<<< HEAD
  public static clone(user: User) {
    let u: User = new User(
      user.username,
      user.email,
      user.password,
      user.permission
    );
    u.username = user.username;
    u.email = user.email;
    u.password = user.password;
    u.permission = user.permission;
    return u;
  }
=======

>>>>>>> develop
}
