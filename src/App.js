import React from 'react'
import { Route } from "react-router";
import {Redirect, Switch} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import NotFound from "./NotFound";

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  async componentDidMount() {
      const books = await BooksAPI.getAll()
      this.setState({books})
  }

  changeShelf = async (book_id, shelf) => {
      if (this.state.books.filter(book => (book.id ===! book_id && book.shelf ===! shelf))){
          const new_book = await BooksAPI.get(book_id)
          new_book.shelf = shelf
          if (shelf !== 'none'){
              BooksAPI.update({id:book_id}, shelf).then(result => {
                  this.setState( prevState => ({
                          books: prevState.books
                              .filter(book => book.id !== book_id)
                              .concat(new_book)
                      }
                  ))
              })
          }
          else {
              this.setState( prevState => ({
                  books: prevState.books
                      .filter(book => book.id !== book_id)
                      .concat(new_book)
              }))
          }
      }
  }



  render() {
      const NotFoundRedirect = () => <Redirect to='/not-found' />
    return (
      <div className="app">
          <Switch>
        <Route exact path='/search' render={() => (<SearchBooks books={this.state.books} changeShelf={this.changeShelf}/>)}/>
        <Route exact path='/' render={() => (<ListBooks books={this.state.books} changeShelf={this.changeShelf} />)}/>
        <Route path='/not-found' component={NotFound} />
        <Route component={NotFoundRedirect} />
          </Switch>
      </div>
    )
  }
}

export default BooksApp
