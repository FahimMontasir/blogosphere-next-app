import Link from "next/link";
import type { ReactElement } from "react";
import DBLayout from "../../layouts/dashboard";
import { useDBThemeContext } from "../../contexts/dbThemeContext";
import { NextPageWithLayout } from "../_app";

const BlogPage: NextPageWithLayout = () => {
  const { activeMenu } = useDBThemeContext();
  console.log(activeMenu);

  return (
    <>
      <p>blog world</p>
      <Link href="/dashboard">dashboard</Link>
    </>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default BlogPage;
