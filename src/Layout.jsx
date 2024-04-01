import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import SelectBox from "./components/SelectBox";
import OrderCard from "./components/OrderCard";
// import { useState } from "react";
// import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
  const [activeNav, setActiveNav] = useState("dashboard");
  const location = useLocation();
  const { pathname } = location;
  useMemo(() => {
    setActiveNav(pathname);
  }, [pathname]);

  const stateOptions = [
    { id: 1, label: "Tamilnadu" },
    { id: 2, label: "Karnataka" },
    { id: 3, label: "Kerala" },
    { id: 4, label: "Andhra pradesh" },
  ];
  const regionOptions = [
    { id: 1, label: "North Chennai" },
    { id: 2, label: "Central Chennai" },
    { id: 3, label: "South Chennai" },
  ];

  const orderList = [
    {
      id: 1,
      orderNo: "0001",
      address: "Beginners Barcode, Chennai-97",
      quantity: "500 Kg",
    },
    {
      id: 2,
      orderNo: "0002",
      address: "Spring Jaines Appartment",
      quantity: "1 Kg",
    },
    {
      id: 3,
      orderNo: "0003",
      address: "Plot No 3, Casa Grand",
      quantity: "500 Kg",
    },
    {
      id: 4,
      orderNo: "0004",
      address: "1/596, 5th street, Vinayaga Nager, Thoraipakkam, Chennai-97",
      quantity: "500 Kg",
    },
    {
      id: 5,
      orderNo: "0005",
      address: "1/513, Rajve Gandhi street, Thalambur, Chennai-97",
      quantity: "500 Kg",
    },
    {
      id: 6,
      orderNo: "0006",
      address: "Thoraipakkam, Chennai-97",
      quantity: "500 Kg",
    },
    {
      id: 7,
      orderNo: "0007",
      address: "1/590, 1st street, Vinayaga Nager, Chennai-97",
      quantity: "500 Kg",
    },
  ];

  const remainMutton = 10;
  const remainCkicken = 12;
  const quailCount = 1;
  console.log("RENDER");
  return (
    <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout h-full">
      <header className="grid-in-header bg-white border-b-2 border-teal-100 flex justify-end items-center gap-4 pl-8 pr-8">
        <SelectBox
          options={stateOptions}
          onSelect={(selected) => console.log("SELECTED ::", selected)}
          placeholder="Select State"
        />
        <SelectBox
          options={regionOptions}
          onSelect={(selected) => console.log("SELECTED :: REGG", selected)}
          placeholder="Select Zone"
        />
        <div className="relative">
          {/* <Link to="/notifications" > */}
          <NotificationsActiveTwoToneIcon />
          <p className=" absolute top-[-20px] right-[-10px] p-1 rounded-full bg-red-600 text-white font-bold text-xs">
            10
          </p>
          {/* </Link> */}
        </div>
      </header>
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
            activeNav === "/employees" ? "bg-teal-700" : ""
          } p-3 text-white`}
          onClick={() => setActiveNav("/employees")}
        >
          <Link className="block w-full" to="/employees">
            Employees
          </Link>
        </div>
      </nav>
      <div className="grid-in-main bg-teal-50 p-5 max-h-[90vh] overflow-auto">
        {children}
      </div>
      <div className="grid-in-task bg-white">
        <section>
          <div className="flex justify-between items-center border-b-2 border-gray-200 p-4">
            <h2 className="text-sm font-bold text-teal-700">Recent Orders </h2>
            <span className="flex items-center">
              <h2 className="text-xs pr-2 font-bold">Pending Request :</h2>
              <p>{String(orderList?.length).padStart(3, 0)}</p>
            </span>
          </div>
          <div className=" overflow-scroll max-h-[60vh] border-b-2">
            {orderList?.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
          <div>
            <div className="">
              <div className="flex justify-between items-center border-b-2 border-gray-200 p-4">
                <h2 className="text-sm font-bold text-teal-700">
                  Stock details
                </h2>
                <span className="flex items-center">
                  <Link to="/stock" className="text-xs text-teal-600 underline">
                    View All
                  </Link>
                </span>
              </div>
              <div className="grid grid-cols-3 justify-between m-4">
                <div className="flex flex-col justify-center items-center border-r-2">
                  <div className="flex items-end">
                    <h1
                      className={`${
                        remainCkicken <= 10
                          ? "text-orange-500"
                          : "text-green-700"
                      } font-bold`}
                    >
                      {String(remainCkicken).padStart(3, 0)}
                    </h1>
                    <h2
                      className={`${
                        remainCkicken <= 10
                          ? "text-orange-500"
                          : "text-green-700"
                      } font-bold text-xs`}
                    >
                      Kg
                    </h2>
                  </div>
                  <p className="font-bold text-xs">Chicken</p>
                </div>
                <div className="flex flex-col justify-center items-center border-r-2">
                  <div className="flex items-end">
                    <h1
                      className={`${
                        remainMutton <= 10
                          ? "text-orange-500"
                          : "text-green-400"
                      } font-bold`}
                    >
                      {String(remainMutton).padStart(3, 0)}
                    </h1>
                    <h2
                      className={`${
                        remainMutton <= 10
                          ? "text-orange-500"
                          : "text-green-400"
                      } font-bold text-xs`}
                    >
                      Kg
                    </h2>
                  </div>
                  <p className="font-bold text-xs">Mutton</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-end">
                    <h1
                      className={`${
                        remainMutton <= 10
                          ? "text-orange-500"
                          : "text-green-400"
                      } font-bold`}
                    >
                      {String(quailCount).padStart(3, 0)}
                    </h1>
                  </div>
                  <p className="font-bold text-xs">Quail Count</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <footer className="grid-in-footer bg-teal-50 border-t-2 border-teal-100">
        Footer
      </footer> */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
