
import React, { useState } from 'react'
import LogInForm from './LogInForm';
import { useAtom } from 'jotai';
import userAtom from '@/lib/state/UserState';

function LogInComponent() {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [user, setUser] = useAtom(userAtom);

    const handleShowBtnClick = () => {
        setShowForm(!showForm);
    }
    const handleSubmitForm = async (formData: {
        email: string,
        password: string
    }) => {
        try {
            const response = await fetch("/api/auth/login", {
                method: 'POST',
                body: JSON.stringify(formData),
            })
            const respData = await response.json();
            if (respData.error != null) {
                throw new Error(respData.error);
            }
            else {
                setUser(respData.data);
            }
            /* eslint-disable @typescript-eslint/no-explicit-any */
        }
        catch (err: any) {
            console.log(err);
            handleError(err.message);
        }
    }

    async function handleError(errMsg: string) {
        setErrorMsg(errMsg);
        setTimeout(() => {
            setErrorMsg(null);
        }, 7200);
    }

    return (
        <section id='section-login' className={`transition-all ease-in-out duration-500 h-fit`}>
            {
                user != null ?
                    <div>Loading...</div>
                    :
                    <>
                        <button onClick={handleShowBtnClick} id='btn-show-login' className='transition-all ease-in-out duration-500 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold place-self-center cursor-pointer'>{
                            showForm ?
                                "Hide This Form" : "Log In"
                        }</button>
                        {
                            showForm ?
                                <LogInForm handleSubmitForm={handleSubmitForm} showForm={showForm} />
                                :
                                ""
                        }
                    </>
            }

            {
                errorMsg != null ?
                    <div id='login-err' className='text-red-600 text-sm tracking-wider font-semibold w-fit block place-self-center'>
                        {errorMsg}
                    </div>
                    :
                    ""
            }
            <div className='w-full border-b-4 border-white' />
        </section>
    )
}

export default LogInComponent
