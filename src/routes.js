import { createBrowserRouter } from "react-router-dom";
import Registrastion from "./components/Auth/Registrastion";
import Login from "./components/Auth/Login";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/registration",
    element: <Registrastion/>,
  },
  {
    path:"login",
    element:<Login/>,
  }
]);

export default router