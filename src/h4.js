export function task1() {
  const user = {
    name: "John",
  };
  user.age = +prompt("Enter a number");
  return user;
}

export function task2() {
  const user = {
    name: "John",
  };
  user.age = +prompt("Enter a number");
  const admin = { ...user, role: "admin" };
  return admin;
}

export function task3() {
  const user = {
    name: "John",
  };
  user.age = +prompt("Enter a number");
  const admin = { ...user, role: "admin" };
  const { name, age, role } = admin;
  return [name, age, role];
}
