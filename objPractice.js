let myLibrary = [];
let number = 1;

let tester = new Book('George R. R. Martin', 'A Game of Thrones', 694, true)
 myLibrary[0] = tester

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

let addBookToLibrary= function(){

    let title = this.querySelector('input[name="book-title"]').value;
    
    let author = this.querySelector('input[name="author-name"]').value;

    let pages = this.querySelector('input[name="book-pages"]').value;

    let read = this.querySelector('input[name="read"]').checked;
    
    let newBook = new Book(author, title, pages, read);

    myLibrary.push(newBook);
    closeForm();
    this.reset()
    displayBooks();

}



function displayBooks(){

    display.innerHTML = '';
    
    for (let i = 0; i < myLibrary.length; i++) {
    
        let div = document.createElement('div');
        let bookName = document.createElement('h2');
        let author = document.createElement('p');
        let pages = document.createElement('p')
        let read = document.createElement('button');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');


        div.classList.add('cards');
        deleteBtn.textContent = 'Delete';
        div.appendChild(bookName);
        div.appendChild(author);
        div.appendChild(pages)
        div.appendChild(read)
        div.appendChild(deleteBtn);
        div.setAttribute('data-index', i);
        read.addEventListener('click', function(e){
            myLibrary[div.getAttribute('data-index')].read = !myLibrary[div.getAttribute('data-index')].read;
            read.textContent = readStatus(myLibrary[div.getAttribute('data-index')].read);
        })
        deleteBtn.addEventListener('click', function(e){
            const parentOf = e.target.parentElement;
            display.removeChild(parentOf);
            myLibrary.splice(div.getAttribute('data-index'),1);
            updateAttributes();

        })

        display.appendChild(div);

    
        bookName.textContent =`${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        read.textContent = readStatus(myLibrary[i].read)
        
    }
    

        
}

const updateAttributes = function(){
    let cards = document.querySelectorAll('.cards');
    let i = 0;
    cards.forEach(element => {element.setAttribute('data-index', i++);
        
    });
}
const readStatus = function(str){
    if(str == true){
        return 'Read';
    }
    else return 'Not Read'
   
}

const displayForm = function(){
    document.querySelector('.popup').classList.add('active');
}

const closeForm = function(){
    document.querySelector('.popup').classList.remove('active');
}


const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', displayForm);
const closeF = document.querySelector('.close');
closeF.addEventListener('click', closeForm);
submit = document.forms['add-book'];
submit.addEventListener('submit', addBookToLibrary)


const display = document.querySelector('.shelf')


displayBooks();


