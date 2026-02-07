"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    BookGenre[BookGenre["ScienceFiction"] = 1] = "ScienceFiction";
    BookGenre[BookGenre["Mystery"] = 2] = "Mystery";
    BookGenre[BookGenre["Romance"] = 3] = "Romance";
    BookGenre[BookGenre["NonFiction"] = 4] = "NonFiction";
})(BookGenre || (BookGenre = {}));
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
var library = [];
function addBook(bookId, title, author, genre) {
    var newBook = {
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvailable: true
    };
    library.push(newBook);
    return newBook;
}
function borrowBook(bookId) {
    var book = library.find(function (b) { return b.bookId === bookId; });
    if (!book) {
        return "Book with ID ".concat(bookId, " does not exist.");
    }
    if (!book.isAvailable) {
        return "".concat(book.title, " is not available.");
    }
    book.isAvailable = false;
    return "".concat(book.title, " has been borrowed");
}
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
function returnBook(bookId) {
    var book = library.find(function (b) { return b.bookId === bookId; });
    if (!book) {
        return "Book with ID ".concat(bookId, " does not exist.");
    }
    if (book.isAvailable) {
        return "".concat(book.title, " is already available.");
    }
    book.isAvailable = true;
    return "".concat(book.title, " has been returned");
}
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
function checkAvailability(bookId) {
    var book = library.find(function (b) { return b.bookId === bookId; });
    if (!book) {
        throw new Error("Book with ID ".concat(bookId, " does not exist."));
    }
    return book.isAvailable;
}
function removeBook(bookId) {
    var bookIndex = library.findIndex(function (b) { return b.bookId === bookId; });
    if (bookIndex === -1) {
        return "Book with ID ".concat(bookId, " does not exist.");
    }
    library.splice(bookIndex, 1);
    return "Book with ID ".concat(bookId, " has been removed from the library");
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
