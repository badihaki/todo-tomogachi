import { atom } from "jotai";
import ITodoList from "../interfaces/todo/ITodoList";

const listsState = atom<ITodoList[] | null>(null);

export default listsState;