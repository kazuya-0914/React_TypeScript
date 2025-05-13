import { useState } from "react";

type EventError = {
  src: string;
  alt: string;
}

export default function Hello({ src, alt } : EventError) {
  const [path, setPath] = useState(src);
  const handleError = () => setPath('./image/noimage.jpg');
  return (
    <img src={path} alt={alt} onError={handleError} />
  );
}