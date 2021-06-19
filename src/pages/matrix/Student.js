import React from 'react';
import { Matrix } from './Matrix';

export const Student = React.memo((props) => {

  var widgetData = {
    first: [
      {meta:{tid:10},data:[{meta:{},data:{v:'Assembly Machine'}},{meta:{},data:{v:'Inspection & Packaging'}},]},
    ],
    second: [
      {meta:{tid:10},data:[{meta:{},data:{v:'Core Loading'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Phase Paper Insertion (VW)'}},]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Lead Wire Setting'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Neutral Tube Insertion'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Neureal Crimp'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Lead Wire Setting'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Neutral Tube Insertion'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Neureal Crimp'}}]},
    ],
    second2: [
      {meta:{tid:10},data:[{meta:{},data:{v:'Core Loading'}},{meta:{},data:{v:'Paper Insertion'}},]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Pre-Lacing'}},{meta:{},data:{v:'Lacing'}},]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Varnish Out'}},{meta:{},data:{v:'Insp. After Varnish'}},]},
    ],
  }





  const {student} = props.studentData;
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + student.id + '.jpg'

  const renderRects = (props,c,col,r,row,clickFunction) => {
    const {radius, bandX, bandY} = props
    var width = (bandX/5) -5
    var s = 15
    var w = 15
    var h = 40
    console.log(c)
    console.log(bandX)
    return (


      <g transform={"translate(" + (c*bandX) + "," + "0" + ")"} className="header">
        <text style={{fontSize:radius*1.5+'px'}} x="10" y="20" fill="black">{col.data.v}</text>
        <rect stroke="black" x={s+(width*0)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'gray',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*1)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'red',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*2)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'yellow',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*3)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'green',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*4)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'blue',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
      </g>


    )
  }

  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
      <div style={{height:'200px'}}>
        <div style={{fontSize:'24px'}}>{student.text}</div>
        <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>
      </div>

    <div style={{flex:'1',overflow:'auto'}}>


      <svg width="100%" height="100%">

        <Matrix
          renderFunction={renderRects}
          params={{
            name: "evaluation",
            data: widgetData.second,
            translateX: 0,
            translateY: 0,
            radius: 15,
            bandX: 340,
            bandY: 90
          }}
        />

      </svg>

    </div>
    </div>
  )
})
