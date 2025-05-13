import './EventPropagation.css';

export default function EventPropagation() {
  const handleParent = (e: React.MouseEvent<HTMLDivElement>) => alert('#parent run...');
  const handleMy = (e: React.MouseEvent<HTMLDivElement>) => alert('#my run...');
  const handleChild = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    alert('#child run...');
  };

  return (
  <div id="parent" onClickCapture={handleParent}>
    親要素
    <div id="my" onClickCapture={handleMy}>
      現在要素
      <a id="child" href="https://wings.msn.to" onClickCapture={handleChild}>
      子要素
      </a>
    </div>
  </div>
  );
}