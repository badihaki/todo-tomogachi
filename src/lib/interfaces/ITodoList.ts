import ITodoItem from "./ITodoItem";

export default interface ITodoList{
    id:number,
    title:string,
    listItems:ITodoItem[]
}