import React, { useState } from 'react'
import LogInForm from './LogInForm';

function LogInComponent() {
    const [showForm, setShowForm] = useState<boolean>(false);
    const handleShowBtnClick = () => {
        setShowForm(!showForm);
    }

    const handleSubmitForm = async (formData: {
        email: string,
        password: string
    }) => {
        const response = await fetch("/api/auth/login",{
            method:'POST',
            body:JSON.stringify(formData),
        })
        const respData = await response.json();
        console.log(respData);
    }

    return (
        <section id='section-login' className={`transition-all ease-in-out duration-500 h-fit`}>
            <button onClick={handleShowBtnClick} id='btn-show-login' className='transition-all ease-in-out duration-500 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold'>{
                showForm ?
                    "Hide This Form" : "Log In"
            }</button>
            {
                showForm ?
                    <LogInForm handleSubmitForm={handleSubmitForm} showForm={showForm} />
                    :
                    ""
            }
            <div className='w-full border-b-4 border-white' />
        </section>
    )
}

export default LogInComponent
