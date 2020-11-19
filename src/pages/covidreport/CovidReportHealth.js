import React, { useState, useEffect, useCallback } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
//import Separator from '../../layout/Separator'
import axios from "axios";
import ChartWidget from './ChartWidget'
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

const CovidReportHealth = (props) => {
    var Partner = {}
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    const [totalassignments, setTotalassignments] = useState(0)
    const [totalauthorized, setTotalauthorized] = useState(0)
    const [totalnotauthorized, setTotalnotauthorized] = useState(0)
    const [percentauthorized, setPercentauthorized] = useState(0)

    const [workassignmentschart, setWorkassignmentschart] = useState(null)
    const [detailschart, setDetailschart] = useState(null)
    const [questionschart, setQuestionschart] = useState(null)

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

    const doWorkassignmentschart = (totalauthorized,totalnotauthorized) => {
      setWorkassignmentschart({
        "chart": {
          "caption": "Work Assignments",
          "paletteColors": "#94070B, #00415C",
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
          {"label": "Authorized","value": totalauthorized},
          {"label": "Not Authorized","value": totalnotauthorized}
        ]
      })

    }

    const doWorkassignmentsdetailschart = (daysArray) => {
      var categoryArray = []
      var dataArray = []
      for (const [key, value] of Object.entries(daysArray)) {
        var c = {label: key}
        categoryArray.push(c)
        var v = {value: value}
        dataArray.push(v)
      }
      setDetailschart({
        chart: {
          caption: "Work Assignment Details",
          //"paletteColors": "#94070B, #00415C",
          "paletteColors": "#00415C, #94070B",
          //placevaluesinside: "1",
          //showvalues: "0",
          //plottooltext: "<b>$dataValue</b>  $seriesName visitors",
          theme: "fusion"
        },
        categories: [
          {category: categoryArray}
        ],
        dataset: [
          {seriesname: "Authorized",data: dataArray},
        ]
      })
    }

    const doHealthquestionschart = (
      totalcurrentlysick,
      totalhadcontact,
      totalsymptoms,
      totalsymptomsnh,
      totalcovidcontactnh,
      totalnonessentialtravelnh,
      totalpreventmask) => {


      setQuestionschart({
        chart: {
          caption: "Health Questions",
          "paletteColors": "#94070B, #00415C",
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
              {label: "1. In the past 14 days, have you been confirmed positive for COVID-19, presumed positive, or been asked to self-quarantine?"},
              {label: "2. In the past 14 days, have you had contact with a person known or presumed to have COVID-19?  (i.e., Secondary Exposure)?"},
              {label: "3. In the past 14 days, have you experienced any symptoms associated with COVID-19?"},
              {label: "4. Do you have any of the following symptoms of COVID-19:"},
              {label: "5. Have you been in close contact with someone who is suspected or confirmed to have had COVID-19 in the past 14 days?"},
              {label: "6. Have you traveled on non-essential travel in the past 14 days outside of New Hampshire, Vermont, Maine, Massachusetts, Connecticut, or Rhode Island?"},
              {label: "7. Do you have any medical conditions that would prevent you from wearing a face covering at work?"},
            ]
          }
        ],
        dataset: [
          {
            seriesname: "yes",
            data: [
              {value: totalcurrentlysick},
              {value: totalhadcontact},
              {value: totalsymptoms},
              {value: totalsymptomsnh},
              {value: totalcovidcontactnh},
              {value: totalnonessentialtravelnh},
              {value: totalpreventmask},
            ]
          }
        ]
      })

    }

    useEffect(() => {
      console.log('useEffect CovidReportHealth')

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
          setTotalassignments(response.data.totalassignments)
          setTotalauthorized(response.data.totalauthorized)
          setTotalnotauthorized(response.data.totalnotauthorized)
          setPercentauthorized(response.data.percentauthorized)

          doWorkassignmentschart(response.data.totalauthorized,response.data.totalnotauthorized)
          doWorkassignmentsdetailschart(response.data.days)

          doHealthquestionschart(
            response.data.totalcurrentlysick,
            response.data.totalhadcontact,
            response.data.totalsymptoms,
            response.data.totalsymptomsnh,
            response.data.totalcovidcontactnh,
            response.data.totalnonessentialtravelnh,
            response.data.totalpreventmask
          )

        }
        else {
          var responsesFiltered = []
          responsesFiltered = response.data.data
          if (filters.divisions !== '') {
            responsesFiltered = responsesFiltered.filter(response => response['jobrole'] == filters.divisions)
          }
          if (filters.countries !== '') {
            responsesFiltered = responsesFiltered.filter(response => response['countryofvisit'] == filters.countries)
          }

          var totalassignmentsFiltered = responsesFiltered.filter(response => response['authorized'] != null)
          setTotalassignments(totalassignmentsFiltered.length)

          var totalnotauthorizedFiltered = responsesFiltered.filter(response => response['authorized'] == 'No')
          setTotalauthorized(totalnotauthorizedFiltered.length)

          var totalauthorizedFiltered = responsesFiltered.filter(response => response['authorized'] == 'Yes')
          setTotalauthorized(totalauthorizedFiltered.length)

          setPercentauthorized(((totalauthorizedFiltered.length / totalassignmentsFiltered.length)*100).toFixed(2))


          doWorkassignmentschart(totalauthorizedFiltered.length,totalnotauthorizedFiltered.length)


          var daysArray = []
          responsesFiltered.forEach(o => {
            if (daysArray[o['dateofvisit']] == undefined) {
              daysArray[o['dateofvisit']] = 1
            }
            else {
              daysArray[o['dateofvisit']] = daysArray[o['dateofvisit']] + 1
            }
          })

          doWorkassignmentsdetailschart(daysArray)

          doHealthquestionschart(
            response.data.totalcurrentlysick,
            response.data.totalhadcontact,
            response.data.totalsymptoms,
            response.data.totalsymptomsnh,
            response.data.totalcovidcontactnh,
            response.data.totalnonessentialtravelnh,
            response.data.totalpreventmask
          )

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
          Health Assessment Dashboard
        </div>

        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:'1'}}><Summary name='Total Assignments' value={totalassignments}/></div>
          <div style={{flex:'1'}}><Summary name='Total Authorized' value={totalauthorized}/></div>
          <div style={{flex:'1'}}><Summary name='Total Not Authorized' value={totalnotauthorized}/></div>
          {/* <div style={{flex:'1'}}><Summary name='Authorized Percent' value={percentauthorized + '%'}/></div> */}
        </div>

        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {workassignmentschart != null &&
            <ChartWidget data={workassignmentschart} name='doughnut2d' flex={1} />
          }
          {detailschart != null &&
            <ChartWidget data={detailschart} name='stackedcolumn2d' flex={1}/>
          }
        </div>

        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {questionschart != null &&
            <ChartWidget data={questionschart} name='stackedbar2d' flex={1}/>
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

export default CovidReportHealth
