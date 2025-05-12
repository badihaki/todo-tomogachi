import userAtom from '@/lib/state/UserState'
import { useAtom } from 'jotai'
import React from 'react'

function MainFeed() {
    const [user] = useAtom(userAtom);

    return (
        <div>
            <h2>
                Main feed
            </h2>
            <p>
                {user ? `Welcome ${user.username}` : ""}
            </p>
            <p>
                {
                    user ?
                        "Find some friends to follow to get the most out of your feed!"
                        :
                        "Please log in or sign up to start personalizing your feed"
                }
            </p>
        </div>
    )
}

export default MainFeed
