import React, { useState, useEffect } from 'react';
//import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
//import Splitter from '../../layout/Splitter'
//import Separator from '../../layout/Separator'
import axios from "axios";

import ChartWidget from '../../widgets/skillnet/ChartWidget'

const Summary = (props) => {
  //const { name, value } = props;
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'14px'}}>{props.name}</div>
      <div style={{fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
    </div>
  )
}


const CovidReport = () => {
    var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    //var PartnerID = 434;  var PartnerName = 'General Mills'; var PersonID = 275399;
    //var PartnerID = 426;  var PartnerName = 'General Mills'; var PersonID = 277356;
    //console.log('PartnerID',PartnerID)
    //console.log('PartnerName',PartnerName)
    //console.log('PersonID',PersonID)
    const [socialdistancing, setSocialdistancing] = useState(0)
    const [facecoverings, setFacecoverings] = useState(0)
    const [tracingplan, setTracingplan] = useState(0)
    const [healthsafetyplan, setHealthsafetyplan] = useState(0)
    const [employeehealth, setEmployeehealth] = useState(0)
    const [visitorhealth, setVisitorhealth] = useState(0)
    const [other, setOther] = useState(0)
    const [visitschart, setVisitschart] = useState(null)
    const [comfortablechart, setComfortablechart] = useState(null)

    // const [totalassignments, setTotalassignments] = useState(0)
    // const [totalauthorized, setTotalAuthorized] = useState(0)
    // const [totalnotauthorized, setTotalnotauthorized] = useState(0)
    // const [authorizedpercent, setAuthorizedpercent] = useState(0)

    // const [SafeReturnPrevisitCompletedAssignments, setSafeReturnPrevisitCompletedAssignments] = useState(0)
    // const [SafeReturnPrevisitStartedAssignments, setSafeReturnPrevisitStartedAssignments] = useState(0)
    // const [SafeReturnUnAuthorizedAssignments, setSafeReturnUnAuthorizedAssignments] = useState(0)
    // const [SafeReturnAuthorizedAssignments, setSafeReturnAuthorizedAssignments] = useState(0)
    // const [SafeReturnCompletedAssignments, setSafeReturnCompletedAssignments] = useState(0)
    // const [SafeReturnNonCompletedAssignments, setSafeReturnNonCompletedAssignments] = useState(0)
    // const [SafeReturnAssignments, setSafeReturnAssignments] = useState(0)

    useEffect(() => {
      console.log('useEffect CovidReport')

      axios
      .get('data/responses.json', {})
      .then((response) => {
        var responsesArray = response.data
        var num_responses = responsesArray.length
        setSocialdistancing((responsesArray.filter(response => response['socialdistancing'] === true).length/num_responses)*100)
        setFacecoverings((responsesArray.filter(response => response['facecoverings'] === true).length/num_responses)*100)
        setTracingplan((responsesArray.filter(response => response['tracingplan'] === true).length/num_responses)*100)
        setHealthsafetyplan((responsesArray.filter(response => response['healthsafetyplan'] === true).length/num_responses)*100)
        setEmployeehealth((responsesArray.filter(response => response['employeehealth'] === true).length/num_responses)*100)
        setVisitorhealth((responsesArray.filter(response => response['visitorhealth'] === true).length/num_responses)*100)
        setOther((responsesArray.filter(response => response['other'] === true).length/num_responses)*100)
        var comfortable = (responsesArray.filter(response => response['comfortable'] === "Yes, I am comfortable completing the visit").length/num_responses)*100
        var notcomfortable = (responsesArray.filter(response => response['comfortable'] !== "Yes, I am comfortable completing the visit").length/num_responses)*100

        var scheduled = 50
        var notscheduled = 50

        setVisitschart({
          "chart": {
            "caption": "Customer Visits Scheduled",
            // "showpercentvalues": "1",
            // "defaultcenterlabel": num_responses,
            // "aligncaptionwithcanvas": "0",
            // "captionpadding": "0",
            // "decimals": "1",
            // "plottooltext":
            //   "<b>$percentValue</b> of users are <b>$label</b>",
            // "centerlabel": "Responses: <br/>" + num_responses,
            "theme": "fusion"
          },
          "data": [
            {"label": "Scheduled","value": scheduled},
            {"label": "Not Scheduled","value": notscheduled}
          ]
        })

        setComfortablechart({
          "chart": {
            "caption": "Staff Comfort",
            "showpercentvalues": "1",
            "defaultcenterlabel": num_responses,
            "aligncaptionwithcanvas": "0",
            "captionpadding": "0",
            "decimals": "1",
            "plottooltext":
              "<b>$percentValue</b> of users are <b>$label</b>",
            "centerlabel": "Responses: <br/>" + num_responses,
            "theme": "fusion"
          },
          "data": [
            {"label": "Comfortable","value": comfortable},
            {"label": "Not Comfortable","value": notcomfortable}
          ]
        })

      })
      .catch((error) => {
        console.log(error)
      })


      // //1
      // axios
      // .get('https://skillnetusersapi.azurewebsites.net/api/SafeReturnPrevisitCompletedAssignments/', {
      //   auth: {username: 'skillnet',password: 'demo'}
      // })
      // .then((response) => {
      //   console.log('SafeReturnPrevisitCompletedAssignments',response.data.length)
      //   console.log('SafeReturnPrevisitCompletedAssignments',response.data)
      //   setSafeReturnPrevisitCompletedAssignments(response.data.length)
      //   setTotalassignments(response.data.length)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })

      // //2
      // axios
      // .get('https://skillnetusersapi.azurewebsites.net/api/SafeReturnPrevisitStartedAssignments/', {
      //   auth: {username: 'skillnet',password: 'demo'}
      // })
      // .then((response) => {
      //   console.log('SafeReturnPrevisitStartedAssignments',response.data.length)
      //   console.log('SafeReturnPrevisitStartedAssignments',response.data)
      //   setSafeReturnPrevisitStartedAssignments(response.data.length)
      //   //setTotalassignments(response.data.length)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })

      // //3
      // axios
      // .get('https://skillnetusersapi.azurewebsites.net/api/SafeReturnUnAuthorizedAssignments', {
      //   auth: {username: 'skillnet',password: 'demo'}
      // })
      // .then((response) => {
      //   console.log('SafeReturnUnAuthorizedAssignments',response.data.length)
      //   console.log('SafeReturnUnAuthorizedAssignments',response.data)
      //   setSafeReturnUnAuthorizedAssignments(response.data.length)
      //   setTotalnotauthorized(response.data.length)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })

      // //4
      // axios
      // .get('https://skillnetusersapi.azurewebsites.net/api/SafeReturnAuthorizedAssignments', {
      //   auth: {username: 'skillnet',password: 'demo'}
      // })
      // .then((response) => {
      //   console.log('SafeReturnAuthorizedAssignments',response.data.length)
      //   console.log('SafeReturnAuthorizedAssignments',response.data)
      //   setSafeReturnAuthorizedAssignments(response.data.length)
      //   setTotalAuthorized(response.data.length)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })

      // //5
      // axios
      // .get('https://skillnetusersapi.azurewebsites.net/api/SafeReturnCompletedAssignments/', {
      //   auth: {username: 'skillnet',password: 'demo'}
      // })
      // .then((response) => {
      //   console.log('SafeReturnCompletedAssignments',response.data.length)
      //   console.log('SafeReturnCompletedAssignments',response.data)
      //   setSafeReturnCompletedAssignments(response.data.length)
      //   //setTotalAuthorized(response.data.length)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })

      // //6
      // axios
      // .get('https://skillnetusersapi.azurewebsites.net/api/SafeReturnNonCompletedAssignments/', {
      //   auth: {username: 'skillnet',password: 'demo'}
      // })
      // .then((response) => {
      //   console.log('SafeReturnNonCompletedAssignments',response.data.length)
      //   console.log('SafeReturnNonCompletedAssignments',response.data)
      //   setSafeReturnNonCompletedAssignments(response.data.length)
      //   //setTotalAuthorized(response.data.length)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })

      // //7
      // axios
      // .get('https://skillnetusersapi.azurewebsites.net/api/SafeReturnAssignments/', {
      //   auth: {username: 'skillnet',password: 'demo'}
      // })
      // .then((response) => {
      //   console.log('SafeReturnAssignments',response.data.length)
      //   console.log('SafeReturnAssignments',response.data)
      //   setSafeReturnAssignments(response.data.length)
      //   //setTotalAuthorized(response.data.length)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })





 //     setTotalassignments(7892)
 //     setTotalAuthorized(2340)
//      setTotalnotauthorized(5552)
      //setAuthorizedpercent(29.65)

    }, []);

    ///  {/* <Horizontal style={{background:'gray'}}> */}
  return (


        <Vertical style={{flex:'1',background:'lightgray'}}>
          <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(94,100,179)',color:'white',textAlign:'center',fontSize:'24px'}}>
            xxCNA Covid Reporting
          </div>

          {/* <div style={{display:'flex',flexDirection:'column'}}>
            <div>SafeReturnPrevisitCompletedAssignments: {SafeReturnPrevisitCompletedAssignments}</div>
            <div>SafeReturnPrevisitStartedAssignments: {SafeReturnPrevisitStartedAssignments}</div>
            <div>SafeReturnUnAuthorizedAssignments: {SafeReturnUnAuthorizedAssignments}</div>
            <div>SafeReturnAuthorizedAssignments: {SafeReturnAuthorizedAssignments}</div>
            <div>SafeReturnCompletedAssignments: {SafeReturnCompletedAssignments}</div>
            <div>SafeReturnNonCompletedAssignments: {SafeReturnNonCompletedAssignments}</div>
            <div>SafeReturnAssignments: {SafeReturnAssignments}</div>
          </div> */}

          <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
            {visitschart != null &&
            <ChartWidget data={visitschart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
            {comfortablechart != null &&
            <ChartWidget data = {comfortablechart} flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
            }
          </div>

          <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{flex:'1'}}><Summary name='Social Distancing' value={socialdistancing+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Face Coverings' value={facecoverings+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Tracing Plan' value={tracingplan+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Health & Safety Plan' value={healthsafetyplan+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Employee Health' value={employeehealth+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Visitor Health' value={visitorhealth+'%'}/></div>
            <div style={{flex:'1'}}><Summary name='Other' value={other+'%'}/></div>
          </div>

          {/* <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{flex:'1'}}><Summary name='Total Assignments' value={totalassignments.toLocaleString()}/></div>
            <div style={{flex:'1'}}><Summary name='Total Authorized' value={totalauthorized.toLocaleString()}/></div>
            <div style={{flex:'1'}}><Summary name='Total Not Authorized' value={totalnotauthorized.toLocaleString()}/></div>
            <div style={{flex:'1'}}><Summary name='Authorized Percent' value={authorizedpercent+'%'}/></div>
          </div> */}



          {/* <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          <ChartWidget flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'bar2d'/>
          </div> */}


        </Vertical>


  )
}

export default CovidReport


      //   {/* <Splitter/> */}
      //   {/* column 2 */}
      //   {/* <Vertical style={{display:filterdisplay,width:propertywidth}}>
      //     <CardWidgetProperties propertywidth={propertywidth} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID}/>
      //   </Vertical> */}
      // {/* </Horizontal> */}

