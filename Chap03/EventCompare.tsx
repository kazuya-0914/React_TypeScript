import { useState } from "react";
import './EventCompare.css';

export default function Hello() {
  const [log, setLog] = useState<string[]>([]);

  const handleIn = (e: React.MouseEvent<HTMLElement>) =>
    setLog(r => [...r, `Enter：${(e.target as HTMLElement).id}`]);
  const handleOut= (e: React.MouseEvent<HTMLElement>) =>
    setLog(r => [...r, `Leave：${(e.target as HTMLElement).id}`]);

  return (
    <>
      <div
        id="outer"
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
      >
        外（outer）
        <p id="inner">
        内（inner）
        </p>
      </div>
      <div>
        {log.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </>
  )
}