import userAtom from '@/lib/state/UserState';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import LogInComponent from './LogInComponent';
import SignUpComponent from './SignUpComponent';

function AuthComponent() {
    useEffect(() => {
        GetUser();
    })

    // const [user, setUser] = useAtom(userAtom); // bring this back later
    const [user] = useAtom(userAtom);

    async function GetUser() {
        try {
            const data = await fetch("/api/users").then(res => res.json());
            console.log(data);
            const fetchedUser = data.data;
            console.log(fetchedUser);
            // setUser(fetchedUser);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section>
            {user !== null ?
                <>
                    Logged in {user.username}
                </>
                :
                <>
                    <LogInComponent />
                    <SignUpComponent />
                </>
            }
        </section>
    )
}

export default AuthComponent
