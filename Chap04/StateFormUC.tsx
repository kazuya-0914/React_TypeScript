import { useRef, useState } from 'react';

export default function Form() {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');

  const show = () => {
    if (name.current && age.current) {
      setMessage(`こんにちは、${name.current.value}（${age.current.value} 歳）さん！`);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" name="name" type="text" ref={name} defaultValue="佐藤理央" />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input id="age" name="age" type="number" ref={age} defaultValue="18" />
      </div>
      <div>
        <button type="button" onClick={show} className="mt-2 btn btn-primary">送信</button>
      </div>
      <div className="mt-4 fw-bold text-danger">{message}</div>
    </form>
  );
}