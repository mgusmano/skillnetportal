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
  const [metadata, setMetaData] = useState(null)

  const [notstarted, setNotStarted] = useState(false)
  const [started, setStarted] = useState(false)
  const [apprentice, setApprentice] = useState(false)
  const [beginner, setBeginner] = useState(false)
  const [intermediate, setIntermediate] = useState(false)
  const [certified, setCertified] = useState(false)

  //const [md, setMD] = useState(false)
  //const {data} = props;

  const data = JSON.parse(props.data.data)
  const meta = JSON.parse(props.data.meta)
  const operator = props.data.operator
  const skill = props.data.skill
  const certificationID = props.data.certificationID

  console.log(props)
  // console.log(operator)
  // console.log(skill)
  // console.log(data)
  // console.log(meta)

const setIt = (data,meta) => {
  console.log(meta)
  //var dd = JSON.parse(data)
  //console.log(dd)
  var num = 0
  data.map((d,i) => {
    //console.log(d)
    if (d.s === 1) {num++}
  })

  //console.log(meta)



  //console.log(num)
  setNotStarted(false)
  setStarted(false)
  setApprentice(false)
  setBeginner(false)
  setIntermediate(false)
  setCertified(false)
  setMetaData(meta)

  //var md = JSON.parse(meta)
  console.log(meta.status)
  if (meta.status === 'not started') {
    //setNotStarted(true)
    //setStarted(false)
    num = -1;
  }

  // else {
  //   setNotStarted(false)
  //   setStarted(true)
  // }

console.log(num)

  switch (num) {
    case -1:
      setNotStarted(true)
      break;
    case 0:
      setStarted(true)

      // console.log(meta)
      // var md = JSON.parse(meta)
      // console.log(md)
      // md.status = 'started'
      // setMetaData(JSON.stringify(md))

      break;
    case 1:
      setApprentice(true)
      break;
    case 2:
      setBeginner(true)
      break;
    case 3:
      setIntermediate(true)
      break;
    case 4:
      setCertified(true)
      break;
    default:
      break;
  }
}

  useEffect(() => {
    console.log('here')

    setDiamondData(data)
    //setMetaData(data.meta)

    // md.status = 'started'
    // setMD(md)



    setIt(data,meta)
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













  var bandX = 150
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + operator.id + '.jpg'

  async function onChangePercent(event) {


    var metadatalocal = {...metadata};
    console.log(event.target.value);
    var s25 = 0, s50 = 0, s75 = 0, s100 = 0;
    switch (event.target.value) {
      case '-1':
        console.log('here?')
        metadatalocal.status = 'not started'
        break;
      case '0':
        metadatalocal.status = 'started'
        break;
      case '25':
        metadatalocal.status = 'started'
        s25 = 1;
        break;
      case '50':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        break;
      case '75':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        s75 = 1;
        break;
      case '100':
        metadatalocal.status = 'started'
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
    console.log(metadatalocal)
    setIt(JSON.parse(dd),metadatalocal)
    //setMetaData(JSON.stringify(md))


    var c = {
      id: certificationID,
      //meta: `{"status":"started","start":"${reddate}","trainer":"false"}`,
      meta: JSON.stringify(metadatalocal),
      //meta: JSON.stringify(md),
      //meta: data.meta,
      data: dd
    }
    console.log(c)
    await API.graphql(graphqlOperation(updateCertification, { input: c } ))
    callAll()
  }

  // const onChangeTrainer = (event) => {
  //   console.log(event.target.value);
  // }

  return (
    <div>
      <div style={{fontSize:'24px'}}>Operator: {operator.operatorName}</div>
      <div style={{fontSize:'20px',marginBottom:'10px'}}>{matrixState.userName}Skill: {skill.skillName}</div>
      <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>

          <div style={{margin:'30px',display:'flex',flexDirection:'column'}} onChange={onChangePercent}>
            Certification:
            <div><input checked={notstarted} style={{marginLeft:'20px'}} type="radio" value="-1" name="percent" /> Not Started</div>
            <div><input checked={started} style={{marginLeft:'20px'}} type="radio" value="0" name="percent" /> Started</div>
            <div><input checked={apprentice} style={{marginLeft:'20px'}} type="radio" value="25" name="percent" /> Apprentice</div>
            <div><input checked={beginner} style={{marginLeft:'20px'}} type="radio" value="50" name="percent" /> Beginner</div>
            <div><input checked={intermediate} style={{marginLeft:'20px'}} type="radio" value="75" name="percent" /> Intermediate</div>
            <div><input checked={certified} style={{marginLeft:'20px'}} type="radio" value="100" name="percent" /> Certified</div>
          </div>

          {/* <div onChange={onChangeTrainer}>
            Trainer:
            <input type="radio" value="true" name="trainer" /> true
            <input type="radio" value="false" name="trainer" /> false
          </div> */}

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
