import { useState } from "react";
import StateCounter from "./StateCounter";

type StateParent = {
  init: number;
}

export default function Hello({ init }: StateParent) {
  const [count, setCount] = useState(init);
  const update = (step: number) => setCount(c => c + step);

  return (
  <>
    <p>総カウント：{count}</p>
    <StateCounter step={1} onUpdate={update} />
    <StateCounter step={5} onUpdate={update} />
    <StateCounter step={-1} onUpdate={update} />
  </>
  )
}