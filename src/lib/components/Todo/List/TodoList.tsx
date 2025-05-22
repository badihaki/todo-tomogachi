import ITodoList from '@/lib/interfaces/todo/ITodoList'
import React from 'react'

function TodoList(props: {
    todoList: ITodoList
}) {
    const { todoList } = props;
    return (
        <div>
            {todoList.title}
        </div>
    )
}

export default TodoList
