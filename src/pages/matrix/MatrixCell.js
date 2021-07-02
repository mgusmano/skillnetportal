import React, { useEffect } from 'react';

export const MatrixCell = React.memo(({rowid, colid, bandX, bandY, type, x, stroke, col,data, clickCellFunction}) => {
  var sColor = 'black'
  useEffect(() => {
    if (stroke !== undefined) {
      sColor = stroke;
    }
  });

  return (
    <rect
      rowid={rowid}
      colid={colid}
      opacity="0"
      fillOpacity=".5"
      x={x}
      width={bandX}
      height={bandY}
      style={{fill:'rgb(0,0,255)',strokeWidth:'3',stroke:sColor}}
      onClick={(e) => {{clickCellFunction !== undefined && clickCellFunction(e,colid,rowid,type,data,col)}}}
      onMouseEnter={(e) => {e.target.style.opacity = '.5'}}
      onMouseOut={(e) => {e.target.style.opacity = '0'}}
    />
  )
})