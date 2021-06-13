import React from 'react';
import { Matrix } from './Matrix';
import './FixedMatrix.css'

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


export const FixedMatrix = React.memo(() => {
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

  const onScroll = (a) => {
    console.log('scroll')
    console.log(a)
    var o = document.getElementById('other');
    o.scrollTop = a.target.scrollTop;
    o.scrollLeft = a.target.scrollLeft;

  }


  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',boxSizing:'border-box',border:'1px solid green'}}>
      <div style={{height:'200px',border:'1px solid grey'}}>
        <svg preserveAspectRatio="xMaxYMid meet" viewBox="0 0 1100 200" width="100%" height="200px" style={{overflow:'hidden'}}>
          <foreignObject x='55px' y='40px' width='140px' height='140px'>
            <img
              alt="pic"
              src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+'1'+'.jpg'}
              style={{borderRadius:'50%',x:'55px',y:'150px',width:'140px',height:'140px'}}
            />
          </foreignObject>
          <text style={{fontSize:50*1.5+'px'}} x="230" y="120" fill="black">Joe Smith</text>
          <text style={{fontSize:20*1.5+'px'}} x="250" y="180" fill="black">104275</text>
        </svg>
      </div>


      <div id='other'  className="divScrollDiv tableNoScroll" style={{display:'flex',flexDirection:'row',width:'100%',height:'100px',boxSizing:'border-box',border:'1px solid green'}}>
        <div>
          2<br/>3<br/>4<br/>5<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>
          2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>
          2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>
          2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>
          2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>
          2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>
          2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>
        </div>
        <div onScroll={onScroll} className="divScrollDiv" style={{flex:'1',border:'1px solid grey',overflow:'auto'}}>
          <svg preserveAspectRatio="xMaxYMid meet" viewBox="0 -80 1100 600" xwidth="100%" height="600px">

            <text style={{fontSize:40*1.5+'px'}} x="40" y="0" fill="black">MOTOR ROTOR</text>
            <line x1="40" y1="30" x2="1500" y2="30" stroke={'black'} strokeWidth="5" />

            <Matrix
              renderFunction={renderRects}
              params={{
                name: "totalsright",
                data: widgetData.first,
                translateX: translateXmain-55,
                translateY: translateYmain-20,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: bandYmain
              }}
            />

            <text style={{fontSize:40*1.5+'px'}} x="40" y="380" fill="black">MOTOR STATOR</text>
            <line x1="40" y1="400" x2="1500" y2="400" stroke={'black'} strokeWidth="5" />

            <Matrix
              renderFunction={renderRects}
              params={{
                name: "totalsright",
                data: widgetData.second,
                translateX: translateXmain-55,
                translateY: translateYmain+350,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: bandYmain
              }}
            />
          </svg>
        </div>

      </div>


    </div>
  )
})
