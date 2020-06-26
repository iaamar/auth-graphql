import { User } from './entity/User';
import { sign } from 'jsonwebtoken';

export const creatAccessToken = (user: User) => {
    return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: "10m" });
};
export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, process.env.REFRESS_TOKEN_SECRET!, { expiresIn: "7d" });
};
