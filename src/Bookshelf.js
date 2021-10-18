import React from 'react'
import './App.css'
import Books from "./Books";
const Bookshelf = (props) => {
    const { books,categories, changeShelf } = props;
    return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{categories}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book) =>
                    <Books
                        key={book.id}
                        item={book}
                        changeShelf={changeShelf}/>
                )}
            </ol>
        </div>
    </div>
)}

export default Bookshelf;
