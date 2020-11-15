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

const CovidReportPreVisit = () => {
  var Partner = {}
  var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;

  const [totalauthorized, setTotalauthorized] = useState(0)

  const [dategenerated, setDategenerated] = useState('')
  const [socialdistancing, setSocialdistancing] = useState(0)
  const [facecoverings, setFacecoverings] = useState(0)
  const [tracingplan, setTracingplan] = useState(0)
  const [healthsafetyplan, setHealthsafetyplan] = useState(0)
  const [employeehealth, setEmployeehealth] = useState(0)
  const [visitorhealth, setVisitorhealth] = useState(0)
  const [other, setOther] = useState(0)

  const [totalcomfortable, setTotalcomfortable] = useState(0)
  const [totalnotcomfortable, setTotalnotcomfortable] = useState(0)

  const [visitschart, setVisitschart] = useState(null)
  const [comfortablechart, setComfortablechart] = useState(null)

    useEffect(() => {
      console.log('useEffect CovidReport')

      axios
      .get('data/covidsummary.json', {})
      .then((response) => {
        //var responsesArray = response.data.data
        setTotalauthorized(response.data.totalauthorized)
        setDategenerated(response.data.dategenerated.replace(/T/, ' ').replace(/\..+/, '') + ' (UTC)')
        setSocialdistancing(response.data.socialdistancingpercent)
        setFacecoverings(response.data.facecoveringspercent)
        setTracingplan(response.data.tracingplanpercent)
        setHealthsafetyplan(response.data.healthsafetyplanpercent)
        setEmployeehealth(response.data.employeehealthpercent)
        setVisitorhealth(response.data.visitorhealthpercent)
        setOther(response.data.otherpercent)

        setTotalcomfortable(response.data.totalcomfortable)
        setTotalnotcomfortable(response.data.totalnotcomfortable)

        var scheduled = 50
        var notscheduled = 50

        setVisitschart({
          "chart": {
            "caption": "Customer Visits Scheduled",
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
            {"label": "Scheduled","value": scheduled},
            {"label": "Not Scheduled","value": notscheduled}
          ]
        })

        setComfortablechart({
          "chart": {
            "caption": "Staff Comfort Level",
            "showpercentvalues": "1",
            //"defaultcenterlabel": response.data.totalauthorized,
            "aligncaptionwithcanvas": "0",
            "captionpadding": "0",
            "decimals": "1",
            "plottooltext":
              "<b>$percentValue</b> of users are <b>$label</b>",
            //"centerlabel": "Responses: <br/>" + response.data.totalauthorized,
            "theme": "fusion"
          },
          "data": [
            {"label": "Comfortable","value": response.data.totalcomfortable},
            {"label": "Not Comfortable","value": response.data.totalnotcomfortable}
          ]
        })

      })
      .catch((error) => {
        console.log(error)
      })
    }, []);

  return (
    <Horizontal>

        <Vertical style={{flex:'1',background:'lightgray'}}>
          <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(94,100,179)',color:'white',textAlign:'center',fontSize:'24px'}}>
            <div>Pre-Visit COVID-19 Controls Dashboard</div><div style={{marginRight:'20px'}}>data as of: {dategenerated}</div>
          </div>

          <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
            {visitschart != null &&
            <ChartWidget data={visitschart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
            {comfortablechart != null &&
            <ChartWidget data = {comfortablechart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
          </div>

          <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{flex:'1'}}><Summary name='Social Distancing' value={socialdistancing+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Face Coverings' value={facecoverings+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Tracing Plan' value={tracingplan+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Health & Safety Plan' value={healthsafetyplan+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Employee Health' value={employeehealth+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Visitor Health' value={visitorhealth+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Other' value={other+'%'}/></div>
          </div>

        </Vertical>
        <Splitter/>
        <Vertical>
          <CovidReportProperties propertywidth={123} Partner={Partner} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} SMEOnly={false} showlob={false}/>
        </Vertical>
      </Horizontal>

  )
}

export default CovidReportPreVisit
