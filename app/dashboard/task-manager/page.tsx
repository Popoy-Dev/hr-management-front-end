'use client'
import React, { useEffect, useMemo, useState } from 'react'
import AllTask from '@/components/task-manager/AllTask'
import CreateTaskManager from '@/components/task-manager/CreateTaskManager'
import taskApi from './../../api/task'
import useTasks from './hooks/useTasks'


const TaskManager = () => {

  const [isSuccessTask, setIsSuccessTask] = useState<boolean>(false)

  const {allTask}: any = useTasks(isSuccessTask)

  const [arr] = useState(
    [
      2,4,2,5,1
    ]
  )
 

  const memoData = useMemo(() => arr.find((item) => item === 5), [arr])
  useEffect(() => {
    console.log('memoData', memoData);
  }, [memoData]);

  const handleSubmit = () => {
    setIsSuccessTask(!isSuccessTask)
  }

  return (
    <div className='w-2/4 bg-orange-100 shadow-2xl rounded-3xl'>
      <h1 className='text-center mt-8 text-2xl'>task-manager</h1>
      <CreateTaskManager handleSubmit={handleSubmit} />

      <div className='my-4 mx-12 flex flex-row flex-wrap gap-2'>
        <AllTask data={allTask} handleSubmit={handleSubmit} />
      </div>
      <h1 className='w-3/2 h-3/2'>{memoData}</h1>
    </div>
  )
}

export default TaskManager
