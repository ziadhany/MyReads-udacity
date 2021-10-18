import React from 'react'
import './App.css'
class Book extends React.Component {
    updateShelf = event =>{
        this.props.changeShelf(this.props.item.id, event.target.value);
    }

    render() {
        const { imageLinks , title , authors } = this.props.item;
        return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 192, backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : 'https://http.cat/404'})`}}/>
                    <div className="book-shelf-changer">
                        <select onChange={this.updateShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read </option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
        )}
}

export default Book
