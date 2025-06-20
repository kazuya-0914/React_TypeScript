import { useReducer } from "react";

type Props = {
  init: number;
}

export default function Hook({ init }: Props) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    {
      count: init
    }
  );

  const handleClick = () => {
    dispatch({ type: 'update' });
  }

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}