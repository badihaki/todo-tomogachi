'use client'

import ProfileComponent from "@/lib/components/AuthComponent/ProfileComponent";
import MainFeed from "@/lib/components/Feed/MainFeed";
import TodoComponent from "@/lib/components/TodoComponent/TodoComponent";
import userAtom from "@/lib/state/UserState";
import { useAtom } from "jotai";



export default function Home() {

  const [user] = useAtom(userAtom);

  return (
    <div className="">
      <main className="">
        {
          user !== null ?
            <TodoComponent />
            :
            <>
              <ProfileComponent />
            </>
        }

        <MainFeed />
      </main>
    </div>
  );
}
