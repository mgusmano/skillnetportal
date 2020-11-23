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

import { getFiveDayPostVisitChart } from './charts/FiveDayPostVisitChart'
import { getDayOfHealthAssessmentChart } from './charts/DayOfHealthAssessmentChart'


const CovidReportComply = (props) => {
  const [dategenerated, setDategenerated] = useState('')
  const [numcomplete, setNumcomplete] = useState(null)

  const [fivedaypostvisitchart, setFiveDayPostVisitChart] = useState(null)
  const [dayofhealthassessmentchart, setDayOfHealthAssessmentChart] = useState(null)

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
    console.log('useEffect CovidReport')
    var url
    if (filters == null) { url = 'data/covidsummary.json' }
    else { url = 'data/coviddetail.json' }

    axios
    .get(url, {})
    .then((response) => {
      if (filters === null) {
        setNumcomplete(response.data.numcomplete)
        setFiveDayPostVisitChart(getFiveDayPostVisitChart(20,20))
        setDayOfHealthAssessmentChart(getDayOfHealthAssessmentChart(20,20))
      }
      else {
        var numCompleteArray = getFilters(response.data.data, filters)
        setNumcomplete(numCompleteArray.length)
        setFiveDayPostVisitChart(getFiveDayPostVisitChart(10,10))
        setDayOfHealthAssessmentChart(getDayOfHealthAssessmentChart(10,10))
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
          <div>Consultant Compliance Dashboard</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} surveys completed</div>
        </div>
        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {fivedaypostvisitchart != null &&
          <ChartWidget type='doughnut2d' dataSource={fivedaypostvisitchart} flex={1}/>
          }
          {dayofhealthassessmentchart != null &&
          <ChartWidget type='doughnut2d' dataSource={dayofhealthassessmentchart} flex={1}/>
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

export default CovidReportComply
