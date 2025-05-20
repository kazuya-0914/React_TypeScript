import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    animal: 'dog'
  });
  const [message, setMessage] = useState('');

  const  handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    setMessage(`コメント：${form.animal}`);
  }

  return (
    <form>
      <label htmlFor="animal">好きな動物：</label>
      <select id="animal" name="animal"
        value={form.animal}
        onChange={handleForm}>
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="hamster">ハムスター</option>
        <option value="rabbit">ウサギ</option>
      </select>
      <button type="button" onClick={show}>送信</button>
      <p>{message}</p>
    </form>
  );
}