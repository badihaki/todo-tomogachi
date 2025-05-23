import TodoList from '@/lib/components/Todo/List/TodoList';
import React from 'react'

async function Page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params;
    console.log(`id is ${id}`);

    return (
        <main className="mt-30">
            Todo list?
            <TodoList id={id} />
        </main>
    )
}

export default Page
