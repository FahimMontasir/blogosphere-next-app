import type { ReactElement } from "react";
import NavPage from "../../components/common/NavPage";
import Table from "../../components/dashboard/audience/Table";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const AudiencePage: NextPageWithLayout = () => {
  return (
    <NavPage title="Audience">
      <h1 className="text-xl md:text-2xl font-bold">Your all subscriber</h1>
      <Table />
    </NavPage>
  );
};

AudiencePage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default AudiencePage;
