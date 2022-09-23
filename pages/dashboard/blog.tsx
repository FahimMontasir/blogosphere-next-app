import type { ReactElement } from "react";
import NavPage from "../../components/common/NavPage";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const BlogPage: NextPageWithLayout = () => {
  return (
    <NavPage title="Blog">
      <p>blog world</p>
    </NavPage>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default BlogPage;
