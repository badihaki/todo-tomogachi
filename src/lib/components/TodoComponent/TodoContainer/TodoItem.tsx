import React from 'react'

function TodoItem(props: {
    item: {
        name: string,
        description: string
    }
}) {
    const { name, description } = props.item;

    return (
        <li className='border-white border-2 px-2 py-4 text-center mt-2 mb-10 rounded-2xl'>
            <h4 className='text-lg'>
                {name}
            </h4>
            <br />
            <p className='border-white border-2 mx-auto p-4 w-fit rounded-4xl'>
                {description}
            </p>
        </li>
    )
}

export default TodoItem
