import { atom } from "jotai";
import IUser from "../interfaces/IUser";

const userAtom = atom<IUser | null>(null);

export default userAtom;
