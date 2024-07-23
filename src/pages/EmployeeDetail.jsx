import { useParams } from "react-router-dom";
import EmployeeDeliveryHistory from "../components/EmployeeDeliveryHistory";
import Table from "../components/Table";
import { userDetail } from "../mockResponses/users";

function EmployeeDetail() {
  const { id } = useParams();
  console.log("ORDER ID ::", id);

  const empDetail = userDetail;

  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="pb-3 border-b-2 border-teal-100 flex justify-between">
        <p className="text-teal-700 font-bold ">Employee Summary</p>
      </h2>
      <div className="p-4">
        <h4 className=" text-teal-700 font-bold">Employee Detail</h4>
        <div className="flex w-[60%]">
          <div className="w-full">
            <div className="flex">
              <p className=" w-1/3 font-bold text-xs text-right p-2">
                Employee Id :
              </p>
              <p className="pl-4 text-xs p-2">{empDetail.empId}</p>
            </div>
            <div className="flex">
              <p className=" w-1/3 font-bold text-xs text-right p-2">Name :</p>
              <p className="w-1/2 pl-4 text-xs p-2">{empDetail.name}</p>
            </div>
            <div className="flex">
              <p className=" w-1/3 font-bold text-xs text-right p-2">
                Created At :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">{empDetail?.createdAt}</p>
            </div>
            <div className="flex">
              <p className=" w-1/3 font-bold text-xs text-right p-2">
                Date Of Join :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">{empDetail?.dateOfJoin}</p>
            </div>
            <div className="flex">
              <p className=" w-1/3 font-bold text-xs text-right p-2">Role :</p>
              <p className="w-1/2 pl-4 text-xs p-2">{"Delivery Partner"}</p>
            </div>
            <div className="flex">
              <p className=" w-1/3 font-bold text-xs text-right p-2">
                Status :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">{empDetail?.status}</p>
            </div>
            <div className="flex">
              <p className=" w-1/3 font-bold text-xs text-right p-2">
                Address :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">{`${empDetail.address.street}, ${empDetail.address.area}, ${empDetail.address.city}, ${empDetail.address.state} - ${empDetail.address.pinCode}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className=" text-teal-700 font-bold pb-4">Delivery History</h4>
        <div className="flex w-full">
          <div className="w-full">
            <EmployeeDeliveryHistory />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className=" text-teal-700 font-bold pb-4">Salary History</h4>
        <div className="flex w-full">
          <div className="w-full">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmployeeDetail;
