const book = {
    title: 'A',
    year: 'B',
    author: 'C',
    theme: 'D'
}

console.log(book.title, book.theme)


function makeBook(title, pages, author, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read, 
    this.info = function(){
        return ( ` ${title} by ${author} , ${pages} pages , ${read} `   )
    }
}

const TheHobbit = new makeBook('The Hobbit', '295','J.R.R. Tolkien', 'not read yet')
console.log(TheHobbit.info())


const 
//constructor


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


