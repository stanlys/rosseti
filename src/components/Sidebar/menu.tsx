import OutboxIcon from "@mui/icons-material/Outbox";
import SettingsIcon from "@mui/icons-material/Settings";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PlaceIcon from "@mui/icons-material/Place";
import SignpostIcon from "@mui/icons-material/Signpost";

export interface MenuProps {
  link: string;
  caption: string;
  icon: JSX.Element;
}

export const MAIN_MENU: MenuProps[] = [
  { caption: "ВЛ 0,4 кВ", link: "/", icon: <OutboxIcon /> },
  { caption: "ВЛ 10 кВ", link: "/out", icon: <MoveToInboxIcon /> },
  { caption: "ВЛ 35 кВ и выше", link: "/letter", icon: <LocalShippingIcon /> },
  { caption: "КЛ 0,4 кВ", link: "/contract", icon: <RequestPageIcon /> },
  { caption: "КЛ 10 кВ", link: "/contract", icon: <RequestPageIcon /> },
  { caption: "Площадные", link: "/contract", icon: <RequestPageIcon /> },
];

export const ADDITIONAL_MENU: MenuProps[] = [
  { caption: "Настройка", link: "/setting", icon: <SettingsIcon /> },
];

export const SETTING_MENU: MenuProps[] = [
  { caption: "Контакры РЭС", link: "address", icon: <PlaceIcon /> },
  { caption: "Подрядчики", link: "delivery", icon: <SignpostIcon /> },
  { caption: "Дополнительно", link: "additional", icon: <SettingsIcon /> },
];
