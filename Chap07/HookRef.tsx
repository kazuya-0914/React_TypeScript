import { useRef, useState } from "react";

export default function Hook() {
  let id = useRef<number | null>(null);
  const [count, setCount]  = useState(0);

  const handleStart = () => {
    if (id.current === null) {
      id.current = window.setInterval(() => {
        setCount(c => c + 1)
      }, 1000);
    }
  };
  const handleEnd = () => {
    if (id.current !== null) {
      clearInterval(id.current);
      id.current = null;
    }
  }

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}