import React from 'react';
//import { Pie } from './Pie';
//import { Solid } from './Solid';

export const Main = React.memo((props) => {
  const {data} = props;
  console.log(data)

  var radius = 80
  var bandX = 100
  var bandY = 100
  var x = ((bandX /2) - radius);
  var y = (bandY /2) - radius;
  var ts = x + ',' + y;
  const tr = `translate(${ts})`


  // const dealWithItem = (item,i) => {
  //   if (item.s == 1) {
  //     var desc;
  //     var s;
  //     switch(item.c) {
  //       case 'g':
  //         desc = 'good'
  //         break;
  //       case 'r':
  //         desc = 'bad'
  //         break;
  //       default:
  //         desc = 'unknown'
  //     }
  //     s = `${item.p}% - ${item.d} ${desc}`
  //   }
  //   else {
  //     s = `${item.p}% not started`
  //     s = ''
  //   }
  //   return (
  //     <div key={i}>{s}</div>
  //   )
  // }


  //var img

  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.operator.operatorID + '.jpg'
  //var type
  //var data
//   if (data !== null) {
//     img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.operator.operatorID + '.jpg'
// //    type = dialogData.type;
//     //data = dialogData.data;

//   }

//  console.log(type)
console.log(data)
console.log(tr)
console.log(radius)
//console.log(dialogData.col)


  return (
    <div>
      <div style={{fontSize:'32px'}}>Operator: {data.operator.operatorName}</div>
      <div style={{fontSize:'24px',marginBottom:'10px'}}>Skill: {data.skill.skillName}</div>



    <div>
        <div style={{display:'flex',flexDirection:'column'}}>
            <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>
            <svg width="400" height="400">
              {/* <g transform={"translate(" + "100" + "," + "40" + ")"} className="group" >
                {type == 'pie' &&
                  <Pie tr={tr} radius={radius*2} data={data} col={dialogData.col}/>
                }
                {type == 'solid' &&
                  <Solid tr={tr} radius={radius} data={data}/>
                }
              </g> */}
            </svg>
            {/* <div  style={{display:'flex',flexDirection:'column'}}>
              {type == 'pie' &&
                data.map((item,i) => {
                  var r = dealWithItem(item,i)
                  return r
                })
              }
              {type == 'solid' &&
                <div>solid: {data}</div>
              }
            </div> */}
          </div>
        </div>







    </div>
  )
})
