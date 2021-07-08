import React, { createContext, useReducer, useContext } from 'react';
import { MatrixReducer } from './MatrixReducer';
import { SET_SPECIFIC, TOGGLE_LEGEND, SET_DIMENSIONS, SET_ORIGINAL } from './MatrixTypes';

const MatrixContext = createContext();

export const MatrixProvider = (props) => {

  const setSpecific = (payload) => {
    dispatch({type: SET_SPECIFIC, payload: payload});
  }

  const setDimensions = (payload) => {
    dispatch({type: SET_DIMENSIONS, payload: payload});
  }

  const setOriginal = (payload) => {
    dispatch({type: SET_ORIGINAL, payload: payload});
  }


  const updateUserName = (payload) => {
    dispatch({type: "U", payload: payload});
  }

  const toggleLegend = (payload) => {
    dispatch({type: TOGGLE_LEGEND, payload: payload});
  }

  const initialState = {
    specific: null,
    dimensions: null,
    original: null,
    userName: '',
    showTheLegend: false,


  }
  const[state, dispatch] = useReducer(MatrixReducer, initialState);

  return (
    <MatrixContext.Provider value={{
      specific: state.specific,
      userName: state.userName,
      showTheLegend: state.showTheLegend,
      dimensions: state.dimensions,
      original: state.original,
      setSpecific,
      setDimensions,
      setOriginal,
      updateUserName,
      toggleLegend
    }}>
      {props.children}
    </MatrixContext.Provider>
  );
}
export const useMatrixState = () => useContext(MatrixContext);
