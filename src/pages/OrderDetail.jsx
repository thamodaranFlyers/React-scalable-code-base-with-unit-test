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

  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="text-teal-700 font-bold pb-3 border-b-2 border-teal-100">
        Order Summary
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
              <p className="w-1/2 pl-4 text-xs p-2">
                {orderDetail.assignedUser.name}
              </p>
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
        <h4 className=" text-teal-700 font-bold pb-2">
          Delivery Delay Tracker
        </h4>
        <div className="flex w-[80%]">
          <div className="w-full">
            <div className="flex">
              <div className=" h-10 w-1/6 bg-green-500 flex justify-center items-center">
                <p className="font-bold text-white text-sm">New</p>
              </div>
              <div className=" h-10 w-1/6 bg-green-500 flex justify-center items-center">
                <p className="font-bold text-white text-sm">Cutting</p>
              </div>
              <div className=" h-10 w-1/6 bg-green-500 flex justify-center items-center">
                <p className="font-bold text-white text-sm">Cleaning</p>
              </div>
              <div className=" h-10 w-1/6 bg-green-500 flex justify-center items-center">
                <p className="font-bold text-white text-sm">On The Way</p>
              </div>
              <div className=" h-10 w-1/6 bg-green-500 flex justify-center items-center">
                <p className="font-bold text-white text-sm">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderDetail;

// OrderDetail.propTypes = {
//   item: PropTypes.object,
// };
