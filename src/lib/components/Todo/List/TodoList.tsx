'use client'
import todosAtom from '@/lib/state/TodosState';
import userAtom from '@/lib/state/UserState';
import { useAtom } from 'jotai';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import TodoListItem from '../Item/TodoListItem';

function TodoList(props: {
    id: number
}) {
    const { id } = props;
    const [todos] = useAtom(todosAtom);
    const [user] = useAtom(userAtom);

    const data = () => {
        if (todos !== null) {
            return todos.find(list => {
                console.log(`is list id(${list.id}) the same as id(${id})??`)
                return list.id == id;
            })
        }
        return null;
    }

    const todoListItems = data()?.listItems.map(item => {
        return <TodoListItem key={item.id} listItem={item} />
    })

    useEffect(() => {
        if (user === null) {
            redirect('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {
                data != null ?
                    <>
                        <h2 className='text-black mt-32 tracking-widest'>
                            {data()?.title}
                        </h2>
                        <ul>
                            {todoListItems}
                        </ul>
                    </>
                    :
                    "No data"
            }
        </div>
    )
}

export default TodoList
