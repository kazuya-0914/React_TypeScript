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

  const handleNest = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ns = e.target.name.split('.');
    setForm(draft => {
      if (ns.length === 1) {
        const key = ns[0] as keyof FormState;
        draft[key] = e.target.value as any;
      } else {
        const outerKey = ns[0] as keyof FormState;
        if (outerKey === 'address') {
          const innerKey = ns[1] as keyof FormState['address'];
          draft.address[innerKey] = e.target.value;
        }
      }
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
          onChange={handleNest} value={form.name} />
      </div>
      <div>
        <label htmlFor="prefecture">住所（都道府県）：</label>
        <input id="prefecture" name="address.prefecture" type="text"
          onChange={handleNest} value={form.address.prefecture} />
      </div>
      <div>
        <label htmlFor="city">住所（市町村）：</label>
        <input id="city" name="address.city" type="text"
          onChange={handleNest} value={form.address.city} />
      </div>

      {/* DOM出力 */}
      <div>
        <button type="button" onClick={show} className="mt-2 btn btn-primary">送信</button>
      </div>
      <div className="mt-4 fw-bold text-danger">{message}</div>
    </form>
  );
}