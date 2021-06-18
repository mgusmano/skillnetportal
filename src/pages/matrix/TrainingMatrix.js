import React, { useState } from 'react';
import { Matrix } from './Matrix';
import { MatrixOneRow } from './MatrixOneRow';
import { Pie } from './Pie';
import { Solid } from './Solid';
import { MatrixCell } from './MatrixCell';
import { MatrixDialog } from './MatrixDialog';
import { SkillDialog } from './SkillDialog';
import { StudentDialog } from './StudentDialog';
import { Skill } from './Skill';
import { Student } from './Student';
import { Main } from './Main';

var widgetData = {
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


  data: [
    {
      meta:{type:'skill',id:10},
      data:[
        {meta:{type:'student',id: 1,status:'good'},data:[]},
        {meta:{type:'student',id: 2,status:'abc'},data:[]},
        {meta:{type:'student',id: 3,status:'empty'},
        data:[
          {p:25,s:1,c:'g',d:.9},
          {p:50,s:1,c:'g',d:.9},
          {p:75,s:1,c:'g',d:.9},
          {p:100,s:0,c:'g',d:.9}
        ]},
        {meta:{type:'student',id: 4,status:'good'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{type:'student',id: 5,status:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{type:'student',id: 6,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{type:'student',id: 7,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{type:'student',id: 8,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{type:'student',id: 9,status:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{type:'student',id:10,status:'empty'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:20},
      data:[
        {meta:{id: 1,status:'empty'},data:[]},
        {meta:{id: 2,status:'good'},data:[]},
        {meta:{id: 3,status:'warn'},data:[]},
        {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 9,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'empty'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:30},
      data:[
        {meta:{id: 1,status:'empty'},data:[]},
        {meta:{id: 2,status:'empty'},data:[]},
        {meta:{id: 3,status:'empty'},data:[]},
        {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 9,status:'good'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'empty'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:40},
      data:[
        {meta:{id: 1,status:'empty'},data:[]},
        {meta:{id: 2,status:'empty'},data:[]},
        {meta:{id: 3,status:'empty'},data:[]},
        {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 9,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:50},
      data:[
        {meta:{id: 1,status:'empty'},data:[]},
        {meta:{id: 2,status:'warn'},data:[]},
        {meta:{id: 3,status:'empty'},data:[]},
        {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:0,c:'g',d:.1},{p:75,s:0,c:'g',d:.1},{p:100,s:0,c:'g',d:.1}]},
        {meta:{id: 9,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'empty'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:60},
      data:[
        {meta:{id: 1,status:'empty'},data:[]},
        {meta:{id: 2,status:'empty'},data:[]},
        {meta:{id: 3,status:'empty'},data:[]},
        {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'good'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'warn'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 9,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'empty'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:70},
      data:[
        {meta:{id: 1,status:'empty'},data:[]},
        {meta:{id: 2,status:'good'},data:[]},
        {meta:{id: 3,status:'empty'},data:[]},
        {meta:{id: 4,status:'good'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'error'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'good'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 9,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'good'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:80},
      data:[
        {meta:{id: 1,status:'error'},data:[]},
        {meta:{id: 2,status:'empty'},data:[]},
        {meta:{id: 3,status:'warn'},data:[]},
        {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'good'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 9,status:'warn'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'empty'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{type:'skill',id:90},
      data:[
        {meta:{id: 1,status:'empty'},data:[]},
        {meta:{id: 2,status:'good'},data:[]},
        {meta:{id: 3,status:'empty'},data:[]},
        {meta:{id: 4,status:'empty'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{id: 5,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 6,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 7,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 8,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id: 9,status:'empty'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{id:10,status:'good'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
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
    {meta:{id:10},data:[{meta:{},data:{name:'acc#'}},{meta:{},data:{name:'goal'}},{meta:{},data:{name:'diff'}}]},
  ],
  right: [
    {meta:{id:10},data:[{meta:{},data:{v:2}},{meta:{},data:{v:4}},{meta:{},data:{v:-2}}]},
    {meta:{id:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:4}},{meta:{},data:{v:-3}}]},
    {meta:{id:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:4}},{meta:{},data:{v:-3}}]},
    {meta:{id:10},data:[{meta:{},data:{v:0}},{meta:{},data:{v:4}},{meta:{},data:{v:-4}}]},
    {meta:{id:10},data:[{meta:{},data:{v:0}},{meta:{},data:{v:4}},{meta:{},data:{v:-4}}]},
    {meta:{id:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:4}},{meta:{},data:{v:-3}}]},
    {meta:{id:10},data:[{meta:{},data:{v:4}},{meta:{},data:{v:4}},{meta:{},data:{v:0}}]},
    {meta:{id:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:4}},{meta:{},data:{v:-3}}]},
    {meta:{id:10},data:[{meta:{},data:{v:2}},{meta:{},data:{v:4}},{meta:{},data:{v:-2}}]},
  ],
  bottom: [
    {meta:{},data:[{meta:{},data:{v:1}},{meta:{},data:{v:3}},{meta:{},data:{v:0}},{meta:{},data:{v:2}},{meta:{},data:{v:0}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:2}}]},
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

//export const TrainingMatrix = React.memo(({widgetData}) => {
export const TrainingMatrix = React.memo(() => {
  const [num, setNum] = useState(0);
  const [title, setTitle] = useState(null);
  const [specific, setSpecific] = useState(null);

  const [matrixDialogData, setMatrixDialogData] = useState(null);
  const [openMatrixDialog, setOpenMatrixDialog] = useState(false);

  const [skillDialogData, setSkillDialogData] = useState(null);
  const [openSkillDialog, setOpenSkillDialog] = useState(false);

  const [studentDialogData, setStudentDialogData] = useState(null);
  const [openStudentDialog, setOpenStudentDialog] = useState(false);

  var numX = widgetData.top[0].data.length;
  var numY = widgetData.left.length;

  var translateXmain = 1000;
  var translateYmain = 300;

  var bandX = 50;
  var bandY = 50;

  const radiusmain = 20;
  var spaceBetweenY = 25;
  var spaceBetweenX = 30;

  const diameter = radiusmain * 2;
  var bandXmain = diameter + spaceBetweenX;
  var bandYmain = diameter + spaceBetweenY;

  var widthmain = bandXmain * numX;
  var heightmain = bandYmain * numY;

  var xTotalsRightStart = translateXmain + widthmain;
  var yTotalsRightStart = translateYmain;

  var xTotalsBottomStart = translateXmain;
  var yTotalsBottomStart = translateYmain + heightmain;




  const clickStudent = (e,colid,rowid,type,data) => {
    setTitle('student')
    //var student =widgetData.students.find(x => x.id === colid)
    //console.log(student)

    var student=widgetData.students.find(x => x.id === colid)
    //var skill=widgetData.skills.find(x => x.id === rowid)

    setSpecific(<Student
      student={student}
      studentData={{
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

    const {radius, bandX, bandY} = props
    var y = (bandX/2) + (bandX * c)
    var yp = y-15
    var i = r + c;
    return (
      <g key={r+c} transform="translate(0,0)" className="header">
        <text style={{fontSize:radius*1.5+'px'}} transform="rotate(270,100,90)" x="-30" y={y} fill="black">{col.text}</text>
        <foreignObject x={yp+'px'} y='240px' width='40px' height='40px'>
          <img
            alt="pic"
            src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+col.id+'.jpg'}
            style={{borderRadius:'50%',x:yp+'px',y:'150px',width:'40px',height:'40px'}}
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

  const clickMain = (e,colid,rowid,type,data) => {
    setTitle('main')

    //console.log('mouseClick')
    //e.target.style.opacity = '.2'

    var student=widgetData.students.find(x => x.id === colid)
    var skill=widgetData.skills.find(x => x.id === rowid)

    setSpecific(<Main
      student={student}
      dialogData={{
        studentid: colid,
        skillid: rowid,
        student: student,
        skill: skill,
        type: type,
        data: data
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

  const renderMain = (props,c,col,r,row) => {
    var status = col.meta.status;




    const {radius, bandX, bandY} = props
    var x = ((bandX/2) - radius);
    var y = (bandY/2) - radius;
    var ts = x + ',' + y;
    const tr = `translate(${ts})`

    if (status == 'ok') {
      return (
        <g transform={"translate(" + (c*bandX) + ",0)"} className="group" >
          <Pie
            tr={tr}
            radius={radius}
            data={col.data}
          />
          <MatrixCell
            clickFunction={clickMain}
            rowid={row.meta.id}
            colid={col.meta.id}
            bandX={bandX}
            bandY={bandY}
            type="pie"
            data={col.data}
            widgetData={widgetData}
          />
        </g>
      )
    }
    else {
      return (
        <g transform={"translate(" + (c*bandX) + ",0)"} className="group" >
          <Solid
            tr={tr}
            radius={radius}
            data={status}
          />
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

  const renderSkillLine = (props,c,col,r,row) => {
    const {radius, bandX, bandY} = props
    return (
      <text
        dominantBaseline="left"
        textAnchor="middle"
        stroke="black"
        x={(bandX*(c+1))/2}
        y={bandY-(bandY/2)+10}
        className="text"
        style={{fontSize:radius*1.5+'px'}}>
          {col.line}
      </text>
    )
  }

  const clickSkillArea = (e,colid,rowid,type,data) => {
    setTitle('SkillArea')
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
    const {radius, bandX, bandY} = props
    return (
      <g transform={"translate(" + (c*bandX) + ",0)"} className="group" >
        <text
          dominantBaseline="left"
          textAnchor="end"
          stroke="black"
          x={(bandX*(c+1))-10}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>
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
        style={{fontSize:'32px'}}>
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
    const {radius, bandX, bandY} = props
    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          dominantBaseline="left"
          textAnchor="start"
          stroke="black"
          x={(bandX*c)+10}
          y={bandY-(bandY/3)}
          className="text"
          style={{fontSize:radius*1.5+'px'}}>{col.data.name}
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


//            <svg style={{flex:'1',display:'flex',width:'600px',height:'600px',overflow:'auto'}}>
//<svg width="900px" height="500px" xstyle={{overflow:'auto'}} xviewBox="0 0 900 500">

  return (
    <div style={{display:'flex',width:'100%',height:'100%',boxSizing:'border-box',border:'0px solid blue',overflow:'hidden'}}>
          <MatrixDialog dialogData={matrixDialogData} open={openMatrixDialog} onClose={()=>{setOpenMatrixDialog(false);}}/>
          <SkillDialog dialogData={skillDialogData} open={openSkillDialog} onClose={()=>{setOpenSkillDialog(false);}}/>
          <StudentDialog dialogData={studentDialogData} open={openStudentDialog} onClose={()=>{setOpenStudentDialog(false);}}/>
      <div style={{flex:'1',display:'flex',flexDirection:'column',boxSizing:'border-box',border:'0px solid blue',overflow:'hidden'}}>
        <div style={{height:'300px',display:'flex',flexDirection:'row',boxSizing:'border-box',border:'0px solid blue',overflow:'hidden'}}>
          <div style={{width:'340px'}}>
            <svg  height="300px" width="700px">
              {/* <Matrix
                renderFunction={renderLeftHeading}
                params={{
                  name: "totalleft",
                  data: widgetData.leftheading,
                  translateX: 0,
                  translateY: 0,
                  radius: 15,
                  bandX: 700,
                  bandY: 300
                }}
              /> */}
            </svg>
          </div>
          <div>
            <svg height="300px" width="700px">
            <MatrixOneRow
              renderFunction={renderStudent}
              clickFunction={clickStudent}
              params={{
                name: "maintop",
                data: widgetData.students,
                translateX: 0,
                translateY: 0,
                radius: 20,
                bandX: bandX,
                bandY: 700
              }}
            />

            <Matrix
              renderFunction={renderPlainHeading}
              params={{
                name: "totalsrightheading",
                data: widgetData.rightheading,
                translateX: 500,
                translateY: 0,
                radius: 10,
                bandX: bandX,
                bandY: 400
              }}
            />



            </svg>

          </div>
        </div>
        <div style={{flex:'1',display:'flex',flexDirection:'row',boxSizing:'border-box',border:'0px solid blue',overflow:'hidden'}}>
          <div style={{width:'340px',display:'flex',flexDirection:'column',boxSizing:'border-box',border:'0px solid blue',overflow:'hidden'}}>

          <svg width="400px" height="500px">
          <Matrix
              renderFunction={renderSkillLine}
              params={{
                name: "skills",
                data: widgetData.skills,
                translateX: 0,
                translateY: 0,
                radius: 15,
                bandX: bandX,
                bandY: bandX
              }}
            />

            <Matrix
              renderFunction={renderSkillArea}
              clickFunction={clickSkillArea}
              params={{
                name: "skills",
                data: widgetData.skills,
                translateX: 40,
                translateY: 0,
                radius: 15,
                bandX: 300,
                bandY: bandX
              }}
            />
          </svg>



          </div>
          <div style={{flex:'1',display:'flex',flexDirection:'column',boxSizing:'border-box',border:'0px solid blue',overflow:'auto'}}>


          <svg height="650px" width="700px">

              <Matrix
                renderFunction={renderMain}
                params={{
                  name: "main",
                  data: widgetData.data,
                  translateX: 0,
                  translateY: 0,
                  radius: 15,
                  bandX: bandX,
                  bandY: bandY
                }}
              />

            <Matrix
              renderFunction={renderText}
              params={{
                name: "totalsright",
                data: widgetData.right,
                translateX: 500,
                translateY: 0,
                radius: 15,
                bandX: bandX,
                bandY: bandY
              }}
            />



            </svg>

          </div>
          {/* <div style={{width:'200px',display:'flex',flexDirection:'column',boxSizing:'border-box',border:'0px solid blue'}}>
            matrix right
          </div> */}
        </div>
        <div style={{height:'50px',display:'flex',flexDirection:'column',boxSizing:'border-box',border:'0px solid blue'}}>
          <svg height="650px" width="900px">
          <Matrix
              renderFunction={renderText}
              params={{
                name: "totalsbottom",
                data: widgetData.bottom,
                translateX: 340,
                translateY: 0,
                radius: 15,
                bandX: 50,
                bandY: 50
              }}
            />
            </svg>
      </div>
      </div>
      <div style={{width:'400px',display:'flex',boxSizing:'border-box',border:'0px solid blue'}}>

<div style={{width:'100%', height:'100%', padding:'10px', background:'white', boxSizing:'border-box'}}>
  <div style={{width:'100%', height:'100%', boxSizing:'border-box', padding:'10px', boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
{specific}
</div>
</div>

      </div>
    </div>
    )

    return (
      <div style={{display:'flex',flexDirection:'column',flex:'1 1 0%',overflow:'hidden'}}>
        <MatrixDialog dialogData={matrixDialogData} open={openMatrixDialog} onClose={()=>{setOpenMatrixDialog(false);}}/>
        <SkillDialog dialogData={skillDialogData} open={openSkillDialog} onClose={()=>{setOpenSkillDialog(false);}}/>
        <StudentDialog dialogData={studentDialogData} open={openStudentDialog} onClose={()=>{setOpenStudentDialog(false);}}/>
        <div style={{background:'lightgray',position:'relative',overflow:'visible'}}>
          <svg preserveAspectRatio="xMaxYMid meet" viewBox="0 0 2500 1700" style={{overflow:'hidden'}}>










            <Matrix
              renderFunction={renderLeftHeading}
              params={{
                name: "totalleft",
                data: widgetData.leftheading,
                translateX: 0,
                translateY: 0,
                radius: radiusmain,
                bandX: translateXmain-500,
                bandY: translateYmain
              }}
            />

            {/* <Matrix
              renderFunction={renderLeft}
              params={{
                name: "totalleft",
                data: widgetData.left,
                translateX: 0,
                translateY: translateYmain,
                radius: radiusmain,
                bandX: translateXmain-500,
                bandY: bandYmain
              }}
            /> */}


            <Matrix
              renderFunction={renderSkillLine}
              params={{
                name: "skills",
                data: widgetData.skills,
                translateX: 0,
                translateY: translateYmain,
                radius: radiusmain,
                bandX: 80,
                bandY: bandYmain
              }}
            />

            <Matrix
              renderFunction={renderSkillArea}
              clickFunction={clickSkillArea}
              params={{
                name: "skills",
                data: widgetData.skills,
                translateX: 80,
                translateY: translateYmain,
                radius: radiusmain,
                bandX: translateXmain-580,
                bandY: bandYmain
              }}
            />

            <Matrix
              renderFunction={renderPlainHeading}
              params={{
                name: "methodologyheading",
                data: widgetData.methodologyheading,
                translateX: translateXmain-500,
                translateY: 0,
                radius: radiusmain,
                bandX: 400,
                bandY: translateYmain
              }}
            />

            <Matrix
              renderFunction={renderMethodology}
              params={{
                name: "methodology",
                data: widgetData.methodology,
                translateX: translateXmain-500,
                translateY: translateYmain,
                radius: radiusmain,
                bandX: 400,
                bandY: bandYmain * numY
              }}
            />

            <Matrix
              renderFunction={renderPlainHeading}
              params={{
                name: "revheading",
                data: widgetData.revheading,
                translateX: translateXmain-100,
                translateY: 0,
                radius: radiusmain,
                bandX: 100,
                bandY: translateYmain
              }}
            />

            <Matrix
              renderFunction={renderText}
              params={{
                name: "rev",
                data: widgetData.rev,
                translateX: translateXmain-100,
                translateY: translateYmain,
                radius: radiusmain,
                bandX: 100,
                bandY: bandYmain
              }}
            />

            {/* <Matrix
              renderFunction={renderTop}
              params={{
                name: "maintop",
                data: widgetData.top,
                translateX: translateXmain,
                translateY: 0,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: translateYmain
              }}
            /> */}

            <MatrixOneRow
              renderFunction={renderStudent}
              clickFunction={clickStudent}
              params={{
                name: "maintop",
                data: widgetData.students,
                translateX: translateXmain,
                translateY: 0,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: translateYmain
              }}
            />

            <Matrix
              renderFunction={renderMain}
              params={{
                name: "main",
                data: widgetData.data,
                translateX: translateXmain,
                translateY: translateYmain,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: bandYmain
              }}
            />

            <Matrix
              renderFunction={renderPlainHeading}
              params={{
                name: "totalsrightheading",
                data: widgetData.rightheading,
                translateX: xTotalsRightStart,
                translateY: 0,
                radius: radiusmain,
                bandX: bandXmain+20,
                bandY: translateYmain
              }}
            />

            <Matrix
              renderFunction={renderText}
              params={{
                name: "totalsright",
                data: widgetData.right,
                translateX: xTotalsRightStart,
                translateY: yTotalsRightStart,
                radius: radiusmain,
                bandX: bandXmain+20,
                bandY: bandYmain
              }}
            />

            <Matrix
              renderFunction={renderText}
              params={{
                name: "totalsbottom",
                data: widgetData.bottom,
                translateX: xTotalsBottomStart,
                translateY: yTotalsBottomStart,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: bandYmain
              }}
            />


            {/* <Matrix
              renderFunction={renderMain}
              params={{
                name: "secondary",
                data: widgetData.secondary,
                translateX: translateXmain,
                translateY: translateYmain +700,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: bandYmain
              }}
            /> */}

            {/* <Matrix
              renderFunction={renderText}
              params={{
                name: "totalsright",
                data: widgetData.right,
                translateX: xTotalsRightStart+400,
                translateY: translateYmain +700,
                radius: radiusmain,
                bandX: bandXmain,
                bandY: bandYmain
              }}
            /> */}

          {/* {false &&
            <>
            <g id="corner" transform="translate(10,10)" style={{padding:'10px',outline: '1px solid red'}} className="corner">
              <text x="0" y="15" fill="black">Current Hover:</text>
              <text id="id" x="0" y="45" fill="black"></text>
              <text id="tname" x="0" y="60" fill="black"></text>
              <text id="id" x="0" y="90" fill="black"></text>
              <text id="sname" x="0" y="105" fill="black"></text>
            </g>
            <g id="pieparent" transform="translate(0,100)" className="pieparent"></g>
            </>
          } */}

          </svg>
        </div>
      </div>
    )



})
