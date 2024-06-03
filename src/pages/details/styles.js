import styled from 'styled-components';

export const Container = styled.div`
 padding: 4rem 0;

 h1 {
    margin: 3rem 0;
 }

 .book {
    display: flex;
    align-items: center;
    justify-content: center;
 }

 img {
    width: 300px;
 }

 .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 50%;
 }

 button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
 }

 button:hover {
    background: #5848c2;
 }

 span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 100%;
 }

 .recommended {
   margin-top: 20px;
 }

 .recommended-books {
   display: flex;
   gap: 20px;
 }

 .recommended-book {
   flex: 1;
   text-align: center;
 }

 .recommended-book img {
   max-width: 100%;
   height: auto;
 }
`;
