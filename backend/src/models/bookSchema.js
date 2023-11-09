import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
    {
        title: { type: String, required: true, lowercase: true },
        author: { type: String, required: true, lowercase: true },
        publishYear: { type: String, required: true, lowercase: true }
    },
    {
        timestamps: true
    }
)

export const Book = mongoose.model("Book", bookSchema)