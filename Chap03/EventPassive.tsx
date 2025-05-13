import { useRef, useEffect } from 'react';
import './EventPassive.css';

export default function Hello() {
  const handleWheel = (e: WheelEvent) => e.preventDefault();
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    div.addEventListener('wheel', handleWheel, { passive: false });
    return (() => {
      div.removeEventListener('wheel', handleWheel);
    });
  }, []);

  return (
    <div className="box" ref={divRef} >
      たとえばwheelイベントをハンドラーで処理する状況を考えてみましょう。wheelイベントの既定の動作は、ページ／要素のスクロールです。
    </div>
  );
}