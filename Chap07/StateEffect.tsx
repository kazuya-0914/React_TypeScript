import { useEffect, useState } from "react";

type StateBasic = {
  init: number;
}

export default function Hook({ init }: StateBasic) {
  const [count, setCount]  = useState(init);
  const [hoge, setHoge] = useState('hoge');
  useEffect(() => {
    console.log(`count is ${count}.`);
  }, [count]);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={() => setHoge(Date.now().toString())}>Hoge ({hoge})</button>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}