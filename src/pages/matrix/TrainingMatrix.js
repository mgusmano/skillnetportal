import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Matrix } from './Matrix';
import { MatrixOneRow } from './MatrixOneRow';
import { Diamond } from './Diamond';
import { MatrixCell } from './MatrixCell';
import { Skill } from './Skill';
import { Operator } from './Operator';
import { Main } from './Main';
import { Legend } from './Legend';
import { getDates } from './util';
import { Log } from './Log';

//export const TrainingMatrix = React.memo(({widgetData}) => {
export const TrainingMatrix = React.memo(() => {
  const [topHeight, setTopHeight] = useState(0);
  const [byOperator, setByOperator] = useState(null);
  const [bySkill, setBySkill] = useState(null);

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

  const handleResize = () => {
    var col2 = sCol2Ref.current
    var row2 = sRow2Ref.current
    if (window.innerWidth <1400) {
      var topHeight = 5
      setTopHeight(topHeight)
      var d ={
        col1: 0*sMultiplier,
        col2: col2*sMultiplier,
        col3: sCol3*sMultiplier,
        row1: sRow1*sMultiplier,
        row2: ((row2*2)*sMultiplier)+(topHeight*sMultiplier),
        row3: sRow3*sMultiplier,
      }
      setDimensions(d)
    }
    else {
      var topHeight = 0
      setTopHeight(topHeight)
      var d = {
        col1: sCol1*sMultiplier,
        col2: col2*sMultiplier,
        col3: sCol3*sMultiplier,
        row1: sRow1*sMultiplier,
        row2: row2*sMultiplier,
        row3: sRow3*sMultiplier,
      }
      setDimensions(d)
    }
  }


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
    var col2 = sBandX * x;
    var row2 = sBandY * y;
    setSCol2(col2)
    setSRow2(row2)
    console.log(col2)
    console.log(row2)
    console.log(sMultiplier)

    var d = {
      col1: sCol1*sMultiplier,
      col2: col2*sMultiplier,
      col3: sCol3*sMultiplier,
      row1: sRow1*sMultiplier,
      row2: row2*sMultiplier,
      row3: sRow3*sMultiplier,
    }
    console.log(d)

    setDimensions(d)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  },[])

  const [showLegend, setShowLegend] = useState(false);
  const [num, setNum] = useState(0);
  const [specific, setSpecific] = useState(null);

  const sMultiplier = 10;
  const sFontsize = 2;
  const sBandX = 5;
  const sBandY = 5;
  const sRadius = 1.8;
  const sCol1 = 40;
  //var sCol2;
  const [sCol2, setSCol2] = useState(0);
  const sCol2Ref = useRef();
  sCol2Ref.current = sCol2;
  const sCol3 = 17;
  const sRow1 = 30;
  //var sRow2;
  const [sRow2, setSRow2] = useState(0);
  const sRow2Ref = useRef();
  sRow2Ref.current = sCol2;
  const sRow3 = 20;

  const [multiplier, setMultiplier] = useState(sMultiplier);
  const [fontsize, setFontsize] = useState(sFontsize*sMultiplier);
  const [bandX, setBandX] = useState(sBandX*sMultiplier);
  const [bandY, setBandY] = useState(sBandY*sMultiplier);
  const [radius, setRadius] = useState(sRadius*sMultiplier);
  // const [col1, setCol1] = useState(sCol1*sMultiplier) //300 + 20;
  // const [col2, setCol2] = useState(sCol2*sMultiplier);
  // const [col3, setCol3] = useState(sCol3*sMultiplier);
  // const [row1, setRow1] = useState(sRow1*sMultiplier);
  // const [row2, setRow2] = useState(sRow2*sMultiplier);  //450 + 20 + 50
  // const [row3, setRow3] = useState(sRow3*sMultiplier);

  const [dimensions,setDimensions] = useState(null);


  const onClickSize = (e,direction) => {
    var lMultiplier;
    if (direction == 'small') {
      lMultiplier = multiplier-1;
    }
    else {
      lMultiplier = multiplier+1;
    }
    setMultiplier(lMultiplier);
    setFontsize(sFontsize*lMultiplier);
    setBandX(sBandX*lMultiplier);
    setBandY(sBandY*lMultiplier);
    setRadius(sRadius*lMultiplier);

    var col1, row2
    if (topHeight == 0) {
      col1 = sCol1*lMultiplier
      row2 = sRow2*lMultiplier
    }
    else {
      col1 = 0*lMultiplier
      row2 =((sRow2*2)*lMultiplier)+topHeight
    }


    setDimensions({
      col1: col1,
      col2: sCol2*lMultiplier,
      col3: sCol3*lMultiplier,
      row1: sRow1*lMultiplier,
      row2: row2,
      row3: sRow3*lMultiplier,
    })
  }

  const clickOperatorCell = (e,colid,rowid,type,data,col) => {
    setSpecific(<Operator data={data}/>)
  }

  const renderOperatorCell = (props,c,col,r,row,sTop,data,clickCellFunction) => {
    const {radius, bandX, bandY, fontsize} = props
    var y = (bandX/2) + (bandX * c)
    var yp = y-15
    var i = r + c;
    return (
      <g key={r+c} transform="translate(0,0)" className="header">
        <text style={{fontSize:fontsize+'px'}} transform="rotate(270,100,90)" x="-30" y={y} fill="black">{data.operatorName}</text>
        <foreignObject x={yp+'px'} y='240px' width='40px' height='40px'>
          <img
            alt="pic"
            src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+data.operatorID+'.jpg'}
            style={{borderRadius:'50%',x:yp+'px',y:'150px',width: (radius*2)+'px',height:(radius*2)+'px'}}
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

  const clickSkillCell = (e,colid,rowid,type,data) => {
    var n = num + 1;
    setNum(n);
    setSpecific(<Skill data={data} num={num}/>)
  }

  const renderSkillCell = (props,c,col,r,row,sTop,data,clickCellFunction) => {
    //console.log(data)
    const {radius, bandX, bandY, fontsize} = props
    return (
      <g transform={"translate(" + (c*bandX) + ",0)"} className="group" >
        <text
          dominantBaseline="left"
          textAnchor="end"
          stroke="black"
          x={(bandX*(c+1))-10}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:fontsize+'px'}}>
            {data.skill.skillName}
        </text>
        <MatrixCell
          clickCellFunction={clickSkillCell}
          data={data}
          rowid={null}
          colid={col.id}
          bandX={bandX}
          bandY={bandY}
          type="pie"
        />
      </g>
    )
  }

  const renderMainRow = (props,r,row,sTop) => {
    var header2 = ''
    if (row.meta !== undefined) {
      if (row.meta.skillName !== undefined) {
        header2 = row.meta.skillName
      }
    }
    return (
      <>
      {sTop !== 0 && <text dominantBaseline="auto" style={{fontSize: fontsize+'px'}} x={5} y={props.bandY-10} height={props.sTop} >{header2}</text>}
      </>
    )
  }

  const clickMainCell = (e,colid,rowid,type,data, col) => {
    setSpecific(<Main data={data}/>)
  }

  const renderMainCell = (props,c,col,r,row,sTop,data,clickCellFunction) => {
    //console.log(sTop)
    //var status = col.meta.status;
    const {bandX, bandY} = props
    //var x = ((bandX/2) - radius);
    //var y = (bandY/2) - radius;
    //var ts = x + ',' + y;
    //const tr = `translate(${ts})`
    return (
      <g key={r+c} transform={"translate(" + (c*bandX) + "," + sTop + ")"} className="group" >
        <Diamond meta={col.meta} data={col.data} boxSize={bandX} padding={30}/>
        <MatrixCell
          clickCellFunction={clickCellFunction}
          rowid={row.meta.id}
          colid={col.meta.id}
          bandX={bandX}
          bandY={bandY}
          type="pie"
          col={col}
          data={data}
        />
      </g>
    )
  }

  const renderTotalsHeading = (props,c,col,r) => {
    const {radius, bandX, bandY, fontsize} = props
    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          transform="rotate(270,100,90)"
          dominantBaseline="left"
          textAnchor="start"
          stroke="black"
          x={-80}
          y={30*((c*1.5)+1)}
          className="text"
          style={{fontSize:fontsize+'px'}}>{col.data.name}
        </text>
      </g>
    )
  }

  const renderSkillLine = (props,c,col,r,row) => {
    const {radius, bandX, bandY, fontsize} = props
    return (
      <text
        dominantBaseline="left"
        textAnchor="middle"
        stroke="black"
        x={(bandX*(c+1))/2}
        y={bandY-(bandY/2)+10}
        className="text"
        style={{fontSize:fontsize+'px'}}>
          {col.line}
      </text>
    )
  }

  const renderTextRow = (props,r,row,sTop) => {
    var header2 = ''
    if (row.meta !== undefined) {
      if (row.meta.skillName !== undefined) {
        header2 = row.meta.skillName
      }
    }
    return (
      <>
      {sTop !== 0 && <text style={{fontSize: fontsize+'px'}} x={5} y={props.bandY} height={props.sTop} >{header2}</text>}
      </>
    )
  }



  const renderText = (props,c,col,r,row,sTop) => {
    const {bandX, bandY, fontsize} = props
    return (
      <text
        dominantBaseline="middle"
        textAnchor="middle"
        stroke="black"
        x={(bandX*c)+(bandX/2)}
        y={bandY-(bandY/2)+(sTop)}
        className="text"
        style={{fontSize:(fontsize-4)+'px'}}>
          {col.data.v}
      </text>
    )
  }

  const renderTop = (props,c,col,r) => {
    const {radius, bandX, bandY} = props
    var y = (bandX/2) + (bandX * c)
    var yp = y-15
    var i = r + c;
    return (
      <g key={r+c} transform="translate(0,0)" className="header">
        <text style={{fontSize:radius*1.5+'px'}} transform="rotate(270,100,90)" x="-30" y={y} fill="black">{col.data.name}</text>
        <foreignObject x={yp+'px'} y='240px' width='40px' height='40px'>
          <img
            alt="pic"
            src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+col.meta.id+'.jpg'}
            style={{borderRadius:'50%',x:yp+'px',y:'150px',width:'40px',height:'40px'}}
          />
        </foreignObject>
      </g>




      // <text
      //   dominantBaseline="middle"
      //   textAnchor="middle"
      //   stroke="black"
      //   x={(bandX*c)+(bandX/2)}
      //   y={bandY-(bandY/2)}
      //   className="text"
      //   style={{fontSize:'32px'}}>{col.data.v}</text>
    )
  }

  const renderLeftHeading = (props,c,col,r) => {
    const {radius, bandX, bandY} = props

    var col1Width = 70;

    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          dominantBaseline="left"
          textAnchor="start"
          stroke="black"
          x={(bandX*c)+10}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.line}
        </text>

        <line x1={(bandX*(c+0))+10+col1Width} y1="0" x2={(bandX*(c+0))+10+col1Width} y2={bandY} stroke={'black'} strokeWidth="1" />

        <text
          dominantBaseline="left"
          textAnchor="end"
          stroke="black"
          x={(bandX*(c+1))-10}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.area}
        </text>
      </g>
    )
  }

  const renderLeft = (props,c,col,r) => {
    const {radius, bandX, bandY} = props
    //console.log(col)
    var col1Width = 70;

    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          dominantBaseline="left"
          textAnchor="center"
          stroke="black"
          x={((col1Width/2)+ bandX*c)}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.line}
        </text>

        <line x1={(bandX*(c+0))+10+col1Width} y1="0" x2={(bandX*(c+0))+10+col1Width} y2={bandY} stroke={'black'} strokeWidth="1" />

        <text
          dominantBaseline="left"
          textAnchor="end"
          stroke="black"
          x={(bandX*(c+1))-10}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.area}
        </text>
      </g>
    )
  }

  const renderPlainHeading = (props,c,col,r) => {
    const {radius, bandX, bandY, fontsize} = props
    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          dominantBaseline="left"
          textAnchor="start"
          stroke="black"
          x={(bandX*c)}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:fontsize+'px'}}>{col.data.name}
        </text>
      </g>
    )
  }

  const renderMethodology = (props,c,col,r) => {
    const {radius, bandX, bandY} = props

    var col1Width = 70;

    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          dominantBaseline="left"
          textAnchor="center"
          stroke="black"
          x={((col1Width/2)+ bandX*c)}
          y={bandY-(bandY/2)}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.l1}
        </text>
        <text
          dominantBaseline="left"
          textAnchor="center"
          stroke="black"
          x={((col1Width/2)+ bandX*c)}
          y={bandY-(bandY/2)+40}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.l2}
        </text>
        <text
          dominantBaseline="left"
          textAnchor="center"
          stroke="black"
          x={((col1Width/2)+ bandX*c)}
          y={bandY-(bandY/2)+40+40}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.l3}
        </text>


      </g>
    )
  }

  const onScroll = (e) => {
    var vert = document.getElementById('skill')
    var horz = document.getElementById('student')
    if (vert.scrollTop !== e.target.scrollTop) {
      vert.scrollTop = e.target.scrollTop;
    }
    else {
      horz.scrollLeft = e.target.scrollLeft;
    }
  }

  return (
    <div className='' style={{...styles.vertical,width:'100%',height:'100%',fontSize:fontsize+'pt'}}>


      {showLegend && <Legend/>}
      <div style={{height:'50px',background:'gray',fontSize:'18px'}}>
        <div style={{margin:'10px',display:'flex',flexDirection:'row',color:'white'}}>
          <div style={{margin:'5px 10px 0 60px'}}>
            matrix size:
          </div>
          <button style={{width:'60px',height:'30px'}} onClick={(e)=>onClickSize(e,'small')}>smaller</button>
          <button style={{width:'60px',height:'30px'}} onClick={(e)=>onClickSize(e,'large')}>larger</button>
          <button style={{marginLeft:'40px',width:'120px',height:'30px'}}
            onClick={
              (e)=>setShowLegend(!showLegend)
            }
          >
            Toggle Legend
          </button>
        </div>
      </div>


      {/* main area start */}
      {dimensions !== null &&
      <div data-flex-splitter-horizontal className='' style={{...styles.horizontal,width:'100%',height:'100%'}}>
<Log data={dimensions}/>
<Log data={sCol2}/>
<Log data={sRow2}/>
        {/* left area - matrix - start */}
        <div className='' style={styles.vertical}>
          {/* row 1 start */}
          <div className='' style={{height:dimensions.row1+'px'}}>
            <div className=''  style={{...styles.horizontal,width:'100%',height:'100%'}}>
              <div className='' style={{width:dimensions.col1+'px'}}>
                <svg width={dimensions.col1+'px'} height={dimensions.row1+'px'}>placeholder</svg>
              </div>
              <div id="student" className='' style={{width:(dimensions.col2+dimensions.col3)+'px',overflow:'scroll',overflow:'hidden'}}>
                <div width={(dimensions.col2+dimensions.col3)+'px'} height={dimensions.row1+'px'}>
                <svg width={(dimensions.col2+dimensions.col3)+'px'} height={dimensions.row1+'px'}>
                  {byOperator !== null &&
                  <MatrixOneRow
                    renderCellFunction={renderOperatorCell}
                    clickCellFunction={clickOperatorCell}
                    data={byOperator}
                    params={{
                      name:'maintop',fontsize: fontsize,
                      translateX:0,translateY:0,radius:radius,bandX:bandX,bandY:700
                    }}
                  />
                  }
                  <Matrix
                    renderCellFunction={renderTotalsHeading}
                    data={widgetData.rightheading}
                    params={{
                      name:'totalsrightheading',fontsize: fontsize,
                      translateX:dimensions.col2,translateY:0,radius:radius,bandX:bandX,bandY:dimensions.row1
                    }}
                  />
                </svg>
                </div>
              </div>
            </div>
          </div>
          {/* row 1 end */}
          {/* row 2 start */}
          <div style={styles.horizontal}>
            {/* row 2 column 1 start */}
            <div id="skill" className='skill' style={{width:dimensions.col1+'px',overflow:'scroll',overflow:'hidden'}}>
              <div width={dimensions.col1+'px'} height={dimensions.row2+dimensions.row3+'px'}>
              <svg width={dimensions.col1+'px'} height={dimensions.row2+dimensions.row3+'px'}>
              {bySkill !== null &&
              <Matrix
                renderCellFunction={renderSkillCell}
                clickCellFunction={clickSkillCell}
                data={bySkill}
                params={{
                  name:'skills',fontsize: fontsize,
                  translateX:0,translateY:0,radius:radius,bandX:dimensions.col1,bandY:bandX
                }}
              />
              }
              {/* <Matrix
                renderCellFunction={renderSkillCell}
                clickCellFunction={clickSkillCell}
                data={widgetData.lefttotals}
                params={{
                  name:'skills',fontsize: fontsize,
                  translateX:0,translateY:row2,radius:radius,bandX:col1,bandY:bandX
                }}
              /> */}
              </svg>
              </div>
            </div>
            {/* row 2 column 1 End */}
            {/* row 2 column 2 start */}
            <div className='' style={{...styles.vertical,overflow:'overlay'}} onScroll={onScroll}>
              <div width={(dimensions.col2+dimensions.col3)+'px'} height={dimensions.row2+dimensions.row3+'px'}>
              <svg width={(dimensions.col2+dimensions.col3)+'px'} height={dimensions.row2+dimensions.row3+'px'}>
                {bySkill !== null &&
                <>
                <Matrix
                  renderRowFunction={renderMainRow}
                  renderCellFunction={renderMainCell}
                  clickCellFunction={clickMainCell}
                  data={bySkill}
                  params={{
                    name:'main',fontsize:fontsize,top:topHeight*sMultiplier,
                    translateX:0,translateY:0,bandX:bandX,bandY:bandY
                  }}
                />
                <Matrix
                  renderRowFunction={renderTextRow}
                  renderCellFunction={renderText}
                  data={widgetData.right}
                  params={{
                    name: 'totalsright',fontsize: fontsize,top: topHeight*sMultiplier,
                    translateX:dimensions.col2,translateY:0,radius:radius,bandX:bandX,bandY:bandY
                  }}
                />
                <Matrix
                  renderCellFunction={renderText}
                  data={widgetData.bottom}
                  params={{
                    name:'totalsbottom',fontsize: fontsize,
                    translateX:0,translateY:dimensions.row2,radius:radius,bandX:bandX,bandY:bandY
                  }}
                />
                </>

                }
              </svg>
              </div>
            </div>
            {/* row 2 column 2 end */}
          </div>
          {/* row 2 end */}
        </div>
        {/* left area - matrix - end */}

        <div role="separator"></div>

        {/* right area - details - start */}
        <div className='' style={{width:'525px'}}>
          <div style={{width:'100%', height:'100%', padding:'25px', background:'white', boxSizing:'border-box'}}>
            <div style={{width:'100%', height:'100%', boxSizing:'border-box', padding:'10px', boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {specific}
            </div>
          </div>
        </div>
        {/* right area - details - end */}

      </div>
      }
      {/* main area end */}
    </div>
  )

})

const styles = {
  horizontal: {
    display:'flex',
    flex:1,
    flexDirection:'row',
    boxSizing:'border-box',
    border:'0px solid blue',
    overflow:'hidden'
  },
  vertical: {
    display:'flex',
    flex:1,
    flexDirection:'column',
    boxSizing:'border-box',
    border:'0px solid blue',
    overflow:'hidden'
  },
};

