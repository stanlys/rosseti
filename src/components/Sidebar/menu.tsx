import OutboxIcon from "@mui/icons-material/Outbox";
import SettingsIcon from "@mui/icons-material/Settings";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PlaceIcon from "@mui/icons-material/Place";
import SignpostIcon from "@mui/icons-material/Signpost";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export interface MenuProps {
  link: string;
  caption: string;
  icon: JSX.Element;
}

export const MAIN_MENU: MenuProps[] = [
  { caption: "ВЛ 0,4 кВ", link: "/", icon: <ElectricBoltIcon /> },
  { caption: "ВЛ 10 кВ", link: "/out", icon: <ElectricBoltIcon /> },
  { caption: "ВЛ 35 кВ и выше", link: "/letter", icon: <ElectricBoltIcon /> },
  { caption: "КЛ 0,4 кВ", link: "/contract", icon: <ElectricBoltIcon /> },
  { caption: "КЛ 10 кВ", link: "/contract", icon: <ElectricBoltIcon /> },
  { caption: "Площадные", link: "/contract", icon: <ElectricBoltIcon /> },
];

export const ADDITIONAL_MENU: MenuProps[] = [
  { caption: "Настройка", link: "/setting", icon: <SettingsIcon /> },
];

export const SETTING_MENU: MenuProps[] = [
  { caption: "Контакры РЭС", link: "address", icon: <PlaceIcon /> },
  { caption: "Подрядчики", link: "delivery", icon: <SignpostIcon /> },
  { caption: "Дополнительно", link: "additional", icon: <SettingsIcon /> },
];
