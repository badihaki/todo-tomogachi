import { atom } from "jotai";
import ITodoList from "../interfaces/todo/ITodoList";

const todosAtom = atom<ITodoList[] | null>(null);

export default todosAtom;