let bookOne = document.getElementById('book-one');
const newBook = document.getElementById('newBook');
let library = document.getElementById('library');

let myLibrary=[]

class Book{
  constructor(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = Boolean(read);
  }
};

const theHobbit =new Book('The Hobbit', 'J.R.R Tolkien', '295', 'read');

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
    readInput.setAttribute('value','false');
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
    function submit(event){
      if(document.getElementById('title').value == ""){
        book.removeChild(form);
        newBook.disabled = false
      }
      else{
        let newAdd = new Book(document.getElementById('title').value, document.getElementById('author').value ,document.getElementById('pages').value, document.getElementById('read').value);
        validate(newAdd);
        console.log(newAdd);
        myLibrary.push(newAdd);
        book.removeChild(form);
        // console.log(`${newAdd.title} and ${newAdd.author}`);
        addBookToLibrary(newAdd);
        newBook.disabled = false;
        event.preventDefault();
      
      }
    }

    //form button event listeners
    formExit.addEventListener('click', closeForm);
    formSubmit.addEventListener('click', submit);
    
};

//checks if the checkbox is clicked when submitting form
function validate(newAdd){
  let readInput = document.getElementById("read");
  if(readInput.checked == true){
    readInput.removeAttribute('value','false')
    readInput.setAttribute('value','true')
    newAdd.read = true;
  }else{
    readInput.removeAttribute('value','true')
    readInput.setAttribute('value','false');
    newAdd.read = false;
  }
  console.log(readInput.value);
}

function addBookToLibrary(libraryBook){
  //makes the individual book div
  //makes id the index of the library array
    let newBookDiv = document.createElement('div');
    newBookDiv.setAttribute('class', 'libraryBook');
    newBookDiv.setAttribute('id', myLibrary.indexOf(libraryBook));

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
    let readButton = document.createElement("button");
    readButton.setAttribute('class','readButton');
    readButton.textContent =" Not Read Yet";

     //create x button
    let bookDelete = document.createElement("button");
    bookDelete.setAttribute("id","bookDelete");
    bookDelete.textContent = "X";

    //append all to new div box for each book
    newBookDiv.appendChild(bookTitle);
    newBookDiv.appendChild(bookAuthor);
    newBookDiv.appendChild(pageNumber);
    newBookDiv.appendChild(readButton);
    newBookDiv.appendChild(bookDelete);

    //append to webpage
    library.appendChild(newBookDiv);

    //deletes a book from the display and array
    bookDelete.addEventListener('click', () =>{
      myLibrary.splice(myLibrary.indexOf(libraryBook),1);
      makeBook();
    });

    //  changes read status in object
    readButton.addEventListener('click', ()=>{
      libraryBook.read = !libraryBook.read;
      makeBook();
    });

    //gives the read button styling according to read or not
    if(libraryBook.read === true){
      readButton.textContent = "Read";
      readButton.classList.add("yes");
      readButton.classList.remove("no");
    }else{
      readButton.textContent = "Not Read";
      readButton.classList.add("no");
      readButton.classList.remove("yes");
    }
  }   

  //remakes the books in order to maintain index ID
  function makeBook(){
    let library = document.getElementById('library');
    let books = document.querySelectorAll('.libraryBook');
    books.forEach(book => library.removeChild(book));

      for(let i =0; i<myLibrary.length; i++){
        addBookToLibrary(myLibrary[i]);
      }
  }

