import { Link, useParams } from "react-router-dom";

function OrderDetail() {
  const { id } = useParams();
  console.log("ORDER ID ::", id);

  const orderDetail = {
    orderNo: 5,
    order_date_time: "02/04/2024 11:20 AM",
    delivery_assigned: 1,
    isDeliveryDelayed: true,
    orderStatus: 1,
    orderedProducts: {
      orderedProductId: 22,
      products: [
        {
          id: 1,
          name: "Chicken",
          quantity: "500 g",
          category: {
            id: 1,
            name: "Meat",
          },
        },
        {
          id: 2,
          name: "Mutton",
          quantity: "1 kg",
          category: {
            id: 1,
            name: "Meat",
          },
        },
        {
          id: 3,
          name: "Prawn",
          quantity: "240 g",
          category: {
            id: 1,
            name: "Meat",
          },
        },
      ],
    },
    status: {
      id: 1,
      name: "Cleaning",
    },
    assignedUser: {
      id: 1,
      name: "Steve",
      createdAt: "01/01/2024",
      adharNo: 3023323232343,
      licence: "TN9393943434",
      status: "Active",
      address: {
        lat: 104.22,
        lng: 210.101,
        street: "1th Street",
        area: "Thalambur",
        city: "Chennai",
        state: "Tamilnadu",
        landMark: "Bus Stop",
        pinCode: 600097,
      },
    },
    address: {
      lat: 10.22,
      lng: 210.101,
      street: "2th Street",
      area: "Thalambur",
      city: "Chennai",
      state: "Tamilnadu",
      landMark: "Post Office",
      pinCode: 600097,
    },
  };

  const billId = 2;
  // const length = 7;
  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="pb-3 border-b-2 border-teal-100 flex justify-between">
        <p className="text-teal-700 font-bold ">Order Summary</p>
        <div className="flex items-center gap-3">
          <p className="text-teal-700 font-bold text-sm">Current Status :</p>
          <p className="text-yellow-500 font-bold text-xs">Cutting</p>
        </div>
      </h2>
      <div className="p-4">
        <h4 className=" text-teal-700 font-bold">Order Detail</h4>
        <div className="flex w-[80%]">
          <div className="w-full">
            <div className="flex">
              <p className=" w-1/2 font-bold text-xs text-right p-2">
                Order No :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">{orderDetail.orderNo}</p>
            </div>
            <div className="flex">
              <p className=" w-1/2 font-bold text-xs text-right p-2">
                Orderd Date :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">
                {orderDetail.order_date_time}
              </p>
            </div>
            <div className="flex">
              <p className=" w-1/2 font-bold text-xs text-right p-2">
                Order Status :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">
                {orderDetail?.status?.name}
              </p>
            </div>
            <div className="flex">
              <p className=" w-1/2 font-bold text-xs text-right p-2">
                Products :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">
                {orderDetail?.orderedProducts?.products.map((element) => {
                  return (
                    <Link
                      to={`/product/${element?.id}`}
                      className="text-teal-600 font-bold text-xs inline-block pl-1 pr-1 pt-[2px] pb-[2px] mr-2"
                      key={element?.id}
                    >
                      {`${element?.name} - ${element.quantity}`}
                    </Link>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex">
              <p className=" w-1/2 font-bold text-xs text-right p-2">
                Bill Number :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">
                <Link
                  to={`/bill-summary/${billId}`}
                  className="text-teal-600 font-bold"
                >
                  B-001
                </Link>
              </p>
            </div>
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">
                Bill Amount :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">Rs. 4200</p>
            </div>
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">
                Order Time :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">10.10 AM</p>
            </div>
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">
                Extimated Delivery :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">11.10 AM</p>
            </div>
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">
                Address :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">{`${orderDetail.address.street}, ${orderDetail.address.area}, ${orderDetail.address.city}, ${orderDetail.address.state} - ${orderDetail.address.pinCode}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className=" text-teal-700 font-bold">Delivery Partner Detail</h4>
        <div className="flex w-[80%]">
          <div className="w-full">
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">Name :</p>
              <Link
                className="w-1/2 pl-4 text-xs p-2 text-teal-700 font-bold hover:underline"
                to={`/employee/${orderDetail?.assignedUser.id}`}
              >
                {orderDetail?.assignedUser.name}
              </Link>
            </div>
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">
                Aadhar No :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">
                {orderDetail?.assignedUser?.adharNo}
              </p>
            </div>
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">
                Licence :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">
                {orderDetail?.assignedUser?.licence}
              </p>
            </div>
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">Status :</p>
              <p className="w-1/2 pl-4 text-xs p-2">
                {orderDetail?.assignedUser?.status}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex">
              <p className="w-1/2 font-bold text-xs text-right p-2">
                Partner Address :
              </p>
              <p className="w-1/2 pl-4 text-xs p-2">{`${orderDetail.assignedUser.address.street}, ${orderDetail.assignedUser.address.area}, ${orderDetail.assignedUser.address.city}, ${orderDetail.assignedUser.address.state} - ${orderDetail.assignedUser.address.pinCode}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className=" text-teal-700 font-bold pb-4">Delivery Tracker</h4>
        <div className="w-[80%] m-auto">
          <div>
            <div className="relative w-[2px] h-[40px] bg-slate-500 mb-1 before:w-10 before:h-10 before:rounded-full before:bg-slate-500 before:content-['@'] before:flex before:items-center before:justify-center before:text-xs before:absolute before:-left-5 before:text-white">
              <div className="absolute left-7 top-3">
                <p className="text-xs text-yellow-500 font-bold w-32">New</p>
              </div>
              <div className="absolute top-16 w-[30rem] left-5">
                <h3 className="text-sm text-teal-700 pb-1 font-bold">
                  Timings
                </h3>
                <div className="flex gap-5">
                  <div className="w-1/2 border-r-2 border-teal-100 pr-8">
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">
                        Approved By :
                      </p>
                      <Link
                        className="text-xs pl-2 text-teal-700 font-bold hover:underline"
                        to={`/employee/${orderDetail?.assignedUser.id}`}
                      >
                        {orderDetail?.assignedUser.name}
                      </Link>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">
                        Performance :
                      </p>
                      <p className="text-xs pl-2 text-green-600 font-bold">
                        Excellent
                      </p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">Time Given :</p>
                      <p className="text-xs pl-2">15 Mins</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">Time Taken :</p>
                      <p className="text-xs pl-2">10 Mins</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Order Time :</p>
                      <p className="text-xs pl-2">10:10 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">End Time :</p>
                      <p className="text-xs pl-2">10:20 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">
                        Estimated Time :
                      </p>
                      <p className="text-xs pl-2">10:25 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Delay :</p>
                      <p className="text-xs pl-2 text-green-600 font-bold">
                        5 Mins Earlier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[50px] bg-slate-500 mb-1 before:w-10 before:h-10 before:rounded-full before:bg-slate-500 before:content-['@'] before:flex before:items-center before:justify-center before:text-xs before:absolute before:-left-5 before:text-white">
              <div className="absolute left-7 top-3">
                <p className="text-xs text-yellow-500 font-bold w-32">
                  Cutting & Cleaning
                </p>
              </div>
              <div className="absolute top-16 w-[32rem] left-5">
                <h3 className="text-sm text-teal-700 pb-1 font-bold">
                  Timings
                </h3>
                <div className="flex gap-5">
                  <div className="w-1/2 border-r-2 border-teal-100 pr-8">
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Cutting By :</p>
                      <Link
                        className="text-xs pl-2 text-teal-700 font-bold hover:underline"
                        to={`/employee/${orderDetail?.assignedUser.id}`}
                      >
                        Charan
                      </Link>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">
                        Performance :
                      </p>
                      <p className="text-xs pl-2 text-red-400 font-bold">
                        Need Improvement
                      </p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Time Given :</p>
                      <p className="text-xs pl-2">15 Mins</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Time Taken :</p>
                      <p className="text-xs pl-2">20 Mins</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Start Time :</p>
                      <p className="text-xs pl-2">10:20 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">End Time :</p>
                      <p className="text-xs pl-2">10:40 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">
                        Estimated Time :
                      </p>
                      <p className="text-xs pl-2">10:35 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Delay :</p>
                      <p className="text-xs pl-2 text-red-400 font-bold">
                        5 Mins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>

            <div className="relative w-[2px] h-[40px] bg-slate-500 mb-1 before:w-10 before:h-10 before:rounded-full before:bg-slate-500 before:content-['@'] before:flex before:items-center before:justify-center before:text-xs before:absolute before:-left-5 before:text-white">
              <div className="absolute left-7 top-3">
                <p className="text-xs text-yellow-500 font-bold w-32">
                  Packing
                </p>
              </div>
              <div className="absolute top-16 w-[30rem] left-5">
                <h3 className="text-sm text-teal-700 pb-1 font-bold">
                  Timings
                </h3>
                <div className="flex gap-5">
                  <div className="w-1/2 border-r-2 border-teal-100 pr-8">
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">
                        Packking By :
                      </p>
                      <Link
                        className="text-xs pl-2 text-teal-700 font-bold hover:underline"
                        to={`/employee/${orderDetail?.assignedUser.id}`}
                      >
                        Arsha
                      </Link>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">
                        Performance :
                      </p>
                      <p className="text-xs pl-2 text-green-600 font-bold">
                        Excellent
                      </p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">Time Given :</p>
                      <p className="text-xs pl-2">15 Mins</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">Time Taken :</p>
                      <p className="text-xs pl-2">10 Mins</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Start Time :</p>
                      <p className="text-xs pl-2">10:40 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">End Time :</p>
                      <p className="text-xs pl-2">10:50 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">
                        Estimated Time :
                      </p>
                      <p className="text-xs pl-2">10:55 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Delay :</p>
                      <p className="text-xs pl-2 text-green-600 font-bold">
                        5 Mins Earlier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[40px] bg-slate-500 mb-1 before:w-10 before:h-10 before:rounded-full before:bg-slate-500 before:content-['@'] before:flex before:items-center before:justify-center before:text-xs before:absolute before:-left-5 before:text-white">
              <div className="absolute left-7 top-3">
                <p className="text-xs text-yellow-500 font-bold w-32">Pickup</p>
              </div>
              <div className="absolute top-16 w-[30rem] left-5">
                <h3 className="text-sm text-teal-700 pb-1 font-bold">
                  Timings
                </h3>
                <div className="flex gap-5">
                  <div className="w-1/2 border-r-2 border-teal-100 pr-8">
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">Pickup By :</p>
                      <Link
                        className="text-xs pl-2 text-teal-700 font-bold hover:underline"
                        to={`/employee/${orderDetail?.assignedUser.id}`}
                      >
                        Daniel
                      </Link>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">
                        Performance :
                      </p>
                      <p className="text-xs pl-2 text-green-600 font-bold">
                        Excellent
                      </p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">Time Given :</p>
                      <p className="text-xs pl-2">20 Mins</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[60%] text-right">Time Taken :</p>
                      <p className="text-xs pl-2">15 Mins</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Start Time :</p>
                      <p className="text-xs pl-2">10:50 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">End Time :</p>
                      <p className="text-xs pl-2">11:05 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">
                        Estimated Time :
                      </p>
                      <p className="text-xs pl-2">11:10 AM</p>
                    </div>
                    <div className="flex pb-1">
                      <p className="text-xs w-[40%] text-right">Delay :</p>
                      <p className="text-xs pl-2 text-green-600 font-bold">
                        5 Mins Earlier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[25px] bg-slate-500 mb-1"></div>
            <div className="relative w-[2px] h-[40px] bg-slate-500 mb-1 before:w-10 before:h-10 before:rounded-full before:bg-slate-500 before:content-['@'] before:flex before:items-center before:justify-center before:text-xs before:absolute before:-left-5 before:text-white">
              <div className="absolute left-7 top-3">
                <p className="text-xs text-yellow-500 font-bold w-32">
                  Deliverd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderDetail;
