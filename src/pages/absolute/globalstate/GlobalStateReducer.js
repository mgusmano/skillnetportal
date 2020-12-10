import produce from 'immer'

export const GlobalStateReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {

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



    case 'dashboardData':
      return { ...state, dashboardData: payload }
    case 'widgetData':
      return { ...state, widgetData: payload, highWidgetId: payload.length }
    case 'appTitle':
      return produce(state,(draft) => {
        draft.dashboardData.appTitle = payload
      })
    case 'userName':
      return produce(state,(draft) => {
        draft.userName = payload
      })
    case "ADD_WIDGET":
      return produce(state, draft => {
        draft.highWidgetId = draft.highWidgetId + 1
        draft.widgetData.push({
          id: draft.highWidgetId,
          defaultTitle: payload.title,
          type: payload.type,
          properties: {
            mode: payload.mode,
            position: {x: payload.x,y: payload.y},
            size: {width: payload.w,height: payload.h}
          },
        })
      })
      case "TILE_WIDGETS":
        return produce(state, draft => {
          var a = document.getElementById('absolute')
          var w = a.scrollWidth
          var h = a.scrollHeight - 40
          var l = draft.widgetData.length
          var newWidth = w/l
          //console.dir(a)
          //console.log(w)
          //console.log(l)
          //console.log(newWidth)
          var left = 20
          var width = newWidth - 40

          draft.widgetData.forEach(widget => {
            var index = draft.widgetData.map(item => item.id).indexOf(widget.id);
            if (index !== -1) {
              draft.widgetData[index].properties.position =  {x:left,y: 20}
              draft.widgetData[index].properties.size = {width: width,height: h}
              left = width + left + 30
            }
          })
        })
    case "CHANGE_WIDGET_MODE":
      return produce(state, draft => {
        var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          if (draft.widgetData[index].properties.mode == 'chart') {
            draft.widgetData[index].properties.mode = 'grid'
          }
          else {
            draft.widgetData[index].properties.mode = 'chart'
          }
        }
      })
      case "DELETE_WIDGET":
        //console.log('DELETE_WIDGET')
        return produce(state, draft => {
          var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
          if (index !== -1) {
            draft.widgetData.splice(index, 1);
          }
        })
    case "UPDATE_WIDGET":
      return produce(state, draft => {
        var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.widgetData[index].properties.position =  {x: payload.x,y: payload.y}
          draft.widgetData[index].properties.size = {width: payload.w,height: payload.h}
        }
      })
    case "MOVE_WIDGET":
      return produce(state, draft => {
        var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.widgetData[index].properties.position = {x: payload.x,y: payload.y}
        }
      })


    default:
      return state;
  }
}