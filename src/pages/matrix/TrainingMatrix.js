import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Matrix } from './Matrix';
import { MatrixOneRow } from './MatrixOneRow';
import { Diamond } from './Diamond';
import { MatrixCell } from './MatrixCell';
//import { Skill } from './Skill';
import { Operator } from './Operator';
import { Main } from './Main';
import { Legend } from './Legend';
import { getDates } from './util';
import { Log } from './Log';
import { Toolbar } from './Toolbar';
import { Row2Col1 } from './Row2Col1';
import { Row2Col2 } from './Row2Col2';
import { Row2Col3 } from './Row2Col3';
import { Row3Col1 } from './Row3Col1';
import { Row3Col2 } from './Row3Col2';
import { useMatrixState } from './state/MatrixProvider';
import { styles } from './styles';

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

  useEffect(() => {
    var byOperator = []
    widgetData.operatorsX.map((operator,o) => {
      var o = {}
      o = operator
      o.meta = operator
      o.data = []
      const skills = widgetData.dataX.filter(item => item.operatorID == operator.operatorID);
      skills.map((data,i) => {
        var skill  = widgetData.skillsX.find(item => item.skillID == data.skillID);
        o.data[i] = {};
        o.data[i].operator = operator
        o.data[i].skill = skill
        o.data[i].meta = skills[i].meta
        o.data[i].data = skills[i].data
      })
      byOperator.push(o)
    })
    setByOperator(byOperator)

    var bySkill = []
    widgetData.skillsX.map((skill,s) => {
      var o = {}
      o = skill
      o.meta = skill
      o.data = []
      const operators = widgetData.dataX.filter(item => item.skillID == skill.skillID);
      operators.map((data,i) => {
        var operator  = widgetData.operatorsX.find(item => item.operatorID == data.operatorID);
        o.data[i] = {};
        o.data[i].skill = skill
        o.data[i].operator = operator
        o.data[i].meta = operators[i].meta
        o.data[i].data = operators[i].data
      })
      bySkill.push(o)
    })
    setBySkill(bySkill)

    var x =widgetData.operatorsX.length
    var y =widgetData.skillsX.length
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
      row2: row2,
      row3: row3,
    }
    matrixState.setOriginal(d2)

    var d = {
      multiplier: multiplier,
      topHeight: topHeight*multiplier,
      fontsize: fontsize*multiplier,
      bandX: bandX*multiplier,
      bandY: bandY*multiplier,
      col1: col1*multiplier,
      col2: (col2*multiplier)+0,
      col3: col3*multiplier,
      row1: row1*multiplier,
      row2: (row2*multiplier)+0,
      row3: row3*multiplier,
    }
    matrixState.setDimensions(d)
  },[])

  const handleResize = () => {
    var multiplier = matrixState.original.multiplier
    var col1 = 0, row2 = 0;
    if (window.innerWidth <1400) {
      col1 = 0*multiplier;
      row2 = ((matrixState.original.row2*2)*multiplier)+(matrixState.original.topHeight*multiplier);
    }
    else {
      col1 = matrixState.original.col1*multiplier;
      row2 = matrixState.original.row2*multiplier;
    }
    var d ={
      topHeight: matrixState.original.topHeight*multiplier,
      fontsize: matrixState.original.fontsize*multiplier,
      bandX: matrixState.original.bandX*multiplier,
      bandY: matrixState.original.bandY*multiplier,
      col1: col1,
      col2: (matrixState.original.col2*multiplier)+0,
      col3: matrixState.original.col3*multiplier,
      row1: matrixState.original.row1*multiplier,
      row2: (row2+0),
      row3: matrixState.original.row3*multiplier,
    }
    matrixState.setDimensions(d);
  }

  useEvent('resize', handleResize);
  const [byOperator, setByOperator] = useState(null);
  const [bySkill, setBySkill] = useState(null);
  const matrixState = useMatrixState();

  const [greendate, yellowdate, reddate] = getDates();
  var widgetData = {
    skillsX: [
      {skillID:10,line:'S',skillName:'Core Loading'},
      {skillID:20,line:'S',skillName:'Phase Paper Insertion (VW)'},
      {skillID:30,line:'S',skillName:'Lead Wire Setting'},
      {skillID:40,line:'S',skillName:'Neutral Tube Insertion'},
      {skillID:50,line:'S',skillName:'Neutral Crimp'},
      {skillID:60,line:'S',skillName:'Pre-Lacing'},
      {skillID:70,line:'S',skillName:'Lacing'},
      {skillID:80,line:'S',skillName:'Lead Terminal Crimp'},
      {skillID:90,line:'S',skillName:'Lead Wire Forming'},
    ],
    operatorsX: [
      {operatorID:1,operatorName:'Joe Smith'},
      {operatorID:2,operatorName:'Marc Ester'},
      {operatorID:3,operatorName:'Ted White'},
      {operatorID:4,operatorName:'Betty Green'},
      {operatorID:5,operatorName:'Bob Jones'},
      {operatorID:6,operatorName:'Frank Davis'},
      {operatorID:7,operatorName:'Jane Johnson'},
      {operatorID:8,operatorName:'Mary Bird'},
      {operatorID:9,operatorName:'Zoya Lee'},
      {operatorID:10,operatorName:'Joe Adams'},
    ],
    dataX: [
      {skillID:10,operatorID:1,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:10,operatorID:2,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:10,operatorID:3,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
      {skillID:10,operatorID:4,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:10,operatorID:5,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
      {skillID:10,operatorID:6,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:10,operatorID:7,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:10,operatorID:8,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:10,operatorID:9,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:10,operatorID:10,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}]},

      {skillID:20,operatorID:1,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:20,operatorID:2,meta:{status:'ok',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:20,operatorID:3,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:20,operatorID:4,meta:{status:'ok',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
      {skillID:20,operatorID:5,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:20,operatorID:6,meta:{status:'ok',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:20,operatorID:7,meta:{status:'ok',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:20,operatorID:8,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:20,operatorID:9,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:20,operatorID:10,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},

      {skillID:30,operatorID:1,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
      {skillID:30,operatorID:2,meta:{status:'not started'},data:[],},
      {skillID:30,operatorID:3,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:30,operatorID:4,meta:{status:'not started'},data:[],},
      {skillID:30,operatorID:5,meta:{status:'not started'},data:[],},
      {skillID:30,operatorID:6,meta:{status:'not started'},data:[],},
      {skillID:30,operatorID:7,meta:{status:'not started'},data:[],},
      {skillID:30,operatorID:8,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
      {skillID:30,operatorID:9,meta:{status:'not started'},data:[],},
      {skillID:30,operatorID:10,meta:{status:'not started'},data:[],},

      {skillID:40,operatorID:1,meta:{status:'not started'},data:[],},
      {skillID:40,operatorID:2,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:40,operatorID:3,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],},
      {skillID:40,operatorID:4,meta:{status:'not started'},data:[],},
      {skillID:40,operatorID:5,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:40,operatorID:6,meta:{status:'not started'},data:[],},
      {skillID:40,operatorID:7,meta:{status:'not started'},data:[],},
      {skillID:40,operatorID:8,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:40,operatorID:9,meta:{status:'not started'},data:[],},
      {skillID:40,operatorID:10,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},

      {skillID:50,operatorID:1,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:50,operatorID:2,meta:{status:'not started'},data:[],},
      {skillID:50,operatorID:3,meta:{status:'not started'},data:[],},
      {skillID:50,operatorID:4,meta:{status:'not started'},data:[],},
      {skillID:50,operatorID:5,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:50,operatorID:6,meta:{status:'not started'},data:[],},
      {skillID:50,operatorID:7,meta:{status:'not started'},data:[],},
      {skillID:50,operatorID:8,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:50,operatorID:9,meta:{status:'not started'},data:[],},
      {skillID:50,operatorID:10,meta:{status:'not started'},data:[],},

      {skillID:60,operatorID:1,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:60,operatorID:2,meta:{status:'not started'},data:[],},
      {skillID:60,operatorID:3,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:60,operatorID:4,meta:{status:'not started'},data:[],},
      {skillID:60,operatorID:5,meta:{status:'not started'},data:[],},
      {skillID:60,operatorID:6,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:60,operatorID:7,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:60,operatorID:8,meta:{status:'not started'},data:[],},
      {skillID:60,operatorID:9,meta:{status:'not started'},data:[],},
      {skillID:60,operatorID:10,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},

      {skillID:70,operatorID:1,meta:{status:'not started'},data:[],},
      {skillID:70,operatorID:2,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:70,operatorID:3,meta:{status:'not started'},data:[],},
      {skillID:70,operatorID:4,meta:{status:'not started'},data:[],},
      {skillID:70,operatorID:5,meta:{status:'not started'},data:[],},
      {skillID:70,operatorID:6,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:70,operatorID:7,meta:{status:'not started'},data:[],},
      {skillID:70,operatorID:8,meta:{status:'not started'},data:[],},
      {skillID:70,operatorID:9,meta:{status:'not started'},data:[],},
      {skillID:70,operatorID:10,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},

      {skillID:80,operatorID:1,meta:{status:'not started'},data:[],},
      {skillID:80,operatorID:2,meta:{status:'not started'},data:[],},
      {skillID:80,operatorID:3,meta:{status:'not started'},data:[],},
      {skillID:80,operatorID:4,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:80,operatorID:5,meta:{status:'not started'},data:[],},
      {skillID:80,operatorID:6,meta:{status:'not started'},data:[],},
      {skillID:80,operatorID:7,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:80,operatorID:8,meta:{status:'not started'},data:[],},
      {skillID:80,operatorID:9,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:80,operatorID:10,meta:{status:'not started'},data:[],},

      {skillID:90,operatorID:1,meta:{status:'started',start:reddate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:90,operatorID:2,meta:{status:'not started'},data:[],},
      {skillID:90,operatorID:3,meta:{status:'started',start:greendate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}]},
      {skillID:90,operatorID:4,meta:{status:'not started'},data:[],},
      {skillID:90,operatorID:5,meta:{status:'not started'},data:[],},
      {skillID:90,operatorID:6,meta:{status:'not started'},data:[],},
      {skillID:90,operatorID:7,meta:{status:'not started'},data:[],},
      {skillID:90,operatorID:8,meta:{status:'not started'},data:[],},
      {skillID:90,operatorID:9,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],},
      {skillID:90,operatorID:10,meta:{status:'not started'},data:[],},

    ],
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
  var widgetData2 = {
    skillsX: [
      {skillID:10,line:'S',skillName:'Core Loading'},
      {skillID:20,line:'S',skillName:'Phase Paper Insertion (VW)'},
      {skillID:30,line:'S',skillName:'Lead Wire Setting'},

    ],
    operatorsX: [
      {operatorID:1,operatorName:'Joe Smith'},
      {operatorID:2,operatorName:'Marc Ester'},
      {operatorID:3,operatorName:'Ted White'},

    ],
    dataX: [
      {skillID:10,operatorID:1,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:10,operatorID:2,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:10,operatorID:3,meta:{status:'started',start:reddate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},


      {skillID:20,operatorID:1,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},
      {skillID:20,operatorID:2,meta:{status:'ok',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},
      {skillID:20,operatorID:3,meta:{status:'not started',start:greendate,trainer:false},data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],},


      {skillID:30,operatorID:1,meta:{status:'started',start:yellowdate,trainer:false},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],},
      {skillID:30,operatorID:2,meta:{status:'not started'},data:[],},
      {skillID:30,operatorID:3,meta:{status:'started',start:greendate,trainer:true},data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],},


    ],

    right: [
      {meta:{id:10},data:[{meta:{},data:{v:7}},{meta:{},data:{v:2}},{meta:{},data:{v:'-5'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:4}},{meta:{},data:{v:3}},{meta:{},data:{v:'-1'}}]},
      {meta:{id:10},data:[{meta:{},data:{v:3}},{meta:{},data:{v:1}},{meta:{},data:{v:'-2'}}]},

    ],
    bottom: [
      {meta:{},data:[{meta:{},data:{v:5}},{meta:{},data:{v:4}},{meta:{},data:{v:5}},]},
      {meta:{},data:[{meta:{},data:{v:2}},{meta:{},data:{v:2}},{meta:{},data:{v:3}},]},
      {meta:{},data:[{meta:{},data:{v:'-3'}},{meta:{},data:{v:'-2'}},{meta:{},data:{v:'-2'}},]},
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
    // top: [
    //   {meta:{},data:[
    //     {meta:{id:1},data:{name:'Joe Smith'}},
    //     {meta:{id:2},data:{name:'Marc Ester'}},
    //     {meta:{id:3},data:{name:'Ted White'}},
    //     {meta:{id:4},data:{name:'Betty Green'}},
    //     {meta:{id:5},data:{name:'Bob Jones'}},
    //     {meta:{id:6},data:{name:'Frank Davis'}},
    //     {meta:{id:7},data:{name:'Jane Johnson'}},
    //     {meta:{id:8},data:{name:'Mary Bird'}},
    //     {meta:{id:9},data:{name:'Zoya Lee'}},
    //     {meta:{id:10},data:{name:'Joe Adams'}},
    //   ]},
    // ],
    rightheading: [
      {meta:{id:10},data:[
        {meta:{},data:{name:'Goal'}},
        {meta:{},data:{name:'# Certified'}},
        {meta:{},data:{name:'Gap'}}
      ]},
    ],

  }

  const clickOperatorCell = (e,colid,rowid,type,data,col) => {
    matrixState.setSpecific(<Operator data={data}/>)
  }

  const renderOperatorCell = (props,c,col,r,row,sTop,data,clickCellFunction) => {
    const {bandX, bandY, fontsize} = props
    var y = (bandX/2) + (bandX * c)
    var yp = y-15
    var i = r + c;
    return (
      <g key={r+c} transform="translate(0,0)" className="header">
        <text style={{fontSize:fontsize+'px'}} alignmentBaseline="baseline" transform="translate(0,0) rotate(90)" x={bandX*1.4} y={-(bandX * c)-10} fill="black">{data.operatorName}</text>
        <foreignObject x={(bandX*c)+5} y={10} width='50px' height='50px'>
          <img
            alt="pic"
            src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+data.operatorID+'.jpg'}
            style={{borderRadius:'50%',width: bandX-10,height:bandX-10}}
          />
        </foreignObject>

        <MatrixCell
          xclickCellFunction={(e,rowid,colid) => {console.log(colid)}}
          clickCellFunction={clickCellFunction}
          data={data}
          rowid={null}
          colid={col.id}
          bandX={bandX}
          x={bandX*c}
          bandY={bandY}
          type="none"
        />
      </g>
    )
  }

  // const renderMainRow = (props,r,row,sTop) => {
  //   var header2 = ''
  //   if (row.meta !== undefined) {
  //     if (row.meta.skillName !== undefined) {
  //       header2 = row.meta.skillName
  //     }
  //   }
  //   return (
  //     <>
  //     {sTop !== 0 && <text dominantBaseline="auto" style={{fontSize: matrixState.dimensions.fontsize+'px'}} x={5} y={props.bandY-10} height={props.sTop} >{header2}</text>}
  //     </>
  //   )
  // }

  // const clickMainCell = (e,colid,rowid,type,data,col) => {
  //   matrixState.setSpecific(<Main data={data}/>)
  // }

  // const renderMainCell = (props,c,col,r,row,sTop,data,clickCellFunction,fontsize) => {
  //   //console.log(data)
  //   const {bandX, bandY} = props
  //   return (
  //     <g key={r+c} transform={"translate(" + (c*bandX) + "," + sTop + ")"} className="group" >
  //       <Diamond meta={col.meta} data={col.data} boxSize={bandX} padding={30}/>
  //       <MatrixCell
  //         clickCellFunction={clickCellFunction}
  //         rowid={row.meta.id}
  //         colid={col.meta.id}
  //         bandX={bandX}
  //         bandY={bandY}
  //         type="pie"
  //         col={col}
  //         data={data}
  //       />
  //     </g>
  //   )
  // }

  const renderTotalsHeading = (props,c,col,r) => {



    const {bandX, bandY, fontsize} = props
    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          style={{fontSize:fontsize+'px'}}
          dominantBaseline="left"
          textAnchor="end"
          alignmentBaseline="baseline"
          transform="translate(0,0) rotate(90)"
          x={bandX*3.8}
          y={-(bandX * c)-10}
          fill="black"
        >
          {col.data.name}
        </text>
      </g>
    )
  }

  // const renderSkillLine = (props,c,col,r,row) => {
  //   const {bandX, bandY, fontsize} = props
  //   return (
  //     <text
  //       dominantBaseline="left"
  //       textAnchor="middle"
  //       stroke="black"
  //       x={(bandX*(c+1))/2}
  //       y={bandY-(bandY/2)+10}
  //       className="text"
  //       style={{fontSize:fontsize+'px'}}>
  //         {col.line}
  //     </text>
  //   )
  // }

  // const renderTextRow = (props,r,row,sTop) => {
  //   var header2 = ''
  //   if (row.meta !== undefined) {
  //     if (row.meta.skillName !== undefined) {
  //       header2 = row.meta.skillName
  //     }
  //   }
  //   return (
  //     <>
  //     {sTop !== 0 && <text style={{fontSize: matrixState.dimensions.fontsize+'px'}} x={5} y={props.bandY} height={props.sTop} >{header2}</text>}
  //     </>
  //   )
  // }

  // const renderText = (props,c,col,r,row,sTop) => {
  //   const {bandX, bandY, fontsize} = props
  //   return (
  //     <text
  //       dominantBaseline="middle"
  //       textAnchor="middle"
  //       x={(bandX*c)+(bandX/2)}
  //       y={bandY-(bandY/2)+(sTop)}
  //       className="text"
  //       style={{fontSize:(fontsize-4)+'px'}}>
  //         {col.data.v}
  //     </text>
  //   )
  // }

  // const renderBottomLeftText = (props,c,col,r,row,sTop) => {
  //   const {bandX, bandY, fontsize} = props
  //   return (
  //     <text
  //       dominantBaseline="left"
  //       textAnchor="end"
  //       x={(bandX*(c+1))-10}
  //       y={bandY-(bandY/2.5)+(sTop)}
  //       className="text"
  //       style={{fontSize:(fontsize-4)+'px'}}>
  //         {col.data.v}
  //     </text>
  //   )


  // //   <text
  // //   dominantBaseline="left"
  // //   textAnchor="end"
  // //   x={(bandX*(c+1))-10}
  // //   y={bandY-(bandY/3)}
  // //   className="text"
  // //   style={{fontSize:matrixState.dimensions.fontsize+'px'}}>
  // //     {data.skill.skillName}
  // // </text>




  // }

  // const renderTop = (props,c,col,r) => {
  //   const {bandX, bandY} = props
  //   var y = (bandX/2) + (bandX * c)
  //   var yp = y-15
  //   var i = r + c;
  //   return (
  //     <g key={r+c} transform="translate(0,0)" className="header">
  //       <text style={{fontSize:bandX*1.5+'px'}} transform="rotate(270,100,90)" x="-30" y={y} fill="black">{col.data.name}</text>
  //       <foreignObject x={yp+'px'} y='240px' width='40px' height='40px'>
  //         <img
  //           alt="pic"
  //           src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+col.meta.id+'.jpg'}
  //           style={{borderRadius:'50%',x:yp+'px',y:'150px',width:'40px',height:'40px'}}
  //         />
  //       </foreignObject>
  //     </g>




  //     // <text
  //     //   dominantBaseline="middle"
  //     //   textAnchor="middle"
  //     //   stroke="black"
  //     //   x={(bandX*c)+(bandX/2)}
  //     //   y={bandY-(bandY/2)}
  //     //   className="text"
  //     //   style={{fontSize:'32px'}}>{col.data.v}</text>
  //   )
  // }

  // const renderLeftHeading = (props,c,col,r) => {
  //   const {bandX, bandY} = props

  //   var col1Width = 70;

  //   return (
  //     <g key={r+c} transform="translate(0,0)" className="cell">
  //       <text
  //         dominantBaseline="left"
  //         textAnchor="start"
  //         stroke="black"
  //         x={(bandX*c)+10}
  //         y={bandY-(bandY/3)}
  //         className="text"
  //         style={{fontSize:bandX*1.5+'px'}}>{col.data.line}
  //       </text>

  //       <line x1={(bandX*(c+0))+10+col1Width} y1="0" x2={(bandX*(c+0))+10+col1Width} y2={bandY} stroke={'black'} strokeWidth="1" />

  //       <text
  //         dominantBaseline="left"
  //         textAnchor="end"
  //         stroke="black"
  //         x={(bandX*(c+1))-10}
  //         y={bandY-(bandY/3)}
  //         className="text"
  //         style={{fontSize:bandX*1.5+'px'}}>{col.data.area}
  //       </text>
  //     </g>
  //   )
  // }

  // const renderLeft = (props,c,col,r) => {
  //   const {bandX, bandY} = props
  //   //console.log(col)
  //   var col1Width = 70;

  //   return (
  //     <g key={r+c} transform="translate(0,0)" className="cell">
  //       <text
  //         dominantBaseline="left"
  //         textAnchor="center"
  //         stroke="black"
  //         x={((col1Width/2)+ bandX*c)}
  //         y={bandY-(bandY/3)}
  //         className="text"
  //         style={{fontSize:bandX*1.5+'px'}}>{col.data.line}
  //       </text>

  //       <line x1={(bandX*(c+0))+10+col1Width} y1="0" x2={(bandX*(c+0))+10+col1Width} y2={bandY} stroke={'black'} strokeWidth="1" />

  //       <text
  //         dominantBaseline="left"
  //         textAnchor="end"
  //         stroke="black"
  //         x={(bandX*(c+1))-10}
  //         y={bandY-(bandY/3)}
  //         className="text"
  //         style={{fontSize:bandX*1.5+'px'}}>{col.data.area}
  //       </text>
  //     </g>
  //   )
  // }

  // const renderPlainHeading = (props,c,col,r) => {
  //   const {bandX, bandY, fontsize} = props
  //   return (
  //     <g key={r+c} transform="translate(0,0)" className="cell">
  //       <text
  //         dominantBaseline="left"
  //         textAnchor="start"
  //         stroke="black"
  //         x={(bandX*c)}
  //         y={bandY-(bandY/3)}
  //         className="text"
  //         style={{fontSize:fontsize+'px'}}>{col.data.name}
  //       </text>
  //     </g>
  //   )
  // }

  // const renderMethodology = (props,c,col,r) => {
  //   const {bandX, bandY} = props

  //   var col1Width = 70;

  //   return (
  //     <g key={r+c} transform="translate(0,0)" className="cell">
  //       <text
  //         dominantBaseline="left"
  //         textAnchor="center"
  //         stroke="black"
  //         x={((col1Width/2)+ bandX*c)}
  //         y={bandY-(bandY/2)}
  //         className="text"
  //         style={{fontSize:bandX*1.5+'px'}}>{col.data.l1}
  //       </text>
  //       <text
  //         dominantBaseline="left"
  //         textAnchor="center"
  //         stroke="black"
  //         x={((col1Width/2)+ bandX*c)}
  //         y={bandY-(bandY/2)+40}
  //         className="text"
  //         style={{fontSize:bandX*1.5+'px'}}>{col.data.l2}
  //       </text>
  //       <text
  //         dominantBaseline="left"
  //         textAnchor="center"
  //         stroke="black"
  //         x={((col1Width/2)+ bandX*c)}
  //         y={bandY-(bandY/2)+40+40}
  //         className="text"
  //         style={{fontSize:bandX*1.5+'px'}}>{col.data.l3}
  //       </text>


  //     </g>
  //   )
  // }

  // const onScroll = (e) => {
  //   var vert = document.getElementById('skill')
  //   var vert2 = document.getElementById('skilltotals')
  //   var horz = document.getElementById('student')
  //   var horz2 = document.getElementById('studenttotals')
  //   if (vert.scrollTop !== e.target.scrollTop) {
  //     vert.scrollTop = e.target.scrollTop;
  //     vert2.scrollTop = e.target.scrollTop;
  //   }
  //   else {
  //     horz.scrollLeft = e.target.scrollLeft;
  //     horz2.scrollLeft = e.target.scrollLeft;
  //   }
  // }

  //<div className='' style={{...styles.vertical,width:'100%',height:'100%',fontSize:matrixState.dimensions.fontsize+'pt'}}>
  return (

    <div className='trainingmatrix' style={{...styles.v,width:'100%',height:'100%'}}>
      {matrixState.showTheLegend && <Legend/>}
      <Toolbar/>
      {/* main area start */}
      {matrixState.dimensions !== null &&
      <div className='mainarea' data-flex-splitter-horizontal style={{...styles.horizontal,width:'100%',height:'100%'}}>
        <Log data={matrixState.dimensions}/>
        {/* left area - matrix - start */}
        <div className='left' style={{...styles.v,flex:1,boxSizing:'border-box'}}>

          {/* row 1 start */}
          <div className='leftrow1' height={matrixState.dimensions.row1} style={{...styles.h,height:matrixState.dimensions.row1+'px'}}>
            {/* row 1 column 1 start */}
            <div className='' style={{width:matrixState.dimensions.col1+'px',boxSizing:'border-box'}}>
              <svg width={matrixState.dimensions.col1+'px'} height={matrixState.dimensions.row1+'px'}></svg>
            </div>
            {/* row 1 column 1 end */}

            {/* row 1 column 2 start */}
            <div id="student" className='' style={{boxSizing:'border-box',width:matrixState.dimensions.col2+'px',overflow:'scroll',overflow:'hidden'}}>
              <div style={{maxWidth:matrixState.dimensions.col2+'px'}} width={(matrixState.dimensions.col2)+'px'} height={matrixState.dimensions.row1+'px'}>
              <svg style={{maxWidth:matrixState.dimensions.col2+'px'}} width={(matrixState.dimensions.col2)+'px'} height={matrixState.dimensions.row1+'px'}>
                {byOperator !== null &&
                <MatrixOneRow
                  renderCellFunction={renderOperatorCell}
                  clickCellFunction={clickOperatorCell}
                  data={byOperator}
                  params={{
                    name:'maintop',fontsize: matrixState.dimensions.fontsize,
                    translateX:0,translateY:0,bandX:matrixState.dimensions.bandX,bandY:700
                  }}
                />
                }
              </svg>
              </div>
            </div>
            {/* row 1 column 2 end */}

            {/* row 1 column 3 start */}
            <div style={{width:matrixState.dimensions.col3+'px',minWidth:matrixState.dimensions.col3+'px',height:matrixState.dimensions.row1+'px'}}>
              <div width={matrixState.dimensions.col3+'px'} height={matrixState.dimensions.row1+'px'}>
              <svg width={matrixState.dimensions.col3+'px'} height={matrixState.dimensions.row1+'px'}>
                <Matrix
                  renderCellFunction={renderTotalsHeading}
                  data={widgetData.rightheading}
                  params={{
                    name:'totalsrightheading',fontsize: matrixState.dimensions.fontsize,
                    translateX:0,translateY:0,bandX:matrixState.dimensions.bandX,bandY:matrixState.dimensions.row1
                  }}
                />
              </svg>
              </div>
            </div>
            {/* row 1 column 3 end */}

          </div>
          {/* row 1 end */}

          {/* row 2 start */}
          <div className='leftrow2' style={{...styles.h,height:(matrixState.dimensions.row2)+'px'}}>
            {/* row 2 column 1 start */}
            <Row2Col1 data={bySkill}/>
            {/* row 2 column 1 End */}
            {/* row 2 column 2 start */}
            <Row2Col2 data={bySkill}/>
            {/* row 2 column 2 end */}
            {/* row 2 column 3 start */}
            <Row2Col3 data={widgetData.right}/>
            {/* row 2 column 3 end */}
          </div>
          {/* row 2 end */}

          {/* row 3 start */}
          <div style={{...styles.h,height: matrixState.dimensions.row3+'px',minHeight:matrixState.dimensions.row3+'px'}}>
            {/* row 3 column 1 start */}
            <Row3Col1 data={widgetData.bottomleftheading}/>
            {/* row 3 column 1 end */}
            {/* row 3 column 2 start */}
            <Row3Col2 data={widgetData.bottom}/>
            {/* row 3 column 2 end */}
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
