import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/icons/dashboard.png";
import employeeIcon from "../assets/icons/people.png";
import orderIcon from "../assets/icons/shopping-bag.png";
import productsIcon from "../assets/icons/products.png";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [activeNav, setActiveNav] = useState("dashboard");

  useMemo(() => {
    setActiveNav(pathname);
  }, [pathname]);

  const navList = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: dashboardIcon,
    },
    {
      label: "Employees",
      path: "/employees",
      icon: employeeIcon,
    },
    {
      label: "Orders",
      path: "/orders",
      icon: orderIcon,
    },
    {
      label: "Products",
      path: "/products",
      icon: productsIcon,
    },
    {
      label: "Stock",
      path: "/stock",
      icon: employeeIcon,
    },
    {
      label: "Shops",
      path: "/shops",
      icon: employeeIcon,
    },
    {
      label: "Estimator",
      path: "/estimator",
      icon: employeeIcon,
    },
  ];

  return (
    <nav className="grid-in-nav bg-teal-600">
      <>
        <div className="flex items-center justify-center text-white font-bold text-[2rem] border-b-2 border-teal-700 h-[5rem]">
          WEM
        </div>
        <div className=" max-h-[85vh] overflow-auto border-b-2 border-teal-700">
          {navList.map((nav) => (
            <div
              className="flex items-center justify-center"
              onClick={() => setActiveNav(nav.path)}
              key={nav.path}
            >
              <Link
                className={`${
                  activeNav === nav.path ? "bg-teal-700" : ""
                } pt-4 pb-4 text-white flex flex-col items-center justify-center rounded-md mt-3 w-2/3 gap-2`}
                to={nav.path}
              >
                <img
                  src={nav.icon ? nav.icon : dashboardIcon}
                  alt="dashboard-icon"
                  className=" h-6"
                />
                <small>{nav.label}</small>
              </Link>
            </div>
          ))}
        </div>
      </>
    </nav>
  );
};

export default Navbar;
