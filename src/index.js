import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

///VARIABLES////

const firstBook = {
  author: "Expert Insight",
  title: "Javascript from beginer to professional",
  img: "./img/JS2.jpg",
};

const secondBook = {
  author: `David Flanagan`,
  title: `JavaScript: The Definitive Guide: Master the World's Most-Used
  Programming Language`,
  img: `./img/JS1.jpg`,
};

/////////////COMPONENTS///////////////////////

//BOOK LIST//
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

//BOOK//
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

/////////////PRINT///////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
