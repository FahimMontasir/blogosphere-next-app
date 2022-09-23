import type { ReactElement } from "react";
import NavPage from "../../components/common/NavPage";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const ShopPage: NextPageWithLayout = () => {
  return (
    <NavPage title="Shop">
      <p>shop world</p>
    </NavPage>
  );
};

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default ShopPage;
