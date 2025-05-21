import { useState } from 'react';
import { useImmer } from 'use-immer';

type FormState = {
  name: string;
  address: {
    prefecture: string;
    city: string;
  };
};

export default function Form() {
  // DOM出力
  const [message, setMessage] = useState('');

  // 参考書コード
  const [form, setForm] = useImmer<FormState>({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '榛原町'
    }
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormState;
    if (name === 'name') {
      setForm(draft => {
        draft[name] = e.target.value;
      });
    }
  };

  const handleFormNest = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormState['address'];
    setForm(draft => {
      draft.address[name] = e.target.value;
    });
  };

  const show = () => {
    setMessage(`${form.name}（${form.address.prefecture}・${form.address.city}）`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" name="name" type="text"
          onChange={handleForm} value={form.name} />
      </div>
      <div>
        <label htmlFor="prefecture">住所（都道府県）：</label>
        <input id="prefecture" name="prefecture" type="text"
          onChange={handleFormNest} value={form.address.prefecture} />
      </div>
      <div>
        <label htmlFor="city">住所（市町村）：</label>
        <input id="city" name="city" type="text"
          onChange={handleFormNest} value={form.address.city} />
      </div>

      {/* DOM出力 */}
      <div>
        <button type="button" onClick={show} className="mt-2 btn btn-primary">送信</button>
      </div>
      <div className="mt-4 fw-bold text-danger">{message}</div>
    </form>
  );
}