import Link from "next/link";
import type { ReactElement } from "react";
import DBLayout from "../../layouts/dashboard";
import { useDBThemeContext } from "../../contexts/dbThemeContext";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  const { activeMenu } = useDBThemeContext();
  console.log(activeMenu);

  return (
    <>
      <p>hello world</p>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <h1>sdlkfjsldf</h1>
      <Link href="/dashboard/blog">blog</Link>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default Page;
