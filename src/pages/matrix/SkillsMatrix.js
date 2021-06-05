import React from 'react';
import { Matrix } from './Matrix';

var widgetData = {
  first: [
    {meta:{tid:10},data:[{meta:{},data:{v:'Assembly Machine'}},{meta:{},data:{v:'Inspection & Packaging'}},]},
  ],
  second: [
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

          <foreignObject x='55px' y='40px' width='140px' height='140px'>
            <img
              alt="pic"
              src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+'1'+'.jpg'}
              style={{borderRadius:'50%',x:'55px',y:'150px',width:'140px',height:'140px'}}
            />
          </foreignObject>

          <text style={{fontSize:50*1.5+'px'}} x="230" y="120" fill="black">Joe Smith</text>
          <text style={{fontSize:20*1.5+'px'}} x="250" y="180" fill="black">104275</text>

          <text style={{fontSize:40*1.5+'px'}} x="40" y="320" fill="black">MOTOR ROTOR</text>
          <line x1="40" y1="350" x2="1500" y2="350" stroke={'black'} strokeWidth="5" />

          <Matrix
            renderFunction={renderRects}
            params={{
              name: "totalsright",
              data: widgetData.first,
              translateX: translateXmain,
              translateY: translateYmain + 300,
              radius: radiusmain,
              bandX: bandXmain,
              bandY: bandYmain
            }}
          />

          <text style={{fontSize:40*1.5+'px'}} x="40" y="720" fill="black">MOTOR STATOR</text>
          <line x1="40" y1="750" x2="1500" y2="750" stroke={'black'} strokeWidth="5" />

          <Matrix
            renderFunction={renderRects}
            params={{
              name: "totalsright",
              data: widgetData.second,
              translateX: translateXmain,
              translateY: translateYmain+700,
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
