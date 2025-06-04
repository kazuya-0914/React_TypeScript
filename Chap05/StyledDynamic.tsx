type Theme = {
  radius: boolean;
  color: string;
};

type Props = {
  theme: Theme;
};

export default function StyleBasic({ theme }: Props) {
  return (
    <>
      <style jsx>{`
      .panel {
        width: 300px;
        padding: 10px;
        border: solid 1px black;
        color: white;
      }`
      }</style>
      <style jsx>{`
      .panel {
        border-radius: ${theme.radius ? '10px' : '0px'};
        background-color: ${theme.color};
      }`
      }</style>
      <div className="panel">
        <b>Styled JSX</b>は、JSX式にスタイル定義
      </div>
    </>
  )
}