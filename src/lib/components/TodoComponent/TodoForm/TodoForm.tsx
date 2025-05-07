'use client'

import React, { useState } from 'react'

function TodoForm(props:{
  AddToList:(todo:{
    name:string,
    description:string
  })=>void
}) {
  // name
  // description
  const [form, setForm] = useState<{
    name: string,
    description: string
  }>({
    name: "",
    description: ""
  })
  const { AddToList } = props;

  function handleFormChange(event: {
    target: {
      name: string,
      value: string
    }
  }) {
    const { name, value } = event.target;
    const formCopy = { ...form };
    formCopy[name as keyof typeof formCopy] = value;
    setForm(formCopy);
  }

  function handleSubmitForm() {
    console.log(form);
    AddToList(form);

    setForm({
      name: "",
      description: ""
    });
  }

  return (
    <div>
      <form>
        Name
        <input type='text' value={form.name} id='todo-name' name='name' className='bg-white border border-black text-black' onChange={handleFormChange} />
        <br />
        Description
        <input type='text' id='todo-desc' value={form.description} name='description' className='bg-white border border-black text-black' onChange={handleFormChange} />
      </form>
      <br />
      <button type='submit' className='bg-white px-2 py-1 text-black' onClick={handleSubmitForm}>Submit</button>
    </div>
  )
}

export default TodoForm
