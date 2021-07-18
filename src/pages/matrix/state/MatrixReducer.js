import produce from 'immer';
import { SET_OPERATORS, SET_SKILLS, SET_CERTIFICATIONS, SET_BYSKILL, SET_BYOPERATOR, SET_SPECIFIC, TOGGLE_LEGEND, SET_DIMENSIONS, SET_ORIGINAL } from './MatrixTypes';

export const MatrixReducer = (state, action) => {
  const { type, payload } = action;
  var s;
  switch (type) {
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
      console.log(state)
      console.log(payload)
      s = {...state,specific:payload}
      console.log(s)
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