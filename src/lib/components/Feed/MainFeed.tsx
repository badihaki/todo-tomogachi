import React, { useEffect } from 'react'

function MainFeed() {
    useEffect(()=>{
        GetUser();
    },[])

    async function GetUser() {
        try{
            const data = await fetch("/api/users");
            console.log(data);
            const user = await data.json();
            console.log(user);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            Main feed
            <div>
                {/* {admin?.username} */}
            </div>
        </div>
    )
}

export default MainFeed
