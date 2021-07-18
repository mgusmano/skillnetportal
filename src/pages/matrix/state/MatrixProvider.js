import React, { createContext, useReducer, useContext } from 'react';
import { MatrixReducer } from './MatrixReducer';
import { SET_OPERATORS, SET_SKILLS, SET_CERTIFICATIONS, SET_BYSKILL, SET_BYOPERATOR, SET_SPECIFIC, TOGGLE_LEGEND, SET_DIMENSIONS, SET_ORIGINAL } from './MatrixTypes';

const MatrixContext = createContext();

export const MatrixProvider = (props) => {

  const setOperators = (payload) => {
    dispatch({type: SET_OPERATORS, payload: payload});
  }

  const setSkills = (payload) => {
    dispatch({type: SET_SKILLS, payload: payload});
  }

  const setCertifications = (payload) => {
    dispatch({type: SET_CERTIFICATIONS, payload: payload});
  }

  const setBySkill = (payload) => {
    dispatch({type: SET_BYSKILL, payload: payload});
  }

  const setByOperator = (payload) => {
    dispatch({type: SET_BYOPERATOR, payload: payload});
  }

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
    operators: null,
    skills: null,
    certifications: null,
    bySkill: null,
    byOperator: null,
    specific: null,
    dimensions: null,
    original: null,
    userName: '',
    showTheLegend: false,


  }
  const[state, dispatch] = useReducer(MatrixReducer, initialState);

  return (
    <MatrixContext.Provider value={{
      operators: state.operators,
      skills: state.skills,
      certifications: state.certifications,
      bySkill: state.bySkill,
      byOperator: state.byOperator,
      specific: state.specific,
      userName: state.userName,
      showTheLegend: state.showTheLegend,
      dimensions: state.dimensions,
      original: state.original,
      setSkills,
      setOperators,
      setCertifications,
      setBySkill,
      setByOperator,
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
