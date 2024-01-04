import React, { useEffect, useState } from "react";

export default function BookView() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
      // console.log(books[0].bookid)
    }
  }, []);
  function bookDelete(bookid) {
    const storedBooksJSON = localStorage.getItem("books");
    const storedBooks = storedBooksJSON ? JSON.parse(storedBooksJSON) : [];

    // Find the index of the book with the specified bookId
    const bookIndex = storedBooks.findIndex((book) => book.bookid === bookid);

    // If the book is found, remove it from the array
    if (bookIndex !== -1) {
      storedBooks.splice(bookIndex, 1);

      // Update localStorage with the modified array
      localStorage.setItem("books", JSON.stringify(storedBooks));
      alert("book deleted successfully!")
      window.location.reload()
    }
    else{
      alert("books not available")
    }
  }
  return (
    <>
    <div className="booktitle">
      <h2>Book <span>Vi</span>ew</h2>
    </div>
    <main className="bookViewContainer">
      {books.map((mapBook, m) => (
        <>
        <div className="cardContainer">
          <div>
        <img src={mapBook.bookURL} alt="loading" className="bookimages"/>
        </div>
        <div className="containerContent">
        <p className="bookidtitle">Book Id : {mapBook.bookid}</p>
        <p className="bookName">Book Name : {mapBook. bookName}</p>
        <p>Book Definition : {mapBook. bookdefinition}</p>
          <p className="bookrate">book Rate : {mapBook.bookrate}</p>
          <button type="button" className="bookviewbutton" onClick={() => {
              bookDelete(mapBook.bookid);
            }}>Delete</button>
     </div>
        </div>
          
        </>
      ))}
      </main>
    </>
  );
}
