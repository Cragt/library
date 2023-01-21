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

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);

  if (alreadyInLibrary(title)) {
    return alert("Sorry, it looks like this book is already in your library");
  }
  addBooKToLibrary(this);
}

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

createCard = function () {
  cards.innerHTML = "";
  myLibrary.forEach((book) => {
    let html = `<div class="card"><p>${book.title}</p><p>${book.author}</p><p>${book.pages}</p><p>${book.haveRead}</p><button class="remove-btn" onclick="deleteBook(this)">Delete</div>`;
    cards.innerHTML += html;
  });
};

function alreadyInLibrary(title) {
  return myLibrary.some(function (el) {
    return el.title === title;
  });
}

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

modalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const book = new Book(title.value, author.value, pages.value, haveRead.value);
  modal.style.display = "none";
  createCard();
});

function deleteBook(el) {
  const element = el;
  // console.log();
  element.parentNode.remove();
  // console.log(myLibrary);
}

createCard();

// const findIndex = function (bookTitle) {
//   console.log(myLibrary.findIndex(v => v.title === bookTitle));
// }
// removeFromArray('Harry Potter')

// function removeFromArray(rmvTitle) {
//   myLibrary.splice(myLibrary.findIndex(v => v.title === rmvTitle), 1)
// }
// console.log(findIndex('Harry Potter'));
// findIndex('LotR')

// onclick="deleteBook(this), removeFromArray(this)
