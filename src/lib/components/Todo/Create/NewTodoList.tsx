/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAtom } from 'jotai';
import userAtom from '@/lib/state/UserState';
import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from 'react'

function NewTodoListForm(props: {
    form: {
        title: string,
        tasks: {
            id: number,
            content: string
        }[]
    },
    setForm: React.Dispatch<React.SetStateAction<{
        title: string;
        tasks: {
            id: number;
            content: string;
        }[];
    }>>,
    setTask: React.Dispatch<React.SetStateAction<string>>
}) {
    const { form, setForm, setTask } = props;
    const [canSubmitForm, setCanSubmitForm] = useState<boolean>(true);
    const [canConfirmSubmission, setCanConfirmSubmission] = useState<boolean>(false);
    const [user] = useAtom(userAtom);

    const handleSubmit: FormEventHandler = async (event: FormEvent) => {
        event.preventDefault();
        if (!canConfirmSubmission) {
            setCanConfirmSubmission(true);
        }
        else {
            if (canSubmitForm) {
                setCanConfirmSubmission(false);
                setCanSubmitForm(false);

                const body = {
                    newTodoList: form,
                    user: user
                }
                console.log("submitted the form with body:");
                console.log(body);
                
                // do fetch request here
                try{
                    const data = await fetch("/api/todo/new", {
                        method: "POST",
                        body: JSON.stringify(body)
                    })
                    
                    // if request is good, show notification
                    
                    setTimeout(() => {
                        setCanSubmitForm(true);
                    }, 3200);
                    console.log(data);
                }
                catch(err:any){
                    console.log(err);
                    setTimeout(() => {
                        setCanSubmitForm(true);
                    }, 3200);
                }
                // if request is good, show notification

                setForm({
                    title: "",
                    tasks: []
                });
                setTask("");


            }
        }
    }

    const handleFormChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const updateForm = { ...form };
        updateForm.title = value;
        setForm(updateForm);
    }

    return (
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
    )
}

export default NewTodoListForm
