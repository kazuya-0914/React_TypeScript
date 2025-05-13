import { useState } from "react";

type EventMouse = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}

export default function Hello({ beforeSrc, afterSrc, alt }: EventMouse) {
  const [current, setCurrent] = useState(beforeSrc);
  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);

  return (
    <img src={current} alt={alt}
        onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
  )
}

// index.tsx
/*
    <Hello
      alt="ロゴ画像"
      beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
      afterSrc="https://www.web-deli.com/image/home_chara.gif" />
*/