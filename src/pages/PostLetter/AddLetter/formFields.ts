import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import BusinessIcon from "@mui/icons-material/Business";
import Person2Icon from "@mui/icons-material/Person2";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SignpostIcon from "@mui/icons-material/Signpost";
import DescriptionIcon from "@mui/icons-material/Description";
import DraftsIcon from "@mui/icons-material/Drafts";

export const formFields = {
  trackNumber: {
    name: "trackNumber",
    required: true,
    label: "Введите трек номер",
    icon: ShareLocationIcon,
  },
  postman: {
    name: "postman",
    required: false,
    label: "Курьер",
    icon: SignpostIcon,
  },
  letterType: {
    name: "letterType",
    required: false,
    label: "Тип документа",
    icon: DraftsIcon,
  },
  letterDescription: {
    name: "letterDescription",
    required: false,
    label: "Краткое описание отправления",
    icon: DescriptionIcon,
  },
  receiver: {
    name: "receiver",
    required: false,
    label: "Получатель",
    icon: Person2Icon,
    finder: true,
  },
  address: {
    name: "address",
    required: false,
    label: "Адрес получателя",
    icon: BusinessIcon,
    finder: true,
  },
  sender: {
    name: "sender",
    required: false,
    label: "Отправитель",
    icon: TransferWithinAStationIcon,
    finder: true,
  },
};
