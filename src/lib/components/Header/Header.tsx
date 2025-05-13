'use client'

import React, { useState } from 'react'
import AuthComponent from '../AuthComponent/AuthComponent'
import { useAtom } from 'jotai'
import userAtom from '@/lib/state/UserState'
import Profile from '../Profile/Profile'
import Link from 'next/link'

function NavigationBar() {
    const [user] = useAtom(userAtom);
    const [isHovering, setIsHover] = useState<boolean>(false);

    return (
        <nav id='header' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
            className={`fixed top-0 transition-all duration-1000 ease-in-out w-screen flex flex-col z-50
            ${isHovering ?
                    "bg-indigo-300/95"
                    :
                    "bg-blue-300/55"
                }`}>

            {
                user ?
                    <>
                        <Profile />
                        <section id='nav-links'
                            className={`w-1/2 place-self-center transition-all duration-1000 grid grid-cols-3 gap-10 lg:gap-56
                ${isHovering ?
                                    "h-full"
                                    :
                                    "h-0"
                                }
                `}>
                            <Link href={"/todo"} className='z-10'>
                                <button id='Todo-btn'
                                    className={
                                        isHovering ?
                                            `transition-all ease-in-out duration-1000 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold place-self-center cursor-pointer`
                                            :
                                            "h-0 hidden"}>
                                    Todos
                                </button>
                            </Link>
 
                            <Link href={"/"} className='z-10'>
                                <button id='home-btn'
                                    className={
                                        isHovering ?
                                            `transition-all ease-in-out duration-1000 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold place-self-center cursor-pointer`
                                            :
                                            "h-0 hidden"}>
                                    Home
                                </button>
                            </Link>
 
                            <button id='pet-btn'
                                className={
                                    isHovering ?
                                        `transition-all ease-in-out duration-1000 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold place-self-center cursor-pointer`
                                        :
                                        "h-0 hidden"}>
                                Pet
                            </button>
                        </section>
                    </>
                    :
                    <AuthComponent />
            }
        </nav>
    )
}

export default NavigationBar
