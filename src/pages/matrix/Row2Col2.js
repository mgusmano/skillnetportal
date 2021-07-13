import React, { useState } from 'react';
import { Matrix } from './Matrix';
import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
import { Diamond } from './Diamond';
import { Main } from './Main';
import { styles } from './styles';

export const Row2Col2 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  const {col1,row2,fontsize,bandY} = matrixState.dimensions;

  const onScroll = (e) => {
    var vert = document.getElementById('skill')
    var vert2 = document.getElementById('skilltotals')
    var horz = document.getElementById('student')
    var horz2 = document.getElementById('studenttotals')
    if (vert.scrollTop !== e.target.scrollTop) {
      vert.scrollTop = e.target.scrollTop;
      vert2.scrollTop = e.target.scrollTop;
    }
    else {
      horz.scrollLeft = e.target.scrollLeft;
      horz2.scrollLeft = e.target.scrollLeft;
    }
  }

  const renderMainRow = (props,r,row,sTop) => {
    var header2 = ''
    if (row.meta !== undefined) {
      if (row.meta.skillName !== undefined) {
        header2 = row.meta.skillName
      }
    }
    return (
      <>
      {sTop !== 0 && <text dominantBaseline="auto" style={{fontSize: matrixState.dimensions.fontsize+'px'}} x={5} y={props.bandY-10} height={props.sTop} >{header2}</text>}
      </>
    )
  }

  const clickMainCell = (e,colid,rowid,type,data,col) => {
    matrixState.setSpecific(<Main data={data}/>)
  }

  const renderMainCell = (props,c,col,r,row,sTop,data,clickCellFunction,fontsize) => {
    //console.log(data)
    const {bandX, bandY} = props
    return (
      <g key={r+c} transform={"translate(" + (c*bandX) + "," + sTop + ")"} className="group" >
        <Diamond meta={col.meta} data={col.data} boxSize={bandX} padding={30}/>
        <MatrixCell
          clickCellFunction={clickCellFunction}
          rowid={row.meta.id}
          colid={col.meta.id}
          bandX={bandX}
          bandY={bandY}
          type="pie"
          col={col}
          data={data}
        />
      </g>
    )
  }

  return (
    <div style={{width:(matrixState.dimensions.col2)+'px',height:(matrixState.dimensions.row2)+'px',maxWidth:(matrixState.dimensions.col2)+'px',maxHeight:(matrixState.dimensions.row2)+'px',overflow:'auto'}} onScroll={onScroll} >
      <div width={(matrixState.dimensions.col2)+'px'} height={(matrixState.dimensions.row2)+'px'}>
      <svg width={(matrixState.dimensions.col2)+'px'} height={(matrixState.dimensions.row2-4)+'px'}>
        {data !== null &&
        <Matrix
          renderRowFunction={renderMainRow}
          renderCellFunction={renderMainCell}
          clickCellFunction={clickMainCell}
          data={data}
          params={{
            name:'main',fontsize:matrixState.dimensions.fontsize,top:matrixState.dimensions.topHeight,
            translateX:0,translateY:0,bandX:matrixState.dimensions.bandX,bandY:matrixState.dimensions.bandY
          }}
        />
        }
      </svg>
      </div>
    </div>
  )
}
