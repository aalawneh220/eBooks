import React from "react";

function Card(props) {
  return props.books.map((book) => {
    return (
      <div className=" m-2">
        <div className="card" style={{ width: " 18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{book.language}</h5>
            <p className="card-text">{book.edition}</p>
            <p>{book.price}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default Card;
