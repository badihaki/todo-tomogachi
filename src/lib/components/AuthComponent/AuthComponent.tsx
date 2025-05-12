'use client'

import userAtom from '@/lib/state/UserState';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import LogInComponent from './LogInComponent';
import SignUpComponent from './SignUpComponent';

function AuthComponent() {
    const [user, setUser] = useAtom(userAtom);

    useEffect(() => {
        if(user === null){
            GetUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    async function GetUser() {
        try {
            const response = await fetch("/api/auth/user").then(res => res.json());
            const { data } = response;
            if (data) {
                const fetchedUser = data;
                setUser(fetchedUser);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section id='profile' className='bg-blue-100 place-items-center w-full mx-auto'>
            <LogInComponent />
            <SignUpComponent />
        </section>
    )
}

export default AuthComponent
