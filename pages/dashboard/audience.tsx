import type { ReactElement } from "react";
import NavPage from "../../components/common/NavPage";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const AudiencePage: NextPageWithLayout = () => {
  return (
    <NavPage title="Audience">
      <h1>
        audience page Lo rem ipsum dol or sit amet consec tetur adipi sicing
        elit. Consequuntur mollitia hic dignissimos eveniet amet nostrum tempore
        veniam libero tempora, aut, aliquid fugiat facere quibusdam iure
        suscipit est explicabo ducimus quasi omnis dolorem optio alias illum
        error nulla! Nisi nulla quasi fugiat porro ratione eligendi, sapiente,
        magni quas quae corrupti neque!
      </h1>
    </NavPage>
  );
};

AudiencePage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default AudiencePage;
