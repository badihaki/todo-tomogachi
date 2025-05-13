'use client'

import React, { FormEvent, FormEventHandler } from 'react'

function NewTodo() {
    const handleSubmit:FormEventHandler = (event:FormEvent) =>{
        event.preventDefault();
        console.log("submitted the form");
    }


    return (
        <main className="mt-30 place-items-center">
            <h2>
                Create a new Todo List below:
            </h2>

            <form onSubmit={handleSubmit}></form>
        </main>
    )
}

export default NewTodo
