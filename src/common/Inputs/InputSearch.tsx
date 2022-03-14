import React from 'react';
import { useContextState } from 'contexts/GlobalContext';
import useDispatchGlobalContext from 'hooks/useDispatchGlobalContext';
import { DebounceInput } from 'react-debounce-input';
import { ScrollToTop } from 'utils/helpers';

interface InputSearchProps {}

const InputSearch: React.FC<InputSearchProps> = props => {
  const { stateContext } = useContextState();
  const { dispatchSearch } = useDispatchGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isSearch = !!value;
    if (!isSearch) {
      ScrollToTop();
    }
    dispatchSearch(value);
  };

  return (
    <div className="input-group relative flex flex-wrap items-stretch w-full">
      <div className="border rounded overflow-hidden flex">
        <DebounceInput
          value={stateContext.search}
          type="search"
          className="px-4 py-2"
          placeholder="Search..."
          onChange={handleChange}
          debounceTimeout={500}
        />
        <button className="flex items-center justify-center px-4 border-l">
          <svg
            className="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
