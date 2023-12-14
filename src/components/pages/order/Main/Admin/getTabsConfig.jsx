import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

const getTabsConfig = () => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
];

export default getTabsConfig;

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);

