'use client'
import React, { useState, useEffect } from 'react'
import LoginPage from './login/page'


export default function Home() {
  return (
    <main className='w-screen h-screen'>
        <div className='flex justify-center items-center h-screen'>
        <LoginPage />
        </div>
    </main>
  )
}
