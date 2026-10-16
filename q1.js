
let book = ["BK-104", "JavaScript for Beginners", "Programming", 1200]

let [bookId , bookTitle ,  , price] = book

let book2 = ["BK-105", "Learning ES6"]

let {bookID2 , booktitle2 , category = "general"} = book2

    console.log("book ID:" , bookId , "Book Title:" , bookTitle , "price:" , price);
    console.log("Book ID:" , bookID2 , "Book Title:" , booktitle2 , "Category" , category);











