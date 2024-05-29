import { Container, BookList, Book } from "./styles.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/rest/get-book?name=dracula")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setBooks(data.books || []);
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);
    
    return (
        <Container>
            <h1>Books</h1>
            <BookList>
                {books.map((book, index) => (
                    <Book key={book.id}>
                        <Link to={`/details/${book.id}`}><img src={book.image_url} alt={book.title} /></Link>
                        <span>{book.title}</span>
                    </Book>
                ))}
            </BookList>
        </Container>
    );
}

export default Home;
