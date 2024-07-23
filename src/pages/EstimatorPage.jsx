import { useState } from "react";

const EstimatorPage = () => {
  const initialState = {
    noOfGoats: 0,
    buyingPricePerGoat: 0,
    totalBuyingPrice: 0,
    employeeSalary: 0,
    profitMargin: 0,
    costPrice: 0,
    totalSellingPrice: 0,
    sellingPricePerGoat: 0,
    profit: 0,
  };
  const [formState, setFormState] = useState(initialState);
  const {
    noOfGoats,
    buyingPricePerGoat,
    totalBuyingPrice,
    employeeSalary,
    profitMargin,
    costPrice,
    totalSellingPrice,
    sellingPricePerGoat,
    profit,
  } = formState;
  const onInputChange = () => {
    setFormState();
  };
  return (
    <>
      <div className="bg-white p-3 shadow-md">
        <h1>Estimator Page</h1>
        <form className="mt-3">
          <div className="flex gap-6 mt-10">
            <div className="flex w-1/2 items-center">
              <label className="w-[40%]">
                <p className="text-sm">No of Goats :</p>
              </label>
              <input
                className="border-2 border-teal-100 rounded-md w-[60%] p-1"
                type="number"
                name="no_of_goats"
                onChange={onInputChange}
              ></input>
            </div>
            <div className="flex w-1/2 items-center">
              <label className="w-[40%]">
                <p className="text-sm">Buying Price / Goat :</p>
              </label>
              <input
                className="border-2 border-teal-100 rounded-md w-[60%] p-1"
                type="number"
                name="no_of_goats"
              ></input>
            </div>
          </div>
          <div className="flex gap-6 mt-10">
            <div className="flex w-1/2 items-center">
              <label className="w-[40%]">
                <p className="text-sm">Expense :</p>
              </label>
              <input
                className="border-2 border-teal-100 rounded-md w-[60%] p-1"
                type="number"
                name="no_of_goats"
              ></input>
            </div>
            <div className="flex w-1/2 items-center">
              <label className="w-[40%]">
                <p className="text-sm">Profit Margin :</p>
              </label>
              <input
                className="border-2 border-teal-100 rounded-md w-[60%] p-1"
                type="number"
                name="no_of_goats"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-white p-3 shadow-md">
        <table>
          <tr>
            <th className="text-sm">No Of Goats</th>
            <th className="text-sm">Buying Price Per Goat</th>
            <th className="text-sm">Total Buying Price</th>
            <th className="text-sm">Employee Salary</th>
            <th className="text-sm">Profit Margin</th>
            <th className="text-sm">Cost Price</th>
            <th className="text-sm">Total Selling Price</th>
            <th className="text-sm">Selling Price Per Goat</th>
            <th className="text-sm">Profit</th>
          </tr>
          <tr>
            <td className="text-sm">{noOfGoats}</td>
            <td className="text-sm">{buyingPricePerGoat}</td>
            <td className="text-sm">{totalBuyingPrice}</td>
            <td className="text-sm">{employeeSalary}</td>
            <td className="text-sm">{profitMargin}</td>
            <td className="text-sm">{costPrice}</td>
            <td className="text-sm">{totalSellingPrice}</td>
            <td className="text-sm">{sellingPricePerGoat}</td>
            <td className="text-sm">{profit}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default EstimatorPage;
