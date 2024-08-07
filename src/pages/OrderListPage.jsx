import { Link } from "react-router-dom";
import Table from "../components/Table";
import { getColWidth } from "../utils/tableUtils";

const OrderListPage = () => {
  // const getColWidth = () => {
  //   const colLength = 5;
  //   return `${(100 / colLength).toFixed(2)}%`;
  // };
  const headerCols = [
    {
      label: "Order No",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Order Date Time",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Delivery Assigned",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Address",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Status",
      headerCellStyle: { width: getColWidth() },
    },
  ];
  const bodyCells = [
    {
      dataKey: "orderNo",
      tableCellStyle: { width: getColWidth() },
      onColClick: (rowData, evt) => {
        evt.preventDefault();
        console.log("COLL DATA ::", rowData);
        console.log("COLL EVENT ::", evt);
      },
      renderCells: (rowData) => (
        <div className=" flex flex-col justify-center h-full">
          <Link
            className="text-teal-700 underline font-bold relative w-fit"
            to={`/order/${rowData?.id}`}
          >
            {String(rowData?.orderNo).padStart(3, 0)}
            {rowData.isDeliveryDelayed ? (
              <div className="h-2 w-2 bg-red-400 rounded-full absolute -right-3 -top-1"></div>
            ) : (
              <div className="h-2 w-2 bg-green-600 rounded-full absolute -right-3 -top-1"></div>
            )}
          </Link>
        </div>
      ),
    },
    {
      dataKey: "order_date_time",
      tableCellStyle: { width: getColWidth() },
    },
    {
      dataKey: "delivery_assigned",
      tableCellStyle: { width: getColWidth() },
    },
    {
      dataKey: "address",
      tableCellStyle: { width: getColWidth() },
    },
    {
      dataKey: "status",
      tableCellStyle: { width: getColWidth() },
    },
  ];

  const orderMockData = [
    {
      id: 1,
      orderNo: 2,
      order_date_time: "02/04/2024 10:20 AM",
      delivery_assigned: 2,
      isDeliveryDelayed: false,
      orderStatus: 2,
      status: {
        id: 2,
        name: "Delivered",
      },
      assignedUser: {
        id: 2,
        name: "Steve",
        createdAt: "01/01/2024",
      },
      address: {
        lat: 25.22,
        lng: 740.01,
        city: "Chennai",
        state: "Tamilnadu",
        street: "5th Street",
        area: "Navalur",
        landMark: "Main Road",
        pinCode: 600097,
      },
    },
    {
      id: 2,
      orderNo: 3,
      order_date_time: "02/04/2024 10:40 AM",
      delivery_assigned: 2,
      isDeliveryDelayed: true,
      orderStatus: 1,
      status: {
        id: 1,
        name: "Cutting",
      },
      assignedUser: {
        id: 1,
        name: "Cham",
        createdAt: "03/01/2024",
      },
      address: {
        lat: 20.22,
        lng: 140.01,
        city: "Chennai",
        state: "Tamilnadu",
        street: "5th Street",
        area: "Navalur",
        landMark: "Main Road",
        pinCode: 600097,
      },
    },
    {
      id: 3,
      orderNo: 4,
      order_date_time: "02/04/2024 11:20 AM",
      delivery_assigned: 2,
      isDeliveryDelayed: false,
      orderStatus: 2,
      status: {
        id: 2,
        name: "Delivered",
      },
      assignedUser: {
        id: 2,
        name: "Steve",
        createdAt: "01/01/2024",
      },
      address: {
        lat: 20.22,
        lng: 140.01,
        city: "Chennai",
        state: "Tamilnadu",
        street: "5th Street",
        area: "Thalambur",
        landMark: "Post Office",
        pinCode: 600097,
      },
    },
    {
      id: 4,
      orderNo: 5,
      order_date_time: "02/04/2024 11:20 AM",
      delivery_assigned: 1,
      isDeliveryDelayed: false,
      orderStatus: 1,
      status: {
        id: 1,
        name: "Delivered",
      },
      assignedUser: {
        id: 1,
        name: "Steve",
        createdAt: "01/01/2024",
      },
      address: {
        lat: 10.22,
        lng: 210.101,
        city: "Chennai",
        state: "Tamilnadu",
        street: "2th Street",
        area: "Thalambur",
        landMark: "Post Office",
        pinCode: 600097,
      },
    },
  ];

  const tableData = orderMockData?.map((order) => {
    let obj = {
      id: order?.id,
      orderNo: order?.orderNo,
      order_date_time: order?.order_date_time,
      delivery_assigned: order?.assignedUser.name,
      status: order?.status?.name,
      isDeliveryDelayed: order?.isDeliveryDelayed,
      address: `${order?.address?.street}, ${order?.address?.area}, ${order?.address?.city}, ${order?.address?.state}, ${order?.address?.pinCode}`,
    };
    return obj;
  });
  return (
    <div className="bg-white p-3 shadow-md">
      <h2 className="pb-2 text-teal-700 font-bold">Order List</h2>
      <Table headerCells={headerCols} bodyCells={bodyCells} data={tableData} />
    </div>
  );
};

export default OrderListPage;
