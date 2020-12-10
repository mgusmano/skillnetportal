import React, { useState, useEffect, useCallback } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import axios from "axios";
import ChartWidget from './ChartWidget'
import CovidReportProperties from './CovidReportProperties'
import { getFilters } from './CovidCommon'
import Button from '@material-ui/core/Button'

//PreVisit
// no charts
//PreVisit

//Health
import { getWorkAssignmentsChart } from './charts/WorkAssignmentsChart'
import { getWorkAssignmentsDetailChart } from './charts/WorkAssignmentsDetailChart'
import { getHealthQuestionsChart } from './charts/HealthQuestionsChart'
import { getHealthQuestionsNHChart } from './charts/HealthQuestionsNHChart'
//Health

//PostVisit
import { getComplianceChart } from './charts/ComplianceChart'
import { getAddressNonComplianceChart } from './charts/AddressNonComplianceChart'
//PostVisit

//Comply
import { getDayOfHealthAssessmentChart } from './charts/DayOfHealthAssessmentChart'
import { getFiveDayPostVisitChart } from './charts/FiveDayPostVisitChart'
//Comply

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

const CovidReport = (props) => {
  const [currentdashboard, setCurrentDashboard] = useState(null) //PreVisit Health PostVisit Comply


  const [numcomplete, setNumcomplete] = useState(null)

  //PreVisit
  const [comfortlevel, setComfortLevel] = useState(null)
  const [measures, setMeasures] = useState(null)
  //PreVisit

  //Health
  const [authorizations, setAuthorizations] = useState(0)
  const [workassignmentschart, setWorkAssignmentsChart] = useState(null)
  const [workassignmentsdetailchart, setWorkAssignmentsDetailChart] = useState(null)
  const [healthquestionschart, setHealthQuestionsChart] = useState(null)
  const [healthquestionsNHchart, setHealthQuestionsNHChart] = useState(null)
  //Health

  //PostVisit
  const [workwithcounts, setWorkWithCounts] = useState(null)
  const [compliancechart, setComplianceChart] = useState(null)
  const [addressnoncompliancechart, setAddressNonComplianceChart] = useState(null)
  const [corrections, setCorrections] = useState(null)
  //PostVisit

  //Comply
  const [fivedaypostvisitchart, setFiveDayPostVisitChart] = useState(null)
  const [dayofhealthassessmentchart, setDayOfHealthAssessmentChart] = useState(null)
  //Comply

  const [dategenerated, setDategenerated] = useState('')

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
    if (filters == null) { url = 'data/coviddetail.json' }
    else { url = 'data/coviddetail.json' }

    axios
    .get(url, {})
    .then((response) => {
      if (filters === null) {
        setCurrentDashboard('PreVisit')
        var allArray = response.data.data
        var numCompleteArray = allArray.filter(response => response['status'] === 'Complete')

        //var numCompleteArray = getFilters(response.data.data, filters)
        setNumcomplete(response.data.numcomplete)

        //PreVisit
        setComfortLevel(response.data.comfortlevel)
        setMeasures(response.data.measures)
        //PreVisit

        //Health
        setAuthorizations(response.data.authorizations)
        setWorkAssignmentsChart(getWorkAssignmentsChart(response.data.authorizations))
        setWorkAssignmentsDetailChart(getWorkAssignmentsDetailChart(response.data.workassignments))
        setHealthQuestionsChart(getHealthQuestionsChart(response.data.healthquestions))
        setHealthQuestionsNHChart(getHealthQuestionsNHChart(response.data.healthquestionsNH))
        //Health

        //PostVisit
        setWorkWithCounts(response.data.workwithcounts)
        setComplianceChart(getComplianceChart(response.data.compliance))
        setAddressNonComplianceChart(getAddressNonComplianceChart(response.data.addressnoncompliance))
        setCorrections(response.data.corrections)
        //PostVisit

        //Comply
        setDayOfHealthAssessmentChart(getDayOfHealthAssessmentChart(calcmodule.DayOfHealthAssessmentCalculations(numCompleteArray)))
        setFiveDayPostVisitChart(getFiveDayPostVisitChart(calcmodule.FiveDayPostVisitCalculations(numCompleteArray)))
        //Comply

      }
      else {
        var numCompleteArray = getFilters(response.data.data, filters)
        setNumcomplete(numCompleteArray.length)

        //PreVisit
        setComfortLevel(calcmodule.ComfortLevelCalculations(numCompleteArray))
        setMeasures(calcmodule.MeasuresCalculations(numCompleteArray))
        //PreVisit

        //Health
        setAuthorizations(calcmodule.AuthorizationsCalculations(numCompleteArray))
        setWorkAssignmentsChart(getWorkAssignmentsChart(calcmodule.AuthorizationsCalculations(numCompleteArray)))
        setWorkAssignmentsDetailChart(getWorkAssignmentsDetailChart(calcmodule.WorkAssignmentsCalculations(numCompleteArray)))
        setHealthQuestionsChart(getHealthQuestionsChart(calcmodule.HealthQuestionsCalculations(numCompleteArray)))
        setHealthQuestionsNHChart(getHealthQuestionsNHChart(calcmodule.HealthQuestionsNHCalculations(numCompleteArray)))
        //Health

        //PostVisit
        setWorkWithCounts(calcmodule.WorkWithCountsCalculations(numCompleteArray))
        setComplianceChart(getComplianceChart(calcmodule.ComplianceCalculations(numCompleteArray)))
        setAddressNonComplianceChart(getAddressNonComplianceChart(calcmodule.AddressNonComplianceCalculations(numCompleteArray)))
        setCorrections(calcmodule.CorrectionsCalculations(numCompleteArray))
        //PostVisit

        //Comply
        setDayOfHealthAssessmentChart(getDayOfHealthAssessmentChart(calcmodule.DayOfHealthAssessmentCalculations(numCompleteArray)))
        setFiveDayPostVisitChart(getFiveDayPostVisitChart(calcmodule.FiveDayPostVisitCalculations(numCompleteArray)))
        //Comply

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

  const onClick = (e) => {
    setCurrentDashboard(e.target.innerHTML)
  }

  return (

    <Horizontal>
      <div style={{display:'flex',flex:'1',flexDirection:'column',background:'lightgray'}}>

        <div style={{height:'40px',background:'white',padding:'5px 0 0 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Button onClick={onClick} style={{color:'white',background:currentdashboard == 'PreVisit'  ? 'green' : 'rgb(59,110,143)',marginRight:'5px'}}>PreVisit</Button>
          <Button onClick={onClick} style={{color:'white',background:currentdashboard == 'Health'    ? 'green' : 'rgb(59,110,143)',marginRight:'5px'}}>Health</Button>
          <Button onClick={onClick} style={{color:'white',background:currentdashboard == 'PostVisit' ? 'green' : 'rgb(59,110,143)',marginRight:'5px'}}>PostVisit</Button>
          <Button onClick={onClick} style={{color:'white',background:currentdashboard == 'Comply'    ? 'green' : 'rgb(59,110,143)',marginRight:'5px'}}>Comply</Button>
        </div>

        {currentdashboard === null &&
        <div style={{padding:'30px',fontSize:'44px'}}>Loading...</div>
        }


        {/* PreVisit */}
        {currentdashboard === 'PreVisit' &&
        <Vertical style={{flex:'1',background:'lightgray'}}>
          <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(59,110,143)',color:'white',textAlign:'center',fontSize:'24px'}}>
            <div>COVID-19 Pre-Visit Site Assessment</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} filtered policyholder visits scheduled</div>
          </div>

          <div style={{display:'flex',flexDirection:'row'}}>
            {numcomplete != null &&
            <>
              <div style={{flex:'1'}}><SummaryTop name='Policyholder Assignments' total={numcomplete}/></div>
            </>
            }
            {comfortlevel != null &&
            <>
              <div style={{flex:'1'}}><SummaryTop name='Staff Comfortable to Complete Assignment' total={comfortlevel.totalcomfortable}/></div>
              <div style={{flex:'1'}}><SummaryTop name='Staff Not Comfortable to Complete Assignment' total={comfortlevel.totalnotcomfortable}/></div>
            </>
            }
          </div>

          <div style={{marginLeft:'20px',fontSize:'24px'}}>Policyholder Health and Safety Measures (based on: Policyholder Assignments)</div>

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
        }
        {/* PreVisit */}

        {/* Health */}
        {currentdashboard === 'Health' &&
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
        }
        {/* Health */}

        {/* PostVisit */}
        {currentdashboard === 'PostVisit' &&
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
        }
        {/* PostVisit */}

        {/* Comply */}
        {currentdashboard === 'Comply' &&
        <Vertical style={{flex:'1',background:'lightgray'}}>
          <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(59,110,143)',color:'white',textAlign:'center',fontSize:'24px'}}>
            <div>COVID-19 Consultant Compliance Dashboard</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}<br/>{numcomplete} filtered policyholder visits scheduled</div>
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
        }
        {/* Comply */}

      </div>

      <Splitter/>
      <Vertical style={{display:props.filterdisplay,width:'250px'}}>
        <CovidReportProperties/>
      </Vertical>
    </Horizontal>
  )
}

export default CovidReport
