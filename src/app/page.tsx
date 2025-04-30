'use client'

import TodoContainer from "@/lib/components/TodoContainer/TodoContainer";
import TodoForm from "@/lib/components/TodoForm/TodoForm";

export default function Home() {
  const todoList:{
    id:number,
    name: string,
    description: string
  }[] = []

  function AddTodotoList(todo:{
    name: string,
    description: string
  }){
    const todoItem = {
      ...todo,
      id:0
    };
    todoItem.id = todoList.length;
    todoList.push(todoItem);
    console.log(todoList);
  }

  return (
    <div className="">
      <main className="">
        <TodoForm AddToList={AddTodotoList}/>
        <TodoContainer todoList={todoList} />
      </main>
    </div>
  );
}
