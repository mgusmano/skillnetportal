import React, { useState, useEffect, useCallback } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import axios from "axios";
import ChartWidget from './ChartWidget'
import CovidReportProperties from './CovidReportProperties'
import { getFilters } from './CovidCommon'
//import calcmodule from './calculations'
//import './calculations'

//import { getVisitsChart } from './charts/VisitsChart'
import { getComfortChart } from './charts/ComfortChart'

const SummaryTop = (props) => {
  return (
    <div style={{height:'200px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'22px',textAlign:'center'}}>{props.name}</div>
      <div style={{marginTop:'5px',fontSize:'30px',fontWeight:'bold'}}>{props.total}</div>
    </div>
  )
}


const Summary = (props) => {
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'12px',textAlign:'center'}}>{props.name}</div>
      <div style={{marginTop:'10px',fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
      <div style={{marginTop:'5px',fontSize:'14px'}}>{props.total}</div>
    </div>
  )
}

const CovidReportPreVisit = (props) => {
  const [dategenerated, setDategenerated] = useState('')
  const [numcomplete, setNumcomplete] = useState(null)

  //const [visitschart, setVisitschart] = useState(null)
  //const [scheduled, setScheduled] = useState(null)
  //const [comfortchart, setComfortchart] = useState(null)
  const [comfortlevel, setComfortLevel] = useState(null)
  const [measures, setMeasures] = useState(null)

  const [filters, setFilters] = useState(null)
  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'fromcovidfilters':
        setFilters(e.detail.payload)
        break;
      default:
        break;
    }
  }, [])

  useEffect(() => {
    var calcmodule = window['calcmodule']
    console.log('useEffect CovidReportPreVisit')
    var url
    if (filters == null) { url = 'data/covidsummary.json' }
    else { url = 'data/coviddetail.json' }

    // var numcomplete
    // var scheduled
    // var notscheduled

    axios
    .get(url, {})
    .then((response) => {
      if (filters === null) {
        setNumcomplete(response.data.numcomplete)

        // numcomplete = response.data.numcomplete
        // scheduled = response.data.authorizations.totalauthorized
        // notscheduled = numcomplete-scheduled
        // setVisitschart(getVisitsChart(scheduled/numcomplete,notscheduled/numcomplete))
        //setScheduled(response.data.authorizations.totalauthorized)
        //setComfortchart(getComfortChart(response.data.comfortlevel))

        setComfortLevel(response.data.comfortlevel)
        setMeasures(response.data.measures)
      }
      else {
        var numCompleteArray = getFilters(response.data.data, filters)
        setNumcomplete(numCompleteArray.length)

        // numcomplete = numCompleteArray.length
        // scheduled = numCompleteArray.filter(response => response['dateofvisit'] != null).length
        // notscheduled = numcomplete-scheduled
        // setVisitschart(getVisitsChart(scheduled/numcomplete,notscheduled/numcomplete))
        //setComfortchart(getComfortChart(calcmodule.ComfortLevelCalculations(numCompleteArray)))
        setComfortLevel(calcmodule.ComfortLevelCalculations(numCompleteArray))
        setMeasures(calcmodule.MeasuresCalculations(numCompleteArray))
      }
      setDategenerated(response.data.dategenerated.replace(/T/, ' ').replace(/\..+/, '') + ' (UTC)')


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
          <div>COVID-19 Pre-Visit Site Assessment</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} filtered policyholder visits scheduled</div>
        </div>

        <div style={{display:'flex',flexDirection:'row'}}>
          {numcomplete != null &&
          <>
            <div style={{flex:'1'}}><SummaryTop name='Policyholder Visits Scheduled' total={numcomplete}/></div>
          </>
          }
          {comfortlevel != null &&
          <>
            <div style={{flex:'1'}}><SummaryTop name='Staff Comfortable to Complete Assigment' total={comfortlevel.totalcomfortable}/></div>
            <div style={{flex:'1'}}><SummaryTop name='Staff Not Comfortable to Complete Assigment' total={comfortlevel.totalnotcomfortable}/></div>
          </>
          }
        </div>



        {/* <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {visitschart != null &&
          <ChartWidget type='doughnut2d' dataSource={visitschart} flex={1}/>
          }
          {measures != null &&
            <div style={{display:'flex',flex:'1',flexDirection:'column',border:'1px solid gray',margin:'20px',background:'white',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              <div style={{fontSize:'24px'}}>Policyholder Visits Scheduled</div>
              <div style={{fontSize:'24px'}}>{numcomplete}</div>
            </div>
          }
          {comfortchart != null &&
          <ChartWidget type='doughnut2d' dataSource={comfortchart} flex={1}/>
          }
        </div> */}
        <div style={{marginLeft:'20px',fontSize:'24px'}}>Policyholder Safety Measures</div>
        <div style={{display:'flex',flexDirection:'row'}}>
          {measures != null &&
          <>
            <div style={{flex:'1'}}><Summary name='Social Distancing' value={measures.percentsocialdistancing+'%'} total={measures.totalsocialdistancing}/></div>
            <div style={{flex:'1'}}><Summary name='Face Coverings' value={measures.percentfacecoverings+'%'} total={measures.totalfacecoverings}/></div>
            <div style={{flex:'1'}}><Summary name='Tracing Plan' value={measures.percenttracingplan+'%'} total={measures.totaltracingplan}/></div>
            <div style={{flex:'1'}}><Summary name='Health & Safety Plan' value={measures.percenthealthsafetyplan+'%'} total={measures.totalhealthsafetyplan}/></div>
            <div style={{flex:'1'}}><Summary name='Employee Health' value={measures.percentemployeehealth+'%'} total={measures.totalemployeehealth}/></div>
            <div style={{flex:'1'}}><Summary name='Visitor Health' value={measures.percentvisitorhealth+'%'} total={measures.totalvisitorhealth}/></div>
            <div style={{flex:'1'}}><Summary name='Vendor Prohibited' value={measures.percentvendorprohibit+'%'} total={measures.totalvendorprohibit}/></div>
            <div style={{flex:'1'}}><Summary name='Other' value={measures.percentothermeasures+'%'} total={measures.totalothermeasures}/></div>
          </>
          }
        </div>
      </Vertical>
      <Splitter/>
      <Vertical style={{display:props.filterdisplay,width:'250px'}}>
        <CovidReportProperties/>
      </Vertical>
    </Horizontal>
  )
}

export default CovidReportPreVisit
