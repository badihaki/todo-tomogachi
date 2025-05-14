'use client'

import React, { FormEvent, FormEventHandler, useState } from 'react'

function NewTodo() {
    const handleSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log("submitted the form");
    }

    const handleTaskSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log("submitted a new task");
    }

    const [canSubmitForm, setCanSubmitForm] = useState<boolean>(true);


    return (
        <main className="mt-30 place-items-center">
            <h2>
                Create a new Todo List below:
            </h2>

            <form id='todo-list-form' onSubmit={handleSubmit}
                className='bg-blue-200 px-2 py-4 mt-4 mb-10 rounded-2xl w-3/4 text-center'>
                <label>
                    Title:
                    <input id='todo-list-form-title' name='title'
                        className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl p-1 focus:px-2' />
                </label>
                <br />
                <button id='todo-list-submit' type='submit'>Submit</button>
            </form>

            <form id='todo-list-form' onSubmit={handleTaskSubmit}
                className='bg-blue-200 px-2 py-4 my-4 rounded-2xl w-3/4 text-center'>
                <label>
                    Add a task here:
                    <input id='todo-list-form-task' name='title'
                        className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl p-1 focus:px-2' />
                </label>
            </form>
        </main>
    )
}

export default NewTodo
