'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import userAtom from '@/lib/state/UserState';
import { useAtom, useSetAtom } from 'jotai';
import React, { useState } from 'react'
import SignUpForm from './SignUpForm';
import todosAtom from '@/lib/state/TodosState';
function SignUpComponent() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [user, setUser] = useAtom(userAtom);
  const setTodos = useSetAtom(todosAtom);

  const handleShowBtnClick = () => {
    setShowForm(!showForm);
  }
  const handleSubmitForm = async (formData: {
    email: string,
    password: string,
    confirmPassword: string,
    username: string
  }) => {
    console.log("submitting form");
    if (formData.password === formData.confirmPassword) {
      try {
        const response = await fetch("api/auth/signup", {
          method: "POST",
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            username: formData.username
          })
        });
        const respData = await response.json();
        console.log(respData);
        if (respData.error != null) {
          throw new Error(respData.error);
        }
        else {
          console.log(respData.data);
          setUser(respData.data);
          setTodos([]);
        }
      } catch (err: any) {
        handleError(err.message);
      }
    }
    else {
      handleError("Passwords don't match!");
    }
  }

  async function handleError(errMsg: string) {
    setErrorMsg(errMsg);
    setTimeout(() => {
      setErrorMsg(null);
    }, 7200);
  }

  return (
    <section id='section-signup' className={`transition-all ease-in-out duration-500 h-fit`} >
      {
        user != null ?
          <div>Loading...</div>
          :
          <>
            <button onClick={handleShowBtnClick} id='btn-show-login' className='transition-all ease-in-out duration-500 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold place-self-center cursor-pointer'>{
              showForm ?
                "Hide This Form" : "Sign Up"
            }</button>

            {
              showForm ?
                <SignUpForm handleSubmitForm={handleSubmitForm} showForm={showForm} />
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
    </section>
  )
}

export default SignUpComponent
