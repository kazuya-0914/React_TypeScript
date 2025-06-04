import React from 'react';
import styled from 'styled-components';

type MyButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function MyButton({ className, children }: MyButtonProps) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

export const MyStyledButton = styled(MyButton)`
  display: block;
  background-color: royalblue;
  color: white;
  font-weight: bold;
  width: 80px;
  height: 50px;
  margin-top: 1rem;
`;