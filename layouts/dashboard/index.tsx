import React from "react";
interface Props {
  children: React.ReactNode;
}

const DBLayout = ({ children }: Props) => {
  return (
    <main>
      <h1>layout</h1>
      {children}
    </main>
  );
};
export default DBLayout;
