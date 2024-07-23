import MobilePreview from "../components/MobilePreview";

const ProductPreviewPage = () => {
  const productList = [
    {
      id: 1,
      productCode: "M-P-001", //Category fallowed by product ID
      imgUrl: "",
      price: 200,
      currency: "INR",
      name: "Chicken Small Cuts",
    },
    {
      id: 2,
      productCode: "M-P-002", //Category fallowed by product ID
      imgUrl: "",
      price: 350,
      currency: "INR",
      name: "Chicken Bone Less",
    },
    {
      id: 3,
      productCode: "M-P-003", //Category fallowed by product ID
      imgUrl: "",
      price: 280,
      currency: "INR",
      name: "Chicken Biriyani Less",
    },
  ];
  return (
    <MobilePreview>
      <h1>Product List</h1>
      {productList.map((product) => {
        return (
          <div
            key={product?.id}
            id="test-html"
            className="flex gap-2 p-3 m-3 shadow-md"
          >
            <p>{product?.productCode}</p>
            <div className=" w-3/4">
              <p className="text-sm">{product?.name}</p>
              <p className="text-xs text-green-600">50% Off</p>
            </div>
          </div>
        );
      })}
    </MobilePreview>
  );
};

export default ProductPreviewPage;
