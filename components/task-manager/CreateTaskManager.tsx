'use client'
import React, { useState } from 'react'
import { Button, FilledInput, FormControl, InputLabel } from '@mui/material'

import taskApi from '../../app/api/task'

function CreateTaskManager({ handleSubmit }: any) {
  const [task, setTask] = useState('')

  const handleTaskSubmit = (event: any) => {
    event.preventDefault()

    taskApi
      .createTask({ name: task })
      .then((response: any) => {
        handleSubmit(response)
      })
      .catch((err: any) => console.log('Error:', err))
  }

  return (
    <div className='p-12'>
      <form onSubmit={handleTaskSubmit}>
        <FormControl variant='filled' fullWidth>
          <InputLabel htmlFor='component-filled'>Create Task</InputLabel>
          <FilledInput
            id='component-filled'
            onChange={(e) => setTask(e.target.value)}
          />
        </FormControl>
        <Button variant='contained' type='submit' fullWidth className='mt-6'>
          Create Task
        </Button>
      </form>
    </div>
  )
}

export default CreateTaskManager
