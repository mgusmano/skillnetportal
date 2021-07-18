import React, { useEffect, useState } from 'react';
//import { useMatrixState } from './state/MatrixProvider';

export const Matrix = React.memo((props) => {
  //const matrixState = useMatrixState();

  const {name, translateX, translateY, bandX, bandY, oneRow, stroke, top, fontsize} = props.params;
  const {data,renderRowFunction,renderCellFunction,clickCellFunction} = props;
  const [sColor, setColor] = useState('black');
  const [sTop, setTop] = useState(0);
  //console.log(name,translateX)
  //const [header, setHeader] = useState('');
  //console.log(data)

  useEffect(() => {
    if (top !== undefined) {
      setTop(top)
    }
    //console.log(stroke)
    if (stroke !== undefined) {
      setColor(stroke);
    }
  }, [stroke,top]);

  const getRow = (row,oneRow) => {
    if (row.data === undefined) {
      return [row]
    }
    else {
      return row.data
    }
  }

  return (
    <g transform={"translate(" + translateX + "," + translateY + ")"} className={name}>
    {
      data.map((row,r) => {
        var theRow = getRow(row,oneRow)
        return (
          <g key={r} transform={"translate(0," + ((bandY*r)+(sTop*r)) + ")"} className="row">
            {renderRowFunction !== undefined && renderRowFunction(props.params,r,row,sTop,fontsize)}
          {
            theRow.map((col,c) => {
              //var header = ''
              if (col !== undefined) {
                if (col.skill !== undefined) {
                  //header = col.skill.skillName
                }
              }
              return (
                <g key={c} transform="translate(0,0)" className="cell">
                  <rect stroke={sColor} x={(bandX*c)} y={sTop} width={bandX} height={bandY} style={{fill:'white',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
                  {renderCellFunction !== undefined && renderCellFunction(props.params,c,col,r,row,sTop,col,clickCellFunction,fontsize)}
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
