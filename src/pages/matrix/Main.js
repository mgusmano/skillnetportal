import React, { useState, useEffect } from 'react';
import { Diamond } from './Diamond';
import { useMatrixState } from './state/MatrixProvider';

import { API, graphqlOperation } from 'aws-amplify'
import { updateCertification } from '../../graphql/mutations'
import { listOperators} from '../../graphql/queries'
import { listSkills } from '../../graphql/queries'
import { listCertifications} from '../../graphql/queries'

export const Main = (props) => {
  const [diamonddata, setDiamondData] = useState(null)
  const [metadata, setMetaData] = useState(null)
  const [certification, setCertification] = useState(null)
  const [trainer, setTrainer] = useState(false)

  const data = JSON.parse(props.data.data)
  const meta = JSON.parse(props.data.meta)
  const operator = props.data.operator
  const skill = props.data.skill
  const certificationID = props.data.certificationID

  var bandX = 150
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + operator.id + '.jpg'

const setIt2 = (data,meta) => {
  var num = 0
  data.map((d,i) => {
    if (d.s === 1) {num++}
  })

  if (meta.status === 'not started') {
    num = -1;
  }

  switch (num) {
    case -1:
      setCertification('notstarted')
      break;
    case 0:
      setCertification('started')
      break;
    case 1:
      setCertification('apprentice')
      break;
    case 2:
      setCertification('beginner')
      break;
    case 3:
      setCertification('intermediate')
      break;
    case 4:
      setCertification('certified')
      break;
    default:
      break;
  }


}

  useEffect(() => {
    setDiamondData(data)
    setMetaData(meta)
    setIt2(data,meta)
    console.log(meta)
    console.log(meta.trainer)
    if (meta.trainer == 'true') {
      setTrainer(true)
    }
    else {
      setTrainer(false)
    }

  },[props])

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









  const onTrainerChange = async (event) => {
    console.log(metadata)
    var metadatalocal = {...metadata};
    console.log(metadatalocal)
    if (event.target.value == 'true') {
      setTrainer(true)
      metadatalocal.trainer = "true"
    }
    else {
      setTrainer(false)
      metadatalocal.trainer = "false"
    }
    setMetaData(metadatalocal)
    var c = {
      id: certificationID,
      //meta: `{"status":"started","start":"${reddate}","trainer":"false"}`,
      meta: JSON.stringify(metadatalocal),
      data: JSON.stringify(diamonddata),
    }
    console.log(c)
    await API.graphql(graphqlOperation(updateCertification, { input: c } ))
    callAll()
  }

  const onCertificationChange = async (event) => {
    var metadatalocal = {...metadata};
    var s25 = 0, s50 = 0, s75 = 0, s100 = 0;
    switch (event.target.value) {
      case 'notstarted':
        metadatalocal.status = 'not started'
        break;
      case 'started':
        metadatalocal.status = 'started'
        break;
      case 'apprentice':
        metadatalocal.status = 'started'
        s25 = 1;
        break;
      case 'beginner':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        break;
      case 'intermediate':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        s75 = 1;
        break;
      case 'certified':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        s75 = 1;
        s100 = 1;
        break;
      default:
        break;
    }

    var dd2 = [{"p":25,"s":s25},{"p":50,"s":s50},{"p":75,"s":s75},{"p":100,"s":s100}]
    setDiamondData(dd2)

    setMetaData(metadatalocal)
    setCertification(event.target.value)

    var c = {
      id: certificationID,
      //meta: `{"status":"started","start":"${reddate}","trainer":"false"}`,
      meta: JSON.stringify(metadatalocal),
      data: JSON.stringify(dd2),
    }
    console.log(c)
    await API.graphql(graphqlOperation(updateCertification, { input: c } ))
    callAll()
  }

  return (
    <div>
      <div style={{fontSize:'24px'}}>Operator: {operator.operatorName}</div>
      <div style={{fontSize:'20px',marginBottom:'10px'}}>{matrixState.userName}Skill: {skill.skillName}</div>
      <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>

          <div style={{margin:'30px',display:'flex',flexDirection:'column'}}>
            Certification:
            <div><input value="notstarted" checked={certification === 'notstarted'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Not Started</div>
            <div><input value="started" checked={certification === 'started'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Started</div>
            <div><input value="apprentice" checked={certification === 'apprentice'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Apprentice</div>
            <div><input value="beginner" checked={certification === 'beginner'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Beginner</div>
            <div><input value="intermediate" checked={certification === 'intermediate'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Intermediate</div>
            <div><input value="certified" checked={certification === 'certified'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Certified</div>
          </div>

          <div style={{marginLeft:'30px',display:'flex',flexDirection:'column'}}>
            Trainer:
            <div><input value="false" checked={trainer == false} onChange={onTrainerChange} style={{marginLeft:'20px'}} type="radio" name="trainer" /> No</div>
            <div><input value="true" checked={trainer == true} onChange={onTrainerChange} style={{marginLeft:'20px'}} type="radio" name="trainer" /> Yes</div>
          </div>

          <svg width="400" height="400">
            {diamonddata !== null &&
            <Diamond meta={metadata} data={diamonddata} boxSize={bandX} padding={30}/>
            }
          </svg>

        </div>
      </div>

    </div>
  )
}
