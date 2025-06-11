import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  label: string;
}

const MyTextBox = forwardRef<{ focus: () => void}, Props>(({ label }, ref)  => {
  const input = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => {
    return {
      focus() {
        input.current?.focus();
      }
    }
  }, []);

  return (
    <label>
      {label}
      <input type="text" size={15} ref={input} />
    </label>
  );
});
export default MyTextBox;