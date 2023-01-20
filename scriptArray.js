const modal = document.getElementById("myModal");
const btn = document.getElementById("newBook");
const modalBtn = document.getElementById("modal-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("have-read");
const span = document.getElementsByClassName("close")[0];
const cards = document.getElementById("cards");

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
const book2 = new Book("LotR", "J.K. Rowling", 123, "Unread");
const book3 = new Book("Mickey Mouse", "J.K. Rowling", 123, "Unread");

createCard = function () {
  cards.innerHTML = "";
  myLibrary.forEach((book) => {
    let html = `<div class="card"><p>${book.title}</p><p>${book.author}</p><p>${book.pages}</p><p>${book.haveRead}</p><button class="remove-btn">Delete</div>`;
    cards.innerHTML += html;
  });
};

function alreadyInLibrary(title) {
  return myLibrary.some(function (el) {
    return el.title === title;
  });
}

//Old stuff

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
  console.log(book.title);
  createCard();
});

createCard();

// function addBooKToLibrary(book) {
//   myLibrary.push(book);
//   createBookCard(book);
// }

// const book1 = new Book("Harry Potter", "J.K. Rowling", 123, "unread");
// const book2 = new Book("ncfom", "Cormac McCarthy", 435, "read");
// const book3 = new Book("LoTR", "That dude", 13223, "unread");
// const book4 = new Book("Fireflies", "C. McCarn", 231, "read");
// const book5 = new Book("Good Time Dragon", "C.T.", 1233, "unread");

// function createBookCard(book) {
//   const card = document.createElement("div");
//   const tNode = document.createElement("p");
//   const aNode = document.createElement("p");
//   const pNode = document.createElement("p");
//   const rNode = document.createElement("p");
//   const titleNode = document.createTextNode(book.title);
//   const authorNode = document.createTextNode(book.author);
//   const pagesNode = document.createTextNode(book.pages);
//   const readNode = document.createTextNode(book.haveRead);
//   tNode.appendChild(titleNode);
//   aNode.appendChild(authorNode);
//   pNode.appendChild(pagesNode);
//   rNode.appendChild(readNode);
//   // card.appendChild(removeBtn);
//   card.appendChild(tNode);
//   card.appendChild(aNode);
//   card.appendChild(pNode);
//   card.appendChild(rNode);
//   cards.appendChild(card);
// }

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };

// // modalBtn.addEventListener("click", function (event) {
// //   event.preventDefault();
// //   const book = new Book(title.value, author.value, pages.value, haveRead.value);

// //        modal.style.display = "none";
// //        addBooKToLibrary(book);
// //   console.log(book.title);
// // });

// function alreadyInLibrary(title) {
//   return myLibrary.some(function (el) {
//     return el.title === title;
//   });
// }
