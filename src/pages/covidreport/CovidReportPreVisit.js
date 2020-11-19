import React, { useState, useEffect, useCallback } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import axios from "axios";
import ChartWidget from './ChartWidget'
import CovidReportProperties from './CovidReportProperties'

const Summary = (props) => {
  //const { name, value } = props;
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'14px'}}>{props.name}</div>
      <div style={{marginTop:'10px',fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
      <div style={{marginTop:'5px',fontSize:'14px'}}>{props.total}</div>
    </div>
  )
}

const CovidReportPreVisit = (props) => {
  var Partner = {}
  var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
  const [dategenerated, setDategenerated] = useState('')

  //const [totalauthorized, setTotalauthorized] = useState(0)
  const [measures, setMeasures] = useState(null)


  // const [socialdistancing, setSocialdistancing] = useState(0)
  // const [facecoverings, setFacecoverings] = useState(0)
  // const [tracingplan, setTracingplan] = useState(0)
  // const [healthsafetyplan, setHealthsafetyplan] = useState(0)
  // const [employeehealth, setEmployeehealth] = useState(0)
  // const [visitorhealth, setVisitorhealth] = useState(0)
  // const [other, setOther] = useState(0)

  const [totalcomfortable, setTotalcomfortable] = useState(0)
  const [totalnotcomfortable, setTotalnotcomfortable] = useState(0)

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

  const doVisitschart = (scheduled,notscheduled) => {

    setVisitschart({
      "chart": {
        "caption": "Policyholder Visits Scheduled",
        "paletteColors": "#94070B, #00415C",
        "theme": "fusion"
      },
      "data": [
        {"label": "Scheduled","value": scheduled},
        {"label": "Not Scheduled","value": notscheduled}
      ]
    })

  }

  const doComfortablechart = (totalcomfortable,totalnotcomfortable) => {
    setComfortablechart({
      "chart": {
        "caption": "Staff Comfort Level",
        "paletteColors": "#94070B, #00415C",
        "showpercentvalues": "1",
        //"defaultcenterlabel": response.data.totalauthorized,
        "aligncaptionwithcanvas": "0",
        "captionpadding": "0",
        "decimals": "1",
        "plottooltext":
          "<b>$percentValue</b> of users are <b>$label</b>",
        //"centerlabel": "Responses: <br/>" + response.data.totalauthorized,
        "theme": "fusion"
      },
      "data": [
        {"label": "Comfortable","value": totalcomfortable},
        {"label": "Not Comfortable","value": totalnotcomfortable}
      ]
    })
  }


    useEffect(() => {
      console.log('useEffect CovidReportPreVisit')

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

          setMeasures({
            percentsocialdistancing: response.data.percentsocialdistancing,
            percentfacecoverings: response.data.percentfacecoverings,
            percenttracingplan: response.data.percenttracingplan,
            percenthealthsafetyplan: response.data.percenthealthsafetyplan,
            percentemployeehealth: response.data.percentemployeehealth,
            percentvisitorhealth: response.data.percentvisitorhealth,
            percentothermeasures: response.data.percentotherneasures,
            totalsocialdistancing: response.data.totalsocialdistancing,
            totalfacecoverings: response.data.totalfacecoverings,
            totaltracingplan: response.data.totaltracingplan,
            totalhealthsafetyplan: response.data.totalhealthsafetyplan,
            totalemployeehealth: response.data.totalemployeehealth,
            totalvisitorhealth: response.data.totalvisitorhealth,
            totalothermeasures: response.data.totalothermeasures,
          })

          setTotalcomfortable(response.data.totalcomfortable)
          setTotalnotcomfortable(response.data.totalnotcomfortable)

          // var allRows = response.data.totalauthorized
          // var scheduled = response.data.totalauthorized.filter(response => response['dateofvisit'] != null).length
          // var notscheduled = allRows-scheduled

          var allRows = response.data.totalcount
          var scheduled = response.data.totalauthorized
          var notscheduled = allRows-scheduled
          doVisitschart(scheduled/allRows,notscheduled/allRows)

          doComfortablechart(response.data.totalcomfortable,response.data.totalnotcomfortable)
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
          //responsesArray = responsesFiltered

          var totalauthorizedArray = responsesFiltered.filter(response => response['authorized'] === "Yes")
          var totalauthorized = responsesFiltered.length

          var percentsocialdistancing= (((responsesFiltered.filter(response => response['socialdistancing'] == true).length)/totalauthorized)*100).toFixed(0)
          var percentfacecoverings= (((responsesFiltered.filter(response => response['facecoverings'] == true).length)/totalauthorized)*100).toFixed(0)
          var percenttracingplan= (((responsesFiltered.filter(response => response['tracingplan'] == true).length)/totalauthorized)*100).toFixed(0)
          var percenthealthsafetyplan= (((responsesFiltered.filter(response => response['healthsafetyplan'] == true).length)/totalauthorized)*100).toFixed(0)
          var percentemployeehealth= (((responsesFiltered.filter(response => response['employeehealth'] == true).length)/totalauthorized)*100).toFixed(0)
          var percentvisitorhealth= (((responsesFiltered.filter(response => response['visitorhealth'] == true).length)/totalauthorized)*100).toFixed(0)
          var percentothermeasures= (((responsesFiltered.filter(response => response['other'] == true).length)/totalauthorized)*100).toFixed(0)

          var totalsocialdistancing = 0
          var totalfacecoverings = 0
          var totaltracingplan = 0
          var totalhealthsafetyplan = 0
          var totalemployeehealth = 0
          var totalvisitorhealth = 0
          var totalothermeasures = 0

          setMeasures({
            percentsocialdistancing,
            percentfacecoverings,
            percenttracingplan,
            percenthealthsafetyplan,
            percentemployeehealth,
            percentvisitorhealth,
            percentothermeasures,
            totalsocialdistancing,
            totalfacecoverings,
            totaltracingplan,
            totalhealthsafetyplan,
            totalemployeehealth,
            totalvisitorhealth,
            totalothermeasures,

          })

          setTotalcomfortable(totalcomfortable)
          setTotalnotcomfortable(totalnotcomfortable)

          var allRows = responsesFiltered.length
          var scheduled = responsesFiltered.filter(response => response['dateofvisit'] != null).length
          var notscheduled = allRows-scheduled
          doVisitschart(scheduled/allRows,notscheduled/allRows)

          var totalcomfortable= responsesFiltered.filter(response => response['comfortable'] === "Yes").length
          var totalnotcomfortable= responsesFiltered.filter(response => response['comfortable'] === "No").length
          doComfortablechart(totalcomfortable,totalnotcomfortable)

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
            <div>COVID-19 Pre-Visit Site Assessment</div><div style={{fontSize:'14px',marginRight:'20px'}}>data as of: {dategenerated}</div>
          </div>

          <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
            {visitschart != null &&
            <ChartWidget data={visitschart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
            {comfortablechart != null &&
            <ChartWidget data = {comfortablechart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
          </div>
          <div style={{marginLeft:'20px',fontSize:'24px'}}>Customer Safety Measures</div>
          <div style={{display:'flex',flexDirection:'row'}}>
          {measures != null &&
          <>
            <div style={{flex:'1'}}><Summary name='Social Distancing' value={measures.percentsocialdistancing+'%'} total={measures.totalsocialdistancing}/></div>
            <div style={{flex:'1'}}><Summary name='Face Coverings' value={measures.percentfacecoverings+'%'} total={measures.totalfacecoverings}/></div>
            <div style={{flex:'1'}}><Summary name='Tracing Plan' value={measures.percenttracingplan+'%'} total={measures.totaltracingplan}/></div>
            <div style={{flex:'1'}}><Summary name='Health & Safety Plan' value={measures.percenthealthsafetyplan+'%'} total={measures.totahealthsafetyplan}/></div>
            <div style={{flex:'1'}}><Summary name='Employee Health' value={measures.percentemployeehealth+'%'} total={measures.totalemployeehealth}/></div>
            <div style={{flex:'1'}}><Summary name='Visitor Health' value={measures.percentvisitorhealth+'%'} total={measures.totalvisitorhealth}/></div>
            <div style={{flex:'1'}}><Summary name='Vendor Currently Prohibited' value={measures.percentvisitorhealth+'%'} total={measures.totalvisitorhealth}/></div>
            <div style={{flex:'1'}}><Summary name='Other' value={measures.percentothermeasures+'%'} total={measures.totalothermeasures}/></div>
          </>
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

export default CovidReportPreVisit
