import { React, useState } from 'react'
import { BackButton, Spinner } from '../components/index'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const data = { title, author, publishYear }

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/v1/createbook', data).catch((err) => { setError(err.message) }).finally(() => {navigate('/')})
  }

  return (
    <div className='p-2'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {error && <h1>Something went wrong</h1>}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} required className='border-2 border-gray-500 px-4 py-2  w-full ' />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type='number' value={publishYear} onChange={(e) => setPublishYear(e.target.value)} required className='border-2 border-gray-500 px-4 py-2  w-full ' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSubmit}>Create</button>
      </div>

    </div>
  )
}

export default CreateBook