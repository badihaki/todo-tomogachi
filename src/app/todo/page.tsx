'use client'

import userAtom from '@/lib/state/UserState'
import { useAtom } from 'jotai'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Todo() {
    const [user] = useAtom(userAtom);
    
    useEffect(()=>{
        if(user === null)
            redirect("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <main className="mt-30">
        </main>
    )
}
