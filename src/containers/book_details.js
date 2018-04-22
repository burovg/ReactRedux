import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
    render()
    {
        if(!this.props.book){
            return(
                <div>Select a book to get the title</div>
            );
        }
        return(
            <div>
                <h3>Selected:</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);