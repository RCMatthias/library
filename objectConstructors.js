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
    //loop over the lib array and send display to the cards 
    const removeDivs = document.querySelectorAll('.bookCard');
        for (let i = 0; i<removeDivs.length; i++) {
            removeDivs[i].remove();
        }
    
let index = 0; 
    myLibrary.forEach((element, index) =>{

        const card = document.createElement("div");
            card.classList.add("bookCard");
            books.appendChild(card);

        const removeBookButton = document.createElement("button");
            removeBookButton.classList.add("removeBookButton");
            removeBookButton.textContent = "Remove from Library";
            removeBookButton.dataset.linkedArray = index; 
            index++;
            card.appendChild(removeBookButton)


        //start event listener/remove array item from ARRAY AND card 
        removeBookButton.addEventListener("click", removeBookFromLibrary)

        function removeBookFromLibrary(){
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            card.remove();
            printBooks();
        }

        //loop over the object keys and values and display to each card
        for (let key in element){
            const para = document.createElement("p");
            para.textContent = (`${key}: ${element[key]}`);
            card.appendChild(para);
        }
    })}

//adding a removebook button
function createRemoveBookButton(){
   
}

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

       /*  let title = element.title;
        let author = element.author;
        let pages = element.pages;
        let read = element.read;
        element.id = index;

        const newDiv = document.createElement("div");
            newDiv.classList.add('bookCard')
            newDiv.setAttribute('data-index',element.id)
            //give the new div a [data-index] that holds its index in the array)
        const newContent = document.createTextNode( ` ${title} by ${author} , ${pages} pages , ${read} `)
        
        newDiv.innerHTML += '<br> <button class="deleteBtn" type ="button" value = "delete" class="delete"> Delete </button> <br> <button class="book-read-btn btn btn-primary">Read</button> '

        newDiv.appendChild(newContent);
        bookDisplay.appendChild(newDiv) */
/*         document.body.insertBefore(newDiv,bookDisplay);
 */