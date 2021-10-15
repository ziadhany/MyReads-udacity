import React from 'react'
import './App.css'
class Book extends React.Component {
    updateShelf = event =>{
        this.props.changeShelf(this.props.id, event.target.value);
    }

    render() {
        const { status, imageLinks, title , authors  } = this.props;
        return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 192, backgroundImage: `url(${imageLinks})`}}/>
                    <div className="book-shelf-changer">
                        <select value={status} onChange={this.updateShelf}>
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
