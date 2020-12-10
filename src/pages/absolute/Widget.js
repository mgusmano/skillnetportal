import React from "react";
import Comparative from './widgettype/Comparative'
import GeoWidget from './widgettype/GeoWidget'
import Grid from './widgettype/demo/Grid'
import RatingMeter from './widgettype/demo/RatingMeter'

import Tools from './Tools'
//import { useGlobalState } from './globalstate/GlobalStateProvider';
import SouthEastSizer from './SouthEastSizer'
import './Widget.css'

const Widget = (props) => {
  var widgetRecord = props.widgetRecord
  //const [{userName,dashboardData,widgetData}, dispatch] = useGlobalState();

  var style = {
    left: widgetRecord.properties.position.x,
    top: widgetRecord.properties.position.y,
    width: widgetRecord.properties.size.width,
    height: widgetRecord.properties.size.height,
    id: widgetRecord.id
  }

  var Specific = <div> {widgetRecord.type} </div>
  switch (widgetRecord.type) {
    case 'grid':
      Specific = <Grid widgetRecord={widgetRecord}/>;
      break;
    case 'ratingmeter':
      Specific = <RatingMeter widgetRecord={widgetRecord}/>;
      break;


    case 'comparative':
    case 'multiComparative':
    case 'gauge':
    case 'mix':
    case 'comparativeTimeSeries':
    case 'shareTrend':
    case 'crossTab':
    case 'dimensionException':
    case 'exceptionTimeSeries':
    case 'mmTrend':
    case 'scattergram':
    case 'trend':
    case 'waterfall':
      Specific = <Comparative widgetRecord={widgetRecord}/>;
      break;
    case 'geoWidget':
      Specific = <GeoWidget widgetRecord={widgetRecord}/>;
      break;
  }

  const findAncestor = (el, cls) => {
    if (el.classList.contains(cls)) {return el}
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  const onMouseDownForMove = (e) => {
    e.stopPropagation();
    var startX = e.clientX;
    var startY = e.clientY;

    var par = findAncestor(e.target,'widget')
    if (par == null) {
      return
    }
    function doDrag(e) {
      par.style.left = (startLeft + e.clientX - startX) + 'px'
      par.style.top = (startTop + e.clientY - startY) + 'px'
      par.style.width = startWidth
      par.style.height = startHeight
    }
    function stopDrag(e) {
      //dispatch({type: 'RESIZE_WIDGET', payload: {id: widgetRecord.id, w: par.style.width, h: par.style.height}});
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    }
    var startLeft = parseInt(document.defaultView.getComputedStyle(par).left, 10);
    var startTop = parseInt(document.defaultView.getComputedStyle(par).top, 10);
    var startWidth = parseInt(document.defaultView.getComputedStyle(par).width, 10);
    var startHeight = parseInt(document.defaultView.getComputedStyle(par).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  };


  const onMouse = (e, display) => {
    e.stopPropagation();
    function findAncestor (el, cls) {
      if (el.classList.contains(cls)) {return el}
      while ((el = el.parentElement) && !el.classList.contains(cls));
      return el;
    }
    var w = findAncestor(e.target,'widget')
    if (w != null) {
      w.getElementsByClassName("tools")[0].style.display = display
      w.getElementsByClassName("southeastsizer")[0].style.display = display
    }
  };

  const onClick = (e, display) => {
    //e.stopPropagation();
    //dispatch({type: 'ACTIVATE_WIDGET', payload: {id: widgetRecord.id}});
  };

  return (
    <div style={style} className={`widget bordershadow ${widgetRecord.active ? "active" : ""}`} onClick={(e) => {onClick(e)}} onMouseEnter={(e) => {onMouse(e,'block')}} onMouseLeave={(e) => {onMouse(e,'none')}}>
      <div onMouseDown={(e) => {onMouseDownForMove(e)}} style={{cursor:'move',position:'relative',display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'0 0 5px 0',height:'20px'}}>
        <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>{widgetRecord.defaultTitle}</div>
        <Tools widgetRecord={widgetRecord}/>
      </div>
      <div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'0 0 5px 0'}}>
        <div style={{fontSize: '12px'}}>breadcrumb  &gt;  more  &gt;  more</div>
      </div>
      {Specific}
      <div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'5px 0 0 0',height:'20px'}}>
        <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>footer left</div>
        <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>({widgetRecord.id})</div>
      </div>
      <SouthEastSizer widgetRecord={widgetRecord}/>
  </div>
  )
}

export default Widget
