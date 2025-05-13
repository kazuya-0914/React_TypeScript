import React from "react";

type TitledPanel = {
  children: React.ReactNode;
}

export default function Hello({ children }: TitledPanel) {
  const childrenArray = React.Children.toArray(children);
  const title = childrenArray.find(child =>
    React.isValidElement(child) && child.key === 'title'
  );
  const body = childrenArray.find(child =>
    React.isValidElement(child) && child.key === 'body'
  );
  return (
    <div style={{
      margin: 50,
      padding: 5,
      border: '1px solid #000',
      width: 'fit-content',
      boxShadow: '10px 5px 5px #999',
      backgroundColor: '#fff'
    }}>
      {title}
      <hr />
      {body}
    </div>
  )
}