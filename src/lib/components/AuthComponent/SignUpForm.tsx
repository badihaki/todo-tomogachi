'use client'

import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'

function SignUpForm(props: {
    handleSubmitForm: (formData: {
        email: string,
        password: string,
        confirmPassword: string,
        username: string
    }) => void
    showForm: boolean,
    canSubmitCreds: boolean
}) {
    const { handleSubmitForm, showForm, canSubmitCreds } = props;
    const [form, setForm] = useState<{
        email: string,
        password: string,
        confirmPassword: string,
        username: string
    }>({
        email: "",
        password: "",
        confirmPassword: "",
        username: ""
    });

    const onSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        if (canSubmitCreds) {
            handleSubmitForm(form);
            resetForm();
        }
    }

    const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        const formCopy = { ...form };
        formCopy[key as keyof typeof formCopy] = value;
        setForm(formCopy);
    }

    function resetForm() {
        setForm({
            email: "",
            password: "",
            confirmPassword: "",
            username: ""
        });
    }

    return (
        <form id='form-signup' onSubmit={onSubmit} className={`bg-white my-2 transition-all ease-in-out duration-500 place-content-center text-center flex flex-col p-4 ${showForm ?
            "h-fit"
            :
            "h-0"
            }`}>
            <p>
                email:
            </p>
            <input id='signup-email' type='email' value={form.email} onChange={onFormChange} name='email'
                className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl' />

            <p>
                password:
            </p>
            <input id='signup-pass' type='password' value={form.password} onChange={onFormChange} name='password'
                className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl' />

            <p>
                confirm your password:
            </p>
            <input id='signup-confirm-pass' type='password' value={form.confirmPassword} onChange={onFormChange} name='confirmPassword'
                className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl' />
            <p>
                username:
            </p>
            <input id='signup-username' type='text' value={form.username} onChange={onFormChange} name='username'
                className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl' />

            <br />
            <button id='signup-submit' type='submit' disabled={!canSubmitCreds} className='bg-blue-400 hover:bg-blue-600 active:bg-blue-200 disabled:bg-blue-200 disabled:border-2 disabled:border-blue-600 px-2 py-1 rounded-full my-2 mx-auto text-sm tracking-widest font-semibold cursor-pointer'>
                {
                    canSubmitCreds ?
                        "Submit" : "Please Wait"
                }
            </button>
        </form>
    )
}

export default SignUpForm
