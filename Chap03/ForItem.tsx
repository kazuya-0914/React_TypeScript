type Book = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
  download: boolean;
}

type BookProps = {
  book: Book;
}

export default function ForItem({ book }: BookProps) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
            {book.title}（{book.price}円）
        </a>
      </dt>
      <dd>{book.summary}</dd>
    </>
  );
}

// if文
/*
export default function ForItem({ book }: BookProps) {
  let dd;
  if (book.download) {
    dd = <dd>{book.summary}<Download isbn={book.isbn} /></dd>;
  } else {
    dd = <dd>{book.summary}</dd>;
  }
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
            {book.title}（{book.price}円）
        </a>
      </dt>
      {dd}
    </>
  );
}
*/

// 即時関数
/*
export default function ForItem({ book }: BookProps) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
            {book.title}（{book.price}円）
        </a>
      </dt>
      {(() => {
        if (book.download) {
          return <dd>{book.summary}<Download isbn={book.isbn} /></dd>
        } else {
          return <dd>{book.summary}</dd>
        }
      })()}
    </>
  );
}
*/

// 三項演算子
/*
export default function ForItem({ book }: BookProps) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
            {book.title}（{book.price}円）
        </a>
      </dt>
      <dd>
        {book.summary}
        {book.download ? <Download isbn={book.isbn} /> : null}
      </dd>
    </>
  );
}
*/