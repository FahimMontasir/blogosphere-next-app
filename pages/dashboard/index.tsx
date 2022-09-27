import type { ReactElement } from "react";
import { MdOutlineCancel, MdDangerous } from "react-icons/md";
import NavPage from "../../components/common/NavPage";
import { SalesChart } from "../../components/dashboard/explore/chart/Sales";
import HeroCard from "../../components/dashboard/explore/HeroCard";
import { useDBThemeContext } from "../../contexts/dbThemeContext";
import DBLayout from "../../layouts/dashboard";
import { NextPageWithLayout } from "../_app";

const demoHeroData = [
  { title: "Users", amount: 100, lastUpdate: "2 mins ago" },
  { title: "Views", amount: 1000, lastUpdate: "3 mins ago" },
  { title: "Earn", amount: 10000, lastUpdate: "5 mins ago" },
];

const ExplorePage: NextPageWithLayout = () => {
  const { currentColor } = useDBThemeContext();

  const HeroIcons = {
    Users: <MdOutlineCancel className="w-6 h-6" color={currentColor} />,
    Views: <MdDangerous className="w-6 h-6" color={currentColor} />,
    Earn: <MdDangerous className="w-6 h-6" color={currentColor} />,
  };

  return (
    <NavPage title="Explore">
      <section className="flex flex-col">
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {demoHeroData.map((d) => (
            <HeroCard
              key={d.title}
              title={d.title}
              amount={d.amount}
              icon={HeroIcons[d.title as keyof typeof HeroIcons]}
              lastUpdate={d.lastUpdate}
            />
          ))}
        </div>
      </section>
      <section>
        <SalesChart color={currentColor} />
      </section>
    </NavPage>
  );
};

ExplorePage.getLayout = function getLayout(page: ReactElement) {
  return <DBLayout>{page}</DBLayout>;
};

export default ExplorePage;
