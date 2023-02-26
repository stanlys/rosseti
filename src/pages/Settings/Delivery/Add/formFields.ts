import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export const formFieldsDelivery = {
  orgname: {
    name: "orgname",
    required: true,
    label: "Наименование организации",
    icon: ShareLocationIcon,
  },
  website: {
    name: "website",
    required: false,
    label: "Сайт для отслеживания",
    icon: TravelExploreIcon,
  },
  phone: {
    name: "phone",
    required: false,
    label: "Номер телефона",
    icon: PermPhoneMsgIcon,
  },
};
