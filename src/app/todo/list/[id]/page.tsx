import TodoList from '@/lib/components/Todo/List/TodoList';
import Link from 'next/link';
import React from 'react'

async function Page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params;
    console.log(`id is ${id}`);

    return (
        <main className="mt-30 place-items-center">
            <TodoList id={id} />
            
            <Link href={"/todo"}>
                <button type='button' id='back-btn'
                    className='transition-all ease-in-out duration-200 cursor-pointer bg-blue-500 text-white tracking-wider hover:tracking-widest rounded-full px-2 py-1'>Go Back</button>
            </Link>
            
        </main>
    )
}

export default Page
