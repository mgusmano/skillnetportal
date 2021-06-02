import React from 'react';

export const MatrixLines = React.memo(({top, left, xTranslateStart, yTranslateStart, bandX, bandY}) => {
  return (
    <g transform={"translate(" + xTranslateStart + "," + yTranslateStart + ")"} className="gridlines">
    {
      top.map((col,i) => {
        if (i === 0) {
          return (
            <>
            <line x1={i*bandX} y1={0} x2={i*bandX} y2={9*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
            <line x1={(i+1)*bandX} y1={0} x2={(i+1)*bandX} y2={9*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
            </>
          )
        }
        return (
          <line x1={(i+1)*bandX} y1={0} x2={(i+1)*bandX} y2={9*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
        )
      })
    }
    {
      left.map((col,i) => {
        if (i === 0) {
          return (
            <>
            <line x1={0} y1={i*bandY} x2={10*bandX} y2={i*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
            <line x1={0} y1={(i+1)*bandY} x2={10*bandX} y2={(i+1)*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
            </>
          )
        }
        return (
          <line x1={0} y1={(i+1)*bandY} x2={10*bandX} y2={(i+1)*bandY} style={{stroke:'black',strokeWidth:'1'}}></line>
        )
      })
    }
    </g>
  )
})