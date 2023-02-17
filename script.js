const modal = document.getElementById("myModal");
const btn = document.getElementById("newBook");
const modalBtn = document.getElementById("modal-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("have-read");
const span = document.getElementsByClassName("close");
const cards = document.getElementById("cards");
const removeBtn = document.getElementsByClassName("remove-btn");

let myLibrary = [];

// Book Constructor
class Book {
  constructor(title, author, pages, haveRead) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.haveRead = haveRead);
  }
  addBook() {
    return addBooKToLibrary(this);
  }
}

// Adds book to array
const addBooKToLibrary = function (book) {
  myLibrary.push(book);
};

const book1 = new Book("Harry Potter", "J.K. Rowling", 123, "Unread");
const book2 = new Book("LotR", "J.R.R. Tolkien", 4214, "Read");
const book3 = new Book(
  "No Country for Old Men",
  "Cormac McCarthy",
  575,
  "Unread"
);

// Placeholder Books
book1.addBook();
book2.addBook();
book3.addBook();

// Creates books for each card in the DOM
createCard = function () {
  cards.innerHTML = "";
  myLibrary.forEach((book, index) => {
    let html = `<div class="card"><p>${book.title}</p><p>${book.author}</p><p>${book.pages}</p><p>${book.haveRead}</p><button class="remove-btn" onclick="deleteBook(${index})">Delete</div>`;
    cards.innerHTML += html;
  });
};

// Checks the array for already registered books
function alreadyInLibrary(title) {
  return myLibrary.some(function (el) {
    return el.title === title;
  });
}

// Functions for modal window
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Bring up modal window with Add a Book form
modalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const book = new Book(title.value, author.value, pages.value, haveRead.value);
  modal.style.display = "none";
  if (alreadyInLibrary(title.value)) {
    return alert("Sorry, it looks like this book is already in your library");
  }
  book.addBook();
  createCard();
});

// Deletes book card and from array
function deleteBook(index) {
  myLibrary.splice(index, 1);
  createCard();
}
createCard();
