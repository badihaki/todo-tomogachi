'use client'

import userAtom from '@/lib/state/UserState';
import { useAtom } from 'jotai';
import { redirect } from 'next/navigation';
import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useEffect, useState } from 'react'

function NewTodo() {
    const [user] = useAtom(userAtom);

    const handleSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        if (!canConfirmSubmission) {
            setCanConfirmSubmission(true);
        }
        else {
            if (canSubmitForm) {
                setCanConfirmSubmission(false);
                setCanSubmitForm(false);
                
                console.log("submitted the form");
                console.log(form);
                
                setForm({
                    title: "",
                    tasks: []
                });
                setTask("");
                // do fetch request here
                // if request is good, show notification
                
                setTimeout(() => {
                    setCanSubmitForm(true);
                }, 3200);
            }
        }
    }

    const handleTaskSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log("submitted a new task");
        // create an updated version of the form
        const formUpdate = { ...form };
        // create new task data and push it into the form update's task []
        const taskData: {
            id: number,
            content: string
        } = {
            id: form.tasks.length,
            content: task
        }
        formUpdate.tasks.push(taskData);

        // reset task, set new todo list staet
        setTask("");
        setForm(formUpdate);
    }

    const handleFormChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const updateForm = { ...form };
        updateForm.title = value;
        setForm(updateForm);
    }

    const handleTaskFormChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTask(value);
    }

    const [canSubmitForm, setCanSubmitForm] = useState<boolean>(true);
    const [canConfirmSubmission, setCanConfirmSubmission] = useState<boolean>(false);
    /* want to use this ^^ in this kinda flow
    user submits -> submissionedConfirmed = true, show confirmation message on button, button turns red ->
    user presses button again -> canSubmitForm = false, submit form, return new list info
    */
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

            <form id='todo-list-form' onSubmit={handleSubmit}
                className='bg-blue-200 px-2 py-4 mt-4 mb-10 rounded-2xl w-3/4 text-center'>
                <label>
                    Give the List a title:
                    <input id='todo-list-form-title' name='title' value={form.title} onChange={handleFormChange}
                        className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl p-1 focus:px-2' />
                </label>
                <br />
                <button id='todo-list-submit' type='submit' disabled={!canSubmitForm}
                    className={`transition-all duration-300 ease-in-outdisabled:bg-blue-200 disabled:border-2 disabled:border-blue-600 px-2 py-1 rounded-full my-2 mx-auto text-sm tracking-widest font-semibold cursor-pointer ${canConfirmSubmission ?
                        ` bg-red-400 hover:bg-red-600 active:bg-red-200 `
                        :
                        ` bg-blue-400 hover:bg-blue-600 active:bg-blue-200 `
                        }`}
                >{
                        canConfirmSubmission ?

                            "Please confirm submission"
                            :
                            "Submit"
                    }</button>
            </form>

            <form id='task-form' onSubmit={handleTaskSubmit}
                className='bg-blue-200 px-2 py-4 my-4 rounded-2xl w-3/4 text-center'>
                <label>
                    Add a task here (optional):
                    <input id='task-form-input' name='task' onChange={handleTaskFormChange} value={task}
                        className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl p-1 focus:px-2' />
                </label>
                <br />
                <button id='todo-list-item-submit' type='submit'
                    className='bg-blue-400 hover:bg-blue-600 active:bg-blue-200 disabled:bg-blue-200 disabled:border-2 disabled:border-blue-600 px-2 py-1 rounded-full my-2 mx-auto text-sm tracking-widest font-semibold cursor-pointer'
                >Add Task</button>
            </form>

            <section id='todo-list-preview' className='bg-fuchsia-200 pt-1 pb-4 rounded-2xl  text-center flex flex-col w-2/5 overflow-scroll'>
                <h2 id='todo-list-title-preview' className='text-lg border-2 border-white bg-fuchsia-400 rounded-3xl mx-2 my-4 px-2 tracking-widest'>
                    {form.title}
                </h2>
                <h4 id='preview-text' className='font-light text-sm px-2'>
                    (Preview)
                </h4>
                <ul id='task-container' className='mx-auto place-items-center list-disc'>
                    {tasksComponents}
                </ul>
            </section>
        </main>
    )
}

export default NewTodo
