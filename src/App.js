import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import {Redirect, Switch} from "react-router-dom";
import NotFound from "./NotFound";
class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })}

  changeShelf = async (book_id, shelf) => {
      const new_book = await BooksAPI.get(book_id)
      new_book.shelf = shelf
      BooksAPI.update(book_id, shelf).then(result => {
          this.setState( prevState => ({
                  books: prevState.books
                      .filter(book => book.id !== book_id)
                      .concat(new_book)
              }
          ))
      })
  }



  render() {
      const NotFoundRedirect = () => <Redirect to='/not-found' />
    return (
      <div className="app">
          <Switch>
        <Route exact path='/search-books' render={() => (<SearchBooks books={this.state.books} changeShelf={this.changeShelf}/>)}/>
        <Route exact path='/' render={() => (<ListBooks books={this.state.books} changeShelf={this.changeShelf} />)}/>
        <Route path='/not-found' component={NotFound} />
        <Route component={NotFoundRedirect} />
          </Switch>
      </div>
    )
  }
}

export default BooksApp
