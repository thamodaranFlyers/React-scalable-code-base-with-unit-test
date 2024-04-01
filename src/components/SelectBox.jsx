import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import PropsTypes from "prop-types";
import { useState } from "react";

const SelectBox = ({ options, onSelect, placeholder }) => {
  const initialState = {
    selectedOption: null,
    items: options || [],
    openOption: false,
    searchVal: "",
  };
  const [selectBoxState, setSelectBoxState] = useState(initialState);

  const backupOptions = options;
  return (
    <div className="relative">
      <div className="flex justify-between border-2 border-teal-100 rounded-md w-64 items-center">
        <input
          type="text"
          placeholder={placeholder}
          className=" p-3 outline-none text-[#989393] w-full text-xs"
          onFocus={() =>
            setSelectBoxState({ ...selectBoxState, openOption: true })
          }
          value={
            selectBoxState.searchVal ||
            selectBoxState.selectedOption?.label ||
            ""
          }
          onChange={(e) => {
            const val = e.target.value;
            if (val.length > 0) {
              const filterdOptions = backupOptions.filter((item) => {
                return item?.label.toLowerCase().includes(val.toLowerCase());
              });
              setSelectBoxState({
                ...selectBoxState,
                items: filterdOptions,
                selectedOption: null,
                searchVal: val,
              });
            } else {
              setSelectBoxState({
                ...selectBoxState,
                items: backupOptions,
                searchVal: "",
                selectedOption: null,
              });
            }
          }}
        />
        <ArrowDropDownSharpIcon />
      </div>
      {selectBoxState.openOption ? (
        <div className="absolute top-14 bg-white w-full shadow-md p-3 z-50">
          {selectBoxState.items.length > 0 ? (
            selectBoxState.items?.map((option) => {
              return (
                <p
                  key={option?.id}
                  onClick={() => {
                    onSelect(option);
                    setSelectBoxState({
                      ...selectBoxState,
                      selectedOption: option,
                      openOption: false,
                      searchVal: option.label,
                    });
                  }}
                  className="pt-2 cursor-pointer text-sm"
                >
                  {option?.label}
                </p>
              );
            })
          ) : (
            <p>No Result Found ...</p>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectBox;

SelectBox.propTypes = {
  options: PropsTypes.array.isRequired,
  onSelect: PropsTypes.func.isRequired,
  placeholder: PropsTypes.string,
};
SelectBox.defaultProps = {
  placeholder: "Select Options...",
};
