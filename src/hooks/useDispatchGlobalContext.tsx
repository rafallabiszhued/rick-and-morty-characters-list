import { ActionTypes, useContextDispatch, useContextState } from 'contexts/GlobalContext';

const useDispatchGlobalContext = () => {
  const { stateContext } = useContextState();
  const dispatch = useContextDispatch();

  const dispatchSearch = (value: string) => {
    dispatch({
      type: ActionTypes.STATE,
      payload: { ...stateContext, search: value },
    });
  };

  return {
    dispatchSearch,
  };
};

export default useDispatchGlobalContext;
