export default function Hello() {
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === 'q') {
      alert('名前は20文字以内で入力してください。');
    }
  };

  return (
    <form>
      <label>
        名前：
        <input type="text" size={20} onKeyDown={handleKey} />
      </label>
    </form>
  );
}