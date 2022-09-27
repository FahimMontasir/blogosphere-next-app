import type { ReactElement } from "react";
import NavPage from "../../components/common/NavPage";
import ShopCard from "../../components/dashboard/shop/ShopCard";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const ShopPage: NextPageWithLayout = () => {
  return (
    <NavPage title="Shop">
      <div className="container mx-auto bg-white p-4 lg:p-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ShopCard />
        </div>
      </div>
    </NavPage>
  );
};

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default ShopPage;
