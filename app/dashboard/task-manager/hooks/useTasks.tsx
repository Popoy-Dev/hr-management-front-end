import React, { useEffect, useState } from 'react'
import taskApi from './../../../api/task'

const useTasks = (isSuccessTask: boolean) => {
  const [allTask, setAllTask] = useState([])

  const fetchAllTask = () => {
    taskApi
      .getAllTask()
      .then((response) => {
        const { data } = response
        setAllTask(data.task.reverse())
      })
      .catch((error) => console.log('error', error))
  }
  useEffect(() => {
    fetchAllTask()
  }, [isSuccessTask])

  return {allTask, fetchAllTask}

}

export default useTasks
