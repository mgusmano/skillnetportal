import React from 'react';

export const TotalLinesRight = React.memo(({right, xTranslateStart, yTranslateStart, bandX, bandY}) => {
  return (
    <g transform={"translate(" + (xTranslateStart + 20) + "," + yTranslateStart + ")"} className="totalsright">
    {
      right.map((row,r) => {
        console.log(row)
        return row.map((col,c) => {
          console.log(r,c,col.v)
          return (
            <text stroke="black" x={(bandX*c)+10} y={(bandY*r)+40} class="small">{col.v}</text>
          )
        })

      })
    }
    </g>
  )
})

//            <rect className="totalright" key={(r*10)+c} padding="5px" fill="purple" x={(60*c)} y={(60*r)} width={bandX} height={bandY} />
