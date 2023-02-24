import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/404/404";
import Incoming from "./pages/Incoming/Incoming";
import AddLetter from "./pages/PostLetter/AddLetter/AddLetter";
import PostLetter from "./pages/PostLetter/PostLetter";
import Settings from "./pages/Settings/Settings";
import Outgoing from "./pages/Outgoing/Outgoing";
import ListDelivery from "./pages/Settings/Delivery/List/ListDelivery";
import AddOutLetter from "./pages/Outgoing/AddLetter/AddOutLetter";
import FileList from "./components/FileList/FileList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Outgoing /> },
      { path: "out", element: <Incoming /> },
      {
        path: "letter",
        element: <PostLetter />,
      },
      {
        path: "contract",
        element: <PostLetter />,
      },
      {
        path: "addletter",
        element: <AddLetter />,
      },
      {
        path: "addin",
        element: <AddOutLetter />,
      },
      {
        path: "filelist",
        element: <FileList />,
      },
      {
        path: "setting",
        element: <Settings />,
        children: [
          { path: "address", element: <div>Добавление адреса</div> },
          { path: "delivery", element: <ListDelivery /> },
          { path: "additional", element: <div>Дополнительные настройки</div> },
        ],
      },
    ],
  },
]);
