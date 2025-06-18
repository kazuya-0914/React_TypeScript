import { useDeferredValue, useState } from 'react';

export default function HookDefered() {
  const [text, setText] = useState('');
  const deferText = useDeferredValue(text);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text, deferText);
  };

  return (
    <>
    <input type="text" value={text} onChange={handleChange} />
    {[...Array(10000)].map((e, index) => <p key={index}>{deferText}</p>)}
    </>
  );
}