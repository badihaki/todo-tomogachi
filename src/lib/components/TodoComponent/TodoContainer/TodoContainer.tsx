import React from 'react'
import TodoItem from './TodoItem';

function TodoContainer(props: {
    todoList: {
        id:number
        name: string,
        description: string
    }[]
}) {
    const { todoList } = props;

    const listItems = todoList.map(listItem => {
        return (
            <TodoItem item={listItem} key={listItem.id} />
        )
    })

    return (
        <ul className='mt-6'>
            {listItems}
        </ul>
    )
}

export default TodoContainer
