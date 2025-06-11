import { useEffect, useRef } from "react";
import MyTextBox from "./MyTextBox";

export default function Hook() {
  const text = useRef<HTMLInputElement>(null);
  useEffect(() => {
    text.current?.focus();
  }, []);

  return (
    <MyTextBox label="名前" ref={text} />
  );
}