import React from 'react'
import {Link} from "react-router-dom";
import './App.css'
import Bookshelf from "./Bookshelf";
class ListBooks extends React.Component {
    render() {
        const { books, changeShelf } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf categories="Currently Reading"
                                   books={books.filter(book => book.shelf === "currentlyReading")}
                                   changeShelf={changeShelf}/>
                        <Bookshelf categories="Want to Read"
                                   books={books.filter(book => book.shelf === "wantToRead")}
                                   changeShelf={changeShelf}/>
                        <Bookshelf categories="Read"
                                   books={books.filter(book => book.shelf === "read")}
                                   changeShelf={changeShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to={"/search"}>Add a book</Link>
                </div>
            </div>
        )}
}

export default ListBooks
