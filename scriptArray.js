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

// Creates books for each card in the DOM

createCard = function () {
  cards.innerHTML = "";
  myLibrary.forEach((book) => {
    let html = `<div class="card"><p>${book.title}</p><p>${book.author}</p><p>${book.pages}</p><p>${book.haveRead}</p><button class="remove-btn" onclick="deleteBook(this)">Delete</div>`;
    cards.innerHTML += html;
  });
};

// createCard = function () {
//   cards.innerHTML = "";
//   myLibrary.forEach((book) => {
//     let card = document.createElement("div");
//     let title = document.createElement('p');
//     let author = document.createElement('p');
//     let pages = document.createElement('p');
//     let haveRead = document.createElement('p');
//     let rmvButton = document.createElement('button')

//     title.innerHTML = book.title;
//     author.innerHTML = book.author;
//     pages.innerHTML = book.pages;
//     haveRead.innerHTML = book.haveRead;
//     rmvButton.innerHTML = "Delete";
//     rmvButton.classList.add("remove-btn")
//     card.classList.add("card");

//     cards.appendChild(card);
//     card.appendChild(title);
//     card.appendChild(author);
//     card.appendChild(pages);
//     card.appendChild(haveRead);
//     card.appendChild(rmvButton);
//   })
// }

// const erase = document.querySelectorAll(".erase");
// console.log(erase);
// erase.forEach(item => {
//   item.onclick = () =>
// })

// Checks the array for already registered books
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

// Deletes book card
// removeBtn.onclick = console.log("asdf");

function deleteBook(el) {
  const element = el;
  element.parentNode.remove();
}
createCard();
