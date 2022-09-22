import { TbGridDots } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineShop } from "react-icons/ai";
import { ROUTE_PATH } from "../../../utils/path";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "explore",
        icon: <TbGridDots />,
        path: ROUTE_PATH.dashboard.root,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "audience",
        icon: <HiOutlineUserGroup />,
        path: ROUTE_PATH.dashboard.audience,
      },
      {
        name: "blog",
        icon: <ImNewspaper />,
        path: ROUTE_PATH.dashboard.blog,
      },
      {
        name: "shop",
        icon: <AiOutlineShop />,
        path: ROUTE_PATH.dashboard.shop,
      },
    ],
  },
];
