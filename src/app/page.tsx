'use client'

import TodoComponent from "@/lib/components/TodoComponent/TodoComponent";
import userState from "@/lib/state/UserState";
import { useAtom } from "jotai";



export default function Home() {

  const [user] = useAtom(userState);

  return (
    <div className="">
      <main className="">
        {
          user !== null ?
            <TodoComponent />
            :
            <>
              Not logged in
            </>
        }
      </main>
    </div>
  );
}
