import React, { useState } from 'react';
import { Matrix } from './Matrix';
import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
import { styles } from './styles';

export const Row2Col3 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  const {col1,row2,fontsize,bandY} = matrixState.dimensions;

  const renderTextRow = (props,r,row,sTop) => {
    var header2 = ''
    if (row.meta !== undefined) {
      if (row.meta.skillName !== undefined) {
        header2 = row.meta.skillName
      }
    }
    return (
      <>
      {sTop !== 0 && <text style={{fontSize: matrixState.dimensions.fontsize+'px'}} x={5} y={props.bandY} height={props.sTop} >{header2}</text>}
      </>
    )
  }

  const renderText = (props,c,col,r,row,sTop) => {
    const {bandX, bandY, fontsize} = props
    return (
      <text
        dominantBaseline="middle"
        textAnchor="middle"
        x={(bandX*c)+(bandX/2)}
        y={bandY-(bandY/2)+(sTop)}
        className="text"
        style={{fontSize:(fontsize-4)+'px'}}>
          {col.data.v}
      </text>
    )
  }

  return (
    <div id="skilltotals" style={{width:matrixState.dimensions.col3+'px',minWidth:matrixState.dimensions.col3+'px',overflowY:'scroll',overflowY:'hidden',boxSizing:'border-box'}}>
      <div width={matrixState.dimensions.col3+'px'} height={matrixState.dimensions.row2+'px'}>
      <svg width={matrixState.dimensions.col3+'px'} height={matrixState.dimensions.row2+'px'}>
        <Matrix
          renderRowFunction={renderTextRow}
          renderCellFunction={renderText}
          data={data}
          params={{
            name: 'totalsright',fontsize: matrixState.dimensions.fontsize,top: matrixState.dimensions.topHeight,
            translateX:0,translateY:0,bandX:matrixState.dimensions.bandX,bandY:matrixState.dimensions.bandY
          }}
        />
      </svg>
      </div>
    </div>
  )
}
