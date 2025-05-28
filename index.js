const express = require('express');
const app = express();
app.use(express.json());

let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET a book by ID
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Book not found");
    res.json(book);
});

// POST a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update a book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Book not found");

    const { title, author } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
    res.json(book);
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.status(204).send();
});

// Start the server
app.listen(3000, () => console.log('📚 Book API running on port 3000'));