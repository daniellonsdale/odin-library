const myLibrary = [];
const bookContainer = document.querySelector('.book-container');

function Book(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(){
    for (const i in myLibrary) {
        createCard(myLibrary[i]);
    }
}

function createCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = book.title;
    bookCard.appendChild(title);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.setAttribute("type", "button");
    removeButton.textContent = "X";
    bookCard.appendChild(removeButton);

    const author = document.createElement('h2');
    author.classList.add('author');
    author.textContent = book.author;
    bookCard.appendChild(author);

    const pages = document.createElement('h2');
    pages.classList.add('pages');
    pages.textContent = book.numPages;
    bookCard.appendChild(pages);

    const read = document.createElement('h2');
    read.classList.add('read-boolean');
    if(book.read === true){
        read.textContent = "READ";
        read.classList.add('read');
    }else{
        read.textContent = "NOT READ";
        read.classList.add('not-read');
    }
    bookCard.appendChild(read);

    bookContainer.appendChild(bookCard);
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const nineEigthFour = new Book('1984', 'George Orwell', 316, true);

addBookToLibrary(theHobbit);
addBookToLibrary(nineEigthFour);

displayBooks();