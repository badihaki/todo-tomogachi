import { atom } from "jotai";
import IUser from "../interfaces/IUser";

const userState = atom<IUser | null>(null);

export default userState;
