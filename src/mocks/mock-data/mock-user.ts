import { UserDetailsDoc, UserDoc } from "../../interfaces/models";

export const mockedUser: UserDoc = {
  id: "123",
  email: "jirik.fiala@post.cz",
  isAdmin: true,
};

export const mockUsers: UserDoc[] = [
  {
    id: "123",
    email: "jirik.fiala@post.cz",
    isAdmin: true,
  },
  {
    id: "1234",
    email: "test@test.com",
    isAdmin: false,
  },
];

export const mockUserDetails: UserDetailsDoc = {
  id: "999",
  addresses: [],
  email: "user@details.com",
  firstName: "John",
  lastName: "Ramob",
  isAdmin: false,
};
