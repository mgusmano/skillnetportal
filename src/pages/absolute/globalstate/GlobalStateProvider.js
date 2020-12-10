import React, { createContext, useReducer, useContext } from 'react';
import { GlobalStateReducer } from './GlobalStateReducer';

export const GlobalContext = createContext();
export const GlobalStateProvider = (props) => {
  const initialGlobalState = {
    highWidgetId: 0,
    userName: '',
    toolkitTitle: 'Workspace',
    dashboardData: {appTitle:''},
    widgetData: [],
  }
  return (
    <GlobalContext.Provider value={ useReducer(GlobalStateReducer, initialGlobalState) }>
      {props.children}
    </GlobalContext.Provider>
  );
}
export const useGlobalState = () => useContext(GlobalContext);
