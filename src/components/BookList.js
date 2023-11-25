import React, { useEffect, useState } from 'react';
import Books from './Books';
import MoreBooks from './MoreBooks';
import Card from './Card';
import '../styles/BookList.css';

function BookList({searchQuery,search,setSearch}) {
  const [books, setBooks] = useState([]);
  const [card, setCard] = useState('');

  useEffect(() => {
    let fetchBooks = async () => {
      try {
        let response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        let response2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');

        if (!response1.ok && !response2.ok) throw "not Found";

        let data1 = await response1.json();
        let data2 = await response2.json();

        let items1 = data1.items || [];
        let items2 = data2.items || [];

        let booksData = [...items1, ...items2];

        if (search && searchQuery) {
            booksData = booksData.filter((book) =>
              book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.volumeInfo.authors[0].toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        setBooks(booksData);
        console.log(booksData);
      } catch (err) {
        console.error('error :', err);
      }
    };
    fetchBooks();
  }, [search]);

  return (
    <div className='booklist'>
      <div className='booklist__top'>
        {!card && books.length > 0 ? (
            books.slice(0, 3).map((book, index) => (
            <Books
                key={index}
                title={book.volumeInfo.title}
                content={book.volumeInfo.description}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                card={card}
                setCard={setCard}
            />
            ))
        ) : (
            <div>
            {books
                .filter((book) => book.volumeInfo.title.toLowerCase().includes(card.toLowerCase()))
                .map((filteredBook, index) => (
                <Card
                    key={index}
                    title={filteredBook.volumeInfo.title}
                    content={filteredBook.volumeInfo.description}
                    thumbnail={filteredBook.volumeInfo.imageLinks.thumbnail}
                    author={filteredBook.volumeInfo.authors[0]}
                    rating ={Math.floor(Math.random()*10)}
                    pub={filteredBook.volumeInfo.publisher}
                    ln={filteredBook.volumeInfo.language}
                />
                ))}
            </div>
        )}
        </div>

      <div className='more__heading'>
        <h1>More Books Like this</h1>
      </div>
      <div className='booklist__bottom'>
        {books.length > 0 ? (
          books.slice(3).map((book, index) => (
            <MoreBooks
              key={index}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
            />
          ))
        ) : (
          <p>No Books</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
