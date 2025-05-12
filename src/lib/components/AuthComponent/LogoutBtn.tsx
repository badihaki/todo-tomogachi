import userAtom from '@/lib/state/UserState';
import { useAtom } from 'jotai';
import React from 'react'

function LogoutBtn() {
    const [user, setUser] = useAtom(userAtom);

    async function handleClick(){
        await fetch("/api/auth/logout");
        setUser(null);
    }

  return (
    <button id='logout-btn' onClick={handleClick}
    className='transition-all ease-in-out duration-500 bg-blue-400 hover:bg-blue-600 active:bg-blue-200 px-2 py-1 rounded-full my-2 mx-auto w-fit text-sm tracking-widest font-semibold place-self-center cursor-pointer'>
      {
        user != null ?
        "LogOut"
        :
        "No User"
      }
    </button>
  )
}

export default LogoutBtn
