import React from 'react';
import { Matrix } from './Matrix';
//import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
import { styles } from './styles';


export const Row3Col2 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  //const {col1,row2,fontsize,bandY} = matrixState.dimensions;

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
    <div id="studenttotals" style={{...styles.v,overflow:'scroll',overflow:'hidden',border:'0px solid red'}}>
      <div style={{ maxWidth:matrixState.dimensions.col2+'px'}} width={(matrixState.dimensions.col2)+'px'} height={matrixState.dimensions.row3+'px'}>
      <svg style={{maxWidth:matrixState.dimensions.col2+'px'}} width={(matrixState.dimensions.col2)+'px'} height={matrixState.dimensions.row3+'px'}>
        <Matrix
          renderCellFunction={renderText}
          data={data}
          params={{
            name:'totalsbottom',fontsize: matrixState.dimensions.fontsize,
            translateX:0,translateY:0,bandX:matrixState.dimensions.bandX,bandY:matrixState.dimensions.bandY
          }}
        />
      </svg>
      </div>
    </div>
  )
}
