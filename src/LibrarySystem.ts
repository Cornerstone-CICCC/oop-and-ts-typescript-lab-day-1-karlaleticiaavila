// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.

enum BookGenre {
  Fantasy,
  ScienceFiction,
  Mystery,
  Romance,
  NonFiction
}

type Book = {
  bookId:number;
  title:string;
  author:string;
  genre:BookGenre;
  isAvailable:boolean;

}
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
let library: Book[] = [];

function addBook(bookId:number, title:string, author:string, genre:BookGenre): Book {
  const newBook: Book = {
    bookId,
    title,
    author,
    genre,
    isAvailable: true
  };

  library.push(newBook);
  return newBook;
}

function borrowBook(bookId:number): string {
  const book = library.find(b => b.bookId === bookId);
  if (!book) {
    return `Book with ID ${bookId} does not exist.`;
  }

  if (!book.isAvailable) {
    return `${book.title} is not available.`;
  }

  book.isAvailable = false;
  return `${book.title} has been borrowed`;
}
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
function returnBook(bookId:number): string {
  const book = library.find(b => b.bookId === bookId);
  if (!book) {
    return `Book with ID ${bookId} does not exist.`;
  }

  if (book.isAvailable) {
    return `${book.title} is already available.`;
  }

  book.isAvailable = true;
  return `${book.title} has been returned`;
}

// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.

function checkAvailability(bookId:number): boolean {
  const book = library.find(b => b.bookId === bookId);
  if (!book) {
    throw new Error(`Book with ID ${bookId} does not exist.`);
  }

  return book.isAvailable;
}

function removeBook(bookId:number): string {
  const bookIndex = library.findIndex(b => b.bookId === bookId);
  if (bookIndex === -1) {
    return `Book with ID ${bookId} does not exist.`;
  }

  library.splice(bookIndex, 1);
  return `Book with ID ${bookId} has been removed from the library`;
}

// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)) // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)) // "The Hobbit has been borrowed"
console.log(checkAvailability(1)) // false
console.log(returnBook(1)) // "The Hobbit has been returned"
console.log(removeBook(1)) // "The Hobbit has been removed from the library"
