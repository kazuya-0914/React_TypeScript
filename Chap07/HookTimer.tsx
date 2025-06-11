import { useEffect, useState } from "react";
import './HookTimer.css';

type StateBasic = {
  init: number;
}

export default function Hook({ init }: StateBasic) {
  const [count, setCount]  = useState(init);

  useEffect(() => {
    const t = setInterval(() => {
      setCount(c => c - 1);
    }, 1000);
    return () => {
      clearInterval(t);
    }
  }, []);

  return (
    <div className={count < 0 ? 'warn' : ''}>
      現在のカウント：{count}
    </div>
  );
}