# 📚 Book Library API

A simple RESTful API built with Node.js and Express to manage a collection of books.

## 🚀 Features

- Get all books
- Get a single book by ID
- Add a new book
- Update a book
- Delete a book

## 🛠 Technologies Used

- Node.js
- Express.js

## 📦 Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/book-library-api.git
   cd book-library-api

2. Install Dependencies
npm install

3. Start the server:
node index.js

4. Visit the API in your browser or use Postman:
http://localhost:3000/books

## API ENDPOINTS

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/books`     | Get all books    |
| GET    | `/books/:id` | Get a book by ID |
| POST   | `/books`     | Add a new book   |
| PUT    | `/books/:id` | Update a book    |
| DELETE | `/books/:id` | Delete a book    |

## 📄 Example JSON for POST
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}

## ✅ License
This project is open-source and free to use.

---

### 🧩 How to Add It

1. In your VS Code project folder:
   - Right-click → New File → name it: `README.md`

2. Paste the content above.

3. Save and commit:
   ```bash
   git add README.md
   git commit -m "Add README"
   git push