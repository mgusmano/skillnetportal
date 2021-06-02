import React, { useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';
//https://blog.logrocket.com/make-any-svg-responsive-with-this-react-component/
import bell from './bell.svg';
import exclamation from './excl.svg';
import './ReactPieMatrix.css';
import { useModal } from "react-modal-hook";
import PieDetailsDialog from '../../dialog/PieDetailsDialog'

import { ReactPieMatrixTop } from './ReactPieMatrixTop';
import { MatrixLines } from './MatrixLines';

var GshowCorner = false;

// const showGridLines = true;
// const showCorner = true;
// const showTop = true;
// const showLeft = true;

const TESTID = 'tid';
const REPORT = 'report';
const STUDENTID = 'sid';
const STATUS = 'stat';
const RESULTS = 'r';
const PERCENT = 'p'
const STARTED = 's';
const COLOR = 'c';
const DEPTH = 'd';


const radius = 18;
var spaceBetweenY = 25;
var spaceBetweenX = 30;
var yTranslateStart = 200;
var xTranslateStart = 300;

const diameter = radius * 2;
var bandX = diameter + spaceBetweenX;
var bandY = diameter + spaceBetweenY;

var topStart = 200;
//var topSpacing = 80;

var leftStart = radius-10;
//var leftSpacing = 70;

//var testID
//var studentID

var Test
var Student
var NewPie

const Slice = props => {
  const { transform, angle, radius, ...rest } = props
  const r = radius
  const dx = r * Math.sin(angle)
  const dy = r * (1 - Math.cos(angle))
  return (
    <path
      {...rest}
      className="slice"
      onClick={(e) => {
        console.log('click')
      }}
      onMouseEnter={() => console.log('over')}
      strokeOpacity="1"
      d={`M${r} ${r}V0a${r} ${r} 0 0 1 ${dx} ${dy}z`}
    />
  )
}


const Pie = ({translate, data, testid, top, left}) => {
  //const [modalIsOpen,setIsOpen] = React.useState(false);
  // const [testID,setTestID] = React.useState(null);
  // const [studentID,setStudentID] = React.useState(null);

  const [showModalPieDetails, hideModalPieDetails] = useModal(({ in: open, onExited }) => (
    <PieDetailsDialog NewPie={NewPie} Test={Test} Student={Student} showModal={showModalPieDetails} hideModal={hideModalPieDetails} onExited={onExited} open={open}/>
  ));

  //console.log('Pie', data, testid)
  const tr = `translate(${translate})`
  const originx = radius;
  const originy = radius;
  const transformOrigin = `${originx}px ${originy}px`;
  const angle = 2 * Math.PI / 4;
  const strokeWidth ='3px';
  var rotate = 0.5 * Math.PI - angle;
  var studentid = data[STUDENTID];

  switch (data[STATUS]) {
    case 'warn':
      return (
        <g transform={tr} className="cell">
          {/* <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4} x2={-spaceBetweenX/2} y2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line>
          <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4}  y2={-spaceBetweenX/4} x2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line> */}
          <circle testid={testid} studentid={studentid} cx={radius} cy={(radius)} r={radius} stroke="gray" strokeWidth="3" fill="orange" />
          <image style={{x:(radius/2)+'px',y:(radius/2)+'px',width:radius+'px',height:radius+'px'}} href={bell} alt="warning" />
        </g>
      )
    case 'error':
      return (
        <g transform={tr} className="cell">
          {/* <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4} x2={-spaceBetweenX/2} y2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line>
          <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4}  y2={-spaceBetweenX/4} x2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line> */}
          <circle testid={testid} studentid={studentid} cx={radius} cy={radius} r={radius} stroke="gray" strokeWidth="3" fill="red" />
          <image style={{x:(radius/2)+'px',y:(radius/2)+'px',width:radius+'px',height:radius+'px'}} href={exclamation} alt="error" />
        </g>
      )
      case 'none':
        return (
          <g transform={tr} className="cell">
            {/* <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4} x2={-spaceBetweenX/2} y2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line>
            <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4}  y2={-spaceBetweenX/4} x2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line> */}
          </g>
        )
    default: break;
  }

  return (
    <g transform={tr} opacity="1" className="cell" >
      {/* <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4}  x2={-spaceBetweenX/2} y2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line>
      <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4}  y2={-spaceBetweenX/4} x2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line> */}

      {
      data[RESULTS].map((value, i) => {
        var percent = value[PERCENT];
        var stroke;
        var fill;
        var fillOpacity;
        var color;
        switch (value[COLOR]) {
          case 'r': color = 'red'; break;
          case 'g': color = 'green'; break;
          default: color = 'red';
        }

        //console.log(value[STARTED])
        if (value[STARTED] === 0) {
          stroke = color;
          fill = 'white';
          fillOpacity = '1';
        }
        else {
          stroke = color;
          fill = color;
          fillOpacity =  value[DEPTH]
        }
        const transform = `rotate(${rotate}rad)`
        rotate += angle;

        return (
          <Slice
            key={i}
            testid={testid}
            studentid={studentid}
            percent={percent}
            angle={angle}
            radius={radius}
            style={{ stroke, strokeWidth, fill, transformOrigin, transform, fillOpacity, }}
          />
        )
      })
    }


      <rect testid={testid} studentid={studentid} opacity="0" fillOpacity="0" width={diameter} height={diameter}

        onClick={(e,testid,studentid) => {

          showModalPieDetails(e,testid,studentid)
          //setIsOpen(true)
        }}


        onMouseEnter={(e) => {
          //console.log(testID)
          let testid = e.target.getAttribute('testid');
          let studentid = e.target.getAttribute('studentid');
          var test = left.find(x => x.tid === parseInt(testid))
          var student = top.find(x => x.sid === parseInt(studentid))
          Test = test
          Student = student

          e.target.style.opacity = '.5'
          var pie = e.target.parentNode
          var newPie=pie.cloneNode(true)
          newPie.removeChild(newPie.lastChild);
          var move="translate("+5+","+5+") scale(3)"
          newPie.setAttribute("transform",move)
          NewPie = newPie

          if (GshowCorner) {

            document.getElementById('tid').innerHTML = testid;
            document.getElementById('sid').innerHTML = studentid;
            document.getElementById('tname').innerHTML = test.name;
            document.getElementById('sname').innerHTML = student.name;


            var pieParent  = document.getElementById('pieparent');

            function removeAllChildNodes(parent) {
              while (parent.firstChild) {
                  parent.removeChild(parent.firstChild);
              }
            }
            removeAllChildNodes(pieParent)
          }


        }}
        onMouseOut={(e) => {
          //console.dir(e)
          e.target.style.opacity = '0'
        }}
        style={{fill:'rgb(0,0,255)',strokeWidth:'3',stroke:'rgb(0,0,0)'}} />

    </g>
  )
} //)






//export const Matrix = React.memo(({widgetData}) => {
export const Matrix = React.memo(({}) => {

  var widgetData = {
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





  //const [showAll,setShowAll] = React.useState(false);
  const [showGridLines,setShowGridLines] = React.useState(true);
  const [showCorner,setShowCorner] = React.useState(false);
  const [showTop,setShowTop] = React.useState(true);
  const [showLeft,setShowLeft] = React.useState(true);
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
    GshowCorner = !GshowCorner
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
                    <Pie key={i} translate={ts} data={cell} testid={testid} top={widgetData.top} left={widgetData.left}/>
                  )
                })
              }
              </g>
            )
          })
        }



{showGridLines &&
  <MatrixLines top={widgetData.top} left={widgetData.left} xTranslateStart={xTranslateStart} yTranslateStart={yTranslateStart} bandX={bandX} bandY={bandY}/>
}

        {showTop &&
          <g transform={"translate(" + xTranslateStart + "," + yTranslateStart + ")"} className="gridlines">
            {
              widgetData.top.map((col,i) => {
                if (i === 0) {
                  return (
                    <>
                    <line x1={i*bandX} y1={0} x2={i*bandX} y2={9*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
                    <line x1={(i+1)*bandX} y1={0} x2={(i+1)*bandX} y2={9*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
                    </>
                  )
                }
                return (
                  <line x1={(i+1)*bandX} y1={0} x2={(i+1)*bandX} y2={9*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
                )
              })
            }
            {
              widgetData.left.map((col,i) => {
                if (i === 0) {
                  return (
                    <>
                    <line x1={0} y1={i*bandY} x2={10*bandX} y2={i*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
                    <line x1={0} y1={(i+1)*bandY} x2={10*bandX} y2={(i+1)*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
                    </>
                  )
                }
                return (
                  <line x1={0} y1={(i+1)*bandY} x2={10*bandX} y2={(i+1)*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
                )
              })
            }
          </g>
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

