export default function Hello() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };
  
  return (
    <button onClick={handleClick}>クリック</button>
  );
}