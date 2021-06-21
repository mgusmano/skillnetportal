import React from 'react';
import warn from './bell.svg';
import error from './excl.svg';
import goodBlack from './checkBlack.svg';
import goodWhite from './checkWhite.svg';
import { Slice } from './Slice';
const STARTED = 's';
const COLOR = 'c';
const DEPTH = 'd';


export const Pie = React.memo(({tr, radius, col, data}) => {
  var numSlices = 0;
  var href = goodBlack;
  var alt = 'good';
  var meta;
  var data;
  var start = null;
  var trainer = null;
  if (col != undefined) {
    meta = col.meta;
    data = col.data;
    start = meta.start;
    trainer = meta.trainer;
  }
  else {
    //meta = col.meta;

  }
  const transformOrigin = `${radius}px ${radius}px`;
  const angle = 2 * Math.PI / 4;
  const strokeWidth ='2px';
  var rotate = 0.5 * Math.PI - angle;

  return (
    <g transform={tr} className="pie" >
      {data.map((value, i) => {
        //var percent = value[PERCENT];
        var stroke;
        var fill;
        var fillOpacity;
        var color;
        if (start != null) {
          var s = Date.parse(start);
          var n = Date.now();
          var diff = n-s;
          var oneDay = 1000 * 3600 * 24;
          var days = Math.floor(diff / oneDay);
          switch (true) {
            case (days<=(180-7)): color = 'green'; break;
            case (days<=(180)): color = 'orange'; break;
            default: color = 'red';
          }
          //console.log(days,start,color)
        }
        else {
          switch (value[COLOR]) {
            case 'r': color = 'red'; break;
            case 'g': color = 'green'; break;
            case 'y': color = 'orange'; break;
            default: color = 'red';
          }
        }
        if (value[STARTED] === 0) {

          stroke = color;
          fill = 'white';
          fillOpacity = '1';
        }
        else {
          numSlices = numSlices + 1;
          stroke = color;
          fill = color;
          fillOpacity =  value[DEPTH]
        }
        fillOpacity = 0.5
        var strokeOpacity = "1"
        const transform = `rotate(${rotate}rad)`
        rotate += angle;
        return (
          <>
          <Slice
            key={i}
            angle={angle}
            radius={radius}
            style={{ stroke, strokeWidth, strokeOpacity, fill, transformOrigin, transform }}
          />
          {trainer &&
          <>
          <circle cx={radius} cy={radius} r={radius} stroke="blue" strokeWidth="5" fillOpacity="0.0" />
</>
          }
          </>
        )
      })}
      {numSlices == 4 &&
          <image style={{x:(radius/2)+'px',y:(radius/2)+'px',width:radius+'px',height:radius+'px'}} href={href} alt={alt} />
      }
    </g>
  )
})