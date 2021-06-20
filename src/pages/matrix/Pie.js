import React from 'react';
import { Slice } from './Slice';
const STARTED = 's';
const COLOR = 'c';
const DEPTH = 'd';

export const Pie = React.memo(({tr, data, radius}) => {
  const transformOrigin = `${radius}px ${radius}px`;
  const angle = 2 * Math.PI / 4;
  const strokeWidth ='3px';
  var rotate = 0.5 * Math.PI - angle;

  return (
    <g transform={tr} className="pie" >
      {data.map((value, i) => {
        //var percent = value[PERCENT];
        var stroke;
        var fill;
        var fillOpacity;
        var color;
        switch (value[COLOR]) {
          case 'r': color = 'red'; break;
          case 'g': color = 'green'; break;
          case 'y': color = 'yellow'; break;
          default: color = 'red';
        }
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
            angle={angle}
            radius={radius}
            style={{ stroke, strokeWidth, fill, transformOrigin, transform, fillOpacity, }}
          />
        )
      })}
    </g>
  )
})