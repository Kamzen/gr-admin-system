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
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../store/actions/auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />} loader={async () =>{
      const dispatch = useDispatch()

      dispatch(isLoggedIn())

    }}>
      <Route index path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="employees" element={<Employees />} />
      <Route path='departments' element={<Departments />} />
    </Route>

  )
);

export default router;
