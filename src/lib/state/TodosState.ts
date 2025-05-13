import { atom } from "jotai";
import ITodoList from "../interfaces/ITodoList";

const listsState = atom<ITodoList[] | null>(null);

export default listsState;