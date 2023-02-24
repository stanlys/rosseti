import ListSubheader from "@mui/material/ListSubheader";
import MenuButton from "./MenuButton";
import { ADDITIONAL_MENU, MAIN_MENU, SETTING_MENU } from "./menu";
import MenuCaption from "./MenuCaption";

export const mainListItems = (
  <>
    <MenuCaption caption="Реестры" />
    {MAIN_MENU.map(({ caption, icon, link }) => (
      <MenuButton caption={caption} link={link} icon={icon} key={caption} />
    ))}
  </>
);

export const secondaryListItems = (
  <>
    <MenuCaption caption="Дополнения" />
    {ADDITIONAL_MENU.map(({ caption, link, icon }) => (
      <MenuButton caption={caption} link={link} icon={icon} key={caption} />
    ))}
  </>
);

export const settingList = (
  <>
    {SETTING_MENU.map(({ caption, link, icon }) => (
      <MenuButton caption={caption} link={link} icon={icon} key={caption} />
    ))}
  </>
);
