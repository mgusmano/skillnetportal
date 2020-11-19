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
      <div style={{marginTop:'5px',fontSize:'14px'}}>total{props.total}</div>
    </div>
  )
}

const CovidReportPostVisit = (props) => {
    var Partner = {}
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    //const [percentcorrections, setPercentcorrections] = useState(null)
    const [corrections, setCorrections] = useState(null)


    const [workedwith0, setWorkedwith0] = useState(0)
    const [workedwith1to3, setWorkedwith1to3] = useState(0)
    const [workedwith4to10, setWorkedwith4to10] = useState(0)
    const [workedwith11to25, setWorkedwith11to25] = useState(0)
    const [workedwithmorethan25, setWorkedwithmorethan25] = useState(0)

    const [compliancechart, setCompliancechart] = useState(null)
    const [assignmentschart, setAssignmentschart] = useState(null)

    var totalcompliant = 0
    var totalnoncompliant = 0


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
      if (filters == null) {
        url = 'data/coviddetail.json'
      }
      else {
        url = 'data/coviddetail.json'
      }

      axios
      .get(url, {})
      .then((response) => {
        var responsesArray = [];
        if (filters == null || (filters.divisions == '' && filters.countries == '')) {
          responsesArray = response.data.data;

          setCorrections({
            percentmorephysicaldistance: response.data.percentmorephysicaldistance,
            percentaskforchange: response.data.percentaskforchange,
            percentaddedppe: response.data.percentaddedppe,
            percentdidnotgointoarea: response.data.percentdidnotgointoarea,
            percentrescheduledvisit: response.data.percentrescheduledvisit,
            percentvothercorrections: response.data.percentothercorrections,
          })

          setWorkedwith0(((response.data.totalworkedwith0 / response.data.totalauthorized)*100).toFixed(2))
          setWorkedwith1to3(((response.data.totalworkedwith1to3 / response.data.totalauthorized)*100).toFixed(2))
          setWorkedwith4to10(((response.data.totalworkedwith4to10 / response.data.totalauthorized)*100).toFixed(2))
          setWorkedwith11to25(((response.data.totalworkedwith11to25 / response.data.totalauthorized)*100).toFixed(2))
          setWorkedwithmorethan25(((response.data.totalworkedwithmorethan25 / response.data.totalauthorized)*100).toFixed(2))
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
          responsesArray = responsesFiltered


          // setPercentcorrections({
          //   percentmorephysicaldistance: response.data.percentmorephysicaldistance,
          //   percentaskforchange: response.data.percentaskforchange,
          //   percentaddedppe: response.data.percentaddedppe,
          //   percentdidnotgointoarea: response.data.percentdidnotgointoarea,
          //   percentrescheduledvisit: response.data.percentrescheduledvisit,
          //   percentvothercorrections: response.data.percentothercorrections,
          // })



          var totalauthorizedArray = responsesFiltered.filter(response => response['authorized'] === "Yes")
          var totalauthorized = totalauthorizedArray.length

          var workedwith0 = 0
          var workedwith1to3 = 0
          var workedwith4to10 = 0
          var workedwith11to25 = 0
          var workedwithmorethan25 = 0
          totalauthorizedArray.forEach(o => {
            var x = o['numpeople']
            switch(true){
              case (x < 1):
                workedwith0++
                //data[key].answer = parseInt(data[key].answer)
                break
              case (x < 4):
                workedwith1to3++
                //data[key].answer = parseInt(data[key].answer)
                break
              case (x < 11):
                workedwith4to10++
                //data[key].answer = parseInt(data[key].answer)
                break
              case (x < 26):
                workedwith11to25++
                //data[key].answer = parseInt(data[key].answer)
                break
              default:
                workedwithmorethan25++
                break
            }

          })


          setWorkedwith0(((workedwith0 / totalauthorized)*100).toFixed(2))
          setWorkedwith1to3(((workedwith1to3 / totalauthorized)*100).toFixed(2))
          setWorkedwith4to10(((workedwith4to10 / totalauthorized)*100).toFixed(2))
          setWorkedwith11to25(((workedwith11to25 / totalauthorized)*100).toFixed(2))
          setWorkedwithmorethan25(((workedwithmorethan25 / totalauthorized)*100).toFixed(2))




        }


        //the value to look at here is safetymet
        ///this is consultant compliance
        responsesArray.forEach(survey => {
          var authcode = survey.authcode
          var dateofvisit = survey.dateofvisit
          var aloneorpeople = survey.aloneorpeople
          var today = new Date()
          var todayString =  + (today.getMonth()+1).toString().padStart(2, '0') + '/' + today.getDate().toString().padStart(2, '0') + '/' + today.getFullYear()

          var date1 = new Date(todayString);
          var date2 = new Date(dateofvisit);
          var difference = date1.getTime() - date2.getTime();
          var days = Math.ceil(difference / (1000 * 3600 * 24));

          var compliant = 'yes'
          if (days > 5) {
            if (authcode != undefined) {
              if (aloneorpeople == null) { //they did not get to this section
                compliant = 'no'
              }
            }
          }
          if (compliant == 'yes') {
            totalcompliant++
          }
          else {
            totalnoncompliant++
          }

        })

        console.log('totalcompliant',totalcompliant)
        console.log('totalnoncompliant',totalnoncompliant)

        setCompliancechart({
          "chart": {
            "caption": "Policyholder Safefy and Health Compliance",
            "paletteColors": "#94070B, #00415C",
            "theme": "fusion"
          },
          "data": [
            {"label": "Compliant","value": totalcompliant},
            {"label": "Not Compliant","value": totalnoncompliant}
          ]
        })


        //further action taken... id 322

        //id 312 addressnoncompliance
        setAssignmentschart({
          "chart": {
            "caption": "Field Person Able to Address Non-Compliance",
            "paletteColors": "#94070B, #00415C",
            "showpercentvalues": "1",
            "defaultcenterlabel": 2500,
            "aligncaptionwithcanvas": "0",
            "captionpadding": "0",
            "decimals": "1",
            // "plottooltext":
            //   "<b>$percentValue</b> of users are <b>$label</b>",
            // "centerlabel": "Responses: <br/>" + num_responses,
            "theme": "fusion"
          },
          "data": [
            {"label": "Yes","value": 50},
            {"label": "No","value": 50}
          ]
        })



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
          Post-Visit COVID-19 Controls Dashboard
        </div>
        <div style={{marginTop:'20px',marginLeft:'20px',fontSize:'24px'}}>On-Site Social Distance</div>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:'1'}}><Summary name='Worked Alone' value={workedwith0 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked 1-3' value={workedwith1to3 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked 4-10' value={workedwith4to10 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked 11-25' value={workedwith11to25 + '%'}/></div>
          <div style={{flex:'1'}}><Summary name='Worked > 25' value={workedwithmorethan25 + '%'}/></div>
        </div>
        <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          {compliancechart != null &&
          <ChartWidget data={compliancechart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
          }
          {assignmentschart != null &&
          <ChartWidget data = {assignmentschart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
          }
        </div>
        <div style={{marginLeft:'20px',fontSize:'24px'}}>Corrections Taken by Field Person</div>
        <div style={{display:'flex',flexDirection:'row'}}>
        {corrections != null &&
          <>
            <div style={{flex:'1'}}><Summary name='More Physical Distance' value={corrections.percentmorephysicaldistance+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Added PPE' value={corrections.percentaddedppe+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Did NOT go into area' value={corrections.percentdidnotgointoarea+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Rescheduled visit' value={corrections.percentrescheduledvisit+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Other' value={corrections.percentothercorrections+'%'}/></div>
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

export default CovidReportPostVisit
