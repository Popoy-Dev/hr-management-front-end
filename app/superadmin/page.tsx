'use client'

import React, { useState } from 'react'
import Login from '@/components/Login'
import { useRouter } from 'next/navigation'
import auth from './../../app/api/auth'

function page() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const data = {
      username,
      password,
    }

    auth
      .login(data)
      .then((res) => {
        console.log('res', res, res.data.login)
        if (res.data.login) {
          router.push('/dashboard')
        }
      })
      .catch((err) => setErrorMessage('Wrong credentials!'))

    console.log('Login attempted:', username, password)
  }
  return (
    <main className='w-screen h-screen'>
    <div className='flex justify-center items-center h-screen'>
      <Login
        title='Superadmin Login'
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
        errorMessage={errorMessage}
      />
    </div>
  </main>
  )
}

export default page
