import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    radius: boolean;
    color: string;
  }
}

type Theme = {
  radius: boolean;
  color: string;
};

type Props = {
  theme: Theme;
};

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  color: white;
  border-radius: ${ props => (props.theme.radius ? '10px' : '0px') };
  background-color: ${ props => props.theme.color };
`;

export default function StyledProps({ theme }: Props) {
  return (
    <MyPanel theme={{
      radius: true,
      color: 'royalblue'
    }}><b>Styled JSX</b>は、JSX式にスタイル定義を埋め込む形式のライブラリです。</MyPanel>
  );
}

// index.tsx
/*
const theme = {
  radius: true,
  color: 'royalblue'
};

root.render(
  <React.StrictMode>
    <StyledProps theme={theme}/>
  </React.StrictMode>
);
*/