import TodoContainer from "@/lib/components/TodoComponent/TodoContainer/TodoContainer";
import TodoForm from "@/lib/components/TodoComponent/TodoForm/TodoForm";


function TodoComponent() {
    
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
    <section id='todo-section'>
      <TodoForm AddToList={AddTodotoList}/>
      <TodoContainer todoList={todoList} />
    </section>
  )
}

export default TodoComponent
