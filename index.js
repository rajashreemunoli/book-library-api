// 1. Import the Express library
const express = require('express');

// 2. Create an Express app
const app = express();

// 3. Middleware to parse incoming JSON requests
app.use(express.json());

// 4. Sample in-memory data (like a fake database)
let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// =======================
// ROUTES / ENDPOINTS
// =======================

// 5. GET /books - Get all books
app.get('/books', (req, res) => {
    res.json(books); // Respond with the full list of books as JSON
});

// 6. GET /books/:id - Get a single book by its ID
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extract the ID from the URL
    const book = books.find(b => b.id === id); // Find the book with that ID
    if (!book) {
        return res.status(404).send("Book not found");
    }
    res.json(book); // Respond with the found book
});

// 7. POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body; // Get title and author from the request body
    const newBook = {
        id: books.length + 1, // Simple way to assign a new ID
        title,
        author
    };
    books.push(newBook); // Add the new book to our "database"
    res.status(201).json(newBook); // Respond with 201 Created and the new book
});

// 8. PUT /books/:id - Update a book
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extract the ID
    const book = books.find(b => b.id === id); // Find the book to update
    if (!book) {
        return res.status(404).send("Book not found");
    }

    const { title, author } = req.body; // Get updated data
    // Update fields if provided
    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book); // Respond with the updated book
});

// 9. DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Filter out the book with the given ID
    books = books.filter(b => b.id !== id);
    res.status(204).send(); // 204 = No Content (successful deletion)
});

// 10. Start the server on port 3000
app.listen(3000, () => {
    console.log('📚 Book API is running on http://localhost:3000');
});