import userAtom from '@/lib/state/UserState';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import LogInComponent from './LogInComponent';
import SignUpComponent from './SignUpComponent';
import LogoutBtn from './LogoutBtn';

function AuthComponent() {
    useEffect(() => {
        GetUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const [user, setUser] = useAtom(userAtom); // bring this back later
    const [user, setUser] = useAtom(userAtom);

    async function GetUser() {
        try {
            const response = await fetch("/api/users").then(res => res.json());
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
            {user !== null ?
                // <>
                //     Logged in {user.username}
                // </>
                <LogoutBtn />
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
