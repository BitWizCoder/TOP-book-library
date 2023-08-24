const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkins",
    pages: "295 pages",
    read: false,
  },
  {
    title: "The Hobbit",
    author: "J.R.R Tolkins",
    pages: "295 pages",
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages}, ${
      read ? "Completed" : "not read yet"
    }`;
  };
}
const theHobbit = new Book("The Hobbit", "J.R.R Tolkins", "295 pages", false);
// console.log(theHobbit.info());

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

console.log(myLibrary);
