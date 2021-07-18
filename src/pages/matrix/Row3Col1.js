import React from 'react';
import { Matrix } from './Matrix';
//import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
//import { styles } from './styles';

export const Row3Col1 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  //const {col1,row2,fontsize,bandY} = matrixState.dimensions;

  const renderBottomLeftText = (props,c,col,r,row,sTop) => {
    const {bandX, bandY, fontsize} = props
    return (
      <text
        dominantBaseline="left"
        textAnchor="end"
        x={(bandX*(c+1))-10}
        y={bandY-(bandY/2.5)+(sTop)}
        className="text"
        style={{fontSize:(fontsize-4)+'px'}}>
          {col.data.v}
      </text>
    )
  }

  return (
    <div style={{width:matrixState.dimensions.col1+'px',maxWidth:matrixState.dimensions.col1+'px'}}>
      <div style={{width:matrixState.dimensions.col1+'px',maxWidth:matrixState.dimensions.col1+'px',height:matrixState.dimensions.row3+'px'}}>
      <svg style={{width:matrixState.dimensions.col1+'px',maxWidth:matrixState.dimensions.col1+'px',height:matrixState.dimensions.row3+'px'}}>
        <Matrix
          renderCellFunction={renderBottomLeftText}
          data={data}
          params={{
            name:'totalsbottom',fontsize: matrixState.dimensions.fontsize,
            translateX:0,translateY:0,bandX:matrixState.dimensions.col1,bandY:matrixState.dimensions.bandY
          }}
        />
      </svg>
      </div>
    </div>
  )
}
