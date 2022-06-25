export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  permission: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> develop
  constructor(
    username: string,
    email: string,
    password: string,
    permission: string
  ) {
    this.id = String(Math.round(Math.random() * 100));
    this.username = username;
<<<<<<< HEAD
    this.email = email;
=======
    this.email = email;
=======
  constructor( username: string ,email: string,  password: string, permission: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.username = username;
<<<<<<< HEAD
>>>>>>> develop
=======
    this.email = email;
>>>>>>> atividade11
>>>>>>> develop
    this.password = password;
    this.permission = permission;
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> develop
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
<<<<<<< HEAD
=======
=======

>>>>>>> develop
>>>>>>> develop
}
