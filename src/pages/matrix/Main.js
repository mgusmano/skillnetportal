import React from 'react';
import { Diamond } from './Diamond';
import { useMatrixState } from './state/MatrixProvider';
import { API, graphqlOperation } from 'aws-amplify'
//import { listCertifications} from '../../graphql/queries'
import { createCertification, deleteCertification, updateCertification } from '../../graphql/mutations'
import { getDates } from './util';


export const Main = (props) => {
  const [greendate, yellowdate, reddate] = getDates();
  //const [{userName,dashboardData,widgetData}, dispatch] = useMatrixState();

  const MatrixState = useMatrixState();
  const {data} = props;
  var bandX = 100
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.operator.operatorID + '.jpg'

  async function onChangePercent(event) {
    console.log(event.target.value);
    var s25 = 0, s50 = 0, s75 = 0, s100 = 0;
    switch (event.target.value) {
      case '0':
        break;
      case '25':
        s25 = 1;
        break;
      case '50':
        s25 = 1;
        s50 = 1;
        break;
      case '75':
        s25 = 1;
        s50 = 1;
        s75 = 1;
        break;
      case '100':
        s25 = 1;
        s50 = 1;
        s75 = 1;
        s100 = 1;
        break;
      default:
        break;
    }
    var c = {
      id: "1",
      meta: `{"status":"started","start":"${reddate}","trainer":"false"}`,
      data: `[{"p":25,"s":${s25}},{"p":50,"s":${s50}},{"p":75,"s":${s75}},{"p":100,"s":${s100}}]`
    }
    await API.graphql(graphqlOperation(updateCertification, { input: c } ))
    //getDataCertifications()
  }

  const onChangeTrainer = (event) => {
    console.log(event.target.value);
  }



  return (
    <div>
      <div style={{fontSize:'32px'}}>Operator: {data.operator.operatorName}</div>
      <div style={{fontSize:'24px',marginBottom:'10px'}}>{MatrixState.userName}Skill: {data.skill.skillName}</div>
      <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>



          <div onChange={onChangePercent}>
        Certification:
        <input style={{marginLeft:'20px'}} type="radio" value="0" name="percent" /> Started
        <input style={{marginLeft:'20px'}} type="radio" value="25" name="percent" /> Apprentice
        <input style={{marginLeft:'20px'}} type="radio" value="50" name="percent" /> Beginner
        <input style={{marginLeft:'20px'}} type="radio" value="75" name="percent" /> Intermediate
        <input style={{marginLeft:'20px'}} type="radio" value="100" name="percent" /> Certified
      </div>

      <div onChange={onChangeTrainer}>
        Trainer:
        <input type="radio" value="true" name="trainer" /> true
        <input type="radio" value="false" name="trainer" /> false
      </div>

      <svg width="400" height="400">
            <Diamond meta={data.meta} data={data.data} boxSize={bandX} padding={30}/>
          </svg>

        </div>
      </div>

    </div>
  )
}
