import React from 'react'

function NewTodoPreview(props: {
    form: {
        title: string;
        tasks: {
            id: number;
            content: string;
        }[];
    },
    tasksComponents: React.JSX.Element[]
}) {
    const { form, tasksComponents } = props;

    return (
        <section id='todo-list-preview' className='bg-fuchsia-200 pt-1 pb-4 rounded-2xl  text-center flex flex-col w-2/5 overflow-scroll'>
            <h2 id='todo-list-title-preview' className='text-lg border-2 border-white bg-fuchsia-400 rounded-3xl mx-2 my-4 px-2 tracking-widest'>
                {form.title}
            </h2>
            <h4 id='preview-text' className='font-light text-sm px-2'>
                (Preview)
            </h4>
            <ul id='task-container' className='mx-auto place-items-center list-disc'>
                {tasksComponents}
            </ul>
        </section>
    )
}

export default NewTodoPreview
