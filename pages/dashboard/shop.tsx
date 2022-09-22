import type { ReactElement } from "react";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const ShopPage: NextPageWithLayout = () => {
  return <p>shop world</p>;
};

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default ShopPage;
