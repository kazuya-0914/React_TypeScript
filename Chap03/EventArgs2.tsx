export default function Hello() {
  const current = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.dataset.type;
    const d = new Date();
    switch(type) {
      case 'date':
        console.log(`${e.currentTarget.id}: ${d.toLocaleDateString()}`);
        break;
      case 'time':
        console.log(`${e.currentTarget.id}: ${d.toLocaleTimeString()}`);
        break;
      default:
        console.log(`${e.currentTarget.id}: ${d.toLocaleString()}`);
        break;
    }
  };
  return (
    <div>
      <button id="dt" data-type="datetime" onClick={current}>現在日時</button>
      <button id="date" data-type="date" onClick={current}>現在日付</button>
      <button id="time" data-type="time" onClick={current}>現在時刻</button>
    </div>
  );
}