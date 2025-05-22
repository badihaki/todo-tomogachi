'use client'

import NewTodoAddTask from '@/lib/components/Todo/Create/NewTodoAddTask';
import NewTodoListForm from '@/lib/components/Todo/Create/NewTodoList';
import NewTodoPreview from '@/lib/components/Todo/Create/NewTodoPreview';
import userAtom from '@/lib/state/UserState';
import { useAtom } from 'jotai';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function NewTodo() {
    const [user] = useAtom(userAtom);
    const [form, setForm] = useState<{
        title: string,
        tasks: {
            id: number,
            content: string
        }[]
    }>(
        {
            title: "",
            tasks: []
        }
    )
    const [task, setTask] = useState<string>("");

    const tasksComponents = form.tasks.map(task => {
        return (
            <li id={`todo-item-${task.id}`} key={`todo-item-${task.id}`}>
                {task.content}
            </li>
        )
    })

    // on start
    useEffect(() => {
        if (user === null)
            redirect("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className="mt-30 place-items-center">
            <h2>
                Create a new Todo List below:
            </h2>

            <NewTodoListForm form={form} setForm={setForm} setTask={setTask} />

            <NewTodoAddTask form={form} setForm={setForm} task={task} setTask={setTask} />

            <NewTodoPreview form={form} tasksComponents={tasksComponents} />
        </main>
    )
}

export default NewTodo
