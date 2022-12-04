//blank array
let myLibrary = [];

//object constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
 
}

//function to add new book to array 
function addBookToLibrary(Title, Author, Pages, Read){
    let newBook = new Book (Title, Author, Pages, Read)
    myLibrary.push(newBook)
    printBooks();
}

/* addBookToLibrary("The Hobbit", "295", "JRR Tolkien", "Not read yet")
addBookToLibrary("The Habbit", "295", "JRR Tolkien", "Not read yet") */
/* addBookToLibrary("The Hibbit", "295", "JRR Tolkien", "Not read yet")
addBookToLibrary("The Hebbit", "295", "JRR Tolkien", "Not read yet") */

function printBooks(){
    const books = document.querySelector(".bookDisplay");
  
  
  const removeDivs = document.querySelectorAll('.bookCard');
        for (let i = 0; i<removeDivs.length; i++) {
            removeDivs[i].remove();
        }
    let index = 0; 
    myLibrary.forEach((element) =>{

        const card = document.createElement("div");
            card.classList.add("bookCard");
            books.appendChild(card);

        const removeBookButton = document.createElement("button");
            removeBookButton.classList.add("removeBookButton");
            removeBookButton.textContent = "Remove from Library";
            removeBookButton.dataset.linkedArray = index; 
            card.appendChild(removeBookButton)


        //start event listener/remove array item from ARRAY AND card 
        removeBookButton.addEventListener("click", removeBookFromLibrary)

        function removeBookFromLibrary(){
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            card.remove();
            printBooks();
            console.table(myLibrary)
        }

        //start event listener/add button to toggle Read status 

        const readStatusButton = document.createElement("button");
        readStatusButton.classList.add("readStatusButton");
        readStatusButton.textContent="Toggle Read Status";
        
        readStatusButton.dataset.linkedArray = index;
        card.appendChild(readStatusButton);
        
        readStatusButton.addEventListener("click", toggleReadStatus)
        
        function toggleReadStatus(){
            let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book(); 
            let Read = document.getElementById('read').checked;

            if ((myLibrary[parseInt(retrieveBookToToggle)].Read == true)) {
                toggleBook.Read = false ;
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            } else if ((myLibrary[parseInt(retrieveBookToToggle)].Read) == false){
                toggleBook.Read = true;
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            }
            printBooks();
        }


        //loop over the object keys and values and display to each card
        for (let key in element){
            const para = document.createElement("p");
            para.textContent = (`${key}: ${element[key]}`);
            card.appendChild(para);
        }
        index++;
    })}


//display the form when clicking "add new book"
const addBookButton = document.querySelector(".addBookButton")
const displayForm = () => {
    document.getElementById("addBookForm").style.display="";
}
addBookButton.addEventListener("click", displayForm);



//start event listener/add input to array for new entry form
const submitButton = document.getElementById("add")
submitButton.addEventListener("click", intakeFormData)


function intakeFormData(){
    let Title = document.getElementById('title').value;
    let Author = document.getElementById('author').value;
    let Pages = document.getElementById('pages').value; 
    let Read = document.getElementById('read').checked;
    console.log(Read)
    //Breakout if form not filled
    if ((Title == "") || (Author == "") || (Pages =="") ){
        return
    }
    //call function to input the data to array
    addBookToLibrary(Title, Author, Pages, Read);
    console.table(myLibrary)
    //reset the form after successful submission
    document.getElementById("resetButton").reset;

}  


//start event listener for clear form button
const clearButton = document.querySelector('#resetButton');
clearButton.addEventListener("click", clearForm);
function clearForm(){
    document.getElementById("resetButton");
}
