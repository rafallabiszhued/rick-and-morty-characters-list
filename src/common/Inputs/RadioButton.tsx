import React from 'react';

interface RadioButtonProps {
  label: string;
  option: string;
  handleChangeRadioButton: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ option, label, value, handleChangeRadioButton }) => {
  const id = `${label}-${option}`;
  return (
    <div className="form-check form-check-inline flex items-center">
      <input
        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        name={label}
        id={id}
        value={option}
        onChange={handleChangeRadioButton}
        checked={option === value}
      />
      <label className="form-check-label inline-block text-gray-800" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
