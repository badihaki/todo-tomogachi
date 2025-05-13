'use client'

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
        if (user === null || todos === null)
            redirect("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className="mt-30">
            <h2>
                Todos Page
            </h2>

            {
                todos && todos.length > 1 ?
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
        </main>
    )
}
