type User = {
  name: String;
  phoneNumber: String;
};
let db: User[] = [
  {
    name: "jack",
    phoneNumber: "01099999999",
  },
];
export class UserController {
  constructor() {}
  create(user: User) {
    db.push(user);
    return db;
  }
}
