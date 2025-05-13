import './SelectStyle.css';
import cn from 'classnames';

type SelectStyle = {
  mode: string;
}

export default function Hello({ mode }: SelectStyle) {
  return (
    <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
      こんにちは、世界！
    </div>
  )
}