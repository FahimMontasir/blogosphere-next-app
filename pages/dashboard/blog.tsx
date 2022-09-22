import type { ReactElement } from "react";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const BlogPage: NextPageWithLayout = () => {
  return <p>blog world</p>;
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default BlogPage;
