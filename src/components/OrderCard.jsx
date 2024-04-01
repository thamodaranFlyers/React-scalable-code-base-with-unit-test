import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  const { id, orderNo, address, quantity } = order;
  return (
    <div className="flex justify-between p-5 shadow-md mb-4">
      <div className="w-[70%] pr-4">
        <div className="mb-2 flex justify-between">
          <div>
            <p className="font-bold text-xs">Order No:</p>
            <p className="text-xs">
              <Link
                className="underline text-teal-600 font-bold"
                target="_blank"
                to={`/Order/${id}`}
              >
                {orderNo}
              </Link>
            </p>
          </div>
          <div>
            <p className="font-bold text-xs">Quantity:</p>
            <p className="text-xs">{quantity}</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xs">Address :</p>
          <p className="text-xs flex items-center">
            <RoomTwoToneIcon />
            <span className="pl-2">{address}</span>
          </p>
        </div>
      </div>
      <div className="w-[30%]">
        <button
          type="button"
          className="h-8 w-full text-xs bg-green-700 text-white p-2 rounded-md"
        >
          Approve
        </button>
        <button
          type="button"
          className="h-8 w-full text-xs bg-red-700 text-white p-2 mt-2 rounded-md"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default OrderCard;

OrderCard.propTypes = {
  order: PropTypes.object,
};
