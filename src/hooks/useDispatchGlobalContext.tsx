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

  const dispatchCharacterStatus = (value: string) => {
    dispatch({
      type: ActionTypes.STATE,
      payload: { ...stateContext, characterStatus: value },
    });
  };

  return {
    dispatchSearch,
    dispatchCharacterStatus,
  };
};

export default useDispatchGlobalContext;
