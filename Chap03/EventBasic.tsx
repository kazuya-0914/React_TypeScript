import { useState } from "react";

type EventBasic = {
  type: string;
}

export default function Hello({ type }: EventBasic) {
  const [currentValue, setCurrentValue] = useState('');

  const current = () => {
    const d = new Date();
    let value = '';
    switch(type) {
      case 'date':
        value = d.toLocaleDateString();
        break;
      case 'time':
        value = d.toLocaleTimeString();
        break;
      default:
        value = d.toLocaleString();
        break;
    }
    setCurrentValue(value);
  };

  return (
    <div>
      <button onClick={current} className="mb-2 btn btn-primary">現在時刻を取得</button>
      <div>{currentValue}</div>
    </div>
  )
}