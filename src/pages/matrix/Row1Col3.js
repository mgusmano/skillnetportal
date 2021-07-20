import React, { useState } from 'react';
import { Matrix } from './Matrix';
//import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
//import { Skill } from './Skill';
//import { styles } from './styles'
//import { Operator } from './Operator';
//import { MatrixOneRow } from './MatrixOneRow';

export const Row1Col3 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  const [num, setNum] = useState(0);
  const {col1,row2,fontsize,bandY} = matrixState.dimensions;

  const renderTotalsHeading = (props,c,col,r) => {
    const {bandX, fontsize} = props
    return (
      <g key={r+c} transform="translate(0,0)" className="cell">
        <text
          style={{fontSize:fontsize+'px'}}
          dominantBaseline="left"
          textAnchor="end"
          alignmentBaseline="baseline"
          transform="translate(0,0) rotate(90)"
          x={bandX*3.8}
          y={-(bandX * c)-10}
          fill="black"
        >
          {col.data.name}
        </text>
      </g>
    )
  }

  console.log('Row1Col3')
  return (
    <div style={{width:matrixState.dimensions.col3+'px',minWidth:matrixState.dimensions.col3+'px',height:matrixState.dimensions.row1+'px'}}>
    <div width={matrixState.dimensions.col3+'px'} height={matrixState.dimensions.row1+'px'}>
    <svg width={matrixState.dimensions.col3+'px'} height={matrixState.dimensions.row1+'px'}>
      <Matrix
        renderCellFunction={renderTotalsHeading}
        data={data}
        params={{
          name:'totalsrightheading',fontsize: matrixState.dimensions.fontsize,
          translateX:0,translateY:0,bandX:matrixState.dimensions.bandX,bandY:matrixState.dimensions.row1
        }}
      />
    </svg>
    </div>
  </div>
  )
}
