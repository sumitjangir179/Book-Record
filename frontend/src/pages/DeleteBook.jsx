import { React, useState } from 'react'
import { BackButton } from '../components/index'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const handleSubmit = () => {
    axios.delete(`http://localhost:3000/api/v1/deletebook/${id}`).catch((err) => { setError(err.message) }).finally(() => { navigate('/') })
  }
  return (
    <div className='p-2'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {error && <h1>Something went wrong</h1>}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleSubmit}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook