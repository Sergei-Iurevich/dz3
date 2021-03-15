export function createObj() {
  const user = {
    name: "John",
  };
  user.age = Number(prompt("Enter a number"));
  return user;
}

export function copyObj() {
  const user = {
    name: "John",
    age: 39,
  };
  return { ...user, role: "admin" };
}

export function destrObj() {
  const user = {
    name: "John",
  };
  user.age = Number(prompt("Enter a number"));
  const admin = { ...user, role: "admin" };
  const { name, age, role } = admin;
  return [name, age, role];
}
