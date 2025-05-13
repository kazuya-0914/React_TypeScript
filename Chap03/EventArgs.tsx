export default function Hello() {
  const current = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: 'date' | 'time' | 'datetime'
  ) => {
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
      <button id="dt" onClick={e => current(e, 'datetime')}>現在日時</button>
      <button id="date" onClick={e => current(e, 'date')}>現在日付</button>
      <button id="time" onClick={e => current(e, 'time')}>現在時刻</button>
    </div>
  );
}