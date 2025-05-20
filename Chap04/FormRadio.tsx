import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    os: 'windows'
  });
  const [message, setMessage] = useState('');

  const  handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    setMessage(`使用OS：${form.os}`);
  }

  return (
    <form>
      <fieldset>
        <legend>使用OS：</legend>
        <label htmlFor="os_win">Windows</label>
        <input id="os_win" name="os"
          type="radio" value="windows"
          checked={form.os === 'windows'}
          onChange={handleForm} /><br />
        <label htmlFor="os_mac">macOS</label>
        <input id="os_mac" name="os"
          type="radio" value="mac"
          checked={form.os === 'mac'}
          onChange={handleForm} /><br />
        <label htmlFor="os_lin">Linux</label>
        <input id="os_lin" name="os"
          type="radio" value="linux"
          checked={form.os === 'linux'}
          onChange={handleForm} />
      </fieldset>
    <button type="button" onClick={show} className="my-2 btn btn-primary">送信</button>
    <p>{message}</p>
    </form>
  );
}