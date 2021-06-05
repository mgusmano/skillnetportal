import React, { useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';
//https://blog.logrocket.com/make-any-svg-responsive-with-this-react-component/
import './ReactPieMatrix.css';
//import { ReactPieMatrixTop } from './ReactPieMatrixTop';
//import { MatrixLines } from './MatrixLines';
//import { TotalLines } from './TotalLines';
import { Matrix } from './Matrix';
import { Pie } from './Pie';

var widgetData = {
  right: [
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:5}},{meta:{},data:{v:6}},{meta:{},data:{v:7}},{meta:{},data:{v:8}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:4}}]},
  ],
  bottom: [
    {meta:{},data:[{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},{meta:{},data:{v:1}},]},
  ],
  top: [
    {meta:{},data:[
      {meta:{sid:1},data:{name:'Joe Smith'}},
      {meta:{sid:2},data:{name:'Marc Ester'}},
      {meta:{sid:3},data:{name:'Ted White'}},
      {meta:{sid:4},data:{name:'Betty Green'}},
      {meta:{sid:5},data:{name:'Bob Jones'}},
      {meta:{sid:6},data:{name:'Frank Davis'}},
      {meta:{sid:7},data:{name:'Jane Johnson'}},
      {meta:{sid:8},data:{name:'Mary Bird'}},
      {meta:{sid:9},data:{name:'Zoya Lee'}},
      {meta:{sid:10},data:{name:'Joe Adams'}},
    ]},
  ],
  left: [
    {
      meta:{},
      data:[{
        meta:{tid:10},
        data:{name:'Core Loading'}
      }]
    },
    {meta:{},data:[{meta:{tid:20},data:{name:'Phase Paper Insertion (VW)'}}]},
    {meta:{},data:[{meta:{tid:30},data:{name:'Lead Wire Setting'}}]},
    {meta:{},data:[{meta:{tid:40},data:{name:'Neutral Tube Insertion'}}]},
    {meta:{},data:[{meta:{tid:50},data:{name:'Neutral Crimp'}}]},
    {meta:{},data:[{meta:{tid:60},data:{name:'Pre-Lacing'}}]},
    {meta:{},data:[{meta:{tid:70},data:{name:'Lacing'}}]},
    {meta:{},data:[{meta:{tid:80},data:{name:'Lead Terminal Crimp'}}]},
    {meta:{},data:[{meta:{tid:90},data:{name:'Lead Wire Forming'}}]},
  ],

  secondary: [
    {
      meta:{tid:10},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 2,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      meta:{tid:10},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 2,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      meta:{tid:10},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 2,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      meta:{tid:10},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 2,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      meta:{tid:10},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 2,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
  ],

  data: [
    {
      meta:{tid:10},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      meta:{tid:20},
      data:[
        {meta:{sid: 1,stat:'warn'},data:[]},
        {meta:{sid: 2,stat:'error'},data:[]},
        {meta:{sid: 3,stat:'good'},data:[]},
        {meta:{sid: 4,stat:'ok'},data:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {meta:{sid: 5,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 6,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 7,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 8,stat:'on'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid: 9,stat:'ok'},data:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {meta:{sid:10,stat:'ok'},data:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
  ],

  data2: [
    {
      meta:{tid:10},tid:10,report:[
        {sid: 1,stat:'warn',},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]},
      ]
    },
    {
      tid:20,report:[
        {sid: 1,stat:'warn',},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'good',},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      tid:30,report:[
        {sid: 1,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      tid:40,report:[
        {sid: 1,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 2,stat:'none',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      tid:50,report:[
        {sid: 1,stat:'warn',},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      tid:60,report:[
        {sid: 1,stat:'warn',},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'warn',},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      tid:70,report:[
        {sid: 1,stat:'warn',},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'error',},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      tid:80,report:[
        {sid: 1,stat:'warn',},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'error',},
        {sid: 6,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
    {
      tid:90,report:[
        {sid: 1,stat:'warn',},
        {sid: 2,stat:'error',},
        {sid: 3,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 4,stat:'ok',r:[{p:25,s:1,c:'g',d:.9},{p:50,s:1,c:'g',d:.6},{p:75,s:1,c:'g',d:.3},{p:100,s:0,c:'g',d:.3}]},
        {sid: 5,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 6,stat:'warn',},
        {sid: 7,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 8,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid: 9,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
        {sid:10,stat:'ok',r:[{p:25,s:1,c:'r',d:.9},{p:50,s:0,c:'r',d:.1},{p:75,s:0,c:'r',d:.1},{p:100,s:0,c:'r',d:.1}]},
      ]
    },
  ]
}

//export const TrainingMatrix = React.memo(({widgetData}) => {
export const TrainingMatrix = React.memo(() => {
  var numX = widgetData.top[0].data.length;
  var numY = widgetData.left.length;

  var translateXmain = 400;
  var translateYmain = 300;

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

  var NewPie

  const [showGridLines,setShowGridLines] = React.useState(true);
  const [showTop,setShowTop] = React.useState(true);
  const [showLeft,setShowLeft] = React.useState(true);
  const [showCorner,setShowCorner] = React.useState(false);
  const onShowGridLines = () => {setShowGridLines(!showGridLines)}
  const onShowTop = () => {setShowTop(!showTop)}
  const onShowLeft = () => {setShowLeft(!showLeft)}
  const onShowCorner = () => {setShowCorner(!showCorner)}

  const [showTotalsRight,setShowTotalsRight] = React.useState(true);
  const [showTotalsBottom,setShowTotalsBottom] = React.useState(true);

  const renderTop = (props,r,c,row,col) => {
    const {radius, bandX, bandY} = props
    var y = (bandX/2) + (bandX * c)
    var yp = y-15
    var i = r + c;
    console.log(row)
    return (
      <g key={{i}} transform="translate(0,0)" className="header">
        <text style={{fontSize:radius*1.5+'px'}} transform="rotate(270,100,90)" x="-30" y={y} fill="black">{col.data.name}</text>
        <foreignObject x={yp+'px'} y='240px' width='40px' height='40px'>
          <img
            alt="pic"
            src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+col.meta.sid+'.jpg'}
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

  const renderLeft = (props,r,c,row,col) => {
    const {radius, bandX, bandY} = props
    return (
      <text
        dominantBaseline="left"
        textAnchor="end"
        stroke="black"
        x={(bandX*(c+1))-10}
        y={bandY-(bandY/3)}
        className="text"
        style={{fontSize:radius*1.5+'px'}}>{col.data.name}</text>
    )
  }

  const renderText = (props,r,c,row,col) => {
    const {bandX, bandY} = props
    return (
      <text
        dominantBaseline="middle"
        textAnchor="middle"
        stroke="black"
        x={(bandX*c)+(bandX/2)}
        y={bandY-(bandY/2)}
        className="text"
        style={{fontSize:'32px'}}>{col.data.v}</text>
    )
  }

  const renderMain = (props,r,c,row,col) => {
    const {radius, bandX, bandY} = props
    return (
      <Pie
      rowmeta={row.meta}
      colmeta={col.meta}
      data={col.data}
      c={c}
      bandX={bandX}
      bandY={bandY}
      showCorner={showCorner}
      NewPie={NewPie}

      radius={radius}
      top={widgetData.top}
      left={widgetData.left}/>
    )
  }

  return (
    <div xclassName="container" style={{display:'flex',flexDirection:'column',flex:'1 1 0%',overflow:'hidden'}}>
      <div data-selector="cutting-svg-container" style={{background:'lightgray',position:'relative',overflow:'visible'}}>
        <svg preserveAspectRatio="xMaxYMid meet" viewBox="0 0 2000 1500" style={{overflow:'hidden'}}>
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
          />

        {showTotalsRight &&
          <Matrix
            renderFunction={renderText}
            params={{
              name: "totalsright",
              data: widgetData.right,
              translateX: xTotalsRightStart,
              translateY: yTotalsRightStart,
              radius: radiusmain,
              bandX: bandXmain,
              bandY: bandYmain
            }}
          />
        }

        {showTotalsRight &&
          <Matrix
            renderFunction={renderText}
            params={{
              name: "totalsright",
              data: widgetData.right,
              translateX: xTotalsRightStart+400,
              translateY: yTotalsRightStart,
              radius: radiusmain,
              bandX: bandXmain,
              bandY: bandYmain
            }}
          />
        }

        {showTotalsBottom &&
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
        }

        {/* {showGridLines &&
          <MatrixLines top={widgetData.top} left={widgetData.left} translateXmain={translateXmain} translateYmain={translateYmain} bandX={bandX} bandY={bandY}/>
        } */}


          <Matrix
            renderFunction={renderTop}
            params={{
              name: "totalstop",
              data: widgetData.top,
              translateX: translateXmain,
              translateY: 0, //yTotalsBottomStart+150,
              radius: radiusmain,
              bandX: bandXmain,
              bandY: translateYmain
            }}
          />

          <Matrix
            renderFunction={renderLeft}
            params={{
              name: "totalleft",
              data: widgetData.left,
              translateX: 0,
              translateY: translateYmain,
              radius: radiusmain,
              bandX: translateXmain,
              bandY: bandYmain
            }}
          />


        {/* {false &&
          <ReactPieMatrixTop
            top={widgetData.top}
            topStart={topStart}
            bandX={bandXmain}
          />
        } */}

        {/* {showLeft &&
          <g transform="translate(0,220)" className="left">
          {
            widgetData !== [] &&
            widgetData.left.map((title,i) => {
              var leftStart = radiusmain-10;
              //var y = leftStart + (leftSpacing * i)
              var y = leftStart + (bandYmain * i)
              return (
                <text  x="40" y={y} fill="black">{title.name}</text>
              )
            })
          }
          </g>
        } */}

        {showCorner &&
          <>
          <g id="corner" transform="translate(10,10)" style={{padding:'10px',outline: '1px solid red'}} className="corner">
            <text x="0" y="15" fill="black">Current Hover:</text>
            <text id="tid" x="0" y="45" fill="black"></text>
            <text id="tname" x="0" y="60" fill="black"></text>
            <text id="sid" x="0" y="90" fill="black"></text>
            <text id="sname" x="0" y="105" fill="black"></text>
          </g>
          <g id="pieparent" transform="translate(0,100)" className="pieparent"></g>
          </>
        }

        </svg>
      </div>
    </div>
  )
})
