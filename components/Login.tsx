'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import auth from './../app/api/auth'
import { Alert, InputAdornment, OutlinedInput, TextField } from '@mui/material'

function Login() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

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
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <div className='flex justify-center items-center  py-12 px-12 bg-blue-100  shadow-2xl rounded-3xl w-1/3	h-auto	'>
      <form onSubmit={handleSubmit}>
        <h1 className='flex justify-center font-bold text-2xl'>
          Employee Login
        </h1>

        <FormControl fullWidth margin='normal'>
          <TextField
            label='Username'
            id='outlined-start-adornment'
            sx={{ m: 1 }}
   
            onChange={handleUsernameChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
              onChange={handlePasswordChange}
            />
          </FormControl>
        </FormControl>
        {errorMessage && (
          <Alert variant='outlined' severity='error'>
            {errorMessage}
          </Alert>
        )}
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className='mt-2 w-full'
        >
          Login
        </Button>
        <Button
          type='submit'
          variant='outlined'
          color='primary'
          className='mt-2 w-full'
        >
          Signup
        </Button>
      </form>
    </div>
  )
}

export default Login
