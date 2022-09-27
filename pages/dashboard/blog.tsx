import type { ReactElement } from "react";
import NavPage from "../../components/common/NavPage";
import Card from "../../components/dashboard/blog/Card";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const BlogPage: NextPageWithLayout = () => {
  return (
    <NavPage title="Blog">
      <h1 className="text-xl md:text-2xl font-bold">Your all blogs</h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        <Card />
        <Card />
        <Card />
      </div>
    </NavPage>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default BlogPage;
