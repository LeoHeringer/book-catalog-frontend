import { Container, BookList, Book } from "./styles.js";

function Home () {
    
    const books = [
        {
            id: 1,
            title: 'Dracula',
            image_url: 'https://m.media-amazon.com/images/I/51Mg0vMecsL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 2,
            title: 'Le',
            image_url: 'https://m.media-amazon.com/images/I/51Mg0vMecsL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 3,
            title: 'Lu',
            image_url: 'https://m.media-amazon.com/images/I/51Mg0vMecsL._AC_UF1000,1000_QL80_.jpg'       
        }

    ]
    return (
        <Container>
        <h1>Books</h1>
        <BookList>
            {books.map(books => {
                return (
                    <Book>
                        <a href="https://google.com.br"><img src={books.image_url} all={books.title}/></a>
                        <span>{books.title}</span>
                    </Book>
                )
            })}
        </BookList>
        </Container>

    )
}

export default Home;