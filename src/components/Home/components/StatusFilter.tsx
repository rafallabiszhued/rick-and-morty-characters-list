import React from 'react';

interface StatusFilterProps {}

const StatusFilter: React.FC<StatusFilterProps> = (props) => {
  return (
    <div className="flex">
      <span className="mr-2">Character status: </span>
      <div className="form-check form-check-inline flex items-center">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="any"
        />
        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio1">
          Any
        </label>
      </div>
      <div className="form-check form-check-inline flex items-center">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="alive"
        />
        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio2">
          Alive
        </label>
      </div>
      <div className="form-check form-check-inline flex items-center">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="dead"
        />
        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio3">
          Dead
        </label>
      </div>
    </div>
  );
};

export default StatusFilter;
