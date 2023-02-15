import users from "./UsersStorage";

export const validation = (username, password) => {
  let arr = [];
  arr.push(username);
  arr.push(password);
  for (let i = 0; i <= users.length; i++) {
    if (arr.toString() == users[i]) return true;
  }
};
