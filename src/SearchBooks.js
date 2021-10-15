import React from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Books from "./Books";

class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result:[],
            query: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({query: event.target.value});
        BooksAPI.search(event.target.value).then((result) => {
            this.setState({result})
        })}
    render(){
        return(
        <div className="search-books">
        <div className="search-books-bar">
            <Link className="close-search" to={"/"}>Close</Link>
            <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                {this.state.result.map(item => (
                    <Books title={item.title}
                           authors ={item.authors}
                           imageLinks={item.imageLinks.thumbnail}
                           key={item.id}
                           id={item.id}
                           changeShelf={this.props.changeShelf}/>
                ))}
            </ol>
        </div>
        </div>
        )}
}


export default SearchBooks