import Link from 'next/link';
import ITodoList from '@/lib/interfaces/todo/ITodoList'
import React from 'react'

function TodoListLink(props: {
    todoList: ITodoList
}) {
    const { todoList } = props;
    const elementId: string = todoList.id.toString();
    const todoItems = () => {
        if (todoList.listItems != null && todoList.listItems.length > 0) {
            return todoList.listItems.slice(0, 2).map(item => {
                return (
                    <li key={`${item.id}-item`}>{item.content.slice(0, 15)}</li>
                )
            })
        }
        else {
            return (
                <p>
                    No items yet. Click the title to add a task!
                </p>
            )
        }
    }

    return (
        <li id={`${elementId}-card`} className='bg-white px-4 rounded-md'>
            <Link id={todoList.id.toString()} href={`/todo/list/${todoList.id}`}>
                <h3 id={`${elementId}-title`} className='transition-all ease-in-out duration-300 font-semibold tracking-wider hover:tracking-widest active:tracking-widest mx-auto mb-2'>
                    {todoList.title}
                </h3>
            </Link>
            {todoItems()}
        </li>
    )
}

export default TodoListLink
