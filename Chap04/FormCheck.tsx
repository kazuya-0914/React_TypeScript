import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    agreement: true
  });
  const [message, setMessage] = useState('');

  const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    setMessage(`同意確認：${form.agreement ? '同意': '反対'}`);
  }

  return (
    <form>
      <label htmlFor="agreement">同意します：</label>
      <input id="agreement" name="agreement" type="checkbox"
        checked={form.agreement}
        onChange={handleFormCheck} /><br />
    <button type="button" onClick={show} className="mt-2 btn btn-primary">送信</button>
    <div className='mt-4 fw-bold text-danger'>{message}</div>
    </form>
  );
}