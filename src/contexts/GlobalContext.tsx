import React from 'react';

//defaultStateContext
export const defaultStateContext = {
  search: '',
} as IStateContext;

//interfaces
export type IStateContext = {
  search: string;
};

//constants
export enum ActionTypes {
  STATE = 'STATE',
}

//types
type Action = { type: ActionTypes.STATE; payload: IStateContext };

type Dispatch = (action: Action) => void;
type State = {
  stateContext: IStateContext;
};

const initialState = {
  stateContext: defaultStateContext,
};

export const GlobalStateContext = React.createContext<State | undefined>(initialState);
export const GlobalDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.STATE: {
      return {
        ...state,
        stateContext: action.payload,
      };
    }
    default:
      throw new Error(`Unhandled action type`);
  }
}

function useContextState() {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useContextState must be used within a Provider');
  }
  return context;
}

function useContextDispatch() {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error('useContextDispatch must be used within a Provider');
  }
  return context;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export { GlobalContextProvider, useContextState, useContextDispatch };
