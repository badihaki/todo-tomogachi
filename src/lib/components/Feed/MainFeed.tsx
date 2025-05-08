import userAtom from '@/lib/state/UserState'
import { useAtom } from 'jotai'
import React from 'react'

function MainFeed() {
    const [user] = useAtom(userAtom);

    return (
        <div>
            Main feed
            <br />
            {user? `Welcome ${user.username}` : ""}
        </div>
    )
}

export default MainFeed
