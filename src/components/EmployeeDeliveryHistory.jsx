import { Link } from "react-router-dom";
import Table from "../components/Table";

const EmployeeDeliveryHistory = () => {
  const headerCols = [
    {
      label: "Order No",
      headerTextClass: "text-xs",
    },
    {
      label: "Order Date",
      headerTextClass: "text-xs",
    },
    {
      label: "Delivery Start",
      headerTextClass: "text-xs",
    },
    {
      label: "Delivery End",
      headerTextClass: "text-xs",
    },
    {
      label: "Is Delay",
      headerTextClass: "text-xs",
    },
    {
      label: "Address",
      headerTextClass: "text-xs",
    },
  ];
  const bodyCells = [
    {
      dataKey: "orderNo",
      tableCellStyle: {},
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
          </Link>
        </div>
      ),
    },
    {
      dataKey: "order_date_time",
      tableCellStyle: {},
    },
    {
      dataKey: "delivery_start_time",
      tableCellStyle: {},
    },
    {
      dataKey: "delivery_end_time",
      tableCellStyle: {},
    },
    {
      dataKey: "isDeliveryDelayed",
      tableCellStyle: {},
      renderCells: (rowData) => (
        <div className=" flex flex-col justify-center h-full w-f">
          {rowData.isDeliveryDelayed ? (
            <div className="h-2 w-2 bg-red-400 rounded-full"></div>
          ) : (
            <div className="h-2 w-2 bg-green-600 rounded-full"></div>
          )}
        </div>
      ),
    },
    {
      dataKey: "address",
      tableCellStyle: {},
    },
  ];

  const orderMockData = [
    {
      id: 1,
      orderNo: 2,
      order_date_time: "02/04/2024 10:20 AM",
      delivery_start_time: "10:40 AM",
      delivery_end_time: "10:55 AM",
      delivery_expected_time: "10:50 AM",
      delivery_assigned: 2,
      isDeliveryDelayed: true,
      orderStatus: 5,
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
      delivery_start_time: "10:40 AM",
      delivery_end_time: "10:55 AM",
      delivery_expected_time: "10:55 AM",
      delivery_assigned: 2,
      isDeliveryDelayed: false,
      orderStatus: 5,
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
      delivery_start_time: "11:30 AM",
      delivery_end_time: "11:40 AM",
      delivery_expected_time: "11:45 AM",
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
  ];

  const tableData = orderMockData?.map((order) => {
    let obj = {
      orderNo: order?.orderNo,
      order_date_time: order?.order_date_time,
      delivery_start_time: order?.delivery_start_time,
      delivery_end_time: order?.delivery_start_time,
      isDeliveryDelayed: order?.isDeliveryDelayed,
      address: `${order?.address?.street}, ${order?.address?.area}, ${order?.address?.city}, ${order?.address?.state}, ${order?.address?.pinCode}`,
    };
    return obj;
  });
  return (
    <div>
      <Table headerCells={headerCols} bodyCells={bodyCells} data={tableData} />
    </div>
  );
};

export default EmployeeDeliveryHistory;
