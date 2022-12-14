import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Navigation from "../components/navigation/Navigation";
import Login from "../views/auth/Login";
import Employees from '../views/user/Employees.jsx'
import Departments from '../views/user/Departments.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="employees" element={<Employees />} />
      <Route path='departments' element={<Departments />} />
    </Route>

  )
);

export default router;
