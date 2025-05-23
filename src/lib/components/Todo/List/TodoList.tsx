'use client'
import todosAtom from '@/lib/state/TodosState';
import { useAtom } from 'jotai';
import React from 'react'

function TodoList(props: {
    id: number
}) {
    const { id } = props;
    const [todos] = useAtom(todosAtom);
    const data = () => {
        if (todos !== null) {
            return todos.find(list=>{
                console.log(`is list id(${list.id}) the same as id(${id})??`)
                return list.id == id;
            })
        }
        return null;
    }

    return (
        <div>
            {
                data != null ?
                    <>
                    <h2 className='text-black mt-32'>
                        {data()?.title}
                    </h2>
                    </>
                    :
                    "No data"
            }
        </div>
    )
}

export default TodoList
