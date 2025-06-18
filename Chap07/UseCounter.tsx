import { useReducer } from 'react';

type State = {
  count: number;
};

type Action =
  | { type: 'update'; step: number }
  | { type: 'reset'; init: number };

export default function useCounter(
  init: number,
  step: number
): [State, () => void, () => void, () => void] {
  const [state, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case 'update':
          return { count: state.count + action.step };
        case 'reset':
          return { count: action.init };
        default:
          return state;
      }
    },
    {
      count: init,
    }
  );

  const handleUp = () => dispatch({ type: 'update', step });
  const handleDown = () => dispatch({ type: 'update', step: -step });
  const handleReset = () => dispatch({ type: 'reset', init });

  return [state, handleUp, handleDown, handleReset];
}