import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler } from 'react'

function NewTodoAddTask(props: {
    form: {
        title: string;
        tasks: {
            id: number;
            content: string;
        }[]
    },
    setForm: React.Dispatch<React.SetStateAction<{
        title: string;
        tasks: {
            id: number;
            content: string;
        }[];
    }>>,
    task: string,
    setTask: React.Dispatch<React.SetStateAction<string>>
}) {
    const { form, setForm, task, setTask } = props;

    const handleTaskSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log("submitted a new task");
        // create an updated version of the form
        const formUpdate = { ...form };
        // create new task data and push it into the form update's task []
        const taskData: {
            id: number,
            content: string
        } = {
            id: form.tasks.length,
            content: task
        }
        formUpdate.tasks.push(taskData);

        // reset task, set new todo list staet
        setTask("");
        setForm(formUpdate);
    }



    const handleTaskFormChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTask(value);
    }

    return (
        <form id='task-form' onSubmit={handleTaskSubmit}
            className='bg-blue-200 px-2 py-4 my-4 rounded-2xl w-3/4 text-center'>
            <label>
                Add a task here (optional):
                <input id='task-form-input' name='task' onChange={handleTaskFormChange} value={task}
                    className='transition-all ease-in-out duration-200 border-2 border-blue-700 m-auto focus:border-4 focus:rounded-3xl p-1 focus:px-2' />
            </label>
            <br />
            <button id='todo-list-item-submit' type='submit'
                className='bg-blue-400 hover:bg-blue-600 active:bg-blue-200 disabled:bg-blue-200 disabled:border-2 disabled:border-blue-600 px-2 py-1 rounded-full my-2 mx-auto text-sm tracking-widest font-semibold cursor-pointer'
            >Add Task</button>
        </form>
    )
}

export default NewTodoAddTask
