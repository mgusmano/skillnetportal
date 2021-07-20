import produce from 'immer';
import { SET_ACTIVE,SET_ALL, SET_OPERATORS, SET_SKILLS, SET_CERTIFICATIONS, SET_BYSKILL, SET_BYOPERATOR, SET_SPECIFIC, TOGGLE_LEGEND, SET_DIMENSIONS, SET_ORIGINAL } from './MatrixTypes';

import { API, graphqlOperation } from 'aws-amplify'
import { updateCertification } from '../../../graphql/mutations'
import { listOperators} from '../../../graphql/queries'
import { listSkills } from '../../../graphql/queries'
import { listCertifications} from '../../../graphql/queries'


export const MatrixReducer = (state, action) => {


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

    //matrixState.setOperators(operators)
    var skills = await getDataSkills()

    //matrixState.setSkills(skills)

    var certifications = await getDataCertifications()
    //matrixState.setCertifications(certifications)

    var byOperator = doByOperator(operators,skills,certifications)
    //matrixState.setByOperator(byOperator)

    var bySkill = doBySkill(operators,skills,certifications)
    //matrixState.setBySkill(bySkill)

    // matrixState.setAll({
    //   bySkill: bySkill,
    //   byOperator: byOperator,
    //   certifications: certifications
    // })

    var payload = {
      operators: operators,
      skills: skills,
      bySkill: bySkill,
      byOperator: byOperator,
      certifications: certifications
    }


    console.log(payload)
    var s = {
      ...state,
      byOperator:payload.byOperator,
      bySkill:payload.bySkill,
      certifications:payload.certifications,
    }
    console.log(s)
    return s

    //var oLen = operators.length
    //var sLen = skills.length
    //return {oLen,sLen}
  };








  const { type, payload } = action;
  var s;
  switch (type) {
    case SET_ALL:
      console.log(payload)
      s = {
        ...state,
        //operators:payload,
        bySkill:payload.bySkill,
        byOperator:payload.byOperator,
        certifications:payload.certifications,
      }
      return s

    // case 'SET_ALL2':

    // console.log('here')
    // console.log(state)
    // var ns = callAll(state).then((s) => {
    //   console.log('new',s)
    //   return s
    // })
    // //console.log(ns)
    // //return ns





      // console.log(payload)
      // s = {
      //   ...state,
      //   byOperator:payload.byOperator,
      //   bySkill:payload.bySkill,
      //   certifications:payload.certifications,
      // }
      // return s

    case SET_ACTIVE:
      s = {...state,active:payload}
      return s

    case SET_OPERATORS:
      s = {...state,operators:payload}
      return s
    case SET_SKILLS:
      s = {...state,skills:payload}
      return s
    case SET_CERTIFICATIONS:
      s = {...state,certifications:payload}
      return s
    case SET_BYSKILL:
      s = {...state,bySkill:payload}
      return s
    case SET_BYOPERATOR:
      s = {...state,byOperator:payload}
      return s

    case SET_SPECIFIC:
      //console.log(state)
      //console.log(payload)
      s = {...state,specific:payload}
      //console.log(s)
      return s
    case SET_DIMENSIONS:
      s = {...state,dimensions:payload}
      return s
    case SET_ORIGINAL:
        s = {...state,original:payload}
        return s
    case TOGGLE_LEGEND:
      var val = !state.showTheLegend
      s = {...state,showTheLegend:val}
      return s
    case "U":
      s = {...state,userName:payload}
      return s
      // return produce(state, draft => {
      //   console.log('in reducer: ',payload)
      //   draft.userName = payload
      // })


    case "ACTIVATE_WIDGET":
      //console.log("ACTIVATE_WIDGET",payload.id)
      return produce(state, draft => {
        draft.widgetData.forEach(widget => widget.active = false)
        var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.widgetData[index].active = true
          draft.toolkitTitle = draft.widgetData[index].defaultTitle
        }
      })

    case "RESIZE_WIDGET":
      //console.log("RESIZE_WIDGET",payload.id)
      return produce(state, draft => {
        var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.widgetData[index].properties.size = {width: payload.w,height: payload.h}
        }
      })

    default:
      return state;
  }
}