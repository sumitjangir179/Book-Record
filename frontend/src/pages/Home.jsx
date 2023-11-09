import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Spinner, BookTable} from '../components/index'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect((() => {
    axios.get('http://localhost:3000/api/v1/getallbook').then((res) => { setBooks(res.data.message) }).catch((err) => { setError(err.message) }).finally(() => setLoading(false))
  }), [])

  return (
    <section className='p-2'>
      <Container>
        {error && <h1>{error}</h1>}
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>Book List</h1>
          <Link to='/books/create'><MdOutlineAddBox className='text-sky-800 text-4xl' /></Link>
        </div>

        {(loading) ? (<Spinner />) : <BookTable books={books} />}
      </Container>

    </section>
  )
}

export default Home