import { Book } from '../models/bookSchema.js'


const createBook = async (req, res) => {
    try {
        const bookDetails = { title: req.body.title, author: req.body.author, publishYear: req.body.publishYear }
        await Book.create(bookDetails)
        return res.status(201).json({ status: 'success', message: 'book created' })
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message })
    }
}

const getallBook = async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(201).json({ status: 'success', message: books })
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message })

    }
}

const getBookById = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)

        if(!book){
            return res.status(404).json({ status: 'failed', message: 'No book exist' })
        }
        
        return res.status(201).json({ status: 'success', message: book })
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message })
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Book.findByIdAndUpdate(id, req.body)

        if (!result) {
            return res.status(404).json({ status: 'failed', message: 'book not found' })
        }
        return res.status(201).json({ status: 'success', message: 'updated' })
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message })
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id)

        if (!result) {
            return res.status(404).json({ status: 'failed', message: 'book not found' })
        }

        return res.status(201).json({ status: 'success', message: 'deleted' })
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message })
    }
}



export { createBook, getallBook, getBookById, updateBook, deleteBook }