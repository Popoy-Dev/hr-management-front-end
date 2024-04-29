import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import taskApi from '../../app/api/task'
import { CircularProgress } from '@mui/material'
import { error } from 'console'
interface Task {
  _id: string
  name: string
  completed: boolean
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #cc5555',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
}

const AllTask = ({ data, handleSubmit }: any) => {
  const [open, setOpen] = React.useState(false)
  const [modalItem, setModalItem] = useState<Task>()
  const handleOpen = (item: Task) => {
    setModalItem(item)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const handleRemoveTask = (id: string | undefined) => {
    taskApi
      .deleteTask(id)
      .then((response) => {
        handleSubmit(response)
        setOpen(false)

        console.log('response', response)
      })
      .catch((err) => console.log('error', err))
  }

  const handleUpdateTask = (id: string | undefined) => {
    const data = {
        completed: true
    }
    taskApi
      .updateTask(id, data)
      .then((response) => {
        console.log('response', response)
        handleSubmit(response)
        setOpen(false)
      })
      .catch((error) => console.log('Error:', error))
  }
  return (
    <>
      {data.length === 0 ? (
        <div className='flex justify-center	items-center w-full'>
          <CircularProgress />
        </div>
      ) : (
        data.map((item: Task, i: number) => (
          <Card sx={{ minWidth: 200 }} key={i} className='grow'>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                {item.name}
              </Typography>
              <Typography variant='h5' component='div'></Typography>
            </CardContent>
            <CardActions>
              <Button size='small' onClick={() => handleOpen(item)}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {modalItem?.name}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {modalItem?.completed
              ? 'Task is completed'
              : 'Task not yet complete'}
          </Typography>

          <div className='mt-8'>
            <Button
              variant='contained'
              className='mr-2'
              onClick={() => handleUpdateTask(modalItem?._id)}
            >
              Complete
            </Button>
            <Button
              variant='contained'
              className='bg-red-400'
              onClick={() => handleRemoveTask(modalItem?._id)}
            >
              Remove
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default AllTask
