import ForItem from "./ForItem";

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
    <dl>
      {src.map(elem =>
        <ForItem book={elem} key={elem.isbn} />
      )}
    </dl>
  )
}