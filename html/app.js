// app.js

const API_URL = '/api/books';  // Cambia a ruta relativa

async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error fetching books");
        const books = await response.json();
        displayBooks(books);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = books.map(book => `
        <div class="book">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year Published:</strong> ${book.yearPublished}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Available:</strong> ${book.available ? "Yes" : "No"}</p>
        </div>
    `).join('');
}