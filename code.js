function makeBook(title, pages, author, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read, 
    this.info = function(){
        return ( ` ${title} by ${author} , ${pages} pages , ${read} `   )
    }
}
let myLibrary = [];

const TheHobbit = new makeBook('The Hobbit', '295','J.R.R. Tolkien', 'not read yet')
const animalFarm = new makeBook('Animal Farm', '68','George Orwell', 'read')
const theRoad = new makeBook('The Road', '180','Cormac McCarthy', 'read')

myLibrary.push(theRoad, TheHobbit, theRoad)
myLibrary.push(new makeBook('x', 'y', 'z', 'x'))


console.table(myLibrary)



document.addEventListener("DOMContentLoaded",() => {
    createForm();
})

function createForm(){
    let bookForm = document.getElementById("book");
    bookForm.innerHTML = 
`<form method="post"> 
    <label for="title"> Title: </label>
    <input type="text" name="title" id="title" oninvalid="this.setCustomValidity('Title cannot be blank')" required placeholder="Book title"><br>
    <input type="checkbox" id="read" name="read" value="read" checked>
    <label for="read">Read?</label>
    <button type ="button" value = "submit"> Submit </button>
    <button type="reset">Reset</button>

</form>`
}

/* 
${title.value}
 */


//constructor
function Book(title, pages, author, read) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
}

const bookTitle = `<li>Name: ${data.title}</li>`
const bookPages = `<li>Pages: ${data.pages}</li>`
const bookAuthor = `<li>Author: ${data.author}</li>`
const bookRead = `<li>Read: ${data.read}</li>`
console.log(bookTitle)


//ADD PREVENTDEFAULT TO EVENTLISTENER FOR SUBMIT BUTTON;
// then let the submitbutton act as we want it through eventlistener


//do stuff here (user 's input gets stored into an array (using a form in HTML))
function addBooktoLibrary(){
    //user input


    let newBook = {
        title: bookTitle,
        pages:bookPages,
        author: bookAuthor,
        read: bookRead,
    }
    //(use template literals to access the DOM! )

    //push to array mylibrary
    myLibrary.push(newBook)
}


//(use template literals to access the DOM! )



//function that loops through the array and displays each book on the page. 
//they can be in their own "cards" e.g. GRID 
//FIRST: add a few books manually  (to array) so we can see the display 





//add a "NEW BOOK" button that brings up a form allowing users to input details for a new book:
//author, title, pages, read
//the "submit" input type tries to send data to a server by default; workaround this! 
//event.preventDefault() (research)






//add a button on each book's display to remove it from the library
//Associate the DOM elements with the actual book objects in some way
//give them a data-attribute that corresponds to the index of the lib array






//add a button on each book's display to change its read status (checkmark)
//create a function that toggles the book's read status in the "book" prototype instance!


