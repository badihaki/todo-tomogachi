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

    const todoLists = () => {
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
        <main className="mt-30">
            <h2>
                Todos Page
            </h2>

            {
                todos != null && todos.length > 0 ?
                    "You todos are listed below"
                    :
                    <p>
                        You need to
                        <Link href={"todo/new"}
                            className={`text-blue-600 active:text-blue-900 hover:text-blue-800 ml-1`}>
                            make a todo list
                        </Link>
                    </p>
            }

            {todoLists()}
        </main>
    )
}
