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
      <div style={{fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
    </div>
  )
}

const CovidReportComply = () => {
    var Partner = {}
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    const [visitschart, setVisitschart] = useState(null)
    const [comfortablechart, setComfortablechart] = useState(null)

    useEffect(() => {
      console.log('useEffect CovidReport')

      setVisitschart({
        "chart": {
          "caption": "Day of health assessment",
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
          {"label": "Compliant","value": 50},
          {"label": "Not Compliant","value": 50}
        ]
      })

      setComfortablechart({
        "chart": {
          "caption": "5 day post visit",
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
          {"label": "Compliant","value": 50},
          {"label": "Not Compliant","value": 50}
        ]
      })
    }, []);

  return (
    <Horizontal>

        <Vertical style={{flex:'1',background:'lightgray'}}>
          <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(94,100,179)',color:'white',textAlign:'center',fontSize:'24px'}}>
            Consultant Compliance Dashboard
          </div>

          <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
            {visitschart != null &&
            <ChartWidget data={visitschart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
            {comfortablechart != null &&
            <ChartWidget data = {comfortablechart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
          </div>

        </Vertical>
        <Splitter/>
        <Vertical>
          <CovidReportProperties propertywidth={123} Partner={Partner} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} SMEOnly={false} showlob={false}/>
        </Vertical>
      </Horizontal>
  )
}

export default CovidReportComply
