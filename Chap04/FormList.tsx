import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  });
  const [message, setMessage] = useState('');

  const  handleFormList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = [];
    const opts = e.target.options;
    for (const opt of Array.from(opts)) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    setForm({
      ...form,
      [e.target.name]: data
    })
  }

  const show = () => {
    setMessage(`好きな動物：${form.animal}`);
  }

  return (
    <form>
      <label htmlFor="animal">好きな動物：</label><br />
      <select id="animal" name="animal"
        value={form.animal}
        size={4} multiple={true}
        onChange={handleFormList}>
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="hamster">ハムスター</option>
        <option value="rabbit">ウサギ</option>
      </select>
      <button type="button" onClick={show} className="mt-2 btn btn-primary">送信</button>
      <div className="mt-4 fw-bold text-danger">{message}</div>
    </form>
  );
}