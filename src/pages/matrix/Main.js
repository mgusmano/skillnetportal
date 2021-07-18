import React, { useState, useEffect } from 'react';
import { Diamond } from './Diamond';
import { useMatrixState } from './state/MatrixProvider';

import { getDates } from './util';


import { API, graphqlOperation } from 'aws-amplify'
//import { listCertifications} from '../../graphql/queries'
import { createCertification, deleteCertification, updateCertification } from '../../graphql/mutations'

import { listOperators} from '../../graphql/queries'
import { createOperator, deleteOperator } from '../../graphql/mutations'

import { listSkills } from '../../graphql/queries'
import { createSkill, updateSkill, deleteSkill } from '../../graphql/mutations'

import { listCertifications} from '../../graphql/queries'




export const Main = (props) => {
  //const [greendate, yellowdate, reddate] = getDates();
  const [diamonddata, setDiamondData] = useState(null)
  useEffect(() => {
    setDiamondData(data.data)
  },[])

  const matrixState = useMatrixState();






  async function getDataOperators() {
    const operatorData = await API.graphql(graphqlOperation(listOperators))
    return operatorData.data.listOperators.items
  }

  async function getDataSkills() {
    const skillData = await API.graphql(graphqlOperation(listSkills))
    return skillData.data.listSkills.items
  }

  async function getDataCertifications() {
    const certificationData = await API.graphql(graphqlOperation(listCertifications))
    return certificationData.data.listCertifications.items
  }

  const doByOperator = (operators, skills, certifications) => {
    var byOperator = []
    operators.map((operator,o) => {
      //var o = {}
      o = operator
      o.meta = operator
      o.data = []
      const filteredcertifications = certifications.filter(item => item.operatorID === operator.id);
      filteredcertifications.map((fc,i) => {
        var skill  = skills.find(item => item.id === fc.skillID);
        o.data[i] = {};
        o.data[i].operator = operator
        o.data[i].skill = skill
        o.data[i].meta = fc.meta
        o.data[i].data = fc.data
        return null
      })
      byOperator.push(o)
      return null
    })
    matrixState.setByOperator(byOperator)
  }

  const doBySkill = (operators, skills, certifications) => {
    var bySkill = []
    skills.map((skill,s) => {
      var o = {}
      o = skill
      o.meta = skill
      o.data = []
      const filteredcertifications = certifications.filter(item => item.skillID === skill.id);
      filteredcertifications.map((fc,i) => {
        var operator  = operators.find(item => item.id === fc.operatorID);
        o.data[i] = {};
        o.data[i].certificationID = fc.id
        o.data[i].skill = skill
        o.data[i].operator = operator
        o.data[i].meta = fc.meta
        o.data[i].data = fc.data
        return null
      })
      bySkill.push(o)
      return null
    })
    matrixState.setBySkill(bySkill)
  }

  const callAll = async () => {
    var operators = await getDataOperators()
    matrixState.setOperators(operators)
    var skills = await getDataSkills()
    matrixState.setSkills(skills)
    var certifications = await getDataCertifications()
    matrixState.setCertifications(certifications)
    doByOperator(operators,skills,certifications)
    doBySkill(operators,skills,certifications)
  };









  const {data} = props;


  var bandX = 150
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.operator.id + '.jpg'

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
    var dd = `[{"p":25,"s":${s25}},{"p":50,"s":${s50}},{"p":75,"s":${s75}},{"p":100,"s":${s100}}]`
    setDiamondData(dd)
    var c = {
      id: data.certificationID,
      //meta: `{"status":"started","start":"${reddate}","trainer":"false"}`,
      meta: data.meta,
      data: dd
    }
    await API.graphql(graphqlOperation(updateCertification, { input: c } ))
    callAll()
  }

  // const onChangeTrainer = (event) => {
  //   console.log(event.target.value);
  // }

  return (
    <div>
      <div style={{fontSize:'24px'}}>Operator: {data.operator.operatorName}</div>
      <div style={{fontSize:'20px',marginBottom:'10px'}}>{matrixState.userName}Skill: {data.skill.skillName}</div>
      <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>

          <div style={{margin:'30px',display:'flex',flexDirection:'column'}} onChange={onChangePercent}>
            Certification:
            <div><input style={{marginLeft:'20px'}} type="radio" value="25" name="percent" /> Apprentice</div>
            <div><input style={{marginLeft:'20px'}} type="radio" value="50" name="percent" /> Beginner</div>
            <div><input style={{marginLeft:'20px'}} type="radio" value="75" name="percent" /> Intermediate</div>
            <div><input style={{marginLeft:'20px'}} type="radio" value="100" name="percent" /> Certified</div>
          </div>

          {/* <div onChange={onChangeTrainer}>
            Trainer:
            <input type="radio" value="true" name="trainer" /> true
            <input type="radio" value="false" name="trainer" /> false
          </div> */}

          <svg width="400" height="400">
            {diamonddata !== null &&
            <Diamond meta={data.meta} data={diamonddata} boxSize={bandX} padding={30}/>
            }
          </svg>

        </div>
      </div>

    </div>
  )
}
