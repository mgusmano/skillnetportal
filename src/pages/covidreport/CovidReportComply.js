import React, { useState, useEffect, useCallback } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
//import Separator from '../../layout/Separator'
import axios from "axios";
import ChartWidget from './ChartWidget'
import CovidReportProperties from './CovidReportProperties'

// const Summary = (props) => {
//   //const { name, value } = props;
//   return (
//     <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
//       <div style={{fontSize:'14px'}}>{props.name}</div>
//       <div style={{fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
//     </div>
//   )
// }

const CovidReportComply = (props) => {
    var Partner = {}
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    const [visitschart, setVisitschart] = useState(null)
    const [comfortablechart, setComfortablechart] = useState(null)

    const [filters, setFilters] = useState(null)
    const onMessage = useCallback((e) => {
      if (!e.detail) {return}
      var type = e.detail.type
      var payload = e.detail.payload
      switch (type) {
        case 'fromcovidfilters':
          console.log(payload)
          setFilters(payload)
          break;
        default:
          break;
      }
    }, [])

    const doDayofhealthassessmentchart = (compliant,notcompliant) => {
      setVisitschart({
        "chart": {
          "caption": "Completed Health Assessmenton Visit Date",
          "paletteColors": "#94070B, #00415C",
          "theme": "fusion"
        },
        "data": [
          {"label": "Completed","value": compliant},
          {"label": "Not Completed","value": notcompliant}
        ]
      })
    }

    const doFivedaypostvisitchart = (compliant,notcompliant) => {
      setComfortablechart({
        "chart": {
          "caption": "5 day post visit",
          "paletteColors": "#94070B, #00415C",
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
          {"label": "Compliant","value": compliant},
          {"label": "Not Compliant","value": notcompliant}
        ]
      })
    }

    useEffect(() => {
      console.log('useEffect CovidReport')

      var url
      if (filters == null) {
        url = 'data/covidsummary.json'
      }
      else {
        url = 'data/coviddetail.json'
      }

      axios
      .get(url, {})
      .then((response) => {
        if (filters == null || (filters.divisions == '' && filters.countries == '')) {
          doDayofhealthassessmentchart(50,50)
          doFivedaypostvisitchart(40,60)
        }
        else {
          doDayofhealthassessmentchart(10,90)
          doFivedaypostvisitchart(30,70)
        }

      window.addEventListener('mjg', onMessage);
      return function cleanup() {
        window.removeEventListener('mjg', onMessage);
      };

    })
    .catch((error) => {
      console.log(error)
    })
  }, [onMessage, filters]);


  return (
    <Horizontal>

        <Vertical style={{flex:'1',background:'lightgray'}}>
          <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(59,110,143)',color:'white',textAlign:'center',fontSize:'24px'}}>
            Consultant Compliance Dashboard
          </div>

          <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
            {visitschart != null &&
            <ChartWidget data={visitschart} flex={1} name='doughnut2d'/>
            }
            {comfortablechart != null &&
            <ChartWidget data = {comfortablechart} flex={1} name='doughnut2d'/>
            }
          </div>

        </Vertical>
        <Splitter/>
        <Vertical style={{display:props.filterdisplay,width:'400px'}}>
          <CovidReportProperties propertywidth={123} Partner={Partner} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} SMEOnly={false} showlob={false}/>
        </Vertical>
      </Horizontal>
  )
}

export default CovidReportComply
