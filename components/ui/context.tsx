import { createContext, FC, useContext, useMemo, useReducer } from 'react';

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

type State = StateValues & StateModifiers;

const initialState = { isSidebarOpen: false };

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

type Action = {
  type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR';
};

enum ActionType {
  openSidebar = 'OPEN_SIDEBAR',
  closeSidebar = 'CLOSE_SIDEBAR',
}

const uiReducer = (state: StateValues, action: Action): StateValues => {
  switch (action.type) {
    case ActionType.openSidebar:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case ActionType.closeSidebar:
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
      return state;
  }
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: ActionType.openSidebar });
  const closeSidebar = () => dispatch({ type: ActionType.closeSidebar });

  const value = useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
    };
  }, [state.isSidebarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  return context;
};
