import React, { useState, useEffect } from 'react';
import { Matrix } from './Matrix';
import { MatrixCell } from './MatrixCell';
import { Pie } from './Pie';

export const Student = React.memo((props) => {
  const {student,widgetData} = props.studentData;
  console.log(student)
  var studentid = student.id;

  const clickMain = (e,colid,rowid,type,data) => {
    //setTitle('main')

    //console.log('mouseClick')
    //e.target.style.opacity = '.2'

    var student=widgetData.students.find(x => x.id === colid)
    var skill=widgetData.skills.find(x => x.id === rowid)

    // setSpecific(<Main
    //   student={student}
    //   dialogData={{
    //     studentid: colid,
    //     skillid: rowid,
    //     student: student,
    //     skill: skill,
    //     type: type,
    //     data: data
    //   }}
    //   skill={skill}/>
    //   )

    // setMatrixDialogData({
    //   studentid: colid,
    //   skillid: rowid,
    //   student: student,
    //   skill: skill,
    //   type: type,
    //   data: data
    // })
    // setOpenMatrixDialog(true)
  }


  const renderMain = (props,c,col,r,row) => {
    var status = col.meta.status;
    var fontsize=12

    const {radius, bandX, bandY} = props
    var x = ((bandX/2) - radius);
    var y = (bandY/2) - radius;
    var ts = x + ',' + (y+20);
    const tr = `translate(${ts})`

    if (status == 'ok') {
      return (
        <g transform={"translate(" + (c*bandX) + ",0)"} className="group" >

{/* <text
        dominantBaseline="middle"
        textAnchor="middle"
        stroke="black"
        x={0}
        y={0}
        className="text"
        style={{fontSize:fontsize+'px'}}>
          cc{col.data.v}
      </text> */}


          <Pie
            tr={tr}
            radius={radius}
            col={col}
          />
          <MatrixCell
            clickFunction={clickMain}
            rowid={row.meta.id}
            colid={col.meta.id}
            bandX={bandX}
            bandY={bandY}
            type="pie"
            data={col.data}
            widgetData={widgetData}
            stroke="white"
          />
        </g>
      )
    }
    else {
      return (
        <g transform={"translate(" + (c*bandX) + ",0)"} className="group" >
          {/* <Solid
            tr={tr}
            radius={radius}
            data={status}
          /> */}
          <MatrixCell
            clickFunction={clickMain}
            rowid={row.meta.id}
            colid={col.meta.id}
            bandX={bandX}
            bandY={bandY}
            type="solid"
            data={status}
            widgetData={widgetData}
          />
        </g>
      )
    }
  }


  const [studentData, setStudentData] = useState(null)

  const {radius, bandX, bandY} = props
  var x = ((bandX/2) - radius);
  var y = (bandY/2) - radius;
  var ts = x + ',' + y;
  const tr = `translate(${ts})`

  useEffect(() => {
    var oneStudent = []
    widgetData.data.map((row,i) => {
      //console.log(row.data)
      //console.log(studentid)
      var studentrow=row.data.find(x => x.meta.id === studentid)
      studentrow.meta.skillid = row.meta.id;
      studentrow.meta.studentid = studentid;
      studentrow.meta.student = student;
      var skill=widgetData.skills.find(x => x.id === row.meta.id)
      studentrow.meta.skill = skill;
      oneStudent.push(studentrow)
    })
    setStudentData(oneStudent)
  }, [studentid]);

  // var widgetData = {
  //   first: [
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Assembly Machine'}},{meta:{},data:{v:'Inspection & Packaging'}},]},
  //   ],
  //   second: [
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Core Loading'}}]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Phase Paper Insertion (VW)'}},]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Lead Wire Setting'}}]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Neutral Tube Insertion'}}]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Neureal Crimp'}}]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Lead Wire Setting'}}]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Neutral Tube Insertion'}}]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Neureal Crimp'}}]},
  //   ],
  //   second2: [
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Core Loading'}},{meta:{},data:{v:'Paper Insertion'}},]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Pre-Lacing'}},{meta:{},data:{v:'Lacing'}},]},
  //     {meta:{tid:10},data:[{meta:{},data:{v:'Varnish Out'}},{meta:{},data:{v:'Insp. After Varnish'}},]},
  //   ],
  // }

  //var student=widgetData.students.find(x => x.id === colid)
  //var skill=widgetData.skills.find(x => x.id === rowid)

  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + student.id + '.jpg'

  const renderRects = (props,c,col,r,row,clickFunction) => {
    const {radius, bandX, bandY} = props
    var width = (bandX/5) -5
    var s = 15
    var w = 15
    var h = 40
    return (
      <g transform={"translate(" + (c*bandX) + "," + "0" + ")"} className="header">
        <text style={{fontSize:radius*1.5+'px'}} x="10" y="20" fill="black">{col.data.v}</text>
        <rect stroke="black" x={s+(width*0)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'gray',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*1)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'red',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*2)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'yellow',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*3)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'green',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
        <rect stroke="black" x={s+(width*4)} y={h} width={width-(w*1)} height={bandY-(h*1.5)} style={{fill:'blue',stroke:'black',strokeWidth:'1',fillOpacity:'1.0',strokeOpacity:1.0}}></rect>
      </g>


    )
  }

  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
      <div style={{height:'200px'}}>
        <div style={{fontSize:'32px'}}>Operator: {student.text}</div>
        <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>
      </div>

    <div style={{flex:'1',overflow:'none'}}>




      <svg width="100%" height="100%">

        <Matrix
                renderFunction={renderMain}
                params={{
                  name:'main',data:widgetData.student,
                  stroke:'white',
                  translateX:0,translateY:0,radius:radius,bandX:bandX,bandY:bandY*2
                }}
              />

        <text x={10} y={30} style={{fontSize:'24px'}}>Core Loading</text>
        <text x={360} y={30} style={{fontSize:'16px'}}>06/01/2021</text>
        <line x1={10} y1={35} x2={450} y2={35} stroke='black' strokeWidth="1" style={{fontSize:'16px'}}></line>

        <text x={10} y={130} style={{fontSize:'24px'}}>Phase Paper Insertion (VW)</text>
        <text x={360} y={130} style={{fontSize:'16px'}}>06/01/2020</text>
        <line x1={10} y1={135} x2={450} y2={135} stroke='black' strokeWidth="1" style={{fontSize:'16px'}}></line>

        <text x={10} y={230} style={{fontSize:'24px'}}>Lead Wire Setting</text>
        <text x={360} y={230} style={{fontSize:'16px'}}>12/28/2020</text>
        <line x1={10} y1={235} x2={450} y2={235} stroke='black' strokeWidth="1" style={{fontSize:'16px'}}></line>



        {studentData !== null &&
          studentData.map((student,i) => {
            //console.log(student)
            //console.log(student.meta.skill.text)
            //console.log(student.meta.status)
            if (student.meta.status == 'ok') {

              //console.log(bandY)
              //console.log(radius)
              //console.log(i)
              var x = ((bandX/2) - radius);
              var y = ((bandY/2) - radius) * ((i+1)*radius);
              //console.log(y)
              var ts = x + ',' + y;
              const tr = `translate(${ts})`

// console.log(student,i)
// {
//               <Pie
//                 tr={tr}
//                 radius={radius}
//                 col={student}
//               />
// }
            }
          })

        }

        {/* <Matrix
          renderFunction={renderRects}
          params={{
            name: "evaluation",
            data: widgetData.second,
            translateX: 0,
            translateY: 0,
            radius: 15,
            bandX: 340,
            bandY: 90
          }}
        /> */}

      </svg>

    </div>
    </div>
  )
})
