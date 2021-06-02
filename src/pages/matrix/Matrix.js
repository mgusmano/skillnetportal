import React, { useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';
//https://blog.logrocket.com/make-any-svg-responsive-with-this-react-component/
import './ReactPieMatrix.css';
import { ReactPieMatrixTop } from './ReactPieMatrixTop';
import { MatrixLines } from './MatrixLines';
import { TotalLinesRight } from './TotalLinesRight';
import { Pie } from './Pie';

var widgetData = {
  right: [
    [{v:1},{v:2},{v:3},{v:4}],
    [{v:5},{v:1},{v:1},{v:1}],
    [{v:1},{v:1},{v:1},{v:1}],
    [{v:1},{v:1},{v:1},{v:1}],
    [{v:1},{v:1},{v:1},{v:1}],
    [{v:1},{v:1},{v:1},{v:1}],
    [{v:1},{v:1},{v:1},{v:1}],
    [{v:1},{v:1},{v:1},{v:1}],
    [{v:1},{v:1},{v:1},{v:1}],
  ],

  bottom: [
    [{v:1},{v:2},{v:3},{v:4},{v:1},{v:2},{v:3},{v:4},{v:1},{v:2},],
    [{v:1},{v:2},{v:3},{v:4},{v:1},{v:2},{v:3},{v:4},{v:1},{v:2},],
    [{v:1},{v:2},{v:3},{v:4},{v:1},{v:2},{v:3},{v:4},{v:1},{v:2},],
  ],
  top: [
    {sid:1,name:'Joe Smith'},
    {sid:2,name:'Marc Ester'},
    {sid:3,name:'Ted White'},
    {sid:4,name:'Betty Green'},
    {sid:5,name:'Bob Jones'},
    {sid:6,name:'Frank Davis'},
    {sid:7,name:'Jane Johnson'},
    {sid:8,name:'Mary Bird'},
    {sid:9,name:'Zoya Lee'},
    {sid:10,name:'Joe Adams'},
  ],
  left: [
    {tid:10,name:'Core Loading'},
    {tid:20,name:'Phase Paper Insertion (VW)'},
    {tid:30,name:'Lead Wire Setting'},
    {tid:40,name:'Neutral Tube Insertion'},
    {tid:50,name:'Neutral Crimp'},
    {tid:60,name:'Pre-Lacing'},
    {tid:70,name:'Lacing'},
    {tid:80,name:'Lead Terminal Crimp'},
    {tid:90,name:'Lead Wire Forming'},
  ],
  data: [
    {
      tid:10,report:[
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

//export const Matrix = React.memo(({widgetData}) => {
export const Matrix = React.memo(() => {
  const TESTID = 'tid';
  const REPORT = 'report';
  // const STUDENTID = 'sid';
  // const STATUS = 'stat';
  // const RESULTS = 'r';
  // const PERCENT = 'p'
  // const STARTED = 's';
  // const COLOR = 'c';
  // const DEPTH = 'd';

  const radius = 18;
  var spaceBetweenY = 25;
  var spaceBetweenX = 30;
  var yTranslateStart = 200;
  var xTranslateStart = 300;

  const diameter = radius * 2;
  var bandX = diameter + spaceBetweenX;
  var bandY = diameter + spaceBetweenY;

  var numX = widgetData.top.length;
  var numY = widgetData.left.length;

  var matrixWidth = bandX * numX;
  var matrixHeight = bandY * numY;

  var xTotalsRightStart = xTranslateStart + matrixWidth;
  var yTotalsRightStart = yTranslateStart;

  var xTotalsBottomStart = xTranslateStart;
  var yTotalsBottomStart = yTranslateStart + matrixHeight;

  var topStart = 200;
  //var topSpacing = 80;

  var leftStart = radius-10;
  //var leftSpacing = 70;

  //var testID
  //var studentID

  var Test
  var Student
  var NewPie

  //const [showAll,setShowAll] = React.useState(false);
  const [showGridLines,setShowGridLines] = React.useState(true);
  const [showCorner,setShowCorner] = React.useState(false);
  const [showTop,setShowTop] = React.useState(true);
  const [showLeft,setShowLeft] = React.useState(true);
  const [showTotalsRight,setShowTotalsRight] = React.useState(true);
  const [showTotalsBottom,setShowTotalsBottom] = React.useState(true);

  const ref = useRef(null);
  var yTranslateIncrement = radius*2 + spaceBetweenY;
  var xTranslateIncrement = radius*2 + spaceBetweenX;

  const onShowGridLines = () => {
    setShowGridLines(!showGridLines)
  }

  const onShowTop = () => {
    setShowTop(!showTop)
  }

  const onShowLeft = () => {
    setShowLeft(!showLeft)
  }

  const onShowCorner = () => {
    setShowCorner(!showCorner)
  }

  return (
    <div className='container' style={{display:'flex',flexDirection:'row'}} ref={ref}>
      <div style={{display:'none'}}>
      <button onClick={onShowGridLines} style={{width:'100px',margin:'0 0 0 150px',fontSize:'16px',background:'gray',color:'white'}} >Grid Lines</button>
      <button onClick={onShowTop} style={{width:'100px',margin:'0 0 0 10px',fontSize:'16px',background:'gray',color:'white'}} >topStart</button>
      <button onClick={onShowLeft} style={{width:'100px',margin:'0 0 0 10px',fontSize:'16px',background:'gray',color:'white'}} >Left</button>
      <button onClick={onShowCorner} style={{width:'100px',margin:'0 0 0 10px',fontSize:'16px',background:'gray',color:'white'}} >Grid Corner</button>
    </div>

    <ParentsizeSVG align="none" elementRef={ref}>
      {
      widgetData !== [] &&
      widgetData.data.map((testobj,i) => {
          var testid = testobj[TESTID];
          var gt = yTranslateStart + (i * yTranslateIncrement);
          var gts = 'translate(0,' + gt + ')'
          return (
            <g key={i} transform={gts} className="row">
            {
              testobj[REPORT].map((cell, i) => {
                var x = xTranslateStart + (i * bandX) + ((bandX /2) - radius);
                var y = (bandY /2) - radius;
                var ts = x + ',' + y;
                return (
                  <Pie showCorner={showCorner} Test={Test} Student={Student} NewPie={NewPie} key={i} diameter={diameter} radius={radius} translate={ts} data={cell} testid={testid} top={widgetData.top} left={widgetData.left}/>
                )
              })
            }
            </g>
          )
        })
      }


      {showTotalsRight &&
        <g transform={"translate(" + xTotalsRightStart + "," + yTotalsRightStart + ")"} className="totals">
          <rect fill="lightgray" x="0" y="0" width="270" height={matrixHeight} />
        </g>
      }

      {showTotalsBottom &&
        <g transform={"translate(" + xTotalsBottomStart + "," + yTotalsBottomStart + ")"} className="totals">
          <rect fill="lightgray" x="0" y="0" width={matrixWidth} height="200" />
        </g>
      }

      {showTotalsRight &&
        <TotalLinesRight right={widgetData.right} xTranslateStart={xTotalsRightStart} yTranslateStart={yTotalsRightStart} bandX={bandX} bandY={bandY}/>
      }

      {showTotalsBottom &&
        <TotalLinesRight right={widgetData.bottom} xTranslateStart={xTotalsBottomStart} yTranslateStart={yTotalsBottomStart} bandX={bandX} bandY={bandY}/>
      }



      {showGridLines &&
        <MatrixLines top={widgetData.top} left={widgetData.left} xTranslateStart={xTranslateStart} yTranslateStart={yTranslateStart} bandX={bandX} bandY={bandY}/>
      }

      {showTop &&
        <ReactPieMatrixTop top={widgetData.top} topStart={topStart} xTranslateIncrement={xTranslateIncrement}/>
      }

      {showLeft &&
        <g transform="translate(0,220)" className="left">
        {
          widgetData !== [] &&
          widgetData.left.map((title,i) => {
            //var y = leftStart + (leftSpacing * i)
            var y = leftStart + (yTranslateIncrement * i)
            return (
              <text  x="40" y={y} fill="black">{title.name}</text>
            )
          })
        }
        </g>
      }

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

      </ParentsizeSVG>
    </div>
  )
})

