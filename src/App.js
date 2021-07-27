import React, { useState } from 'react';

import { MatrixProvider } from './pages/matrix/state/MatrixProvider';

import Top from './Top';
import Header from './Header';
import TopMenu from './TopMenu';

import { useLocation, Route, Switch, useHistory, Redirect } from 'react-router-dom';
//import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import SideMenu from 'react-sidemenu';

//import queryString from 'query-string'

import { AuthContext } from "./context/auth";
//import { useAuth } from "./context/auth";


import PrivateRoute from './PrivateRoute';
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
//import Home from './pages/home/Home';
import CardReport from './CardReport';
import Absolute from './pages/absolute/Absolute'
import Dynamic from './pages/dynamic/Dynamic'
import { TrainingMatrix } from './pages/matrix/TrainingMatrix'
import { SkillsMatrix } from './pages/matrix/SkillsMatrix'
import { FixedMatrix } from './pages/matrix/FixedMatrix'

import MyAdmin from './pages/MyAdmin'
import CsvData from './pages/matrix/CsvData'

import CovidReport from './pages/covidreport/CovidReport';

// import CovidReportPreVisit from './pages/covidreport/CovidReportPreVisit';
// import CovidReportHealth from './pages/covidreport/CovidReportHealth';
// //import CovidReportOnSite from './pages/covidreport/CovidReportOnSite';
// import CovidReportPostVisit from './pages/covidreport/CovidReportPostVisit';
// import CovidReportComply from './pages/covidreport/CovidReportComply';
import CovidReportDetail from './pages/covidreport/CovidReportDetail';

import Dashboard from './pages/benchmarkreport/Dashboard';

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
//import Splitter from './layout/Splitter'
//import Separator from './layout/Separator'

import './side-menu.css'


var PartnerCNA = {
  PartnerID: 395,
  PartnerShort: 'CNA',
  PartnerName: 'CNA',
  PersonID: 275399,
  GroupID: 33582,
  showratings: false,
  ratingsources: '4' //ManagerRating
}


var PartnerGMIsb = {
  PartnerID: 434,
  PartnerShort: 'GMIsb',
  PartnerName: 'General Mills',
  PersonID: 281326,
  GroupID: 33931,
  showratings: true,
  ratingsources: '1000' //SelfRating
}

function App(props) {
  const [menudisplay, setMenudisplay] = useState('block');
  const [filterdisplay, setFilterdisplay] = useState('block');
  const [authTokens, setAuthTokens] = useState('');
  const [activemenu, setActivemenu] = useState('/cnacovid');
  // const [initialdashboard, setInitialDashboard] = useState(true);
  const [currentdashboard] = useState('PreVisit');

  const items = [];

  const location = useLocation();

  if (authTokens === '') {
    switch (location.pathname) {
      case '/cnasme':
        items.push({label: 'Risk Control SME Report', value: '/cnasme', icon: 'fa-id-card'})
        break;
      case '/cnaadmin':
        items.push({label: 'Risk Control SME', value: '/cnasme', icon: 'fa-id-card'})
        items.push({label: 'Risk Control Skills Report', value: '/cnacard', icon: 'fa-id-card'})
        items.push({label: 'Benchmark Report', value: '/cnabenchmark', icon: 'fa-balance-scale'})
        break;
      default:
        break;
    }
  }

  switch (authTokens) {

    case 'mjg':
      items.push({label: 'Training Matrix', value: '/trainingmatrix', icon: 'fa-clipboard'})
      items.push({label: 'CNA Covid-19 Dashboard', value: '/cnacovidpremiumaudit', icon: 'fa-clipboard'})
      items.push({label: 'Benchmark Report', value: '/benchmarkcna', icon: 'fa-balance-scale'})
      items.push({label: 'Absolute', value: '/absolute', icon: 'fa-clipboard'})
      items.push({label: 'Dynamic', value: '/dynamic', icon: 'fa-clipboard'})
      items.push({label: 'Risk Control SME Remort', value: '/cardcnasme', icon: 'fa-id-card'})
      break;


    case 'cnasme':
      items.push({label: 'Risk Control SME Remort', value: '/cardcnasme', icon: 'fa-id-card'})
      //setActivemenu('/cardcnasme')
      break;

    case 'cnaadmin':
      items.push({label: 'Risk Control SME Report', value: '/cardcnasme', icon: 'fa-id-card'})
      items.push({label: 'Risk Control Skills Report', value: '/cardcna', icon: 'fa-id-card'})
      items.push({label: 'Benchmark Report', value: '/benchmarkcna', icon: 'fa-balance-scale'})
      //setActivemenu('/cardcna')
      break;

    case 'cna':
      items.push({label: 'Risk Control Skills Report', value: '/cardcna', icon: 'fa-id-card'})
      items.push({label: 'Benchmark Report', value: '/benchmarkcna', icon: 'fa-balance-scale'})

      //setActivemenu('/cardcna')
      break;

      // case 'cnacovid':
      //   items.push({label: 'Covid - CNA', icon: 'fa-clipboard', expanded: true, children: [
      //     {label: 'Pre-Visit Controls', value: '/covidcnaprevisit', icon: 'fa-clipboard'},
      //     {label: 'Health Assessment', value: '/covidcnahealth', icon: 'fa-clipboard'},
      //     {label: 'Post-Visit Controls', value: '/covidcnapostvisit', icon: 'fa-clipboard'},
      //     {label: 'Consultant Compliance', value: '/covidcnacomply', icon: 'fa-clipboard'},
      //   ]})
      //   //setActivemenu('/covidcnaprevisit')
      //   break;

    case 'cnacovid':
      items.push({label: 'CNA Covid-19 Dashboard', value: '/cnacovid', icon: 'fa-clipboard'})
      break;

    case 'cnacovidriskcontrol':
      items.push({label: 'CNA Covid-19 Dashboard', value: '/cnacovidriskcontrol', icon: 'fa-clipboard'})
      break;

    case 'cnacovidclaims':
      items.push({label: 'CNA Covid-19 Dashboard', value: '/cnacovidclaims', icon: 'fa-clipboard'})
      break;

    case 'cnacovidpremiumaudit':
      items.push({label: 'CNA Covid-19 Dashboard', value: '/cnacovidpremiumaudit', icon: 'fa-clipboard'})
      break;



    case 'cnacovidadmin':

      items.push({label: 'CNA Covid-19 Dashboard', value: '/cnacovid', icon: 'fa-clipboard', children: [
        {label: 'Pre-Visit Controls', value: 'PreVisit', icon: 'fa-clipboard', extras: 'currentdashboard'},
        {label: 'Health Assessment', value: 'Health', icon: 'fa-clipboard', extras: 'currentdashboard'},
        {label: 'Post-Visit Controls', value: 'PostVisit', icon: 'fa-clipboard', extras: 'currentdashboard'},
        {label: 'Consultant Compliance', value: 'Comply', icon: 'fa-clipboard', extras: 'currentdashboard'},
      ]})



      items.push({label: 'Covid', value: '/covid', icon: 'fa-clipboard'})
      items.push({label: 'Pre-Visit Site Assessment', value: '/covidcnaprevisit', icon: 'fa-clipboard'})
      items.push({label: 'Health Assessment', value: '/covidcnahealth', icon: 'fa-clipboard'})
      items.push({label: 'Post-Visit Controls', value: '/covidcnapostvisit', icon: 'fa-clipboard'})
      items.push({label: 'Consultant Compliance', value: '/covidcnacomply', icon: 'fa-clipboard'})
      items.push({label: 'Detail', value: '/covidcnadetail', icon: 'fa-clipboard'})
      items.push({label: 'Absolute', value: '/absolute', icon: 'fa-clipboard'})
      items.push({label: 'Dynamic', value: '/dynamic', icon: 'fa-clipboard'})

      //setActivemenu('/covidcnaprevisit')
      break;

    case 'gmi':
      items.push({label: 'Card Report - GMI', value: '/cardgmi', icon: 'fa-id-card'})
      items.push({label: 'Benchmark - GMI', value: '/benchmarkgmisb', icon: 'fa-balance-scale'})
      //setActivemenu('/cardgmi')
      break;
    default:
      break;
  }

  if (authTokens !== '') {
    items.push({label: 'Logout', value: '/login', icon: 'fa-sign-out'})
  }

  const history = useHistory();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  // const SendIt = (type, payload) => {
  //   window.dispatchEvent(new CustomEvent(type,{detail:{payload:payload}}));
  // }

  const onMenuItemClick = (value, extras) => {
    //console.log(extras)
    if (extras !== undefined) {
      //var message = extras
      //setActivemenu(value)
      //history.push(value);
      //setCurrentDashboard(value)
      //SendIt(message, value)
      window.dispatchEvent(new CustomEvent(extras,{detail:{payload:value}}));

    }
    //alert("You just clicked me:" + value)
    //let history = useHistory();

    // if (value == 'Health') {
    //   SendIt('currentdashboard', value)
    //   //setInitialDashboard(false)
    //   //setCurrentDashboard(value)
    // }
    else {
      setActivemenu(value)
      history.push(value);
    }



  }

  //const { authTokens } = useAuth();
  //console.log(authTokens)

  const onMenuClick = (value) => {
    console.log('onMenuClick')
    if (menudisplay === 'block') {
      setMenudisplay('none')
    }
    else {
      setMenudisplay('block')
    }
  }

  const onFilterClick = (value) => {
    console.log('onFilterClick')
    if (filterdisplay === 'block') {
      setFilterdisplay('none')
    }
    else {
      setFilterdisplay('block')
    }
  }


  //Risk Control
  //Claims
  //Premium Audit

  return (

    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <MatrixProvider>
      <Vertical>
        <Top/>
        <Header menuClick={onMenuClick} filterClick={onFilterClick}/>
        {authTokens === 'swipeguide' &&
        <TopMenu/>
        }
        {/* <Separator/> */}
        <Horizontal style={{width:'100%',background:'blue'}}>
          {/* <Menu/> */}
          <Vertical style={{display:menudisplay,height:'100%',background:'black',width:'0'}}>
            <div style={{height:'50px'}}></div>
            <SideMenu
              items={items}
              collapse={false}
              onMenuItemClick={(value, extras) => onMenuItemClick(value,extras)}
              activeItem={activemenu}
            />
          </Vertical>
          {/* <Splitter/> */}
          {/* <Center/> */}

          <div
              style={{flex:'1',
              border:'0px solid green',
              background:'whitesmoke',
              overflow:'auto',
              width: '100%',
              height: '100%',
          }}>

          <Switch>
            <Route exact path="/"><Redirect to="/login" /></Route>
            <Route path="/login" default component={Login} />
            {/* <Route path="/" component={() => <Home/>} exact /> */}
            <PrivateRoute path="/absolute" component={() => <Absolute/>} />
            <PrivateRoute path="/dynamic" component={() => <Dynamic/>} />
            <PrivateRoute path="/trainingmatrix" component={() => <TrainingMatrix/>} />
            <PrivateRoute path="/skillsmatrix" component={() => <SkillsMatrix/>} />
            <PrivateRoute path="/fixedmatrix" component={() => <FixedMatrix/>} />
            <PrivateRoute path="/myadmin" component={() => <MyAdmin/>} />
            <PrivateRoute path="/csv" component={() => <CsvData/>} />

            <PrivateRoute path="/cnacovid"  component={() => <CovidReport jobrole={null} currentdashboard={currentdashboard}/>} />
            <PrivateRoute path="/cnacovidriskcontrol"  component={() => <CovidReport jobrole={'Risk Control'} currentdashboard={currentdashboard}/>} />
            <PrivateRoute path="/cnacovidclaims"  component={() => <CovidReport jobrole={'Claims'} currentdashboard={currentdashboard}/>} />
            <PrivateRoute path="/cnacovidpremiumaudit"  component={() => <CovidReport jobrole={'Premium Audit'} currentdashboard={currentdashboard}/>} />

            <PrivateRoute path="/cardcnasme" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' SMEOnly={true} showlob={false}/>} />
            <PrivateRoute path="/cardcnaadmin" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' SMEOnly={true} showlob={false}/>} />

            <Route path="/cnasme" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' SMEOnly={true} showlob={false}/>} />
            <Route path="/cnaadmin" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' SMEOnly={true} showlob={false}/>} />
            <Route path="/cnacard" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' showlob={true}/>} />
            <Route path="/cnabenchmark" component={() => <Dashboard Partner={PartnerCNA}/>}  />

            <PrivateRoute path="/cardcna" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' showlob={true}/>} />
            <PrivateRoute path="/cardgmi" component={() => <CardReport Partner={PartnerGMIsb} PartnerID='434' showlob={false}/>} />
            <PrivateRoute path="/benchmarkcna" component={() => <Dashboard Partner={PartnerCNA}/>}  />
            <PrivateRoute path="/benchmarkgmisb" component={() => <Dashboard Partner={PartnerGMIsb}/>}  />
            {/* <PrivateRoute path="/covidcnaprevisit"  component={() => <CovidReportPreVisit  filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/covidcnahealth"    component={() => <CovidReportHealth    filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/covidcnapostvisit" component={() => <CovidReportPostVisit filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/covidcnacomply"    component={() => <CovidReportComply    filterdisplay={filterdisplay} Partner={PartnerCNA}/>} /> */}
            <PrivateRoute path="/covidcnadetail"    component={() => <CovidReportDetail    filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/loginx" component={() => <Login Partner={PartnerCNA}/>} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>

          </div>
          {/* center */}
          {/* <Splitter/>
          <Context/> */}
        </Horizontal>
        {/* <Splitter/>
        <div>footer</div> */}
      </Vertical>
      </MatrixProvider>
    </AuthContext.Provider>

  );
}

export default App;



// {/* <span style={{xwidth:'500px',height:'100%',background:'#f1f1f1'}}>
// <ul style={{paddingTop:'30px'}}>
//   {/* <li><Link to="/">Home</Link></li> */}

// {authTokens === 'cnasme' &&
//   <>
//   <li><Link to="/cardcnasme">Risk Control SME</Link></li>
//   </>
// }

// {authTokens === 'cna' &&
//   <>
//   <li><Link to="/cardcna">Card CNA</Link></li>
//   <li><Link to="/benchmarkcna">Benchmark CNA</Link></li>
//   <li><Link to="/covidcna">Covid CNA</Link></li>
//   </>
// }
// {authTokens === 'gmi' &&
//   <>
//   <li><Link to="/cardgmi">Card GMI</Link></li>
//   <li><Link to="/benchmarkgmisb">Benchmark GMIsb</Link></li>
//   </>
// }
//   <li><Link to="/admin">Logout</Link></li>
// </ul>
// </span> */}
