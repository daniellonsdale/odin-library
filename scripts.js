const myLibrary = [];
const bookContainer = document.querySelector(".book-container");

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
        
    }
}

function createCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add('.book-card');

    
}