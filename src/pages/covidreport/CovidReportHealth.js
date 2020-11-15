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

const CovidReportHealth = () => {
    var Partner = {}
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    const [totalassignments, setTotalassignments] = useState(0)
    const [totalauthorized, setTotalauthorized] = useState(0)
    const [totalnotauthorized, setTotalnotauthorized] = useState(0)
    const [percentauthorized, setPercentauthorized] = useState(0)

    const [workassignmentschart, setWorkassignmentschart] = useState(null)
    const [detailschart, setDetailschart] = useState(null)
    const [questionschart, setQuestionschart] = useState(null)

    useEffect(() => {
      console.log('useEffect CovidReport')

      axios
      .get('data/covidsummary.json', {})
      .then((response) => {
        //var responsesArray = response.data.data

        setTotalassignments(response.data.totalassignments)
        setTotalauthorized(response.data.totalauthorized)
        setTotalnotauthorized(response.data.totalnotauthorized)
        setPercentauthorized(response.data.percentauthorized)

        setWorkassignmentschart({
          "chart": {
            "caption": "Work Assignments",
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
            {"label": "Authorized","value": response.data.totalauthorized},
            {"label": "Not Authorized","value": response.data.totalnotauthorized}
          ]
        })

        setDetailschart({
          chart: {
            caption: "Work Assignment Details",
            placevaluesinside: "1",
            showvalues: "0",
            plottooltext: "<b>$dataValue</b>  $seriesName visitors",
            theme: "fusion"
          },
          categories: [
            {
              category: [
                {label: "Feb 1"},
                {label: "Feb 1"},
                {label: "Feb 1"},
                {label: "Feb 1"},
                {label: "Feb 1"},
                {label: "Feb 1"},
                {label: "Feb 1"},
              ]
            }
          ],
          dataset: [
            {
              seriesname: "Authorized",
              data: [
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
              ]
            },
            {
              seriesname: "Not Authorized",
              data: [
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
                {value: "17"},
              ]
            }
          ]
        })

        setQuestionschart({
          chart: {
            caption: "Health Questions",
            // placevaluesinside: "1",
            // showvalues: "0",
            // plottooltext: "<b>$dataValue</b>  $seriesName visitors",
            showShadow: true,
            maxBarHeight: 50,
            theme: "fusion"
          },
          categories: [
            {
              category: [
                {label: "In the past 14 days, have you been confirmed positive for COVID-19, presumed positive, or been asked to self-quarantine?"},
                {label: "In the past 14 days, have you had contact with a person known or presumed to have COVID-19?  (i.e., Secondary Exposure)?"},
                {label: "In the past 14 days, have you experienced any symptoms associated with COVID-19?"},
                {label: "Do you have any of the following symptoms of COVID-19:"},
                {label: "Have you been in close contact with someone who is suspected or confirmed to have had COVID-19 in the past 14 days?"},
                {label: "Have you traveled on non-essential travel in the past 14 days outside of New Hampshire, Vermont, Maine, Massachusetts, Connecticut, or Rhode Island?"},
                {label: "Do you have any medical conditions that would prevent you from wearing a face covering at work?"},
              ]
            }
          ],
          dataset: [
            {
              seriesname: "yes",
              data: [
                {value: response.data.totalcurrentlysick},
                {value: response.data.totalhadcontact},
                {value: response.data.totalsymptoms},
                {value: response.data.totalsymptomsnh},
                {value: response.data.totalcovidcontactnh},
                {value: response.data.totalnonessentialtravelnh},
                {value: response.data.totalpreventmask},
              ]
            },
            {
              seriesname: "No",
              data: [
                {value: response.data.totalauthorized - response.data.totalcurrentlysick},
                {value: response.data.totalauthorized - response.data.totalhadcontact},
                {value: response.data.totalauthorized - response.data.totalsymptoms},
                {value: response.data.totalauthorized - response.data.totalsymptomsnh},
                {value: response.data.totalauthorized - response.data.totalcovidcontactnh},
                {value: response.data.totalauthorized - response.data.totalnonessentialtravelnh},
                {value: response.data.totalauthorized - response.data.totalpreventmask},
              ]
            }
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
          Health Assessment Dashboard
        </div>

        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:'1'}}><Summary name='Total Assignments' value={totalassignments}/></div>
          <div style={{flex:'1'}}><Summary name='Total Authorized' value={totalauthorized}/></div>
          <div style={{flex:'1'}}><Summary name='Total Not Authorized' value={totalnotauthorized}/></div>
          <div style={{flex:'1'}}><Summary name='Authorized Percent' value={percentauthorized + '%'}/></div>
        </div>

        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {workassignmentschart != null &&
          <ChartWidget data={workassignmentschart} name='doughnut2d' flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} />
          }
          {detailschart != null &&
            <ChartWidget data={detailschart} name='stackedcolumn2d' flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} />
          }
        </div>

        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {questionschart != null &&
            <ChartWidget data={questionschart} name='stackedbar2d' flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} />
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

export default CovidReportHealth
