const myLibrary = [];
const bookContainer = document.querySelector('.book-container');
const totalBooks = document.querySelector('.statistics-total-books-num');
const totalCompletedBooks = document.querySelector('.statistics-completed-books-num');
const totalPages = document.querySelector('.statistics-total-pages-num');
const addBookBtn = document.querySelector('.add-book-btn');
const dialog = document.querySelector('dialog');
const modalCloseBtn = document.querySelector('.modal-close-button');
const form = document.querySelector('form');
const formSubmitBtn = document.querySelector('.submit-button');

function Book(title, author, numPages, read, curDisplayed, id){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.curDisplayed = false;
    this.id = myLibrary.length + 1;
    myLibrary.push(this);
}

function displayBooks(){
    for (const i in myLibrary) {
        if(myLibrary[i].curDisplayed === false){
            createCard(myLibrary[i]);
            myLibrary[i].curDisplayed = true;

            let curTotalBooks = parseInt(totalBooks.textContent);
            curTotalBooks++;
            totalBooks.textContent = curTotalBooks;

            let curTotalPages = parseInt(totalPages.textContent);
            curTotalPages += myLibrary[i].numPages;
            totalPages.textContent = curTotalPages;

            if(myLibrary[i].read === true){
                let curTotalCompletedBooks = parseInt(totalCompletedBooks.textContent);
                curTotalCompletedBooks++;
                totalCompletedBooks.textContent = curTotalCompletedBooks;
            }
        }
    }
}

function createCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.classList.add(book.id);

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

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

modalCloseBtn.addEventListener('click', () => {
    dialog.close();
    form.reset();
});

formSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let bookReadTemp;
    if (formData.get('book-read-boolean') === 'on'){
        bookReadTemp = true;
    }else{
        bookReadTemp = false;
    }
    const tempBook = new Book(formData.get('book-title'), formData.get('book-author'), parseInt(formData.get('book-pages')), bookReadTemp);
    dialog.close();
    form.reset();
    displayBooks();
});

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const nineEigthFour = new Book('1984', 'George Orwell', 316, true);

displayBooks();