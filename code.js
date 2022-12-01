// button eventlistener for create book
const addBtn = document.querySelector('.add');
console.log(addBtn)
addBtn.addEventListener('click', event => {
    addBooktoLibrary();
});

const bookDisplay = document.querySelector('.bookDisplay')



/* 
${title.value}
 */
let myLibrary = [];

//      LIB TESTING
const TheHobbit = new Book('The Hobbit', '295','J.R.R. Tolkien', 'not read yet')
const animalFarm = new Book('Animal Farm', '68','George Orwell', 'read')
const theRoad = new Book('The Road', '180','Cormac McCarthy', 'read')

myLibrary.push(theRoad, TheHobbit, theRoad)
myLibrary.push(new Book('x', 'y', 'z', 'x'))

console.table(myLibrary)
printBooks()

//show cards 
/* into a div 
 */

function printBooks(){
    myLibrary.forEach((element) =>{
        let title = element.title;
        let author = element.author;
        let pages = element.pages;
        let read = element.read;

        const newDiv = document.createElement("div");
        newDiv.classList.add('bookCard')
        const newContent = document.createTextNode( ` ${title} by ${author} , ${pages} pages , ${read} `)
        newContent.innerHTML += '<li>'
        /*         newContent.innerHTML += `${title} <br> by ${author} , ${pages} pages , ${read} `;
 */
        newDiv.appendChild(newContent);
        document.body.insertBefore(newDiv,bookDisplay);

        <button type ="button" value = "add" class="add"> Add </button>

        //add delete button (delete from dom + delete form mylibrary array 
        //WHEN DELETING (from array): RERUN PRINTBOOK FUNC! 
/*         bookDisplay.innerHTML += ` ${title} by ${author} , ${pages} pages , ${read} `
 */        //create separate div for each element 
    }
)
}
//create card per object in array
//print array value to screen


// make new book 


function addBooktoLibrary(){
    //user input
    let inputTitle = document.querySelector('#title');
    let inputAuthor = document.querySelector('#author');
    let inputPages = document.querySelector('#pages');

    let newBook = Object.create(Book);
    newBook.title = inputTitle.value;
    newBook.author = inputAuthor.value;
    newBook.pages = inputPages.value;

    myLibrary.push(newBook)
    console.log(myLibrary)
    inputTitle.value = ""
    inputAuthor.value = ""
    inputPages.value = ""
    printBooks(); 

}


//prototype Book constructor
function Book(title, pages, author, read) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
}


/* function book(title, pages, author, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read, 
    this.info = function(){
        return ( ` ${title} by ${author} , ${pages} pages , ${read} `   )
    }
}; */





//ADD PREVENTDEFAULT TO EVENTLISTENER FOR SUBMIT BUTTON;
// then let the submitbutton act as we want it through eventlistener


//do stuff here (user 's input gets stored into an array (using a form in HTML))


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


