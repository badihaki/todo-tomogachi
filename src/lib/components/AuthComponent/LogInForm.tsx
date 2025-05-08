import React from 'react'

function LogInForm(props: {
    handleSubmitForm: () => void,
    showForm: boolean
}) {
    const { handleSubmitForm, showForm } = props;
    return (
        <form id='form-login' onSubmit={handleSubmitForm} className={`bg-white my-2 transition-all ease-in-out duration-500 place-content-center text-center flex flex-col p-4 ${showForm ?
            "h-fit"
            :
            "h-0"
            }`}>
            <p>
                email:
            </p>
            <input id='login-email' type='email' />
            <p>
                password:
            </p>
            <input id='login-pass' type='password' className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl' />
            <br />
            <button id='login-submit' type='submit' className='bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto text-sm tracking-widest font-semibold'>Submit</button>
        </form>
    )
}

export default LogInForm
