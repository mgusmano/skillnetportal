import React from 'react';

export const TotalLines = React.memo(({data, name, xTranslateStart, yTranslateStart, bandX, bandY}) => {
  return (
    <g transform={"translate(" + xTranslateStart + "," + yTranslateStart + ")"} className={name}>
    {
      data.map((row,r) => {
        return (
          <g transform={"translate(" + "0" + "," + bandY*r + ")"} className="row">
          {
            row.data.map((col,c) => {
              return (
                <g key={c} transform="translate(0,0)" className="cell">
                  <rect stroke="black" x={bandX*c} y={0} width={bandX} height={bandY} style={{fill:col.c,stroke:'black',strokeWidth:'1',fillOpacity:'0.4',strokeOpacity:0.9}}></rect>
                  <text dominantBaseline="middle" textAnchor="middle" stroke="black" x={(bandX*c)+(bandX/2)} y={bandY-(bandY/2)} class="small">{col.data.v}</text>
                </g>
              )
            })
          }
          </g>
        )
      })
    }
    </g>
  )
})



// export const TotalLinesRight = React.memo(({data, xTranslateStart, yTranslateStart, bandX, bandY}) => {
//   return (
//     <g transform={"translate(" + (xTranslateStart + 20) + "," + yTranslateStart + ")"} className="totalsright">
//     {

//       data.map((row,r) => {
//         //console.log(row)
//         return (
//           row.map((col,c) => {
//             //console.log(r,c,col.v)
//             return (
//               <text stroke="black" x={((bandX/2)*(c+1))} y={((bandY/2)*(r+1))} class="small">{col.v}</text>
//             )
//           })
//         )

//       })
//     }
//     </g>
//   )
// })



//            <text stroke="black" x={(bandX*c)+10} y={(bandY*r)+40} class="small">{col.v}</text>
//            <rect className="totalright" key={(r*10)+c} padding="5px" fill="purple" x={(60*c)} y={(60*r)} width={bandX} height={bandY} />
