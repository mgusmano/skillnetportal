import React from 'react';
import { useModal } from "react-modal-hook";
import PieDetailsDialog from '../../dialog/PieDetailsDialog'
import bell from './bell.svg';
import exclamation from './excl.svg';
import check from './check.svg';
import { Slice } from './Slice';

const TESTID = 'tid';
const REPORT = 'report';
const STUDENTID = 'sid';
const STATUS = 'stat';
const RESULTS = 'r';
const PERCENT = 'p'
const STARTED = 's';
const COLOR = 'c';
const DEPTH = 'd';

export const Pie = React.memo(({showCorner, Test, Student, NewPie, diameter, radius, translate, data, testid, top, left}) => {
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
      case 'good':
        return (
          <g transform={tr} className="cell">
            {/* <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4} x2={-spaceBetweenX/2} y2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line>
            <line x1={-spaceBetweenX/2} y1={-spaceBetweenX/4}  y2={-spaceBetweenX/4} x2={diameter+spaceBetweenY} style={{stroke:'black',strokeWidth:'2'}}></line> */}
            <circle testid={testid} studentid={studentid} cx={radius} cy={(radius)} r={radius} stroke="gray" strokeWidth="3" fill="green" />
            <image style={{x:(radius/2)+'px',y:(radius/2)+'px',width:radius+'px',height:radius+'px'}} href={check} alt="warning" />
          </g>
        )
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

            if (showCorner) {

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





})