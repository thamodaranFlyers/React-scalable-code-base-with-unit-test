import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Dashboard from "./pages/Dashboard";
import OrderDetail from "./pages/OrderDetail";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "./Layout";
import ProductListPage from "./pages/ProductListPage";
import ShopListPage from "./pages/StockListPage";
import EmployeeListPage from "./pages/EmployeeListPage";
import OrderListPage from "./pages/OrderListPage";
import StockListPage from "./pages/StockListPage";
import "./index.css";

function App() {
  //think of this as a dashboard page
  const router = [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "logout",
      element: <LogoutPage />,
    },
  ];

  const authRoute = [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/products",
      element: <ProductListPage />,
    },
    {
      path: "/order/:id",
      element: <OrderDetail />,
    },
    {
      path: "/shops",
      element: <ShopListPage />,
    },
    {
      path: "/stock",
      element: <StockListPage />,
    },
    {
      path: "/employees",
      element: <EmployeeListPage />,
    },
    {
      path: "/orders",
      element: <OrderListPage />,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <>
            {authRoute.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute>
                    <Layout>{route.element}</Layout>
                  </PrivateRoute>
                }
              />
            ))}
            {router.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
