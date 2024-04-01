import GaugeChart from "react-gauge-chart";
import { Link } from "react-router-dom";
import bannerBg from "../assets/images/farmer-banner.svg";
import farmer from "../assets/images/farmer.svg";
function Dashboard() {
  const currentUserID = sessionStorage.getItem("user-id");
  if (currentUserID === "1") {
    ("");
  } else if (currentUserID === "2") {
    ("");
  }
  const newStatusDelayCount = 1;
  const cuttingStatusDelayCount = 0;
  const cleaningStatusDelayCount = 0;
  const reachingYouStatusDelayCount = 0;

  const totalOrdersCount = 4;
  const approvedOrderCount = 4;
  const canceledOrdersCount = 1;

  return (
    <div className="grid gap-6">
      <div className="bg-white h-auto w-full relative rounded-tl-lg border border-teal-100">
        <img
          className=" h-56 absolute left-[-80px] top-[-30px] opacity-90 z-10"
          src={farmer}
        />
        <div className="flex m-3 h-full w-full flex-wrap">
          <div className=" w-1/3 grid grid-areas-countLayout grid-cols-countLayout grid-rows-countLayout relative z-0 m-3 items-center border-r-2 border-gray-100">
            <div className="grid-in-count text-center border-b-2 border-gray-100 pb-4">
              <h1
                className={`${
                  totalOrdersCount === 0 ? "text-red-400" : "text-green-700"
                } font-bold pb-2`}
              >
                {String(totalOrdersCount).padStart(3, 0)}
              </h1>
              <p
                className={`${
                  totalOrdersCount === 0 ? "text-red-400" : "text-green-700"
                } font-bold text-xs`}
              >
                Total Order Count
              </p>
            </div>
            <div className="grid-in-count1 text-center border-r-2 border-gray-100 p-2">
              <h1
                className={`${
                  approvedOrderCount === 0 ? "text-red-400" : "text-green-700"
                } font-bold pb-2`}
              >
                {String(approvedOrderCount).padStart(3, 0)}
              </h1>
              <p
                className={`${
                  approvedOrderCount === 0 ? "text-red-400" : "text-green-700"
                } font-bold text-xs`}
              >
                Approved Order Count
              </p>
            </div>
            <div className="grid-in-count2 text-center p-2">
              <h1
                className={`${
                  canceledOrdersCount === 0 ? "text-green-700" : "text-red-400"
                } font-bold pb-2`}
              >
                {String(canceledOrdersCount).padStart(3, 0)}
              </h1>
              <p
                className={`${
                  canceledOrdersCount === 0 ? "text-green-700" : "text-red-400"
                } font-bold text-xs`}
              >
                Canceled Order Count
              </p>
            </div>
          </div>
          <div className=" w-[60%] h-[20%] z-10 relative">
            <h2 className="text-sm font-bold text-teal-700 mb-2">
              Current Progress
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <div className=" text-center">
                <GaugeChart
                  id="gauge-chart1"
                  textColor="gray"
                  nrOfLevels={2}
                  colors={["#f50505", "#12a81d"]}
                  arcWidth={0.3}
                  percent={0.2}
                  cornerRadius={1}
                  arcPadding={0}
                  style={{ height: "70%", width: "100%" }}
                />
                <p className="text-sm font-bold">Chicken</p>
              </div>
              <div className=" text-center">
                <GaugeChart
                  id="gauge-chart1"
                  textColor="gray"
                  nrOfLevels={2}
                  colors={["#f50505", "#12a81d"]}
                  arcWidth={0.3}
                  percent={0.3}
                  cornerRadius={1}
                  arcPadding={0}
                  style={{ height: "70%", width: "100%" }}
                />
                <p className="text-sm font-bold">Mutton</p>
              </div>
              <div className=" text-center">
                <GaugeChart
                  id="gauge-chart1"
                  textColor="gray"
                  nrOfLevels={2}
                  colors={["#f50505", "#12a81d"]}
                  arcWidth={0.3}
                  percent={0.8}
                  cornerRadius={1}
                  arcPadding={0}
                  style={{ height: "70%", width: "100%" }}
                />
                <p className="text-sm font-bold">Quail</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-teal-700 mb-2 pt-4">
                Delayed Orders Count by Status
              </h2>
              <div className="flex justify-around gap-4 w-full flex-wrap">
                <div
                  className={`${
                    newStatusDelayCount > 0 ? "bg-red-300" : "bg-green-300"
                  } pl-4 pr-4 pt-3 pb-3 rounded-md flex flex-col justify-center items-center w-[20%]`}
                >
                  <h1
                    className={`${
                      newStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } font-bold`}
                  >
                    {String(newStatusDelayCount).padStart(3, 0)}
                  </h1>
                  <div
                    className={`${
                      newStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } text-sm font-bold`}
                  >
                    New
                  </div>
                </div>
                <div
                  className={`${
                    cuttingStatusDelayCount > 0 ? "bg-red-300" : "bg-green-300"
                  } pl-4 pr-4 pt-3 pb-3 rounded-md flex flex-col justify-center items-center w-[20%]`}
                >
                  <h1
                    className={`${
                      cuttingStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } font-bold`}
                  >
                    {String(cuttingStatusDelayCount).padStart(3, 0)}
                  </h1>
                  <div
                    className={`${
                      cuttingStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } text-sm font-bold`}
                  >
                    Cutting
                  </div>
                </div>
                <div
                  className={`${
                    cleaningStatusDelayCount > 0 ? "bg-red-300" : "bg-green-300"
                  } pl-4 pr-4 pt-3 pb-3 rounded-md flex flex-col justify-center items-center w-[20%]`}
                >
                  <h1
                    className={`${
                      cleaningStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } font-bold`}
                  >
                    {String(cleaningStatusDelayCount).padStart(3, 0)}
                  </h1>
                  <div
                    className={`${
                      cleaningStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } text-sm font-bold`}
                  >
                    Cleaning
                  </div>
                </div>
                <div
                  className={`${
                    reachingYouStatusDelayCount > 0
                      ? "bg-red-300"
                      : "bg-green-300"
                  } pl-4 pr-4 pt-3 pb-3 rounded-md flex flex-col justify-center items-center w-[20%]`}
                >
                  <h1
                    className={`${
                      reachingYouStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } font-bold`}
                  >
                    {String(reachingYouStatusDelayCount).padStart(3, 0)}
                  </h1>
                  <div
                    className={`${
                      reachingYouStatusDelayCount > 0
                        ? "text-red-600"
                        : "text-green-700"
                    } text-sm font-bold text-center`}
                  >
                    Reaching you
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-64 absolute right-[-70px] top-[-10px] opacity-20"
          src={bannerBg}
        />
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="bg-white min-h-52 w-full rounded-tl-lg border border-teal-100">
          <h2 className=" text-sm font-bold text-teal-700 mb-2 p-3">
            In Progress Orders
          </h2>
          <div className=" m-2">
            <div className="border-b-[1px] border-teal-400 flex bg-teal-50">
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Order ID
                </p>
              </div>
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Name
                </p>
              </div>
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Delivery Partner Name
                </p>
              </div>
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Status
                </p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white h-52 w-[30%] rounded-tl-lg border border-teal-100"></div> */}
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="bg-white min-h-52 w-full rounded-tl-lg border border-teal-100">
          <h2 className=" text-sm font-bold text-teal-700 mb-2 p-3">
            In Progress Orders
          </h2>
          <div className=" m-2">
            <div className="border-b-[1px] border-teal-400 flex bg-teal-50">
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Order ID
                </p>
              </div>
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Name
                </p>
              </div>
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Delivery Partner Name
                </p>
              </div>
              <div className=" w-1/4">
                <p className=" text-xs font-bold text-teal-700 mb-2 p-3">
                  Status
                </p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">
                  <Link
                    to="/order/1234"
                    target="_blank"
                    className="text-teal-700 underline font-bold"
                  >
                    1002
                  </Link>
                </p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Son Adan</p>
              </div>
              <div className=" w-1/4">
                <p className="text-xs mb-2 p-3">Cleaning Progress</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white h-52 w-[30%] rounded-tl-lg border border-teal-100"></div> */}
      </div>
    </div>
  );
}
export default Dashboard;
