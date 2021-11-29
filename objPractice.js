let myLibrary = [];
let number = 1;

let tester = new Book('George R. R. Martin', 'A Game of Thrones', 694, 'on')
 myLibrary[0] = tester

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    if(read=='on'){
        this.read = true;
    }
    else{
        this.read = false;
    } 

}

let addBookToLibrary= function(){

    let title = this.querySelector('input[name="book-title"]').value;
    
    let author = this.querySelector('input[name="author-name"]').value;

    let pages = this.querySelector('input[name="book-pages"]').value;

    let read = this.querySelector('input[name="read"]').value;
    
    let newBook = new Book(author, title, pages, read);

    myLibrary.push(newBook);
    console.log(myLibrary)
    closeForm();
    this.reset()
    displayBooks();

}



function displayBooks(){

    display.innerHTML = '';
    
    for (let i = 0; i < myLibrary.length; i++) {
    
        let div = document.createElement('div');
        let bookName = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p')
        let read = document.createElement('button');
        let deleteBtn = document.createElement('button');


        console.log(bookName)

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
            console.log (!myLibrary[div.getAttribute('data-index')].read);
            read.textContent = readStatus(myLibrary[div.getAttribute('data-index')].read);
        })
        display.addEventListener('click', function(e){
            console.log(e.target.parentElement.getAttribute('data-index'));
            if(e.target.textContent == 'Delete'){
                const parentOf = e.target.parentElement;
                // if(parentOf){
                    console.log(parentOf,display)
                    display.removeChild(parentOf);

                // }
                myLibrary.splice(div.getAttribute('data-index'),1);
                updateAttributes();
        }
        })

        display.appendChild(div);

    
        bookName.textContent =`Title: ${myLibrary[i].title}`;
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


