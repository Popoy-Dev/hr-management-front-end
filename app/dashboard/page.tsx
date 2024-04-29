'use client'
import React from 'react'
import TaskManager from './task-manager/page'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

function page() {
  return (
    <div className='flex h-screen bg-red-400 '>
      <div className='flex justify-center items-center	h-screen'>
        <TaskManager />
      </div>
    </div>
  )
}

export default page
