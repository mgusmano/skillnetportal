import React, { useState, useEffect } from 'react';
import { Matrix } from './Matrix';
import { MatrixOneRow } from './MatrixOneRow';
//import { Pie } from './Pie';
import { Diamond } from './Diamond';
import { Solid } from './Solid';
import { MatrixCell } from './MatrixCell';
import { Skill } from './Skill';
import { Student } from './Student';
import { Main } from './Main';
//import './TrainingMatrix.css';
//import { Demo } from './Demo';
//import { Rnd } from "react-rnd";
//https://github.com/bokuweb/react-rnd

import { Legend } from './Legend';
import { getDates } from './util';

//export const TrainingMatrix = React.memo(({widgetData}) => {
export const TrainingMatrix = React.memo(() => {
  const [topHeight, setTopHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <1400) {
        setCol1(0*multiplier);
        setRow2((sRow2*2)*multiplier);
        setTopHeight(50)
      }
      else {
        setCol1(sCol1*multiplier);
        setRow2(sRow2*multiplier);
        setTopHeight(0)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  })

  const [greendate, yellowdate, reddate] = getDates();

  var widgetData = {
    data: [
      {
        meta:{id:10,skillID:10,skillName:'Core Loading'},
        data:[
          {
            skill:{skillID:10,skillName:'Core Loading'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'started',start:greendate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'started',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            operator:{operatorID:3,operatorName:'Ted White'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'started',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'started',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'started',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'started',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            operator:{operatorID:2,operatorName:'Marc Ester'},
            skill:{skillID:10,skillName:'Core Loading'},
            meta:{status:'started',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
        ]
      },
      {
        meta:{type:'skill',id:20,skillID:20,skillName:'Phase Paper Insertion (VW)'},
        data:[
          {
            skill:{skillID:20,skillName:'Phase Paper Insertion (VW)'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 7,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:30,skillID:30,skillName:'Lead Wire Setting'},
        data:[
          {
            skill:{skillID:30,skillName:'Lead Wire Setting'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'started',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:greendate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:40,skillID:40,skillName:'Neural Tube Insertion'},
        data:[
          {
            skill:{skillID:40,skillName:'Neural Tube Insertion'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
        ]
      },
      {
        meta:{type:'skill',id:50,skillID:50,skillName:'Neureal Crimp'},
        data:[
          {
            skill:{skillID:50,skillName:'Neureal Crimp'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{tatus:'started',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:60,skillID:60,skillName:'Pre-Lacing'},
        data:[
          {
            skill:{skillID:60,skillName:'Pre-Lacing'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'started',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:70,skillID:70,skillName:'Lacing'},
        data:[
          {
            skill:{skillID:70,skillName:'Lacing'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
        ]
      },
      {
        meta:{type:'skill',id:80,skillID:80,skillName:'Lead Terminal Crimp'},
        data:[
          {
            skill:{skillID:80,skillName:'Lead Terminal Crimp'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            skill:{skillID:90,skillName:'Lead Wire Forming'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'ok',start:greendate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:90,skillID:90,skillName:'Lead Wire Forming'},
        data:[
          {
            skill:{skillID:90,skillName:'Lead Wire Forming'},
            operator:{operatorID:1,operatorName:'Joe Smith'},
            meta:{status:'started',start:reddate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },


    ],

    data2: [
      {
        meta:{type:'skill',id:10},
        data:[
          {
            meta:{type:'student',id: 1,status:'ok',start:greendate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
        ]
      },
      {
        meta:{type:'skill',id:20},
        data:[
          {
            meta:{type:'student',id: 1,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 7,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:30},
        data:[
          {
            meta:{type:'student',id: 1,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:greendate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:40},
        data:[
          {
            meta:{type:'student',id: 1,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
        ]
      },
      {
        meta:{type:'skill',id:50},
        data:[
          {
            meta:{type:'student',id: 1,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:60},
        data:[
          {
            meta:{type:'student',id: 1,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:70},
        data:[
          {
            meta:{type:'student',id: 1,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
        ]
      },
      {
        meta:{type:'skill',id:80},
        data:[
          {
            meta:{type:'student',id: 1,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'ok',start:greendate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:90},
        data:[
          {
            meta:{type:'student',id: 1,status:'ok',start:reddate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 2,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:greendate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 7,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 8,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 9,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id:10,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
    ],

    skills: [
      {id:10,line:'S',text:'Core Loading'},
      {id:20,line:'S',text:'Phase Paper Insertion (VW)'},
      {id:30,line:'S',text:'Lead Wire Setting'},
      {id:40,line:'S',text:'Neutral Tube Insertion'},
      {id:50,line:'S',text:'Neutral Crimp'},
      {id:60,line:'S',text:'Pre-Lacing'},
      {id:70,line:'S',text:'Lacing'},
      {id:80,line:'S',text:'Lead Terminal Crimp'},
      {id:90,line:'S',text:'Lead Wire Forming'},
    ],

    lefttotals: [
      {id:10,line:'S',text:'Goal'},
      {id:20,line:'S',text:'# Certified'},
      {id:30,line:'S',text:'Gap'},
    ],

    students: [
        {id:1,text:'Joe Smith'},
        {id:2,text:'Marc Ester'},
        {id:3,text:'Ted White'},
        {id:4,text:'Betty Green'},
        {id:5,text:'Bob Jones'},
        {id:6,text:'Frank Davis'},
        {id:7,text:'Jane Johnson'},
        {id:8,text:'Mary Bird'},
        {id:9,text:'Zoya Lee'},
        {id:10,text:'Joe Adams'},
    ],

    student: [
      {
        meta:{type:'skill',id:10},
        data:[
          {
            meta:{id: 1,status:'ok',start:'06/01/2021',trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:'06/20/2021',trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:'06/20/2021'},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:'06/20/2021'},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:'06/20/2021',trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}]
          },
          {meta:{type:'student',id: 6,status:'ok',start:'06/20/2021',trainer:true},data:[
            {p:25,s:1},{p:50,s:1,c:'r',d:.1},{p:75,s:1,c:'r',d:.1},{p:100,s:1,c:'r',d:.1}]},
        ]
      },
      {
        meta:{type:'skill',id:10},
        data:[
          {
            meta:{id: 1,status:'ok',start:'06/01/2020',trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:'06/20/2020',trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:'06/20/2020'},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:'06/20/2020'},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:'06/20/2020',trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}]
          },
          {meta:{type:'student',id: 6,status:'ok',start:'06/20/2020',trainer:true},data:[
            {p:25,s:1},{p:50,s:1,c:'r',d:.1},{p:75,s:1,c:'r',d:.1},{p:100,s:1,c:'r',d:.1}]},
        ]
      },
      {
        meta:{type:'skill',id:10},
        data:[
          {
            meta:{id: 1,status:'ok',start:'12/28/2020',trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:'12/28/2020',trainer:false},
            data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:'12/28/2020'},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:'12/28/2020'},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}]
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:'12/28/2020',trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}]
          },
          {meta:{type:'student',id: 6,status:'ok',start:'12/28/2020',trainer:true},data:[
            {p:25,s:1},{p:50,s:1,c:'r',d:.1},{p:75,s:1,c:'r',d:.1},{p:100,s:1,c:'r',d:.1}]},
        ]
      },
    ],



    first: [
      {meta:{tid:10},data:[{meta:{},data:{v:'Assembly Machine'}},{meta:{},data:{v:'Inspection & Packaging'}},]},
    ],
    second: [
      {meta:{tid:10},data:[{meta:{},data:{v:'Core Loading'}},{meta:{},data:{v:'Paper Insertion'}},]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Pre-Lacing'}},{meta:{},data:{v:'Lacing'}},]},
      {meta:{tid:10},data:[{meta:{},data:{v:'Varnish Out'}},{meta:{},data:{v:'Insp. After Varnish'}},]},
    ],


    leftheading: [
      {meta:{id:10},data:[{meta:{},data:{line:'LINE',area:'AREA TRAINED'}}]},
    ],
    left: [
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Core Loading'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Phase Paper Insertion (VW)'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Lead Wire Setting'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Neutral Tube Insertion'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Neutral Crimp'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Pre-Lacing'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Lacing'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Lead Terminal Crimp'}}]},
      {meta:{id:10},data:[{meta:{},data:{line:'S',area:'Lead Wire Forming'}}]},
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

    top: [
      {meta:{},data:[
        {meta:{id:1},data:{name:'Joe Smith'}},
        {meta:{id:2},data:{name:'Marc Ester'}},
        {meta:{id:3},data:{name:'Ted White'}},
        {meta:{id:4},data:{name:'Betty Green'}},
        {meta:{id:5},data:{name:'Bob Jones'}},
        {meta:{id:6},data:{name:'Frank Davis'}},
        {meta:{id:7},data:{name:'Jane Johnson'}},
        {meta:{id:8},data:{name:'Mary Bird'}},
        {meta:{id:9},data:{name:'Zoya Lee'}},
        {meta:{id:10},data:{name:'Joe Adams'}},
      ]},
    ],

    rightheading: [
      {meta:{id:10},data:[
        {meta:{},data:{name:'Goal'}},
        {meta:{},data:{name:'# Certified'}},
        {meta:{},data:{name:'Gap'}}
      ]},
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
    secondary: [
      {
        meta:{id:10},
        data:[
          {meta:{id: 1,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
          {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        ]
      },
      {
        meta:{id:10},
        data:[
          {meta:{id: 1,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
          {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        ]
      },
      {
        meta:{id:10},
        data:[
          {meta:{id: 1,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
          {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        ]
      },
      {
        meta:{id:10},
        data:[
          {meta:{id: 1,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
          {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        ]
      },
      {
        meta:{id:10},
        data:[
          {meta:{id: 1,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 2,status:'empty'},data:[]},
          {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
          {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        ]
      },
    ],
  }

  const [showLegend, setShowLegend] = useState(true);
  const [num, setNum] = useState(0);
  const [specific, setSpecific] = useState(null);

  const sMultiplier = 10;
  const sFontsize = 2;
  const sBandX = 5;
  const sBandY = 5;
  const sRadius = 1.8;
  const sCol1 = 40;
  const sCol2 = 50;
  const sCol3 = 17;
  const sRow1 = 30;
  const sRow2 = 45;
  const sRow3 = 20;

  const [multiplier, setMultiplier] = useState(sMultiplier);
  const [fontsize, setFontsize] = useState(sFontsize*sMultiplier);
  const [bandX, setBandX] = useState(sBandX*sMultiplier);
  const [bandY, setBandY] = useState(sBandY*sMultiplier);
  const [radius, setRadius] = useState(sRadius*sMultiplier);
  const [col1, setCol1] = useState(sCol1*sMultiplier) //300 + 20;
  const [col2, setCol2] = useState(sCol2*sMultiplier);
  const [col3, setCol3] = useState(sCol3*sMultiplier);
  const [row1, setRow1] = useState(sRow1*sMultiplier);
  const [row2, setRow2] = useState(sRow2*sMultiplier);  //450 + 20 + 50
  const [row3, setRow3] = useState(sRow3*sMultiplier);

  const onClickSize = (e,direction) => {
    var lMultiplier = multiplier-1;
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
    setCol1(sCol1*lMultiplier); //300 + 20;
    setCol2(sCol2*lMultiplier);
    setCol3(sCol3*lMultiplier);
    setRow1(sRow1*lMultiplier);
    setRow2(sRow2*lMultiplier);  //450 + 20 + 50
    setRow3(sRow3*lMultiplier);
  }

  const clickStudent = (e,colid,rowid,type,data) => {
    //setTitle('student')
    //var student =widgetData.students.find(x => x.id === colid)
    //console.log(student)

    var student=widgetData.students.find(x => x.id === colid)
    //var skill=widgetData.skills.find(x => x.id === rowid)

    setSpecific(<Student
      radius={radius}
      bandX={bandX}
      bandY={bandY}
      studentData={{
        widgetData: widgetData,
        studentid: colid,
        skillid: null,
        student: student,
        skill: null,
        type: type,
        data: data
      }}
      />)

    // setStudentDialogData({
    //   studentid: colid,
    //   skillid: null,
    //   student: student,
    //   skill: null,
    //   type: type,
    //   data: data
    // })
    // setOpenStudentDialog(true);
  }

  const renderStudent = (props,c,col,r,row,clickFunction) => {

    const {radius, bandX, bandY, fontsize} = props
    var y = (bandX/2) + (bandX * c)
    var yp = y-15
    var i = r + c;
    return (
      <g key={r+c} transform="translate(0,0)" className="header">
        <text style={{fontSize:fontsize+'px'}} transform="rotate(270,100,90)" x="-30" y={y} fill="black">{col.text}</text>
        <foreignObject x={yp+'px'} y='240px' width='40px' height='40px'>
          <img
            alt="pic"
            src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+col.id+'.jpg'}
            style={{borderRadius:'50%',x:yp+'px',y:'150px',width: (radius*2)+'px',height:(radius*2)+'px'}}
          />
        </foreignObject>

        <MatrixCell
          xclickFunction={(e,rowid,colid) => {console.log(colid)}}
          clickFunction={clickFunction}
          rowid={null}
          colid={col.id}
          bandX={bandX}
          x={bandX*c}
          bandY={bandY}
          type="none"
          data={col.data}
          widgetData={widgetData}
        />


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

  const clickMain = (e,colid,rowid,type,data, col) => {
    console.log(col)
    //setTitle('main')

    //console.log('mouseClick')
    //e.target.style.opacity = '.2'

    var student=widgetData.students.find(x => x.id === colid)
    var skill=widgetData.skills.find(x => x.id === rowid)


    console.log(col)

    setSpecific(<Main
      col={col}
      student={student}
      dialogData={{
        studentid: colid,
        skillid: rowid,
        student: student,
        skill: skill,
        type: type,
        data: data,
        col: col
      }}
      skill={skill}/>
      )

    // setMatrixDialogData({
    //   studentid: colid,
    //   skillid: rowid,
    //   student: student,
    //   skill: skill,
    //   type: type,
    //   data: data
    // })
    // setOpenMatrixDialog(true)
  }

  const renderMain = (props,c,col,r,row,sTop) => {
    console.log(sTop)
    var status = col.meta.status;
    const {radius, bandX, bandY} = props
    var x = ((bandX/2) - radius);
    var y = (bandY/2) - radius;
    var ts = x + ',' + y;
    const tr = `translate(${ts})`
    //console.log(col)
    if (status == 'started') {
      return (
        <g key={r+c} transform={"translate(" + (c*bandX) + "," + sTop + ")"} className="group" >

          <Diamond meta={col.meta} data={col.data} boxSize={bandX} padding={30}/>

          <MatrixCell
            clickFunction={clickMain}
            rowid={row.meta.id}
            colid={col.meta.id}
            bandX={bandX}
            bandY={bandY}
            type="pie"
            data={col.data}
            widgetData={widgetData}
            col={col}
          />
        </g>
      )
    }
    else {
      return (
        <g key={r+c} transform={"translate(" + (c*bandX) + ",0)"} className="group" >
          <Solid tr={tr} radius={radius} data={status}/>
          <MatrixCell
            clickFunction={clickMain}
            rowid={row.meta.id}
            colid={col.meta.id}
            bandX={bandX}
            bandY={bandY}
            type="solid"
            data={status}
            widgetData={widgetData}
          />
        </g>
      )
    }
  }

  const renderRowMain = (props,r,row,sTop) => {
    var header2 = ''
    if (row.meta !== undefined) {
      if (row.meta.skillName !== undefined) {
        header2 = row.meta.skillName
      }
    }
    return (
      <>
      {sTop !== 0 && <text style={{fontSize: fontsize+'px'}} x={5} y="30" >{header2}</text>}
      </>
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

  const clickSkillArea = (e,colid,rowid,type,data) => {
    //setTitle('SkillArea')
    var n = num + 1
    setNum(n)
    var skill=widgetData.skills.find(x => x.id === colid)

    setSpecific(<Skill
      skill={skill}
      skillData={{
        num: n,
        studentid: null,
        skillid: colid,
        student: null,
        skill: skill,
        type: type,
        data: data
      }}
      />
      )

    // setSkillDialogData({
    //   studentid: null,
    //   skillid: colid,
    //   student: null,
    //   skill: skill,
    //   type: type,
    //   data: data
    // })
    // setOpenSkillDialog(true);
  }

  const renderSkillArea = (props,c,col,r,row) => {
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
            {col.text}
        </text>
        <MatrixCell
          clickFunction={clickSkillArea}
          rowid={null}
          colid={col.id}
          bandX={bandX}
          bandY={bandY}
          type="pie"
          data={col.data}
          widgetData={widgetData}
        />
      </g>
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
        y={bandY-(bandY/2)+sTop}
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
      <div data-flex-splitter-horizontal className='' style={{...styles.horizontal,width:'100%',height:'100%'}}>

        {/* left area - matrix - start */}
        <div className='' style={styles.vertical}>
          {/* row 1 start */}
          <div className='' style={{height:row1+'px'}}>
            <div className=''  style={{...styles.horizontal,width:'100%',height:'100%'}}>
              <div className='' style={{width:col1+'px'}}>
                <svg width={col1+'px'} height={row1+'px'}>placeholder</svg>
              </div>
              <div id="student" className='' style={{width:(col2+col3)+'px',overflow:'scroll',overflow:'hidden'}}>
                <div width={(col2+col3)+'px'} height={row1+'px'}>
                <svg width={(col2+col3)+'px'} height={row1+'px'}>
                  <MatrixOneRow
                    renderFunction={renderStudent}
                    clickFunction={clickStudent}
                    params={{
                      name:'maintop',data: widgetData.students,fontsize: fontsize,
                      translateX:0,translateY:0,radius:radius,bandX:bandX,bandY:700
                    }}
                  />
                  <Matrix
                    renderFunction={renderTotalsHeading}
                    params={{
                      name:'totalsrightheading',data: widgetData.rightheading,fontsize: fontsize,
                      translateX:col2,translateY:0,radius:radius,bandX:bandX,bandY:row1
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
            <div id="skill" className='skill' style={{width:col1+'px',overflow:'scroll',overflow:'hidden'}}>
              <div width={col1+'px'} height={row2+row3+'px'}>
              <svg width={col1+'px'} height={row2+row3+'px'}>
              <Matrix
                renderFunction={renderSkillArea}
                clickFunction={clickSkillArea}
                params={{
                  name:'skills',data:widgetData.skills,fontsize: fontsize,
                  translateX:0,translateY:0,radius:radius,bandX:col1,bandY:bandX
                }}
              />
              <Matrix
                renderFunction={renderSkillArea}
                clickFunction={clickSkillArea}
                params={{
                  name:'skills',data:widgetData.lefttotals,fontsize: fontsize,
                  translateX:0,translateY:row2,radius:radius,bandX:col1,bandY:bandX
                }}
              />
              </svg>
              </div>
            </div>
            {/* row 2 column 1 End */}
            {/* row 2 column 2 start */}
            <div className='' style={{...styles.vertical,overflow:'overlay'}} onScroll={onScroll}>
              <div width={(col2+col3)+'px'} height={row2+row3+'px'}>
              <svg width={(col2+col3)+'px'} height={row2+row3+'px'}>
                <Matrix
                  renderFunction={renderMain}
                  renderRowFunction={renderRowMain}
                  params={{
                    name:'main',data:widgetData.data,fontsize:fontsize,top:topHeight,
                    translateX:0,translateY:0,bandX:bandX,bandY:bandY
                  }}
                />
                <Matrix
                  renderFunction={renderText}
                  params={{
                    name: 'totalsright',data: widgetData.right,fontsize: fontsize,top: topHeight,
                    translateX:col2,translateY:0,radius:radius,bandX:bandX,bandY:bandY
                  }}
                />
                <Matrix
                  renderFunction={renderText}
                  params={{
                    name:'totalsbottom',data:widgetData.bottom,fontsize: fontsize,
                    translateX:0,translateY:row2,radius:radius,bandX:bandX,bandY:bandY
                  }}
                />
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

