import { User } from "@/models/user.model";
const userData = require("../adataFiles/users.json");


export const getUserId = (req: any) => {
  const { userId } = req;
  if (userData) {
    if (userId) {
      const user = userData.users.find((value: User) => value.userId == userId)
      if (user) {
        return user
      } else {
        return null
      }
    }
  }
  return null
}