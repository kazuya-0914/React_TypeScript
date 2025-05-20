import { useRef, useState } from 'react';

export default function Form() {
  const file = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');

  const show = () => {
    const input = file.current;
    if (!input || !input.files) return;

    let msg = '';
    for (const f of Array.from(input.files)) {
      msg += `ファイル名：${f.name}\n`;
      msg += `種類：${f.type}\n`;
      msg += `サイズ：${Math.trunc(f.size / 1024)}KB\n\n`;
    }
    setMessage(msg);
  }

  return (
    <form>
      <input type="file" ref={file} multiple />
      <button type="button" onClick={show} className="mt-2 btn btn-primary">送信</button>
      <pre className="mt-4 fw-bold text-danger">{message}</pre>
    </form>
  );
}