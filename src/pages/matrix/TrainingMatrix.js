import React from 'react';
//import { ParentsizeSVG } from '@cutting/svg';
//https://blog.logrocket.com/make-any-svg-responsive-with-this-react-component/
import './ReactPieMatrix.css';
//import { ReactPieMatrixTop } from './ReactPieMatrixTop';
//import { MatrixLines } from './MatrixLines';
//import { TotalLines } from './TotalLines';
import { Matrix } from './Matrix';
import { Pie } from './Pie';

var widgetData = {
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

  rightheading: [
    {meta:{tid:10},data:[{meta:{},data:{name:'acc#'}},{meta:{},data:{name:'goal'}},{meta:{},data:{name:'comp'}},{meta:{},data:{name:'%'}},]},
  ],

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
  leftheading: [
    {meta:{tid:10},data:[{meta:{},data:{line:'LINE',area:'AREA TRAINED'}}]},
  ],
  left: [
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Core Loading'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Phase Paper Insertion (VW)'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Lead Wire Setting'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Neutral Tube Insertion'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Neutral Crimp'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Pre-Lacing'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Lacing'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Lead Terminal Crimp'}}]},
    {meta:{tid:10},data:[{meta:{},data:{line:'S',area:'Lead Wire Forming'}}]},
  ],
  methodologyheading: [
    {meta:{tid:10},data:[{meta:{},data:{name:'METHODOLOGY'}}]},
  ],
  methodology: [
    {meta:{},data:[{meta:{},data:{l1:'Classroom training',l2:'Hands-on training',l3:'Written testing'}}]},
  ],
  revheading: [
    {meta:{tid:10},data:[{meta:{},data:{name:'REV#'}}]},
  ],
  rev: [
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:5}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
    {meta:{tid:10},data:[{meta:{},data:{v:1}}]},
  ],


}

//export const TrainingMatrix = React.memo(({widgetData}) => {
export const TrainingMatrix = React.memo(() => {
  var numX = widgetData.top[0].data.length;
  var numY = widgetData.left.length;

  var translateXmain = 1000;
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

  // const [showGridLines,setShowGridLines] = React.useState(true);
  // const [showTop,setShowTop] = React.useState(true);
  // const [showLeft,setShowLeft] = React.useState(true);
  // const [showCorner,setShowCorner] = React.useState(false);
  // const onShowGridLines = () => {setShowGridLines(!showGridLines)}
  // const onShowTop = () => {setShowTop(!showTop)}
  // const onShowLeft = () => {setShowLeft(!showLeft)}
  // const onShowCorner = () => {setShowCorner(!showCorner)}

  // const [showTotalsRight,setShowTotalsRight] = React.useState(true);
  // const [showTotalsBottom,setShowTotalsBottom] = React.useState(true);

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
      showCorner={false}
      NewPie={NewPie}

      radius={radius}
      top={widgetData.top}
      left={widgetData.left}/>
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

  const renderTop = (props,r,c,row,col) => {
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

  const renderLeftHeading = (props,r,c,row,col) => {
    const {radius, bandX, bandY} = props
    console.log(col)
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

  const renderLeft = (props,r,c,row,col) => {
    const {radius, bandX, bandY} = props
    console.log(col)
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

  const renderPlainHeading = (props,r,c,row,col) => {
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

  const renderMethodology = (props,r,c,row,col) => {
    const {radius, bandX, bandY} = props
    console.log(col)
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

  return (
    <div style={{display:'flex',flexDirection:'column',flex:'1 1 0%',overflow:'hidden'}}>
      <div data-selector="cutting-svg-container" style={{background:'lightgray',position:'relative',overflow:'visible'}}>
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

          <Matrix
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

          <Matrix
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

          <Matrix
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
          />

        {/* {false &&
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
        } */}

        </svg>
      </div>
    </div>
  )
})
