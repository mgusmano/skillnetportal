import React from 'react';
import { Matrix } from './Matrix';

export const Skill = React.memo((props) => {
  const {skill,num} = props.skillData

  var widgetData = {
    who: [
      {meta:{tid:10},data:[{meta:{},data:{v:'Joe Smith'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Dan Smith'}},]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Mike Smith'}}]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Marc Smith'}},]},
    ]
  }

  const renderText = (props,c,col,r,row) => {
    const {bandX, bandY} = props
    return (
      <text
        dominantBaseline="middle"
        textAnchor="middle"
        stroke="black"
        x={(bandX*c)+(bandX/2)}
        y={bandY-(bandY/2)}
        className="text"
        style={{fontSize:'24px'}}>
          {col.data.v}
      </text>
    )
  }



  const result = num % 2;
  var src;
  if (result == 1) {
    src="https://app.swipeguide.com/guide/example-guide-line-1-wort-cooling-wort-aeration/safety/attach-lock/2"
  }
  else {
    src="https://app.swipeguide.com/guide/multipacker-ocme/getting-started/copy%20500e%20of%20prepare-the-machine"
  }
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
      <div style={{height:'50px',fontSize:'32px'}}>
        <div>Certification/Skill: {skill.text}</div>
      </div>

      <div style={{flex:'1'}}>

        <div style={{fontSize:'24px',marginBottom:'10px'}}>Operators with this certification</div>

        <svg xheight="450px" xwidth="500px">
          <Matrix
            renderFunction={renderText}
            params={{
              name:'main',data:widgetData.who,
              translateX:0,translateY:0,radius:15,bandX:240,bandY:35
            }}
          />
        </svg>

      </div>

      <div style={{flex:'2',display:'flex'}}>
        <iframe
          width="100%"
          style={{flex:'1',border:'1'}}
          src={src}
          xsrc={"https://app.swipeguide.com/embed/guide/46e3b328-9e74-4875-a774-99418940d9f4/279b3f82-e4e1-4468-b166-419372c57c39?embed=true&locale=EN_US&isolatedInstruction=true"}>
        </iframe>
      </div>
    </div>
  )
})
