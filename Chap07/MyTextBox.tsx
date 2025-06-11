import { forwardRef } from "react";

type Props = {
  label: string;
}

const MyTextBox = forwardRef<HTMLInputElement, Props>(({ label }, ref)  => {
  return (
    <label>
      {label}
      <input type="text" size={15} ref={ref} />
    </label>
  );
});
export default MyTextBox;