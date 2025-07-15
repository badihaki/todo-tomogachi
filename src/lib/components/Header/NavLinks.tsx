import Link from 'next/link'
import React from 'react'

function NavLinks(props:{
    isHovering:boolean
}) {
    const {isHovering} = props;

  return (
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
  )
}

export default NavLinks
