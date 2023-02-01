import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Link,
  RouterProvider,
  Routes,
} from "react-router-dom";

import FacilitiesList from "../Pages/FacilitiesList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Receipts from "../Pages/Receipts";

function Views() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
          <Route path = "rRegister" element={<Register />} />
          <Route path="/list" element={<FacilitiesList />} />
          <Route path="/receipt" element={<Receipts />} />

        </Route>
      </Routes>
      
    </div>
  );
}

export default Views;