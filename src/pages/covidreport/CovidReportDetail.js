import React, { useState, useEffect } from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
//import Separator from '../../layout/Separator'
import axios from "axios";
import ChartWidget from '../../widgets/skillnet/ChartWidget'
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

const CovidReportDetail = (props) => {

  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [dategenerated, setDategenerated] = useState('')

  // const [rowData, setRowData] = useState([
  //     {make: "Toyota", model: "Celica", price: 35000},
  //     {make: "Ford", model: "Mondeo", price: 32000},
  //     {make: "Porsche", model: "Boxter", price: 72000}
  // ]);





    var Partner = {}
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;

    // const [workedwith0, setWorkedwith0] = useState(0)
    // const [workedwith1to3, setWorkedwith1to3] = useState(0)
    // const [workedwith4to10, setWorkedwith4to10] = useState(0)
    // const [workedwith11to25, setWorkedwith11to25] = useState(0)
    // const [workedwithmorethan25, setWorkedwithmorethan25] = useState(0)

    // const [compliancechart, setCompliancechart] = useState(null)
    // const [assignmentschart, setAssignmentschart] = useState(null)

    const [rowData, setRowData] = useState(null);

    useEffect(() => {
      console.log('useEffect CovidReportPostVisit')

      axios
      .get('data/coviddetail.json', {})
      .then((response) => {
        var responsesArray = response.data.data
        setDategenerated(response.data.dategenerated.replace(/T/, ' ').replace(/\..+/, '') + ' (UTC)')
        setRowData(responsesArray)



        // setWorkedwith0(((response.data.totalworkedwith0 / response.data.totalauthorized)*100).toFixed(2))
        // setWorkedwith1to3(((response.data.totalworkedwith1to3 / response.data.totalauthorized)*100).toFixed(2))
        // setWorkedwith4to10(((response.data.totalworkedwith4to10 / response.data.totalauthorized)*100).toFixed(2))
        // setWorkedwith11to25(((response.data.totalworkedwith11to25 / response.data.totalauthorized)*100).toFixed(2))
        // setWorkedwithmorethan25(((response.data.totalworkedwithmorethan25 / response.data.totalauthorized)*100).toFixed(2))
      })
      .catch((error) => {
        console.log(error)
      })

      // setCompliancechart({
      //   "chart": {
      //     "caption": "Client Compliance on Social Distancing",
      //     // "showpercentvalues": "1",
      //     // "defaultcenterlabel": num_responses,
      //     // "aligncaptionwithcanvas": "0",
      //     // "captionpadding": "0",
      //     // "decimals": "1",
      //     // "plottooltext":
      //     //   "<b>$percentValue</b> of users are <b>$label</b>",
      //     // "centerlabel": "Responses: <br/>" + num_responses,
      //     "theme": "fusion"
      //   },
      //   "data": [
      //     {"label": "Compliant","value": 50},
      //     {"label": "Not Compliant","value": 50}
      //   ]
      // })

      // setAssignmentschart({
      //   "chart": {
      //     "caption": "Work Assignments",
      //     "showpercentvalues": "1",
      //     "defaultcenterlabel": 2500,
      //     "aligncaptionwithcanvas": "0",
      //     "captionpadding": "0",
      //     "decimals": "1",
      //     // "plottooltext":
      //     //   "<b>$percentValue</b> of users are <b>$label</b>",
      //     // "centerlabel": "Responses: <br/>" + num_responses,
      //     "theme": "fusion"
      //   },
      //   "data": [
      //     {"label": "Completed","value": 50},
      //     {"label": "Not Completed","value": 50}
      //   ]
      // })
    }, []);

  return (
    <Horizontal>
      <Vertical style={{flex:'1',background:'lightgray'}}>
        <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(59,110,143)',color:'white',textAlign:'center',fontSize:'24px'}}>
          <div>COVID-19 Details Dashboard</div><div style={{marginRight:'20px'}}>data as of: {dategenerated}</div>
        </div>

        <div className="ag-theme-alpine" style={ { height: '90%', width: '100%' } }>
            <AgGridReact
              rowData={rowData}
            >
              <AgGridColumn field="id" sortable="true" filter={true} width="90px"></AgGridColumn>
              <AgGridColumn field="email" sortable="true" filter="agTextColumnFilter" width="250px"></AgGridColumn>
              <AgGridColumn field="authcode" sortable="true" filter="true" width="115px"></AgGridColumn>
              <AgGridColumn field="dateofvisit" sortable="true" filter="agDateColumnFilter" width="150px"></AgGridColumn>
              <AgGridColumn field="datestarted" sortable="true" filter="true" width="220px"></AgGridColumn>
              <AgGridColumn field="datesubmitted" sortable="true" filter="true" width="220px"></AgGridColumn>

              <AgGridColumn field="status" sortable="true" filter="true" width="100px"></AgGridColumn>

              <AgGridColumn field="authorized" sortable="true" filter="true" width="200px"></AgGridColumn>


              <AgGridColumn field="socialdistancing" sortable="true" filter="true" width="100px"></AgGridColumn>
              <AgGridColumn field="facecoverings" sortable="true" filter="true" width="100px"></AgGridColumn>
              <AgGridColumn field="tracingplan" sortable="true" filter="true" width="100px"></AgGridColumn>
              <AgGridColumn field="healthsafetyplan" sortable="true" filter="true" width="100px"></AgGridColumn>
              <AgGridColumn field="employeehealth" sortable="true" filter="true" width="100px"></AgGridColumn>
              <AgGridColumn field="visitorhealth" sortable="true" filter="true" width="100px"></AgGridColumn>
              <AgGridColumn field="other" sortable="true" filter="true" width="100px"></AgGridColumn>


              <AgGridColumn field="countryofresidence" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="stateofresidence" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="provinceofresidence" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="jobrole" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="claimnumber" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="policynumber" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="accountnumber" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="policyholder" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="countryofvisit" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="street" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="city" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="stateofvisit" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="provinceofvisit" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="contactname" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="contacttitle" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="contactphonenumber" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="measuresinplace" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="comfortable" sortable="true" filter="true" width="500px"></AgGridColumn>
              <AgGridColumn field="currentlysick" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="hadcontact" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="symptoms" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="symptomsnh" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="covidcontactnh" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="nonessentialtravelnh" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="preventmask" sortable="true" filter="true"></AgGridColumn>

              <AgGridColumn field="aloneorpeople" sortable="true" filter="true" width="350px"></AgGridColumn>
              <AgGridColumn field="numpeople" sortable="true" filter="true" width="130px"></AgGridColumn>
              <AgGridColumn field="contactsworkedwith" sortable="true" filter="true" width="1500px"></AgGridColumn>
              <AgGridColumn field="safetymet" sortable="true" filter="true"></AgGridColumn>
              <AgGridColumn field="addressnoncompliance" sortable="true" filter="true" width="250px"></AgGridColumn>
              <AgGridColumn field="correctnoncompliance" sortable="true" filter="true" width="250px"></AgGridColumn>
              <AgGridColumn field="sessionid" sortable="true" filter="true"  width="350px"></AgGridColumn>

            </AgGridReact>
        </div>
      </Vertical>
      <Splitter/>
      <Vertical style={{display:props.filterdisplay,width:'250px'}}>
        <CovidReportProperties/>
      </Vertical>
    </Horizontal>
  )
}

export default CovidReportDetail
