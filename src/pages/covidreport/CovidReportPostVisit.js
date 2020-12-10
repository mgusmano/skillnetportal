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

//PostVisit
import { getComplianceChart } from './charts/ComplianceChart'
import { getAddressNonComplianceChart } from './charts/AddressNonComplianceChart'
//PostVisit

const Summary = (props) => {
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'14px',textAlign:'center'}}>{props.name}</div>
      <div style={{marginTop:'10px',fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
      <div style={{marginTop:'5px',fontSize:'14px'}}>{props.total}</div>
    </div>
  )
}

const CovidReportPostVisit = (props) => {
  const [dategenerated, setDategenerated] = useState('')
  const [numcomplete, setNumcomplete] = useState(null)

  //PostVisit
  const [workwithcounts, setWorkWithCounts] = useState(null)
  //const [workwithcountsdenominator, setWorkWithCountsDenominator] = useState(null)
  const [compliancechart, setComplianceChart] = useState(null)
  const [addressnoncompliancechart, setAddressNonComplianceChart] = useState(null)
  const [corrections, setCorrections] = useState(null)
  //const [correctionsdenominator, setCorrectionsDenominator] = useState(null)
  //PostVisit

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
    var calcmodule = window['calcmodule']
    console.log('useEffect CovidReportPostVisit')
    var url
    if (filters == null) { url = 'data/covidsummary.json' }
    else { url = 'data/coviddetail.json' }

    axios
    .get(url, {})
    .then((response) => {
      if (filters === null) {
        setNumcomplete(response.data.numcomplete)

        //PostVisit
        setWorkWithCounts(response.data.workwithcounts)
        //setWorkWithCountsDenominator(response.data.workwithcounts.denominator)
        setComplianceChart(getComplianceChart(response.data.compliance))
        setAddressNonComplianceChart(getAddressNonComplianceChart(response.data.addressnoncompliance))
        setCorrections(response.data.corrections)
        //setCorrectionsDenominator(response.data.corrections.denominator)
        //PostVisit

      }
      else {
        var numCompleteArray = getFilters(response.data.data, filters)
        setNumcomplete(numCompleteArray.length)

        //PostVisit
        setWorkWithCounts(calcmodule.WorkWithCountsCalculations(numCompleteArray))
        setComplianceChart(getComplianceChart(calcmodule.ComplianceCalculations(numCompleteArray)))
        setAddressNonComplianceChart(getAddressNonComplianceChart(calcmodule.AddressNonComplianceCalculations(numCompleteArray)))
        setCorrections(calcmodule.CorrectionsCalculations(numCompleteArray))
        //PostVisit


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

//  <div style={{marginTop:'20px',marginLeft:'20px',fontSize:'24px'}}>On-Site Social Distance (based on: {workwithcountsdenominator})</div>
//        <div style={{marginLeft:'20px',fontSize:'24px'}}>Corrections Taken by Field Person (based on: {correctionsdenominator})</div>


  return (
    <Horizontal>

      {/* PostVisit */}
      <Vertical style={{flex:'1',background:'lightgray'}}>
        <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(59,110,143)',color:'white',textAlign:'center',fontSize:'24px'}}>
          <div>COVID-19 Post-Visit Controls Dashboard</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} filtered policyholder visits scheduled</div>
        </div>
        <div style={{marginTop:'20px',marginLeft:'20px',fontSize:'24px'}}>On-Site Social Distance (based on: Completed Policyholder Post-Visit Surveys)</div>
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
          {addressnoncompliancechart != null &&
          <ChartWidget type='doughnut2d' dataSource={addressnoncompliancechart} flex={1}/>
          }
        </div>
        <div style={{marginLeft:'20px',fontSize:'24px'}}>Corrections Taken by Field Person (based on: Completed Policyholder Post-Visit Surveys)</div>
        <div style={{display:'flex',flexDirection:'row'}}></div>
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
      {/* PostVisit */}

      <Splitter/>
      <Vertical style={{display:props.filterdisplay,width:'250px'}}>
        <CovidReportProperties/>
      </Vertical>
    </Horizontal>
  )
}

export default CovidReportPostVisit
