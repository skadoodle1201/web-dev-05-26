interface User {
  id: number;
  email: string;
  passwordHash: string;
}

type PublicUser = Omit<User, "passwordHash">;

function createUser(user: User): User {
  return user;
}

// createUser({
//   id: 1,
//   email: "explape.come",
// });

function toPublic(user: User): PublicUser {
  const { passwordHash, ...safe } = user;
  return safe;
}
