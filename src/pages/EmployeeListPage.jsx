import { Link } from "react-router-dom";
import Table from "../components/Table";
import { users } from "../mockResponses/users";
import { getColWidth } from "../utils/tableUtils";

const EmployeeListPage = () => {
  const headerCols = [
    {
      label: "Emp Id",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Name",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Date Of Join",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Aadhar No",
      headerCellStyle: { width: getColWidth() },
    },
    {
      label: "Licence",
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
      dataKey: "empId",
      tableCellStyle: { width: getColWidth() },
      onColClick: (rowData, evt) => {
        evt.preventDefault();
        console.log("COLL DATA ::", rowData);
        console.log("COLL EVENT ::", evt);
      },
      renderCells: (rowData) => {
        return (
          <div className=" flex flex-col justify-center h-full">
            <Link
              className="text-teal-700 underline font-bold relative w-fit"
              to={`/employee/${rowData?.id}`}
            >
              {String(rowData?.empId).padStart(3, 0)}
            </Link>
          </div>
        );
      },
    },
    {
      dataKey: "name",
      tableCellStyle: { width: getColWidth() },
    },
    {
      dataKey: "dateOfJoin",
      tableCellStyle: { width: getColWidth() },
    },
    {
      dataKey: "adharNo",
      tableCellStyle: { width: getColWidth() },
    },
    {
      dataKey: "licence",
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

  const tableData = users?.map((user) => {
    let obj = {
      id: user?.id,
      empId: user?.empId,
      name: user?.name,
      dateOfJoin: user?.dateOfJoin,
      adharNo: user?.adharNo,
      licence: user?.licence,
      status: user?.status,
      address: `${user?.address?.street}, ${user?.address?.area}, ${user?.address?.city}, ${user?.address?.state}, ${user?.address?.pinCode}`,
    };
    return obj;
  });
  return (
    <div className="bg-white p-3 shadow-md">
      <h2 className="pb-2 text-teal-700 font-bold">Employee List</h2>
      <Table headerCells={headerCols} bodyCells={bodyCells} data={tableData} />
    </div>
  );
};

export default EmployeeListPage;
