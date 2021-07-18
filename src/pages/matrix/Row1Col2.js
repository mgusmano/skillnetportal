import React, { useState } from 'react';
import { Matrix } from './Matrix';
import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
import { Skill } from './Skill';
import { styles } from './styles'
import { Operator } from './Operator';
import { MatrixOneRow } from './MatrixOneRow';

export const Row1Col2 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  const [num, setNum] = useState(0);
  const {col1,row2,fontsize,bandY} = matrixState.dimensions;

  const clickOperatorCell = (e,colid,rowid,type,data,col) => {
    matrixState.setSpecific(<Operator data={data}/>)
  }

  const renderOperatorCell = (props,c,col,r,row,sTop,data,clickCellFunction) => {
    const {bandX, bandY, fontsize} = props
    //var y = (bandX/2) + (bandX * c)
    //var yp = y-15
    //var i = r + c;
    return (
      <g key={r+c} transform="translate(0,0)" className="header">
        <text style={{fontSize:fontsize+'px'}} alignmentBaseline="baseline" transform="translate(0,0) rotate(90)" x={bandX*1.4} y={-(bandX * c)-10} fill="black">{data.operatorName}</text>
        <foreignObject x={(bandX*c)+5} y={10} width='50px' height='50px'>
          <img
            alt="pic"
            src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+data.operatorID+'.jpg'}
            style={{borderRadius:'50%',width: bandX-10,height:bandX-10}}
          />
        </foreignObject>

        <MatrixCell
          xclickCellFunction={(e,rowid,colid) => {console.log(colid)}}
          clickCellFunction={clickCellFunction}
          data={data}
          rowid={null}
          colid={col.id}
          bandX={bandX}
          x={bandX*c}
          bandY={bandY}
          type="none"
        />
      </g>
    )
  }


  return (
    <div id="student" className='' style={{boxSizing:'border-box',width:matrixState.dimensions.col2+'px',overflow:'scroll',overflow:'hidden'}}>
    <div style={{maxWidth:matrixState.dimensions.col2+'px'}} width={(matrixState.dimensions.col2)+'px'} height={matrixState.dimensions.row1+'px'}>
    <svg style={{maxWidth:matrixState.dimensions.col2+'px'}} width={(matrixState.dimensions.col2)+'px'} height={matrixState.dimensions.row1+'px'}>
      {DataTransferItem !== null &&
      <MatrixOneRow
        renderCellFunction={renderOperatorCell}
        clickCellFunction={clickOperatorCell}
        data={data}
        params={{
          name:'maintop',fontsize: matrixState.dimensions.fontsize,
          translateX:0,translateY:0,bandX:matrixState.dimensions.bandX,bandY:700
        }}
      />
      }
    </svg>
    </div>
  </div>
  )
}
