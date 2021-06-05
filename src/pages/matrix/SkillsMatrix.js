import React from 'react';
import { Matrix } from './Matrix';

var widgetData = {
  right: [
    {meta:{tid:10},data:[{meta:{},data:{v:'Core Loading'}},{meta:{},data:{v:'Paper Insertion'}},]},
    {meta:{tid:10},data:[{meta:{},data:{v:'Pre-Lacing'}},{meta:{},data:{v:'Lacing'}},]},
    {meta:{tid:10},data:[{meta:{},data:{v:'Varnish Out'}},{meta:{},data:{v:'Insp. After Varnish'}},]},
  ],
}


export const SkillsMatrix = React.memo(() => {
  const bandXmain = 500;
  const bandYmain = 200;
  const radiusmain = 20;
  const translateXmain = 100;
  const translateYmain = 100;

  const renderRects = (props,r,c,row,col) => {
    const {radius, bandX, bandY} = props
    var width = (bandX/5) -5
    var s = 15
    var w = 15
    var h = 80
    return (
      <g transform={"translate(" + (c*bandX) + "," + "0" + ")"} className="header">
        <text style={{fontSize:radius*1.5+'px'}} x="10" y="50" fill="black">{col.data.v}</text>

      <rect stroke="black" x={s+(width*0)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'gray',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
      <rect stroke="black" x={s+(width*1)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'red',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
      <rect stroke="black" x={s+(width*2)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'yellow',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
      <rect stroke="black" x={s+(width*3)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'green',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
      <rect stroke="black" x={s+(width*4)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'blue',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
     </g>
    )
  }

  return (
    <div style={{display:'flex',flexDirection:'column',flex:'1 1 0%',overflow:'hidden'}}>
      <div data-selector="cutting-svg-container" style={{background:'lightgray',position:'relative',overflow:'visible'}}>
        <svg preserveAspectRatio="xMaxYMid meet" viewBox="0 0 2000 1500" style={{overflow:'hidden'}}>
          <Matrix
            renderFunction={renderRects}
            params={{
              name: "totalsright",
              data: widgetData.right,
              translateX: translateXmain,
              translateY: translateYmain,
              radius: radiusmain,
              bandX: bandXmain,
              bandY: bandYmain
            }}
          />
        </svg>
      </div>
    </div>
  )
})
