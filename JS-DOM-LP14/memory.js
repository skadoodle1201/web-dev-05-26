const users = [];
//This will cause memory as user is being pushed to array and never removed
//this will fill up the memory as node js Garbage collector will not remove
//it reason it is still referenced in the users[]
//To prevent add a remove function after some limit has reached.

function addUser(name, age) {
  users.push({
    user: name,
    age: age,
  });
}

addUser("A", 10);
addUser("B", 10);
addUser("C", 10);
addUser("D", 10);
addUser("E", 10);
addUser("F", 10);
addUser("G", 10);
addUser("H", 10);
