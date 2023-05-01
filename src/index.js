import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/////////////COMPONENTS///////////////////////
const author = `David Flanagan`;
const title = `JavaScript: The Definitive Guide: Master the World's Most-Used
  Programming Language`;

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src="./img/JS2.jpg" alt="Javascript"></img>
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

/////////////PRINT///////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
