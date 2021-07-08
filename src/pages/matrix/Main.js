import React from 'react';
import { Diamond } from './Diamond';
import { useMatrixState } from './state/MatrixProvider';


export const Main = (props) => {
  //const [{userName,dashboardData,widgetData}, dispatch] = useMatrixState();

  const MatrixState = useMatrixState();
  const {data} = props;
  var bandX = 100
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.operator.operatorID + '.jpg'
  return (
    <div>
      <div style={{fontSize:'32px'}}>Operator: {data.operator.operatorName}</div>
      <div style={{fontSize:'24px',marginBottom:'10px'}}>{MatrixState.userName}Skill: {data.skill.skillName}</div>
      <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>
          <svg width="400" height="400">
            <Diamond meta={data.meta} data={data.data} boxSize={bandX} padding={30}/>
          </svg>
        </div>
      </div>
    </div>
  )
}
