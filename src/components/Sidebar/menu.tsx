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
  { caption: "Исходящие", link: "/", icon: <OutboxIcon /> },
  { caption: "Входящие", link: "/out", icon: <MoveToInboxIcon /> },
  { caption: "Почта", link: "/letter", icon: <LocalShippingIcon /> },
  { caption: "Договора", link: "/contract", icon: <RequestPageIcon /> },
];

export const ADDITIONAL_MENU: MenuProps[] = [
  { caption: "Настройка", link: "/setting", icon: <SettingsIcon /> },
];

export const SETTING_MENU: MenuProps[] = [
  { caption: "Адреса", link: "address", icon: <PlaceIcon /> },
  { caption: "Курьеры", link: "delivery", icon: <SignpostIcon /> },
  { caption: "Дополнительно", link: "additional", icon: <SettingsIcon /> },
];
