import { useLayoutEffect, useState } from "react";

type StateBasic = {
  init: number;
}

const sleep = (delay: number) => {
  const start = Date.now();
  while (true) {
    if (Date.now() - start > delay) { break; }
  }
}

export default function Hook({ init }: StateBasic) {
  const [count, setCount]  = useState(0);

useLayoutEffect(() => {
    sleep(2000);
    setCount(init);
  }, [init]);

  const handleClick = () => {
    setCount(c => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}