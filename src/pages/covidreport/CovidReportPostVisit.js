import React, { useState, useEffect } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
//import Separator from '../../layout/Separator'
import axios from "axios";
import ChartWidget from '../../widgets/skillnet/ChartWidget'
import CovidReportProperties from './CovidReportProperties'

const Summary = (props) => {
  //const { name, value } = props;
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'14px'}}>{props.name}</div>
      <div style={{marginTop:'10px',fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
    </div>
  )
}

const CovidReportPostVisit = () => {
    var Partner = {}
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;

    const [workedwith0, setWorkedwith0] = useState(0)
    const [workedwith1to3, setWorkedwith1to3] = useState(0)
    const [workedwith4to10, setWorkedwith4to10] = useState(0)
    const [workedwith11to25, setWorkedwith11to25] = useState(0)
    const [workedwithmorethan25, setWorkedwithmorethan25] = useState(0)

    const [compliancechart, setCompliancechart] = useState(null)
    const [assignmentschart, setAssignmentschart] = useState(null)

    useEffect(() => {
      console.log('useEffect CovidReportPostVisit')

      axios
      .get('data/coviddetail.json', {})
      .then((response) => {
        var responsesArray = response.data.data
        setWorkedwith0(((response.data.totalworkedwith0 / response.data.totalauthorized)*100).toFixed(2))
        setWorkedwith1to3(((response.data.totalworkedwith1to3 / response.data.totalauthorized)*100).toFixed(2))
        setWorkedwith4to10(((response.data.totalworkedwith4to10 / response.data.totalauthorized)*100).toFixed(2))
        setWorkedwith11to25(((response.data.totalworkedwith11to25 / response.data.totalauthorized)*100).toFixed(2))
        setWorkedwithmorethan25(((response.data.totalworkedwithmorethan25 / response.data.totalauthorized)*100).toFixed(2))
      })
      .catch((error) => {
        console.log(error)
      })

      setCompliancechart({
        "chart": {
          "caption": "Client Compliance on Social Distancing",
          // "showpercentvalues": "1",
          // "defaultcenterlabel": num_responses,
          // "aligncaptionwithcanvas": "0",
          // "captionpadding": "0",
          // "decimals": "1",
          // "plottooltext":
          //   "<b>$percentValue</b> of users are <b>$label</b>",
          // "centerlabel": "Responses: <br/>" + num_responses,
          "theme": "fusion"
        },
        "data": [
          {"label": "Compliant","value": 38},
          {"label": "Not Compliant","value": 62}
        ]
      })

      setAssignmentschart({
        "chart": {
          "caption": "Work Assignments",
          "showpercentvalues": "1",
          "defaultcenterlabel": 2500,
          "aligncaptionwithcanvas": "0",
          "captionpadding": "0",
          "decimals": "1",
          // "plottooltext":
          //   "<b>$percentValue</b> of users are <b>$label</b>",
          // "centerlabel": "Responses: <br/>" + num_responses,
          "theme": "fusion"
        },
        "data": [
          {"label": "Completed","value": 73},
          {"label": "Not Completed","value": 17}
        ]
      })
    }, []);

  return (
    <Horizontal>
      <Vertical style={{flex:'1',background:'lightgray'}}>
        <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(94,100,179)',color:'white',textAlign:'center',fontSize:'24px'}}>
          Post-Visit COVID-19 Controls Dashboard
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:'1'}}><Summary name='Worked Alone' value={workedwith0 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked 1-3' value={workedwith1to3 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked 4-10' value={workedwith4to10 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked 11-25' value={workedwith11to25 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked > 25' value={workedwithmorethan25 + '%'}/></div>
        </div>
        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {compliancechart != null &&
          <ChartWidget data={compliancechart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
          }
          {assignmentschart != null &&
          <ChartWidget data = {assignmentschart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
          }
        </div>
        <div style={{marginLeft:'20px',fontSize:'24px'}}>Reported controls in place</div>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:'1'}}><Summary name='More Physical Distance' value={'70' + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Added PPE' value={'5' + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Did NOT go into area' value={'2' + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Rescheduled visit' value={'3' + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Other' value={'10' + '%'}/></div>
        </div>
      </Vertical>
      <Splitter/>
      <Vertical>
        <CovidReportProperties propertywidth={123} Partner={Partner} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} SMEOnly={false} showlob={false}/>
      </Vertical>
    </Horizontal>
  )
}

export default CovidReportPostVisit
