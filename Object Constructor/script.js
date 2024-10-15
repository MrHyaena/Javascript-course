function Book(title, author, pages, state) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.info = function () {
    let infoBook =
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.state;
    return infoBook;
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);

console.log(theHobbit.info());
