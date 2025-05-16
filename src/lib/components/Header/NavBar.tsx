'use client'

import React, { useState } from 'react'
import AuthComponent from '../AuthComponent/AuthComponent'
import { useAtom } from 'jotai'
import userAtom from '@/lib/state/UserState'
import Profile from '../Profile/Profile'
import NavLinks from './NavLinks'

function NavigationBar() {
    const [user] = useAtom(userAtom);
    const [isHovering, setIsHover] = useState<boolean>(false);

    return (
        <nav id='nav-bar' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
            className={`fixed top-0 left-0 w-full transition-all duration-1000 ease-in-out grid grid-cols-1 z-50
            ${isHovering ?
                    "bg-indigo-300/95"
                    :
                    "bg-blue-300/55"
                }`}>

            {
                user ?
                    <>
                        <Profile />
                        <NavLinks isHovering={isHovering} />
                    </>
                    :
                    <AuthComponent />
            }
        </nav>
    )
}

export default NavigationBar
