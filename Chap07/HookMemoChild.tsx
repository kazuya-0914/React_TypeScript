import React, { memo } from 'react'

type MyButtonProps = {
  id: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

type MyCounterProps = {
  id: string;
  value: number;
};

export const MyButton = memo(({ id, handleClick, children }: MyButtonProps) => {
    console.log(`MyButton is called: ${id}`);
  return (
    <button onClick={handleClick}>{children}</button>
  );
});

export const MyCounter = memo(({ id, value }: MyCounterProps) => {
  console.log(`MyCounter is called: ${id}`);
  return (
    <p>現在値：{value}</p>
  );
});