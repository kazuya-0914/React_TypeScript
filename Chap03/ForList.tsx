import React from "react";

type Book = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
  download: boolean;
}

type BookProps = {
  src: Book[];
}

export default function Hello({ src }: BookProps) {
  return (
    <div>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </div>
  )
}