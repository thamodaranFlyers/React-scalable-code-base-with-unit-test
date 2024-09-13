// import MobilePreview from "../components/MobilePreview";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 shadow-md flex">
      <div className=" w-3/4">
        <h1>Test Mobile wqwqw</h1>
        <button onClick={() => navigate("/product/create")}>Create</button>
      </div>
    </div>
  );
};

export default ProductListPage;
