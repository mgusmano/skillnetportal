import React, { useState, useEffect, useCallback } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import axios from "axios";
import ChartWidget from './ChartWidget'
import CovidReportProperties from './CovidReportProperties'
import { getFilters } from './CovidCommon'
import calcmodule from './calculations'

import { getComplianceChart } from './charts/ComplianceChart'
import { getAssignmentsChart } from './charts/AssignmentsChart'

const Summary = (props) => {
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'14px'}}>{props.name}</div>
      <div style={{marginTop:'10px',fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
      <div style={{marginTop:'5px',fontSize:'14px'}}>{props.total}</div>
    </div>
  )
}

const CovidReportPostVisit = (props) => {
  const [dategenerated, setDategenerated] = useState('')
  const [numcomplete, setNumcomplete] = useState(null)

  const [workwithcounts, setWorkWithCounts] = useState(null)
  const [compliancechart, setComplianceChart] = useState(null)
  const [assignmentschart, setAssignmentsChart] = useState(null)
  const [corrections, setCorrections] = useState(null)

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

  useEffect(() => {
    console.log('useEffect CovidReportPostVisit')
    var url
    if (filters == null) { url = 'data/covidsummary.json' }
    else { url = 'data/coviddetail.json' }

    axios
    .get(url, {})
    .then((response) => {
      if (filters === null || (filters.divisions === '' && filters.countries === '')) {
        setWorkWithCounts(response.data.workwithcounts)
        setComplianceChart(getComplianceChart(response.data.compliance))
        setAssignmentsChart(getAssignmentsChart(response.data.dateofvisits))
        setCorrections(response.data.corrections)
      }
      else {
        var numCompleteArray = getFilters(response.data.data, filters)

        setWorkWithCounts(calcmodule.WorkWithCountsCalculations(numCompleteArray))
        setComplianceChart(calcmodule.ComplianceCalculations(numCompleteArray))
        setAssignmentsChart(calcmodule.DateOfVisitsCalculations(numCompleteArray))
        setCorrections(calcmodule.CorrectionsCalculations(numCompleteArray))
      }

      setDategenerated(response.data.dategenerated.replace(/T/, ' ').replace(/\..+/, '') + ' (UTC)')
      setNumcomplete(response.data.numcomplete)

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
          <div>Post-Visit COVID-19 Controls Dashboard</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} surveys completed</div>
        </div>
        <div style={{marginTop:'20px',marginLeft:'20px',fontSize:'24px'}}>On-Site Social Distance</div>
        <div style={{display:'flex',flexDirection:'row'}}>
          {workwithcounts != null &&
          <>
            <div style={{flex:'1'}}><Summary name='Worked Alone' value={workwithcounts.percentworkwith0 + '%'} total={workwithcounts.totalworkwith0}/></div>
            <div style={{flex:'1'}}><Summary name='Worked 1-3' value={workwithcounts.percentworkwith1to3 + '%'} total={workwithcounts.totalworkwith1to3}/></div>
            <div style={{flex:'1'}}><Summary name='Worked 4-10' value={workwithcounts.percentworkwith4to10 + '%'} total={workwithcounts.totalworkwith4to10}/></div>
            <div style={{flex:'1'}}><Summary name='Worked 11-25' value={workwithcounts.percentworkwith11to25 + '%'} total={workwithcounts.totalworkwith11to25}/></div>
            <div style={{flex:'1'}}><Summary name='Worked > 25' value={workwithcounts.percentworkwithmorethan25 + '%'} total={workwithcounts.totalworkwithmorethan25}/></div>
          </>
          }
        </div>
        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {compliancechart != null &&
          <ChartWidget type='doughnut2d' dataSource={compliancechart} flex={1}/>
          }
          {assignmentschart != null &&
          <ChartWidget type='doughnut2d' dataSource={assignmentschart} flex={1}/>
          }
        </div>
        <div style={{marginLeft:'20px',fontSize:'24px'}}>Corrections Taken by Field Person</div>
        <div style={{display:'flex',flexDirection:'row'}}>
        {corrections != null &&
          <>
            <div style={{flex:'1'}}><Summary name='More Physical Distance' value={corrections.percentmorephysicaldistance+'%'} total={corrections.totalmorephysicaldistance}/></div>
            <div style={{flex:'1'}}><Summary name='Added PPE' value={corrections.percentaddedppe+'%'} total={corrections.totaladdedppe}/></div>
            <div style={{flex:'1'}}><Summary name='Did NOT go into area' value={corrections.percentdidnotgointoarea+'%'} total={corrections.totaldidnotgointoarea}/></div>
            <div style={{flex:'1'}}><Summary name='Rescheduled visit' value={corrections.percentrescheduledvisit+'%'} total={corrections.totalrescheduledvisit}/></div>
            <div style={{flex:'1'}}><Summary name='Other' value={corrections.percentothercorrections+'%'} total={corrections.totalothercorrections}/></div>
          </>
        }
        </div>
      </Vertical>
      <Splitter/>
      <Vertical style={{display:props.filterdisplay,width:'400px'}}>
        <CovidReportProperties/>
      </Vertical>
    </Horizontal>
  )
}

export default CovidReportPostVisit
