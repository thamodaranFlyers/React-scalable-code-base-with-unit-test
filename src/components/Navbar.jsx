import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [activeNav, setActiveNav] = useState("dashboard");

  useMemo(() => {
    setActiveNav(pathname);
  }, [pathname]);

  return (
    <nav className="grid-in-nav bg-teal-600">
      <div className="flex items-center justify-center text-white font-bold text-[2rem] border-b-2 border-teal-700 h-[5rem]">
        WEM
      </div>
      <div
        className={`${
          activeNav === "/dashboard" ? "bg-teal-700" : ""
        } p-3 text-white`}
        onClick={() => setActiveNav("/dashboard")}
      >
        <Link className="block w-full" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <div
        className={`${
          activeNav === "/employees" ? "bg-teal-700" : ""
        } p-3 text-white`}
        onClick={() => setActiveNav("/employees")}
      >
        <Link className="block w-full" to="/employees">
          Employees
        </Link>
      </div>
      <div
        className={`${
          activeNav === "/orders" ? "bg-teal-700" : ""
        } p-3 text-white`}
        onClick={() => setActiveNav("/orders")}
      >
        <Link className="block w-full" to="/orders">
          Orders
        </Link>
      </div>
      <div
        className={`${
          activeNav === "/products" ? "bg-teal-700" : ""
        } p-3 text-white`}
        onClick={() => setActiveNav("/products")}
      >
        <Link className="block w-full" to="/products">
          Products
        </Link>
      </div>
      <div
        className={`${
          activeNav === "/stock" ? "bg-teal-700" : ""
        } p-3 text-white`}
        onClick={() => setActiveNav("/stock")}
      >
        <Link className="block w-full" to="/stock">
          Stock
        </Link>
      </div>
      <div
        className={`${
          activeNav === "/shops" ? "bg-teal-700" : ""
        } p-3 text-white`}
        onClick={() => setActiveNav("/shops")}
      >
        <Link className="block w-full" to="/shops">
          Shops
        </Link>
      </div>
      <div
        className={`${
          activeNav === "/estimator" ? "bg-teal-700" : ""
        } p-3 text-white`}
        onClick={() => setActiveNav("/estimator")}
      >
        <Link className="block w-full" to="/estimator">
          Estimator
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
