import React from 'react';

export const ReactPieMatrixTop = React.memo(({top, topStart, xTranslateIncrement}) => {

  return (
    <g transform="translate(120,0)" className="top">
    {
      top !== [] &&
      top.map((person,i) => {
       // var y = topStart + (topSpacing * i)
        var y = topStart + (xTranslateIncrement * i)
        var yp = y-15
        return (
          <g key={i} transform="translate(0,0)" className="header">
            <text transform="rotate(270,100,90)" x="50" y={y} fill="black">{person.name}</text>
            <foreignObject x={yp+'px'} y='150px' width='40px' height='40px'>
              <img
                alt="pic"
                src={'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/'+person.sid+'.jpg'}
                style={{borderRadius:'50%',x:yp+'px',y:'150px',width:'40px',height:'40px'}}
              />
            </foreignObject>
          </g>
        )
      })
    }
    </g>
  )

})