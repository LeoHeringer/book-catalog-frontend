import { Container, BookList, Book } from "./styles.js";
import { useEffect, useState } from "react";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/rest/get-book?name=dracula")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta da rede');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setBooks(data.books || []);
            })
            .catch(error => console.error('Erro ao buscar os livros:', error));
    }, []);
    
    return (
        <Container>
            <h1>Books</h1>
            <BookList>
                {books.map((book, index) => (
                    <Book key={index}>
                        <a href="https://bibliotecasaavedra.com.br/products/dracula-bram-stoker-nova-cultural?variant=41965203489012&currency=BRL&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNe5HP1F4wfyoToz4f35Nxrx5ko4PznKxTiPhkAokQHIj8bFfqM9rphoCrnEQAvD_BwE">
                            <img src={book.image_url} alt={book.title} />
                        </a>
                        <span>{book.title}</span>
                    </Book>
                ))}
            </BookList>
   
        </Container>

    );
    
    
}

export default Home;
