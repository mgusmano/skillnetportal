import React, { useState, useEffect, useCallback } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import axios from "axios";
import ChartWidget from './ChartWidget'
import CovidReportProperties from './CovidReportProperties'
import { getFilters } from './CovidCommon'

//Health
import { getWorkAssignmentsChart } from './charts/WorkAssignmentsChart'
import { getWorkAssignmentsDetailChart } from './charts/WorkAssignmentsDetailChart'
import { getHealthQuestionsChart } from './charts/HealthQuestionsChart'
import { getHealthQuestionsNHChart } from './charts/HealthQuestionsNHChart'
//Health

const Summary = (props) => {
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'14px',textAlign:'center'}}>{props.name}</div>
      <div style={{marginTop:'10px',fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
    </div>
  )
}

const CovidReportHealth = (props) => {
  const [dategenerated, setDategenerated] = useState('')
  const [numcomplete, setNumcomplete] = useState(null)

  //Health
  const [authorizations, setAuthorizations] = useState(0)
  const [workassignmentschart, setWorkAssignmentsChart] = useState(null)
  const [workassignmentsdetailchart, setWorkAssignmentsDetailChart] = useState(null)
  const [healthquestionschart, setHealthQuestionsChart] = useState(null)
  const [healthquestionsNHchart, setHealthQuestionsNHChart] = useState(null)
  //Health

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
    console.log('useEffect CovidReportHealth')
    var url
    if (filters == null) { url = 'data/covidsummary.json' }
    else { url = 'data/coviddetail.json' }

    axios
    .get(url, {})
    .then((response) => {
      if (filters == null) {
        setNumcomplete(response.data.numcomplete)

        //Health
        setAuthorizations(response.data.authorizations)
        setWorkAssignmentsChart(getWorkAssignmentsChart(response.data.authorizations))
        setWorkAssignmentsDetailChart(getWorkAssignmentsDetailChart(response.data.workassignments))
        setHealthQuestionsChart(getHealthQuestionsChart(response.data.healthquestions))
        setHealthQuestionsNHChart(getHealthQuestionsNHChart(response.data.healthquestionsNH))
        //Health

      }
      else {
        var numCompleteArray = getFilters(response.data.data, filters)
        setNumcomplete(numCompleteArray.length)

        //Health
        setAuthorizations(calcmodule.AuthorizationsCalculations(numCompleteArray))
        setWorkAssignmentsChart(getWorkAssignmentsChart(calcmodule.AuthorizationsCalculations(numCompleteArray)))
        setWorkAssignmentsDetailChart(getWorkAssignmentsDetailChart(calcmodule.WorkAssignmentsCalculations(numCompleteArray)))
        setHealthQuestionsChart(getHealthQuestionsChart(calcmodule.HealthQuestionsCalculations(numCompleteArray)))
        setHealthQuestionsNHChart(getHealthQuestionsNHChart(calcmodule.HealthQuestionsNHCalculations(numCompleteArray)))
        //Health

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

      {/* Health */}
      <Vertical style={{flex:'1',background:'lightgray'}}>
        <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(59,110,143)',color:'white',textAlign:'center',fontSize:'24px'}}>
          <div>COVID-19 Health Assessment Dashboard</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} filtered policyholder visits scheduled</div>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
          {authorizations != null &&
          <>
            <div style={{flex:'1'}}><Summary name='Total Assignments' value={authorizations.totalassignments}/></div>
            <div style={{flex:'1'}}><Summary name='Total Authorized' value={authorizations.totalauthorized}/></div>
            <div style={{flex:'1'}}><Summary name='Total Not Authorized' value={authorizations.totalnotauthorized}/></div>
          </>
          }
        </div>
        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {workassignmentschart != null &&
          <ChartWidget type='doughnut2d' dataSource={workassignmentschart} flex={1} />
          }
          {workassignmentsdetailchart != null &&
          <ChartWidget type='stackedcolumn2d' dataSource={workassignmentsdetailchart} flex={1}/>
          }
        </div>
        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {healthquestionschart != null &&
          <ChartWidget type='stackedbar2d' dataSource={healthquestionschart} flex={1}/>
          }
          {healthquestionsNHchart != null &&
          <ChartWidget type='stackedbar2d' dataSource={healthquestionsNHchart} flex={1}/>
          }
        </div>
      </Vertical>
      {/* Health */}







      <Splitter/>
      <Vertical style={{display:props.filterdisplay,width:'250px'}}>
        <CovidReportProperties/>
      </Vertical>
    </Horizontal>
  )
}

export default CovidReportHealth
