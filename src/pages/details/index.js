import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';

const BookComponent = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const [detailedBook, setDetailedBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/get-book?id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                return response.json();
            })
            .then(data => {
                if (data.book) {
                    setBook(data.book);
                    setRecommendedBooks(data.recommended_books || []);
                } else {
                    setBook(null);
                    setRecommendedBooks([]);
                }
            })
            .catch(error => {
                console.error('Error fetching the book:', error);
                setBook(null);
                setRecommendedBooks([]);
            });

        fetch(`http://localhost:8000/api/get-recommended-books?id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                return response.json();
            })
            .then(data => {
                setRecommendedBooks(data.recommended_books || []);
            })
            .catch(error => {
                console.error('Error fetching recommended books:', error);
                setRecommendedBooks([]);
            });
    }, [id]);

    const showDetailedBook = (book) => {
        setDetailedBook(book);
    };

    return (
        <Container>
            {book && (
                <div className='book'>
                    <img src={book.image_url} alt={book.synopsis} onClick={() => showDetailedBook(book)} />
                    <div className='details'>
                        <h1>{book.name}</h1>
                        <span>Synopsis: {book.synopsis}</span>
                        <span>Publisher: {book.publisher}</span>
                        <Link to="/">
                            <button>Go back</button>
                        </Link>
                    </div>
                </div>
            )}
            {detailedBook && (
                <div className='detailed-book'>
                    <h2>Detailed Book</h2>
                    <div className='details'>
                        <h1>{detailedBook.name}</h1>
                        <span>Synopsis: {detailedBook.synopsis}</span>
                        <span>Publisher: {detailedBook.publisher}</span>
                    </div>
                </div>
            )}
            {recommendedBooks.length > 0 && (
                <div className='recommended'>
                    <h2>Recommended Books</h2>
                    <div className='recommended-books'>
                        {recommendedBooks.map((recBook, index) => (
                            <div key={index} className='recommended-book'>
                                <Link to={`/book/${recBook.id}`}>
                                    <img src={recBook.image_url} alt={recBook.name} onClick={() => showDetailedBook(recBook)} />
                                    <span>{recBook.name}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    );
};

export default BookComponent;
