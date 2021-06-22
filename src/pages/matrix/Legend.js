import React, { useState } from 'react';
import { Rnd } from "react-rnd";
import { Pie } from './Pie';
//import { Solid } from './Solid';

export const Legend = React.memo((props) => {
  const [legendX, setLegendX] = useState(10);
  const [legendY, setLegendY] = useState(60);

  let d = new Date();
  console.log('Today is: ' + d.toLocaleString());
  d.setDate(d.getDate() - 180);
  console.log('179 days ago was: ' + d.toLocaleDateString());
  console.log(d.toLocaleDateString())
  var dt = d.toLocaleDateString();


  return (
  <Rnd
  size={{ width: '300px',  height: '300px' }}
  position={{ x: legendX, y: legendY }}
  onDragStop={(e, d) => {
    setLegendX(d.x);
    setLegendY(d.y);
  }}
  onResizeStop={(e, direction, ref, delta, position) => {
    // this.setState({
    //   width: ref.style.width,
    //   height: ref.style.height,
    //   ...position,
    // });
  }}
>
  <div className='legend' style={{background:'whitesmoke',width:'100%',height:'100%'}}>
    Floating Legend
    <br/>
    <svg height="300px">

    <g transform="translate(10,20)" className='ball'>
    <text x="0" y="0"style={{fontSize:'12'+'px'}}>certification:</text>
    <text x="100" y="0"style={{fontSize:'12'+'px'}}>valid</text>
    <text x="160" y="0"style={{fontSize:'12'+'px'}}>expiring</text>
    <text x="230" y="0"style={{fontSize:'12'+'px'}}>expired</text>
    </g>

  <g key={1} transform="translate(10,40)" className='ball'>
    <text
      dominantBaseline="hanging" textAnchor="bottom" stroke="black"
      x="0" y="0" className="text" style={{fontSize:'16'+'px'}}
    >
      Started
    </text>
    <Pie tr={'translate(100,-5)'} radius={12}
      col = {{
        meta:{type:'student',id: 1,status:'ok',start:'06/01/2021',trainer:false},
        data:[
          {p:25,s:0},
          {p:50,s:0},
          {p:75,s:0},
          {p:100,s:0}
        ]
      }}
    />
    <Pie tr={'translate(170,-5)'} radius={12} data={[{p:25,s:0,c:'y',d:.8},{p:50,s:0,c:'y',d:.8},{p:75,s:0,c:'y',d:.8},{p:100,s:0,c:'y',d:.8}]}/>
    <Pie tr={'translate(240,-5)'} radius={12} data={[{p:25,s:0,c:'r',d:.8},{p:50,s:0,c:'r',d:.8},{p:75,s:0,c:'r',d:.8},{p:100,s:0,c:'r',d:.8}]}/>
  </g>
  <g key={2} transform="translate(10,80)" className='ball'>
    <text
      dominantBaseline="hanging" textAnchor="bottom" stroke="black"
      x="0" y="0" className="text" style={{fontSize:'16'+'px'}}
    >
      Apprentice
    </text>
    <Pie tr={'translate(100,-5)'} radius={12} data={[{p:25,s:1,c:'g',d:.8},{p:50,s:0,c:'g',d:.8},{p:75,s:0,c:'g',d:.8},{p:100,s:0,c:'g',d:.8}]}/>
    <Pie tr={'translate(170,-5)'} radius={12} data={[{p:25,s:1,c:'y',d:.8},{p:50,s:0,c:'y',d:.8},{p:75,s:0,c:'y',d:.8},{p:100,s:0,c:'y',d:.8}]}/>
    <Pie tr={'translate(240,-5)'} radius={12} data={[{p:25,s:1,c:'r',d:.8},{p:50,s:0,c:'r',d:.8},{p:75,s:0,c:'r',d:.8},{p:100,s:0,c:'r',d:.8}]}/>
  </g>
  <g key={3} transform="translate(10,120)" className='ball'>
    <text
      dominantBaseline="hanging" textAnchor="bottom" stroke="black"
      x="0" y="0" className="text" style={{fontSize:'16'+'px'}}
    >
      Beginner
    </text>
    <Pie tr={'translate(100,-5)'} radius={12} data={[{p:25,s:1,c:'g',d:.8},{p:50,s:1,c:'g',d:.8},{p:75,s:0,c:'g',d:.8},{p:100,s:0,c:'g',d:.8}]}/>
    <Pie tr={'translate(170,-5)'} radius={12} data={[{p:25,s:1,c:'y',d:.8},{p:50,s:1,c:'y',d:.8},{p:75,s:0,c:'y',d:.8},{p:100,s:0,c:'y',d:.8}]}/>
    <Pie tr={'translate(240,-5)'} radius={12} data={[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:0,c:'r',d:.8},{p:100,s:0,c:'r',d:.8}]}/>
  </g>
  <g key={4} transform="translate(10,160)" className='ball'>
    <text
      dominantBaseline="hanging" textAnchor="bottom" stroke="black"
      x="0" y="0" className="text" style={{fontSize:'16'+'px'}}
    >
      Intermediate
    </text>
    <Pie tr={'translate(100,-5)'} radius={12} data={[{p:25,s:1,c:'g',d:.8},{p:50,s:1,c:'g',d:.8},{p:75,s:1,c:'g',d:.8},{p:100,s:0,c:'g',d:.8}]}/>
    <Pie tr={'translate(170,-5)'} radius={12} data={[{p:25,s:1,c:'y',d:.8},{p:50,s:1,c:'y',d:.8},{p:75,s:1,c:'y',d:.8},{p:100,s:0,c:'y',d:.8}]}/>
    <Pie tr={'translate(240,-5)'} radius={12} data={[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:0,c:'r',d:.8}]}/>
  </g>

  <g key={5} transform="translate(10,200)" className='ball'>
    <text
      dominantBaseline="hanging" textAnchor="bottom" stroke="black"
      x="0" y="0" className="text" style={{fontSize:'16'+'px'}}
    >
      Certified
    </text>
    <Pie tr={'translate(100,-5)'} radius={12} data={[{p:25,s:1,c:'g',d:.8},{p:50,s:1,c:'g',d:.8},{p:75,s:1,c:'g',d:.8},{p:100,s:1,c:'g',d:.8}]}/>
    <Pie tr={'translate(170,-5)'} radius={12} data={[{p:25,s:1,c:'y',d:.8},{p:50,s:1,c:'y',d:.8},{p:75,s:1,c:'y',d:.8},{p:100,s:1,c:'y',d:.8}]}/>
    <Pie tr={'translate(240,-5)'} radius={12} data={[{p:25,s:1,c:'r',d:.8},{p:50,s:1,c:'r',d:.8},{p:75,s:1,c:'r',d:.8},{p:100,s:1,c:'r',d:.8}]}/>
  </g>

  <g key={6} transform="translate(10,240)" className='ball'>
    <text
      dominantBaseline="hanging" textAnchor="bottom" stroke="black"
      x="0" y="0" className="text" style={{fontSize:'16'+'px'}}
    >
      Trainer
    </text>

    <Pie tr={'translate(100,-5)'} radius={12}
      col = {{
        meta:{type:'student',id: 1,status:'ok',start:'06/01/2021',trainer:true},
        data:[
          {p:25,s:1},
          {p:50,s:1},
          {p:75,s:1},
          {p:100,s:1}
        ]
      }}
    />
    <Pie tr={'translate(170,-5)'} radius={12}
      col = {{
        meta:{type:'student',id: 1,status:'ok',start:dt,trainer:true},
        data:[
          {p:25,s:1},
          {p:50,s:1},
          {p:75,s:1},
          {p:100,s:1}
        ]
      }}
    />
    <Pie tr={'translate(240,-5)'} radius={12}
      col = {{
        meta:{type:'student',id: 1,status:'ok',start:'02/01/2020',trainer:true},
        data:[
          {p:25,s:1},
          {p:50,s:1},
          {p:75,s:1},
          {p:100,s:1}
        ]
      }}
    />

  </g>



    </svg>

  </div>
</Rnd>


  )




})