import React from 'react';
import warn from './bell.svg';
import error from './excl.svg';
import good from './check.svg';

export const Solid = React.memo(({tr, radius, data}) => {
    var href;
    var alt;
    var fill;
    switch (data) {
      case 'good':
        href = good;
        alt = 'good';
        fill = 'green';
        break;
      case 'warn':
        href = warn;
        alt = 'warn';
        fill = 'orange';
        break;
      case 'error':
        href = error;
        alt = 'error';
        fill = 'red';
        break;
      default:
        return (
          <g transform="translate(0,0)" className="default"></g>
        )
    }
    return (
      <g transform={tr} className={fill} >
        <circle cx={radius} cy={(radius)} r={radius} stroke="gray" strokeWidth="3" fill={fill} />
        <image style={{x:(radius/2)+'px',y:(radius/2)+'px',width:radius+'px',height:radius+'px'}} href={href} alt={alt} />
      </g>
    )
})