import { ActionTypes, defaultStateContext, useContextDispatch, useContextState } from 'contexts/GlobalContext';

const useDispatchGlobalContext = () => {
  const { stateContext } = useContextState();
  const dispatch = useContextDispatch();

  const dispatchSearch = (value: string) => {
    dispatch({
      type: ActionTypes.STATE,
      payload: { ...stateContext, search: value, page: defaultStateContext.page },
    });
  };

  const dispatchCharacterStatus = (value: string) => {
    dispatch({
      type: ActionTypes.STATE,
      payload: { ...stateContext, characterStatus: value, page: defaultStateContext.page },
    });
  };

  const dispatchPage = (page: number) => {
    dispatch({
      type: ActionTypes.STATE,
      payload: { ...stateContext, page },
    });
  };

  return {
    dispatchSearch,
    dispatchCharacterStatus,
    dispatchPage,
  };
};

export default useDispatchGlobalContext;
