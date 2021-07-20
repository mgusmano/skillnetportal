import React from 'react';
import { Matrix } from './Matrix';
//import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
//import { styles } from './styles';

export const Row2Col3 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  const {col3,row2Orig,row2} = matrixState.dimensions;

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

  console.log('Row2Col3')
  return (
    <div id="skilltotals" style={{width:col3+'px',minWidth:col3+'px',height:(row2Orig)+'px',maxHeight:(row2Orig)+'px',overflowY:'scroll',overflowY:'hidden',boxSizing:'border-box'}}>
      <div width={col3+'px'} height={(row2+14)+'px'}>
      <svg width={col3+'px'} height={(row2+14)+'px'}>
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
