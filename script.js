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
  const node = document.createElement("p");
  const titleNode = document.createTextNode(book.title);
  const authorNode = document.createTextNode(book.author);
  node.appendChild(titleNode);
  node.appendChild(authorNode);
  cards.appendChild(node);
}

addBooKToLibrary(book1);

addBooKToLibrary(book2);

// console.log(book1.title)

// cards.innerHTML += myLibrary[0].title;
// cards.innerHTML += myLibrary[0].author;
// cards.innerHTML += myLibrary[0].pages;
// cards.innerHTML += myLibrary[0].haveRead;

// function addBooKToLibrary(book) {
//   const cards = document.getElementById("cards");
//   for (let i = 0; i < myLibrary.length; i++) {
//     const node = document.createElement("p")
//     const textNode = document.createTextNode(myLibrary[i].title)
//     node.appendChild(textNode);
//     cards.appendChild(node);

//     console.log(myLibrary[i]);
//   }
// }
