let bookOne = document.getElementById('book-one');
const newBook = document.getElementById('newBook');

let myLibrary=[]

function Book(title, author, pages, read){
  //the constructor
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

const theHobbit =new Book('The Hobbit', 'J.R.R Tolkien', '295', 'read');

//bookOne.textContent = `${theHobbit.title} is written by ${theHobbit.author}. It has ${theHobbit.pages} pages and I have ${theHobbit.read} it.`

newBook.addEventListener('click', getForm);

let book = document.getElementById('book');

//THE FORM ------

function getForm(){

  let book = document.getElementById('book');

  //make form parent
    let form = document.createElement('form')
    form.setAttribute("class","form")
    form.setAttribute("method", "post");
    form.setAttribute("action","javascript:submit()");

    //create title input
    let titleLabel = document.createElement('label');
    titleLabel.setAttribute("for","title")
    titleLabel.textContent ='Book Title: '

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("id","title");

    //create author input
    let authorLabel = document.createElement('label');
    authorLabel.setAttribute("for","author")
    authorLabel.textContent ='Author: '

    let authorInput = document.createElement("input");
    authorInput.setAttribute("type","text");
    authorInput.setAttribute("id","author");

    //create pages input
    let pagesLabel = document.createElement('label');
    pagesLabel.setAttribute("for","pages")
    pagesLabel.textContent ='Page Number: '

    let pagesInput = document.createElement("input");
    pagesInput.setAttribute("type","number");
    pagesInput.setAttribute('min','0');
    pagesInput.setAttribute("id","pages");

    //create read input
    let readLabel = document.createElement('label');
    readLabel.setAttribute("for","read")
    readLabel.textContent ='Read: '

    let readInput = document.createElement("input");
    readInput.setAttribute("type","checkbox");
    readInput.setAttribute('value','yes');
    readInput.setAttribute("id","read");

    //create x button
    let formExit = document.createElement("button");
    formExit.setAttribute("id","formExit")
    formExit.textContent = "X";

    let formSubmit = document.createElement("button");
    formSubmit.setAttribute("id","formSubmit")
    formSubmit.textContent = "SUBMIT";
    
    //appending title
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    //appending:author
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    //appending pages
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    //appending read
    form.appendChild(readLabel);
    form.appendChild(readInput);

    //append buttons
    form.appendChild(formExit);
    form.appendChild(formSubmit);
  
  book.appendChild(form);

  //exit button is funcitonal
  function closeForm(){
    book.removeChild(form);
  }

  //submit button on for adds a new Book in Library array
  function submit(){
    let newAdd = new Book(document.getElementById('title').value, document.getElementById('author').value ,document.getElementById('pages').value, document.getElementById('read').value);
    console.log(newAdd);
    myLibrary.push(newAdd);
    book.removeChild(form);
  }

  //form button event listeners
  formExit.addEventListener('click', closeForm);
  formSubmit.addEventListener('click', submit);

};

function addBookToLibrary(){
  
}



// function addBookToLibrary() {
//   //do stuff here
// }

//all book objescts stores in a simple array so add a function that can take user inpout and sort the new book objects into an array


//function that loops through array and dispolays each book on the page

//display in some sort or table or each on their own card

//add new book button that breings up a form allowing users to input the details for the new book


//add button on each book dispolay that will remove book from library

//associate your Dom elements with the actual objects in some way
//one way is giving data attribute that correpsods to index of library array
//add button that will change the read status
//want to create a function that toggles a books read status on book prototype

//not required to add any storage. will come back for that



