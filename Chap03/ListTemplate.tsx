import React from 'react';

type Book = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
  download: boolean;
}

type ListTemplate = {
  src: Book[];
  children: (elem: Book) => React.ReactNode; 
}

export default function Hello({ src, children }: ListTemplate) {
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          {children(elem)}
        </React.Fragment>
      ))}
    </dl>
  )
}
// レンダープロップ
/*
import React from 'react';

type Book = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
  download: boolean;
}

type ListTemplate = {
  src: Book[];
  render: (elem: Book) => React.ReactNode; 
}

export default function Hello({ src, render }: ListTemplate) {
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          {render(elem)}
        </React.Fragment>
      ))}
    </dl>
  );
}
*/

// index.tsx
/*
root.render(
  <React.StrictMode>
    <Hello src={books}>
      {elem => (
        <>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      )}
    </Hello>
  </React.StrictMode>
);
*/

// レンダープロップ
/*
root.render(
  <React.StrictMode>
    <Hello src={books} render=
      {elem => (
        <>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      )} />
  </React.StrictMode>
);
*/