export default function StyleBasic() {
  return (
    <>
      <style jsx>{`
        .panel {
          width: 300px;
          padding: 10px;
          border: solid 1px black;
          border-radius: 5px;
          background-color: royalblue;
          color: white;
        }
      `}</style>
      <div className="panel">
        <b>Styled JSX</b>は、JSX式にスタイル定義
      </div>
    </>
  )
}