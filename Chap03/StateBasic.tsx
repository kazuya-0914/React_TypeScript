import { useState } from "react";

type StateBasic = {
  init: number;
}

export default function Hello({ init }: StateBasic) {
  const [count, setCount] = useState(init);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick} className="mb-2 btn btn-primary">カウント</button>
      <div>{count}回、クリックされました。</div>
    </div>
  )
}