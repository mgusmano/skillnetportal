//import produce from 'immer';
// import {
//   SET_USERNAME,
//   SET_BOTTOMTOTALS,
//   SET_RIGHTTOTALS,
//   SET_ORIGINAL,
//   SET_DIMENSIONS,
//   SET_ALL,
//   SET_ACTIVE,
// } from './Types';

import * as types from './SimpleTypes';

export const SimpleReducer = (state, action) => {
  const { type, payload } = action;
  var s;
  console.log(type)
  console.log(types.SET_USERNAME)
  switch (type) {
    case types.SET_USERNAME:
      console.log('type.SET_USERNAME',payload)
      return {...state,userName:payload}
    case types.SET_BOTTOMTOTALS:
      return {...state,bottomtotals:payload}
    case types.SET_RIGHTTOTALS:
      return {...state,righttotals:payload}
    case types.SET_ORIGINAL:
      return {...state,original:payload}
    case types.SET_DIMENSIONS:
      return {...state,dimensions:payload}

    case types.SET_ALL:
      s = {
        ...state,
        byOperator:payload.byOperator,
        bySkill:payload.bySkill,
        operators:payload.operators,
        skills:payload.skills,
        certifications:payload.certifications,
      }
      console.log(s)
      return s

    case types.SET_OPERATORS:
      return {...state,operators:payload}

    case types.SET_ACTIVE:
      if (payload === true) {
        s = {...state,active:true}
      }
      else {
        s = {...state,active:false}
      }
      return s


    default:
      return state;
  }
}