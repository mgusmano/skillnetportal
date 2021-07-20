import React, { createContext, useReducer, useContext } from 'react';
import { MatrixReducer } from './MatrixReducer';
import { SET_ACTIVE, SET_ALL, SET_OPERATORS, SET_SKILLS, SET_CERTIFICATIONS, SET_BYSKILL, SET_BYOPERATOR, SET_SPECIFIC, TOGGLE_LEGEND, SET_DIMENSIONS, SET_ORIGINAL } from './MatrixTypes';

import { API, graphqlOperation } from 'aws-amplify'
import { updateCertification } from '../../../graphql/mutations'
import { listOperators} from '../../../graphql/queries'
import { listSkills } from '../../../graphql/queries'
import { listCertifications} from '../../../graphql/queries'

const MatrixContext = createContext();

// function dispatchMiddleware(dispatch) {
//   return (action) => {
//     switch (action.type) {

//       default:
//         console.log('mw')
//         return dispatch(action);
//     }
//   };
// }



export const MatrixProvider = (props) => {

  const setAll = () => {


  async function getDataOperators() {
    const operatorData = await API.graphql(graphqlOperation(listOperators))
    return operatorData.data.listOperators.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }

  async function getDataSkills() {
    const skillData = await API.graphql(graphqlOperation(listSkills))
    return skillData.data.listSkills.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }

  async function getDataCertifications() {
    const certificationData = await API.graphql(graphqlOperation(listCertifications))
    return certificationData.data.listCertifications.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }

  const doByOperator = (operators, skills, certifications) => {
    var byOperator = []
    operators.map((operator,o) => {
      //var o = {}
      o = operator
      o.meta = operator
      o.data = []
      const filteredcertifications = certifications.filter(item => item.operatorID === operator.id);
      filteredcertifications.map((fc,i) => {
        var skill  = skills.find(item => item.id === fc.skillID);
        o.data[i] = {};
        o.data[i].operator = operator
        o.data[i].skill = skill
        o.data[i].meta = fc.meta
        o.data[i].data = fc.data
        return null
      })
      byOperator.push(o)
      return null
    })
    return byOperator
    //matrixState.setByOperator(byOperator)
  }

  const doBySkill = (operators, skills, certifications) => {
    var bySkill = []
    skills.map((skill,s) => {
      var o = {}
      o = skill
      o.meta = skill
      o.data = []
      const filteredcertifications = certifications.filter(item => item.skillID === skill.id);
      filteredcertifications.map((fc,i) => {
        var operator  = operators.find(item => item.id === fc.operatorID);
        o.data[i] = {};
        o.data[i].certificationID = fc.id
        o.data[i].skill = skill
        o.data[i].operator = operator
        o.data[i].meta = fc.meta
        o.data[i].data = fc.data
        return null
      })
      bySkill.push(o)
      return null
    })
    return bySkill
    //matrixState.setBySkill(bySkill)
  }

  const callAll = async (state) => {
    var operators = await getDataOperators()
    var skills = await getDataSkills()
    var certifications = await getDataCertifications()
    var byOperator = doByOperator(operators,skills,certifications)
    var bySkill = doBySkill(operators,skills,certifications)

    var payload = {
      //operators: operators,
      //skills: skills,
      bySkill: bySkill,
      byOperator: byOperator,
      certifications: certifications
    }
    dispatch({type: SET_ALL, payload: payload});
    dispatch({type: SET_ACTIVE, payload: false});

    //var oLen = operators.length
    //var sLen = skills.length
    //return {oLen,sLen}
  };

  //console.log('here')
  //console.log(state)
  //dispatch({type: SET_ACTIVE, payload: true});
  callAll()


  }

  const setActive = (payload) => {
    dispatch({type: SET_ACTIVE, payload: payload});
  }


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
    active: false,
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
      active: state.active,
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
      setActive,
      setAll,
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
