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
