export function selectBook(book){
    //console.log('Book is selected: ',book.title);
    return {
        type:'BOOK_SELECTED',
        payload:book
    }
}