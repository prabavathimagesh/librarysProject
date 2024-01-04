import React from "react";

export default function Admin() {
  function BookUpload(event) {
    event.preventDefault();
    let bookid = document.getElementById("bookid").value;
    let bookName = document.getElementById("bookName").value;
    let bookURL = document.getElementById("bookUrl").value;
    let bookrate = document.getElementById("bookRate").value;
    let bookdefinition = document.getElementById("bookDefinition").value;

    var UserObject = {
      bookid: bookid,
      bookName: bookName,
      bookURL: bookURL,
      bookdefinition: bookdefinition,
      bookrate: bookrate,
    };

    if (bookid === "") {
      alert("Enter book id ");
    } else if (bookName === "") {
      alert("Enter book name ");
    } else if (bookURL === "") {
      alert("Enter book URL ");
    } else if (bookdefinition === "") {
      alert("Enter book definition ");
    } else if (bookrate === "") {
      alert("Enter book Rate ");
    } else {
      let Userlocal = JSON.stringify(UserObject);
      // localStorage.setItem(document.getElementById("bookid").value,Userlocal)
      const storedBooksJSON = localStorage.getItem("books");
      const storedBooks = storedBooksJSON ? JSON.parse(storedBooksJSON) : []; 

      // Add the new book to the array
      const newBook = {
        bookid: bookid,
        bookName: bookName,
        bookURL: bookURL,
        bookdefinition: bookdefinition,
        bookrate: bookrate,
      };
      storedBooks.push(newBook);

      // Update localStorage with the modified array
      localStorage.setItem("books", JSON.stringify(storedBooks));
      alert("Book Upload successfully");
      window.location.reload();
    }
  }
  function bookView() {
    window.location.href = "/bookView";
  }

  return (
    <>
      <form className="UserForm" onSubmit={BookUpload}>
        <h1>
          Book <span>Up</span>load
        </h1>
        <div>
          <h5>Book id:</h5>
          <input type="text" id="bookid" placeholder="Book id" />
        </div>
        <div>
          <h5>Book Name:</h5>
          <input type="text" id="bookName" placeholder="Book Name" />
        </div>
        <div>
          <h5>Book URL</h5>
          <input type="text" id="bookUrl" placeholder="Book URL" />
        </div>
        <div>
          <h5>Book rate</h5>
          <input type="text" id="bookRate" placeholder="Book rate" />
        </div>
        <div>
          <h5>Book definition</h5>
          <input
            type="text"
            id="bookDefinition"
            placeholder="Book definition"
          />
        </div>
        <div>
          <button type="submit" className="bg-dark">
            submit
          </button>
          <button type="button" className="bg-dark" onClick={bookView}>
            Book View
          </button>
        </div>
      </form>
    </>
  );
}
