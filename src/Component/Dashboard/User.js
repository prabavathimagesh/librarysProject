import React, { useEffect, useState } from "react";

export default function User() {
  const[books,setBooks]=useState([])
  useEffect(()=>{
    const storedBooks=localStorage.getItem("books")
    if(storedBooks){
      setBooks(JSON.parse(storedBooks))
      // console.log(books[0].bookid)
    }
  },[])
 
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
     </div>
        </div>
        </>
      ))}
      </main>
    </>
  );
}
