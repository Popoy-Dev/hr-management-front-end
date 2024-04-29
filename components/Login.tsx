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

interface LoginProps {
  title: string
  setUsername: (username: string) => void
  setPassword: (password: string) => void
  handleSubmit: () => void
  errorMessage: string
}

function Login({
  title,
  setUsername,
  setPassword,
  handleSubmit,
  errorMessage,
}: any) {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <div className='flex justify-center items-center  py-12 px-12 bg-blue-100  shadow-2xl rounded-3xl w-1/3	h-auto	'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className='flex justify-center font-bold text-2xl'>{title}</h1>

        <FormControl fullWidth margin='normal'>
          <TextField
            label='Username'
            id='outlined-start-adornment'
            sx={{ m: 1 }}
            onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
        {/* <Button
          type='submit'
          variant='outlined'
          color='primary'
          className='mt-2 w-full'
        >
          Signup
        </Button> */}
      </form>
    </div>
  )
}

export default Login
