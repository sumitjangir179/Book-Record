import express from 'express'
import { createBook, deleteBook, getBookById, getallBook, updateBook } from '../controllers/bookController.js'
const router = express.Router()

router.post('/createbook', createBook)

router.get('/getallbook', getallBook)

router.get('/getbookbyid/:id', getBookById)

router.patch('/updatebook/:id', updateBook)

router.delete('/deletebook/:id', deleteBook)

export default router