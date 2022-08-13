import React, { createContext, useContext, useReducer } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';
import get from 'lodash/get';

type GhAction = {
  type: 'setData' | 'config' | 'trending';
  payload: any;
};
type GhDispatch = (action: GhAction) => void;
type GhState = {
  userInfo?: object;
  count: number;
};
type GhProviderProps = { children: React.ReactNode; value?: GhState };

// Create a Context
export const GhContext = createContext<GhState | undefined>(undefined);
export const GhContextDispatch = createContext<GhDispatch | undefined>(undefined);

const ghReducer = (state: GhState, action: GhAction) => {
  const _state = cloneDeep(state);
  switch (action.type) {
    // set data
    case 'setData': {
      return { ..._state, ...action.payload };
    }
    case 'trending': {
      return { ..._state, ...action.payload };
    }
    case 'config': {
      const _val = get(_state, 'config');
      return set(_state, 'config', { ..._val, ...action.payload });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const GhProvider = ({ children }: GhProviderProps) => {
  const [state, dispatch] = useReducer(ghReducer, {});

  return (
    <GhContext.Provider value={state}>
      <GhContextDispatch.Provider value={dispatch}>
        {children}
      </GhContextDispatch.Provider>
    </GhContext.Provider>
  );
};

const useGhState = () => {
  const context = useContext(GhContext);
  if (context === undefined) {
    throw new Error('useGhState must be used within a GhProvider');
  }
  return context;
};

const useGhDispatch = () => {
  const context = useContext(GhContextDispatch);
  if (context === undefined) {
    throw new Error('useGhDispatch must be used within a GhProvider');
  }
  return context;
};

export { GhProvider, useGhState, useGhDispatch };