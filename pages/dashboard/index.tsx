import type { ReactElement } from "react";
import NavPage from "../../components/common/NavPage";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const ExplorePage: NextPageWithLayout = () => {
  return (
    <NavPage title="Explore">
      <p>home page or explore page</p>
    </NavPage>
  );
};

ExplorePage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default ExplorePage;
