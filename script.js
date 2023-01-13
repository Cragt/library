const modal = document.getElementById("myModal");
const btn = document.getElementById("newBook");
const modalBtn = document.getElementById("modal-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("have-read");
const span = document.getElementsByClassName("close")[0];

let myLibrary = [];

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${haveRead}.`;
  };
  myLibrary.push(this);
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 123, "unread");
const book2 = new Book("ncfom", "Cormac McCarthy", 435, "read");
const book3 = new Book("LoTR", "That dude", 13223, "unread");
const book4 = new Book("Fireflies", "C. McCarn", 231, "read");

function addBooKToLibrary(book) {
  const cards = document.getElementById("cards");
  const card = document.createElement("div");
  const tNode = document.createElement("p");
  const aNode = document.createElement("p");
  const pNode = document.createElement("p");
  const rNode = document.createElement("p");
  const titleNode = document.createTextNode(book.title);
  const authorNode = document.createTextNode(book.author);
  const pagesNode = document.createTextNode(book.pages);
  const readNode = document.createTextNode(book.haveRead);
  tNode.appendChild(titleNode);
  aNode.appendChild(authorNode);
  pNode.appendChild(pagesNode);
  rNode.appendChild(readNode);
  card.appendChild(tNode);
  card.appendChild(aNode);
  card.appendChild(pNode);
  card.appendChild(rNode);
  cards.appendChild(card);
}

addBooKToLibrary(book1);

addBooKToLibrary(book2);

addBooKToLibrary(book3);

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

modalBtn.onclick = function () {
  console.log(title.value);
  console.log(author.value);
  console.log(pages.value);
  console.log(haveRead.value);
};
