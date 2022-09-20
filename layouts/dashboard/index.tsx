import React from "react";
import { DBThemeProvider } from "../../contexts/dbThemeContext";
import DBLayoutWithoutProvider from "./layout";

interface Props {
  children: React.ReactNode;
}

export default function DBLayout({ children }: Props) {
  return (
    <DBThemeProvider>
      <DBLayoutWithoutProvider>{children}</DBLayoutWithoutProvider>
    </DBThemeProvider>
  );
}
