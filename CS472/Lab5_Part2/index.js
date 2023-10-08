"use strict";

let libraryBooks = [
    { title: "The Road Ahead", author: "Till Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

function addBook(title, author, libraryID) {
    const book = { title, author, libraryID };
    libraryBooks.push(book);
    return book;
}

function getTitles() {
    return libraryBooks.map(obj => obj.title).sort();
}

function authorCompare(book1, book2) {
    if (book1.author > book2.author) return 1;
    else if (book1.author === book2.author) return 0;
    else
        return -1;
}

function findBooks(titlekeyword) {
    return libraryBooks.filter(book => book.title.includes(titlekeyword)).sort(authorCompare);
}

// //alternate findBooks()
// function findBooks(keyword) {
//     const filteredBooks = libraryBooks.filter(book => book.title.includes(keyword));
//     const sortedBooks = filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
//     return sortedBooks;
// }



// console.log(addBook("titl", "author", 4543));
// console.log(libraryBooks)
// console.log(findBooks("The"));