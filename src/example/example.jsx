import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button/Button";
import {
  exampleActionOne,
  exampleActionTwo,
  exampleActionWithPayload,
} from "./exampleSlice";

export const Example = () => {
  const exampleText = useSelector((state) => state?.example?.exampleText);
  const dispatch = useDispatch();

  return (
    <div>
      <Button />
      <button
        data-testid="example-one"
        className=" bg-teal-400 block p-2 border border-teal-700 rounded-md mb-2"
        onClick={() => dispatch(exampleActionOne())}
      >
        Example 1
      </button>
      <button
        data-testid="example-two"
        className=" bg-yellow-400 block p-2 border border-yellow-700 rounded-md mb-2"
        onClick={() => dispatch(exampleActionTwo())}
      >
        Example 2
      </button>
      <button
        data-testid="example-three"
        className=" bg-teal-400 block p-2 border border-teal-700 rounded-md mb-2"
        onClick={() =>
          dispatch(exampleActionWithPayload("Geting text as payload"))
        }
      >
        Example With Payload
      </button>
      <div>
        <h3 className="font-bold">Output :</h3>
      </div>
      <p>{exampleText}</p>
    </div>
  );
};
