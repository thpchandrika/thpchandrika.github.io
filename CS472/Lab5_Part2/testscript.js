"use strict";

describe('Library Book Test Suite', function () {
    let originalLibraryBookArray;
    // Create a hook to save the original libraryBooks array before each test
    beforeEach(function () {
        originalLibraryBookArray = JSON.parse(JSON.stringify(libraryBooks)); // Deep copy
    });

    // Restore the original libraryBooks array after each test
    afterEach(function () {
        libraryBooks = JSON.parse(JSON.stringify(originalLibraryBookArray)); // Deep copy
    });

    it('should add a book to the library', function () {
        const addedBook = addBook("New Book", "New Author", 1234);
        const expectedAddedBook = { title: "New Book", author: "New Author", libraryID: 1234 };
        assert.deepEqual(addedBook, expectedAddedBook); //assert is made global
        assert.isTrue(libraryBooks.includes(addedBook));
    });

    it('should get all the titles of book in an alphabetical order', function () {
        const titles = getTitles();
        const expectedTitles = ["Mockingjay: The Final Book of The Hunger Games",
            "The Road Ahead", "The Road Ahead", "Walter Isaacson"];
        assert.deepEqual(titles, expectedTitles);
    });

    it('should find all books containing the keyword in the title, ordered by author', function () {
        const foundBooks = findBooks("The");
        const expectedFoundBooks = [
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
            { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 },
            { title: "The Road Ahead", author: "Till Gates", libraryID: 1235 },
        ];
        assert.deepEqual(foundBooks, expectedFoundBooks);
    });
});
