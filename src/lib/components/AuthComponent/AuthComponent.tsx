'use client'

import userAtom from '@/lib/state/UserState';
import { useAtom, useSetAtom } from 'jotai';
import React, { useEffect } from 'react'
import LogInComponent from './LogInComponent';
import SignUpComponent from './SignUpComponent';
import todosAtom from '@/lib/state/TodosState';

function AuthComponent() {
    const [user, setUser] = useAtom(userAtom); // user state
    const setTodos = useSetAtom(todosAtom) // todos state

    useEffect(() => {
        if (user === null) {
            GetUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    async function GetUser() {
        try {
            const response = await fetch("/api/auth/user").then(res => res.json());
            const { data } = response;
            // console.log(data);
            if (data) {
                const fetchedUser = data.user;
                const fetchedTodos = data.todos
                setUser(fetchedUser);
                setTodos(fetchedTodos);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section id='profile' className='bg-blue-100 place-items-center w-full mx-auto grid grid-cols-1'>
            <LogInComponent />
            <SignUpComponent />
        </section>
    )
}

export default AuthComponent
