import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import moment from "moment";
window.moment = moment;

function App() {
  return <RouterProvider router={router} />;
}

export default App;
