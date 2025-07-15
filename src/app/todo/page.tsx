'use client'

import TodoListLink from '@/lib/components/Todo/List/TodoListLink'
import todosAtom from '@/lib/state/TodosState'
import userAtom from '@/lib/state/UserState'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Todo() {
    const [user] = useAtom(userAtom);
    const [todos] = useAtom(todosAtom);

    useEffect(() => {
        if (user === null || todos === null) {
            redirect("/");
        }
        else {
            console.log(todos);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const todoListLinks = () => {
        if (todos != null && todos.length > 0) {
            return todos.map(list => {
                return <TodoListLink todoList={list} key={list.id} />
            })
        }
        else {
            return (
                <>
                    No Todo List loaded yet
                </>
            )
        }
    }

    return (
        <main className="mt-30 place-items-center">
            <h2>
                Todos Page
            </h2>

            {
                todos != null && todos.length > 0 ?
                    <>
                        <p>
                            Click on a list in order to view it.
                        </p>

                        <ul id='todo-list-links-container'
                            className='bg-indigo-300/50 py-4 px-10 my-2 rounded-full'>
                            {todoListLinks()}
                        </ul>

                        <p>
                            Want to make a new list? <Link href={'/todo/new'} className='transition-all ease-in-out duration-300 bg-pink-500/35 px-2 hover:py-2 rounded-md font-semibold hover:text-white hover:tracking-widest'>Click Here!</Link>
                        </p>
                    </>
                    :
                    <p>
                        You need to
                        <Link href={"todo/new"}
                            className={`text-blue-600 active:text-blue-900 hover:text-blue-800 ml-1`}>
                            make a todo list
                        </Link>
                    </p>
            }

        </main>
    )
}
