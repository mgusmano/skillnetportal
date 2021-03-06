import React, { useState, useEffect } from 'react';
//import { Matrix } from './Matrix';
//import { MatrixOneRow } from './MatrixOneRow';
//import { Diamond } from './Diamond';
//import { MatrixCell } from './MatrixCell';
//import { Skill } from './Skill';
//import { Operator } from './Operator';
//import { Main } from './Main';
import { Legend } from './Legend';
import { getDates } from './util';
import { Log } from './Log';
import { Toolbar } from './Toolbar';
import { Row1Col2 } from './Row1Col2';
import { Row1Col3 } from './Row1Col3';
import { Row2Col1 } from './Row2Col1';
import { Row2Col2 } from './Row2Col2';
import { Row2Col3 } from './Row2Col3';
import { Row3Col1 } from './Row3Col1';
import { Row3Col2 } from './Row3Col2';
import { useMatrixState } from './state/MatrixProvider';
import { styles } from './styles';

import { API, graphqlOperation } from 'aws-amplify'

import { listOperators} from '../../graphql/queries'
import { createOperator, deleteOperator } from '../../graphql/mutations'

import { listSkills } from '../../graphql/queries'
import { createSkill, updateSkill, deleteSkill } from '../../graphql/mutations'

import { listCertifications} from '../../graphql/queries'

import { onUpdateCertification} from '../../graphql/subscriptions'
import frCA from 'date-fns/locale/fr-CA/index';

export default function useEvent(event, handler, passive = false) {
  useEffect(() => {
    window.addEventListener(event, handler, passive)
    return function cleanup() {
      window.removeEventListener(event, handler)
    }
  })
}

//export const TrainingMatrix = React.memo(({widgetData}) => {
export const TrainingMatrix = () => {
  const matrixState = useMatrixState();
  const { setOriginal, setDimensions } = matrixState;

  const subscribeCertifications = async () => {
    await API.graphql(graphqlOperation(onUpdateCertification)).subscribe({
      next: (subonUpdateCertifications) => {
        var certifications = getDataCertifications()
        matrixState.setCertifications(certifications)
      }
    });
  };

  const [greendate, yellowdate, reddate] = getDates();
  var widgetData = {
    // skillsX: [
    //   {skillID:10,line:'S',skillName:'Core Loading'},
    //   {skillID:20,line:'S',skillName:'Phase Paper Insertion (VW)'},
    //   {skillID:30,line:'S',skillName:'Lead Wire Setting'},
    //   {skillID:40,line:'S',skillName:'Neutral Tube Insertion'},
    //   {skillID:50,line:'S',skillName:'Neutral Crimp'},
    //   {skillID:60,line:'S',skillName:'Pre-Lacing'},
    //   {skillID:70,line:'S',skillName:'Lacing'},
    //   {skillID:80,line:'S',skillName:'Lead Terminal Crimp'},
    //   {skillID:90,line:'S',skillName:'Lead Wire Forming'},
    // ],
    // operatorsX: [
    //   {operatorID:1,operatorName:'Joe Smith'},
    //   {operatorID:2,operatorName:'Marc Ester'},
    //   {operatorID:3,operatorName:'Ted White'},
    //   {operatorID:4,operatorName:'Betty Green'},
    //   {operatorID:5,operatorName:'Bob Jones'},
    //   {operatorID:6,operatorName:'Frank Davis'},
    //   {operatorID:7,operatorName:'Jane Johnson'},
    //   {operatorID:8,operatorName:'Mary Bird'},
    //   {operatorID:9,operatorName:'Zoya Lee'},
    //   {operatorID:10,operatorName:'Joe Adams'},
    // ],
    // dataX: [
    //   {skillID:10,operatorID:1,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:10,operatorID:2,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:10,operatorID:3,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
    //   {skillID:10,operatorID:4,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:10,operatorID:5,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
    //   {skillID:10,operatorID:6,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:10,operatorID:7,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:10,operatorID:8,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:10,operatorID:9,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:10,operatorID:10,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}]},

    //   {skillID:20,operatorID:1,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:20,operatorID:2,meta:{status:'ok',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:20,operatorID:3,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:20,operatorID:4,meta:{status:'ok',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
    //   {skillID:20,operatorID:5,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:20,operatorID:6,meta:{status:'ok',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:20,operatorID:7,meta:{status:'ok',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:20,operatorID:8,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:20,operatorID:9,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:20,operatorID:10,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},

    //   {skillID:30,operatorID:1,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
    //   {skillID:30,operatorID:2,meta:{status:'not started'},data:[],},
    //   {skillID:30,operatorID:3,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:30,operatorID:4,meta:{status:'not started'},data:[],},
    //   {skillID:30,operatorID:5,meta:{status:'not started'},data:[],},
    //   {skillID:30,operatorID:6,meta:{status:'not started'},data:[],},
    //   {skillID:30,operatorID:7,meta:{status:'not started'},data:[],},
    //   {skillID:30,operatorID:8,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
    //   {skillID:30,operatorID:9,meta:{status:'not started'},data:[],},
    //   {skillID:30,operatorID:10,meta:{status:'not started'},data:[],},

    //   {skillID:40,operatorID:1,meta:{status:'not started'},data:[],},
    //   {skillID:40,operatorID:2,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:40,operatorID:3,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:40,operatorID:4,meta:{status:'not started'},data:[],},
    //   {skillID:40,operatorID:5,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:40,operatorID:6,meta:{status:'not started'},data:[],},
    //   {skillID:40,operatorID:7,meta:{status:'not started'},data:[],},
    //   {skillID:40,operatorID:8,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:40,operatorID:9,meta:{status:'not started'},data:[],},
    //   {skillID:40,operatorID:10,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},

    //   {skillID:50,operatorID:1,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:50,operatorID:2,meta:{status:'not started'},data:[],},
    //   {skillID:50,operatorID:3,meta:{status:'not started'},data:[],},
    //   {skillID:50,operatorID:4,meta:{status:'not started'},data:[],},
    //   {skillID:50,operatorID:5,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:50,operatorID:6,meta:{status:'not started'},data:[],},
    //   {skillID:50,operatorID:7,meta:{status:'not started'},data:[],},
    //   {skillID:50,operatorID:8,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:50,operatorID:9,meta:{status:'not started'},data:[],},
    //   {skillID:50,operatorID:10,meta:{status:'not started'},data:[],},

    //   {skillID:60,operatorID:1,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:60,operatorID:2,meta:{status:'not started'},data:[],},
    //   {skillID:60,operatorID:3,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:60,operatorID:4,meta:{status:'not started'},data:[],},
    //   {skillID:60,operatorID:5,meta:{status:'not started'},data:[],},
    //   {skillID:60,operatorID:6,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:60,operatorID:7,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:60,operatorID:8,meta:{status:'not started'},data:[],},
    //   {skillID:60,operatorID:9,meta:{status:'not started'},data:[],},
    //   {skillID:60,operatorID:10,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},

    //   {skillID:70,operatorID:1,meta:{status:'not started'},data:[],},
    //   {skillID:70,operatorID:2,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:70,operatorID:3,meta:{status:'not started'},data:[],},
    //   {skillID:70,operatorID:4,meta:{status:'not started'},data:[],},
    //   {skillID:70,operatorID:5,meta:{status:'not started'},data:[],},
    //   {skillID:70,operatorID:6,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:70,operatorID:7,meta:{status:'not started'},data:[],},
    //   {skillID:70,operatorID:8,meta:{status:'not started'},data:[],},
    //   {skillID:70,operatorID:9,meta:{status:'not started'},data:[],},
    //   {skillID:70,operatorID:10,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},

    //   {skillID:80,operatorID:1,meta:{status:'not started'},data:[],},
    //   {skillID:80,operatorID:2,meta:{status:'not started'},data:[],},
    //   {skillID:80,operatorID:3,meta:{status:'not started'},data:[],},
    //   {skillID:80,operatorID:4,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:80,operatorID:5,meta:{status:'not started'},data:[],},
    //   {skillID:80,operatorID:6,meta:{status:'not started'},data:[],},
    //   {skillID:80,operatorID:7,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:80,operatorID:8,meta:{status:'not started'},data:[],},
    //   {skillID:80,operatorID:9,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:80,operatorID:10,meta:{status:'not started'},data:[],},

    //   {skillID:90,operatorID:1,meta:{status:'started',start:reddate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
    //   {skillID:90,operatorID:2,meta:{status:'not started'},data:[],},
    //   {skillID:90,operatorID:3,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}]},
    //   {skillID:90,operatorID:4,meta:{status:'not started'},data:[],},
    //   {skillID:90,operatorID:5,meta:{status:'not started'},data:[],},
    //   {skillID:90,operatorID:6,meta:{status:'not started'},data:[],},
    //   {skillID:90,operatorID:7,meta:{status:'not started'},data:[],},
    //   {skillID:90,operatorID:8,meta:{status:'not started'},data:[],},
    //   {skillID:90,operatorID:9,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],},
    //   {skillID:90,operatorID:10,meta:{status:'not started'},data:[],},

    // ],
    right: [
      {meta:{id:10},data:[{meta:{},data:{v:7}},{meta:{},data:{v:2}},{meta:{},data:{v:'-5'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:4}},{meta:{},data:{v:3}},{meta:{},data:{v:'-1'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:3}},{meta:{},data:{v:1}},{meta:{},data:{v:'-2'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:5}},{meta:{},data:{v:0}},{meta:{},data:{v:'-5'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:3}},{meta:{},data:{v:0}},{meta:{},data:{v:'-3'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:5}},{meta:{},data:{v:2}},{meta:{},data:{v:'-3'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:3}},{meta:{},data:{v:1}},{meta:{},data:{v:'-2'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:3}},{meta:{},data:{v:1}},{meta:{},data:{v:'-2'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:3}},{meta:{},data:{v:1}},{meta:{},data:{v:'-2'}}]},
    ],
    bottom: [
      {meta:{},data:[{meta:{},data:{v:5}},{meta:{},data:{v:4}},{meta:{},data:{v:5}},{meta:{},data:{v:2}},{meta:{},data:{v:3}},{meta:{},data:{v:3}},{meta:{},data:{v:4}},{meta:{},data:{v:3}},{meta:{},data:{v:3}},{meta:{},data:{v:4}}]},
      {meta:{},data:[{meta:{},data:{v:2}},{meta:{},data:{v:2}},{meta:{},data:{v:3}},{meta:{},data:{v:0}},{meta:{},data:{v:0}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:0}},{meta:{},data:{v:1}},{meta:{},data:{v:2}}]},
      {meta:{},data:[{meta:{},data:{v:'-3'}},{meta:{},data:{v:'-2'}},{meta:{},data:{v:'-2'}},{meta:{},data:{v:'-2'}},{meta:{},data:{v:'-3'}},{meta:{},data:{v:'-2'}},{meta:{},data:{v:'-3'}},{meta:{},data:{v:'-3'}},{meta:{},data:{v:'-2'}},{meta:{},data:{v:'-2'}}]},
    ],
    rightheading: [
      {meta:{id:10},data:[
        {meta:{},data:{name:'Goal'}},
        {meta:{},data:{name:'# Certified'}},
        {meta:{},data:{name:'Gap'}}
      ]},
    ],
    bottomleftheading: [
      {
        meta:{id:10},
        data:[
          {meta:{},data:{v:'Goal'}}
        ],
      },
      {
        meta:{id:20},
        data:[
          {meta:{},data:{v:'# Certified'}}
        ],
      },
      {
        meta:{id:30},
        data:[
          {meta:{},data:{v:'Gap'}}
        ],
      }
    ],
    leftheading: [
      {meta:{id:10},data:[{meta:{},data:{line:'LINE',area:'AREA TRAINED'}}]},
    ],
    methodologyheading: [
      {meta:{id:10},data:[{meta:{},data:{name:'METHODOLOGY'}}]},
    ],
    methodology: [
      {meta:{},data:[{meta:{},data:{l1:'Classroom training',l2:'Hands-on training',l3:'Written testing'}}]},
    ],
    revheading: [
      {meta:{id:10},data:[{meta:{},data:{name:'REV#'}}]},
    ],
    rev: [
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
      {meta:{id:10},data:[{meta:{},data:{v:5}}]},
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
      {meta:{id:10},data:[{meta:{},data:{v:1}}]},
    ],
  }

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
    var oLen = operators.length
    matrixState.setOperators(operators)
    var skills = await getDataSkills()
    var sLen = skills.length
    matrixState.setSkills(skills)
    var certifications = await getDataCertifications()
    console.log(certifications)
    matrixState.setCertifications(certifications)
    doByOperator(operators,skills,certifications)
    doBySkill(operators,skills,certifications)
    return {oLen,sLen}
  };

  useEffect(() => {
    var vals = callAll()
    vals.then((o) => {
      var x = o.oLen
      var y = o.sLen

      subscribeCertifications();

      const multiplier = 7;
      const topHeight = 0;
      const fontsize = 2;
      const bandX = 5;
      const bandY = 5;
      var col1 = 40;
      var col2 = bandX * x;
      var col3 =(bandX*3);
      var row1 = 20;
      var row2 = (bandY * y)+0;
      var row3 = bandX*3;

      var d2= {
        multiplier: multiplier,
        topHeight: topHeight,
        fontsize: fontsize,
        bandX: bandX,
        bandY: bandY,
        col1: col1,
        col2: col2,
        col3: col3,
        row1: row1,
        row2Orig: row2,
        row2: row2,
        row3: row3,
      }
      setOriginal(d2)

      var d = {
        multiplier: multiplier,
        topHeight: topHeight*multiplier,
        fontsize: fontsize*multiplier,
        bandX: bandX*multiplier,
        bandY: bandY*multiplier,
        col1: col1*multiplier,
        col2: col2*multiplier,
        col3: col3*multiplier,
        row1: row1*multiplier,
        row2Orig: row2*multiplier,
        row2: row2*multiplier,
        row3: row3*multiplier,
      }
      setDimensions(d)

    })



  },[])

  const handleResize = () => {
    var multiplier = matrixState.original.multiplier
    var col1 = 0, row2 = 0, topHeight = 0, row2Orig = 0;
    if (window.innerWidth <200) {
      col1 = 0*multiplier;
      topHeight = 5;
      //row2 = ((matrixState.original.row2*2)*multiplier)+(topHeight*multiplier);
      row2Orig = matrixState.original.row2*multiplier;
      row2 = ((matrixState.original.row2*2)*multiplier);
    }
    else {
      col1 = matrixState.original.col1*multiplier;
      row2Orig = matrixState.original.row2*multiplier;
      row2 = matrixState.original.row2*multiplier;
    }
    //console.log(row2)
    var d ={
      topHeight: topHeight*multiplier,
      fontsize: matrixState.original.fontsize*multiplier,
      bandX: matrixState.original.bandX*multiplier,
      bandY: matrixState.original.bandY*multiplier,
      col1: col1,
      col2: matrixState.original.col2*multiplier,
      col3: matrixState.original.col3*multiplier,
      row1: matrixState.original.row1*multiplier,
      row2Orig: row2Orig,
      row2: row2,
      row3: matrixState.original.row3*multiplier,
    }
    matrixState.setDimensions(d);
  }

  useEvent('resize', handleResize);



  //<div className='' style={{...styles.vertical,width:'100%',height:'100%',fontSize:matrixState.dimensions.fontsize+'pt'}}>
  return (

    <div className='trainingmatrix' style={{...styles.v,width:'100%',height:'100%'}}>
      {matrixState.showTheLegend && <Legend/>}
      <Toolbar/>

      {/* {
  certifications.map((item, index) => {
    return (
      <div key={index}>
        id:{item.id} skillID:{item.skillID} operatorID:{item.operatorID}
        meta:{item.meta}
        data:{item.data}
      </div>
    )
  })
} */}

      {/* main area start */}
      {matrixState.dimensions !== null &&
      <div className='mainarea' data-flex-splitter-horizontal style={{...styles.horizontal,width:'100%',height:'100%'}}>
        {/* <Log data={matrixState.dimensions}/> */}
        {/* left area - matrix - start */}
        <div className='left' style={{...styles.v,flex:1,boxSizing:'border-box'}}>

          {/* row 1 start */}
          <div className='leftrow1' height={matrixState.dimensions.row1} style={{...styles.h,height:matrixState.dimensions.row1+'px'}}>
            {/* row 1 column 1 start */}
            <div className='' style={{width:matrixState.dimensions.col1+'px',boxSizing:'border-box'}}>
              <svg width={matrixState.dimensions.col1+'px'} height={matrixState.dimensions.row1+'px'}></svg>
            </div>
            {/* row 1 column 1 end */}
            <Row1Col2 data={matrixState.byOperator}/>
            <Row1Col3 data={widgetData.rightheading}/>
          </div>
          {/* row 1 end */}

          {/* row 2 start */}
          <div className='leftrow2' style={{...styles.h,height:(matrixState.dimensions.row2Orig)+'px'}}>
            <Row2Col1 data={matrixState.bySkill}/>
            <Row2Col2 data={matrixState.bySkill}/>
            <Row2Col3 data={widgetData.right}/>
          </div>
          {/* row 2 end */}

          {/* row 3 start */}
          <div style={{...styles.h,height: matrixState.dimensions.row3+'px',minHeight:matrixState.dimensions.row3+'px'}}>
            <Row3Col1 data={widgetData.bottomleftheading}/>
            <Row3Col2 data={widgetData.bottom}/>
            {/* row 3 column 3 start */}
            <div style={{width:matrixState.dimensions.col3+'px',minWidth:matrixState.dimensions.col3+'px',height:matrixState.dimensions.row3+'px',border:'0px solid green'}}></div>
            {/* row 3 column 3 end */}
          </div>
          {/* row 3 end */}

        </div>
        {/* left area - matrix - end */}

        <div role="separator"></div>
        {/* right area - details - start */}
        <div className='right' style={{width:'525px'}}>
          <div style={{width:'100%', height:'100%', padding:'25px', background:'white', boxSizing:'border-box'}}>
            <div style={{width:'100%', height:'100%', boxSizing:'border-box', padding:'10px', boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.specific}
            </div>
          </div>
        </div>
        {/* right area - details - end */}
      </div>
      }
      {/* main area end */}
    </div>
  )

}
