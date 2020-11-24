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

import { getDayOfHealthAssessmentChart } from './charts/DayOfHealthAssessmentChart'
import { getFiveDayPostVisitChart } from './charts/FiveDayPostVisitChart'

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

  const DayOfHealthAssessmentCalculation = (numCompleteArray) => {
    var visitArray = numCompleteArray.filter(response => new Date(response['dateofvisit']) < new Date())
    //console.log(numCompleteArray.length)
    //console.log(new Date())
    //console.log('visit',visitArray.length)
    var assessmentCompleteArray = visitArray.filter(response => response['currentlysick'] !== null)
    var completed = assessmentCompleteArray.length
    //console.log(completed)
    var assessmentNotCompleteArray = visitArray.filter(response => response['currentlysick'] === null)
    var notcompleted = assessmentNotCompleteArray.length
    //console.log(notcompleted)
    return {completed:completed,notcompleted:notcompleted}
  }

  const FiveDayPostVisitCalculation = (numCompleteArray) => {
    var authArray = numCompleteArray.filter(response => response['authcode'] !== null)
    var denominator = authArray.length
    //console.log('denominator',denominator)
    var notcompletedArray = authArray.filter(response => response['aloneorpeople'] === null)
    var totalNotCompleted = notcompletedArray.length
    //console.log('not completed',totalNotCompleted)
    var completedArray = authArray.filter(response => response['aloneorpeople'] !== null)
    var totalIn5 = 0
    var totalAfter5 = 0
    completedArray.forEach(o => {
      var submitted = new Date(o['datesubmitted'])
      var visit = new Date(o['dateofvisit'])
      var difference = submitted.getTime() - visit.getTime();
      var days = Math.ceil(difference / (1000 * 3600 * 24));
      if (days > 5) {
        totalAfter5++
      }
      else {
        totalIn5++
      }
    })
    //console.log('in 5',totalIn5)
    //console.log('after 5',totalAfter5)
    //var total = totalNotCompleted + totalIn5 + totalAfter5
    //console.log('total',total)
    var percentNotCompleted = ((totalNotCompleted/denominator)*100).toFixed(2)
    var percentIn5 = ((totalIn5/denominator)*100).toFixed(2)
    var percentAfter5 = ((totalAfter5/denominator)*100).toFixed(2)
    var o = {
      percentNotCompleted: percentNotCompleted,
      percentIn5: percentIn5,
      percentAfter5: percentAfter5
    }
    return o
  }

  useEffect(() => {
    //var calcmodule = window['calcmodule']
    console.log('useEffect CovidReport')
    var url
    if (filters == null) { url = 'data/coviddetail.json' }
    else { url = 'data/coviddetail.json' }

    axios
    .get(url, {})
    .then((response) => {
      if (filters === null) {
        var allArray = response.data.data
        var numCompleteArray = allArray.filter(response => response['status'] === 'Complete')
        setNumcomplete(response.data.numcomplete)
        var o2 = DayOfHealthAssessmentCalculation(numCompleteArray)
        setDayOfHealthAssessmentChart(getDayOfHealthAssessmentChart(o2))
        var o = FiveDayPostVisitCalculation(numCompleteArray)
        setFiveDayPostVisitChart(getFiveDayPostVisitChart(o))
      }
      else {
        var numCompleteArray = getFilters(response.data.data, filters)
        setNumcomplete(numCompleteArray.length)
        var o2 = DayOfHealthAssessmentCalculation(numCompleteArray)
        setDayOfHealthAssessmentChart(getDayOfHealthAssessmentChart(o2))
        var o = FiveDayPostVisitCalculation(numCompleteArray)
        setFiveDayPostVisitChart(getFiveDayPostVisitChart(o))
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
          <div>Consultant Compliance Dashboard</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} filtered policyholder visits scheduled</div>
        </div>
        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {dayofhealthassessmentchart != null &&
          <ChartWidget type='doughnut2d' dataSource={dayofhealthassessmentchart} flex={1}/>
          }
          {fivedaypostvisitchart != null &&
          <ChartWidget type='doughnut2d' dataSource={fivedaypostvisitchart} flex={1}/>
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
