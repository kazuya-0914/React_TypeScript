import { useState } from "react";

export default function Hook() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const callbackRef = (elem : HTMLInputElement | null)=> elem?.focus();

  return (
    <>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input id="email" type="text" />
        <button onClick={handleClick}>拡張表示</button>
      </div>
      {show &&
        <div>
          <label htmlFor="address">住所：</label>
          <input id="address" type="text" ref={callbackRef} />
        </div>
      }
    </>
  );
}