import React from 'react'
import './App.css'
import Books from "./Books";
class Bookshelf extends React.Component {
    render() {
        const { books,categories, changeShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{categories}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book)=>
                            <Books
                                   key={book.id}
                                   id={book.id}
                                   title={book.title}
                                   authors ={book.authors}
                                   imageLinks ={book.imageLinks.thumbnail}
                                   status={book.shelf}
                                   changeShelf={changeShelf}/>
                        )}
                    </ol>
                </div>
            </div>
        )}
}

export default Bookshelf
