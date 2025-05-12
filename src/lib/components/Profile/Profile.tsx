'use client'

import React from 'react'
import LogoutBtn from '../AuthComponent/LogoutBtn'
import { useAtom } from 'jotai'
import userAtom from '@/lib/state/UserState'

function Profile() {
    const [user] = useAtom(userAtom);

    return (
        <section id='profile' className='grid grid-cols-2 w-full'>
            <button id='profile-btn'
                className='transition-all ease-in-out duration-500 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold place-self-center cursor-pointer'>
                {user?.username}
            </button>

            <div id='logout-container' className='justify-self-end relative right-20'>
                <LogoutBtn />
            </div>
        </section>
    )

}

export default Profile
