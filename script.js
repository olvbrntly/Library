let bookOne = document.getElementById('book-one');
const newBook = document.getElementById('newBook');
let library = document.getElementById('library');

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
    readInput.setAttribute('value','no');
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
  newBook.disabled = true;

  //exit button is funcitonal
  function closeForm(){
    book.removeChild(form);
    newBook.disabled = false
  }

  //submit button on for adds a new Book in Library array
  function submit(){
    if(document.getElementById('title').value == ""){
      book.removeChild(form);
      newBook.disabled = false
    }
    else{
      let newAdd = new Book(document.getElementById('title').value, document.getElementById('author').value ,document.getElementById('pages').value, document.getElementById('read').value);
      console.log(newAdd);
      myLibrary.push(newAdd);
      book.removeChild(form);
      console.log(`${newAdd.title} and ${newAdd.author}`);
      addBookToLibrary(newAdd);
      newBook.disabled = false
    }
  }

  //form button event listeners
  formExit.addEventListener('click', closeForm);
  formSubmit.addEventListener('click', submit);

};

function addBookToLibrary(libraryBook){
  //makes the individual book div
    let newBookDiv = document.createElement('div');
    newBookDiv.setAttribute('class', 'libraryBook');
   
    //makes the title part of the box
    let bookTitle = document.createElement('div');
    bookTitle.setAttribute('id','bookTitle');
    bookTitle.textContent = `${libraryBook.title}`;

    //makes the author part of the box
    let bookAuthor = document.createElement('div');
    bookAuthor.setAttribute('id','bookAuthor');
    bookAuthor.textContent = `Author: ${libraryBook.author}`;

    //makes the page number part of the box
    let pageNumber= document.createElement('div');
    pageNumber.setAttribute('id','pageNumber');
    pageNumber.textContent = `${libraryBook.pages} pages`;

    //read label and checkbox part
    let readYetLabel = document.createElement('label');
    readYetLabel.setAttribute("for","readYetSwitch")
    readYetLabel.setAttribute("class","switch")
    readYetLabel.textContent = 'Read'

    let readYetSwitch = document.createElement("input");
    readYetSwitch.setAttribute("type","checkbox");
    readYetSwitch.setAttribute('class', 'read');

    //box to put label and checkbox in 
    let readBox=document.createElement('div');
    readBox.setAttribute('id','readBox')
    readBox.appendChild(readYetLabel);
    readBox.appendChild(readYetSwitch);

    //append all to new div box for each book
    newBookDiv.appendChild(bookTitle);
    newBookDiv.appendChild(bookAuthor);
    newBookDiv.appendChild(pageNumber);
    newBookDiv.appendChild(readBox);

    //create x button
    let bookDelete = document.createElement("button");
    bookDelete.setAttribute("id","bookDelete")
    bookDelete.textContent = "X";

    newBookDiv.appendChild(bookDelete);

    //append to webpage
    library.appendChild(newBookDiv);
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



