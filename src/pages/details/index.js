import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Importing the Link component
import { Container } from './styles';

const BookComponent = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/get-book?id=${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.book) {
                setBook(data.book);
            } else {
                setBook(null);
            }
        })
        .catch(error => console.error('Error fetching the book:', error));
    }, [id]);

    return (
        <Container>
            {book && (
                <div className='book'>
                    <img src={book.image_url} alt={book.synopsis}/>
                    <div className='details'>
                        <h1>{book.name}</h1>
                        <span>Synopsis: {book.synopsis}</span>
                        <span>Release: {book.publisher}</span>
                        <Link to="/">
                            <button>Go back</button>
                        </Link>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default BookComponent;
