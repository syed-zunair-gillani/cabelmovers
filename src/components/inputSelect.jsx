import React, { useMemo, useState } from "react";

const SelectOption = ({ value = "", active = false, updateValue, icon }) => {
  const handleChange = (e) => {
    e.preventDefault();
    updateValue(value);
  };

  if (!icon) {
    icon = (
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  }

  return (
    <li
      className="text-gray-900 cursor-pointer hover:bg-[#EF9831] hover:text-white select-none relative py-2 pl-3 pr-9"
      onClick={handleChange}
    >
      <div className="flex items-center">
        <span className="ml-3 block font-normal truncate">{value}</span>
      </div>
      {active && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          {icon}
        </span>
      )}
    </li>
  );
};

const Select = ({
  name = "customSelect",
  value = "-- Select Option --",
  options = [],
  icon,
  setProType,
  proType
}) => {
  const [state, setState] = useState({
    value,
    showOptions: false
  });

  const handleClick = (e) => {
    e.preventDefault();
    setState((p) => ({ ...p, showOptions: !state.showOptions }));
    setProType(proType)
  };

  const updateValue = (value) => {
    setState((p) => ({ ...p, showOptions: false, value }));
    let formattedStr = value.toLowerCase().replace(/\s+/g, '-');
    setProType(formattedStr)
  };

  if (!icon) {
    icon = (
      <svg
        className={
          state.showOptions ? "h-5 w-5 text-gray-800" : "h-5 w-5 text-gray-400"
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  }

  return (
    <div className="mt-1 relative sm:border-l-[2px] border-gray-300">
      <input type="hidden" name={name} value={state.value} className="bg-transparent"/>
      <button
        type="button"
        className={
          state.showOptions
            ? "transition transition-all relative w-full bg-transparent rounded-md pl-3 pr-10 pb-[10px] py-1.5 sm:py-3 text-left cursor-default outline-none sm:text-sm"
            : "transition transition-all relative w-full bg-transparent rounded-md pl-3 pr-10 pb-[10px] py-1.5 sm:py-3 text-left cursor-default outline-none sm:text-sm"
        }
        onClick={handleClick}
      >
        <span className="flex items-center">
          <span className="ml-3 block text-lg font-semibold truncate">{state.value}</span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {icon}
        </span>
      </button>
      {state.showOptions && (
        <div className="absolute mt-2 sm:mt-1 w-full z-10 bg-gray-100 sm:rounded-b-2xl border border-gray-300 sm:border-none">
          <ul className="max-h-56 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
            {options.map((option, idx) => (
              <SelectOption
                key={idx}
                value={option}
                active={state.value === option}
                updateValue={updateValue}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function InputSelect({setProType, proType}) {
  return (
    <div class="flex flex-col justify-center w-full bg-gray-100">
      <div class="relative sm:max-w-xl sm:mx-auto border border-gray-300 sm:border-none">
        <div className="w-full sm:w-64">
          <Select options={["Internet", "TV", "Internet TV", "Landline"]} setProType={setProType} proType={proType}/>
        </div>
      </div>
    </div>
  );
}

export default InputSelect;
