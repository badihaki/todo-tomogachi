import Link from 'next/link';
import ITodoList from '@/lib/interfaces/todo/ITodoList'
import React from 'react'

function TodoListLink(props: {
    todoList: ITodoList
}) {
    const { todoList } = props;
    return (
        <Link id={todoList.id.toString()} href={`/todo/list/${todoList.id}`}>
            {todoList.title}
        </Link>
    )
}

export default TodoListLink
