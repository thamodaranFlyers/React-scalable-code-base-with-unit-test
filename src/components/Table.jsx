import PropTypes from "prop-types";

const defaultHeaderCells = [
  {
    key: "header_1",
    label: "Header 1",
    headerCellStyle: {},
  },
  {
    key: "header_2",
    label: "Header 2",
    headerCellStyle: {},
  },
  {
    key: "header_3",
    label: "Header 3",
    headerCellStyle: {},
  },
  {
    key: "header_4",
    label: "Header 4",
    headerCellStyle: {},
  },
];
const defaultBodyCells = [
  {
    dataKey: "header_1",
    tableCellStyle: {},
  },
  {
    dataKey: "header_2",
    tableCellStyle: {},
  },
  {
    dataKey: "header_3",
    tableCellStyle: {},
  },
  {
    dataKey: "header_4",
    tableCellStyle: {},
  },
];

const getColWidth = (headerCells) => {
  const colLength = headerCells
    ? headerCells.length
    : defaultHeaderCells.length;
  return `${(100 / colLength).toFixed(2)}%`;
};

const renderTableHeaderCell = (headerCells) => {
  const tableHeaderCells = headerCells ? headerCells : defaultHeaderCells;
  return tableHeaderCells?.map((header, i) => {
    return (
      <div
        className={`flex bg-teal-50 p-3 border-b-[1px] border-teal-300`}
        style={header?.headerCellStyle}
        key={i}
      >
        <h2
          className={`${
            header?.headerTextClass ? header.headerTextClass : ""
          } text-teal-700 font-bold text-sm`}
        >
          {header?.label}
        </h2>
      </div>
    );
  });
};

const renderTableBodyCell = (headerCells, bodyCells, data) => {
  const tableData = data;
  const tableBodayCells = bodyCells || defaultBodyCells;
  return tableData?.length > 0 ? (
    tableData?.map((dataObj, i) => {
      return (
        <div className={`flex w-full`} key={i}>
          {tableBodayCells?.map((cell, i) => {
            return (
              <div
                key={i}
                className={`w-[${getColWidth(
                  headerCells
                )}] p-2 text-xs flex items-center`}
                style={cell?.tableCellStyle}
                onClick={(e) =>
                  cell?.onColClick && cell?.onColClick(dataObj, e)
                }
              >
                {cell?.renderCells ? (
                  cell?.renderCells(dataObj)
                ) : (
                  <p>{dataObj?.[cell?.dataKey] || "-"}</p>
                )}
              </div>
            );
          })}
        </div>
      );
    })
  ) : (
    <p className="p-4 text-center">No Data Found</p>
  );
};

const Table = ({ headerCells, bodyCells, data }) => {
  return (
    <div>
      <div className="flex w-full">{renderTableHeaderCell(headerCells)}</div>
      <div>{renderTableBodyCell(headerCells, bodyCells, data)}</div>
    </div>
  );
};

export default Table;

Table.propTypes = {
  headerCells: PropTypes.array,
  bodyCells: PropTypes.array,
  data: PropTypes.array,
};
