import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{


    renderBooks(){
        return this.props.books.map((book) => {
            return <li 
                        className="list-group-item" 
                        key={book.titile}
                        onClick={() => this.props.selectBook(book)}
                    >
                            {book.title}
                    </li>;
        });
    }

    render()
    {
        return(
            <ul 
            className="list-group col-sm-4"
            >
                {this.renderBooks()}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch);
}

function connectStateToProps(state){
    console.log('mapping');
    return {
        books : state.books
    };
}

export default connect(connectStateToProps,mapDispatchToProps)(BookList);