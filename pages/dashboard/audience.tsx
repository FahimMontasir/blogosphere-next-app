import type { ReactElement } from "react";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const AudiencePage: NextPageWithLayout = () => {
  return <p>Audience world</p>;
};

AudiencePage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default AudiencePage;
