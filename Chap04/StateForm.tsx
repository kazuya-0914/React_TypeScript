import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    name: '山田太郎',
    age: 18
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const show = () => {
    console.log(`こんにちは、${form.name}（${form.age} 歳）さん！`);
  };

  return (
      <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" name="name" type="text" onChange={handleForm} value={form.name} />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input id="age" name="age" type="number" onChange={handleForm} value={form.age} />
      </div>
      <div>
        <button type="button" onClick={show} className="mt-2 btn btn-primary">送信</button>
      </div>
      <div className="mt-4 fw-bold text-danger">こんにちは、{form.name}（{form.age} 歳）さん！</div>
    </form>
  );
}