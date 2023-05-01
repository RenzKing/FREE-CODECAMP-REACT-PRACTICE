import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

///VARIABLES////
const title = `JavaScript: The Definitive Guide: Master the World's Most-Used
  Programming Language`;
const img = `./img/JS2.jpg`;
const author = `David Flanagan`;

/////////////COMPONENTS///////////////////////
const BookList = () => {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="king" number={22} />
    </section>
  );
};

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book job='developer' />
//       <Book title='random title' number={22} />
//     </section>
//   );
// }

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.title}</p>
      <p>{props.job}</p>
      {console.log(props)}
    </article>
  );
};

// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </article>
//   );
// };
/////////////PRINT///////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
