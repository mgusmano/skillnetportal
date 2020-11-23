import React, { useState } from 'react';

import Top from './Top';
import Header from './Header';

import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import SideMenu from 'react-sidemenu';

import queryString from 'query-string'

import { AuthContext } from "./context/auth";
//import { useAuth } from "./context/auth";


import PrivateRoute from './PrivateRoute';
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Home from './pages/home/Home';
import CardReport from './CardReport';

//import CovidReport from './pages/covidreport/CovidReport';
import CovidReportPreVisit from './pages/covidreport/CovidReportPreVisit';
import CovidReportHealth from './pages/covidreport/CovidReportHealth';
//import CovidReportOnSite from './pages/covidreport/CovidReportOnSite';
import CovidReportPostVisit from './pages/covidreport/CovidReportPostVisit';
import CovidReportComply from './pages/covidreport/CovidReportComply';
import CovidReportDetail from './pages/covidreport/CovidReportDetail';

import Dashboard from './pages/benchmarkreport/Dashboard';

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
import Separator from './layout/Separator'

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
  const [activemenu, setActivemenu] = useState('/covidcnaprevisit');

  const items = [



    // {label: 'item 1', value: 'item1', icon: 'fa-search',
    // children: [
    //   {divider: true, label: 'Main navigation', value: 'main-nav'},
    // ]
    // },
  ];

  switch (authTokens) {
    case 'cnasme':
      items.push({label: 'Risk Control SME', value: '/cardcnasme', icon: 'fa-id-card'})
      //setActivemenu('/cardcnasme')
      break;

    case 'cnaadmin':
      items.push({label: 'Risk Control SME', value: '/cardcnasme', icon: 'fa-id-card'})
        items.push({label: 'Card Report', value: '/cardcna', icon: 'fa-id-card'})
        items.push({label: 'Benchmark Report', value: '/benchmarkcna', icon: 'fa-balance-scale'})
        //setActivemenu('/cardcna')
        break;

    case 'cna':
      items.push({label: 'Card Report - CNA', value: '/cardcna', icon: 'fa-id-card'})
      items.push({label: 'Benchmark - CNA', value: '/benchmarkcna', icon: 'fa-balance-scale'})

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
      items.push({label: 'Pre-Visit Site Assessment', value: '/covidcnaprevisit', icon: 'fa-clipboard'})
      items.push({label: 'Health Assessment', value: '/covidcnahealth', icon: 'fa-clipboard'})
      items.push({label: 'Post-Visit Controls', value: '/covidcnapostvisit', icon: 'fa-clipboard'})
      items.push({label: 'Consultant Compliance', value: '/covidcnacomply', icon: 'fa-clipboard'})
      //items.push({label: 'Detail', value: '/covidcnadetail', icon: 'fa-clipboard'})

      //setActivemenu('/covidcnaprevisit')
      break;

    case 'cnacovidadmin':
      items.push({label: 'Pre-Visit Site Assessment', value: '/covidcnaprevisit', icon: 'fa-clipboard'})
      items.push({label: 'Health Assessment', value: '/covidcnahealth', icon: 'fa-clipboard'})
      items.push({label: 'Post-Visit Controls', value: '/covidcnapostvisit', icon: 'fa-clipboard'})
      items.push({label: 'Consultant Compliance', value: '/covidcnacomply', icon: 'fa-clipboard'})
      items.push({label: 'Detail', value: '/covidcnadetail', icon: 'fa-clipboard'})

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

  items.push({label: 'Logout', value: '/login', icon: 'fa-sign-out'})

  const history = useHistory();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  const onMenuItemClick = (value) => {
    //alert("You just clicked me:" + value)
    //let history = useHistory();
    setActivemenu(value)
    history.push(value);
  }

  //const { authTokens } = useAuth();
  //console.log(authTokens)

  const onMenuClick = (value) => {
    console.log('onMenuClick')
    if (menudisplay == 'block') {
      setMenudisplay('none')
    }
    else {
      setMenudisplay('block')
    }
  }

  const onFilterClick = (value) => {
    console.log('onFilterClick')
    if (filterdisplay == 'block') {
      setFilterdisplay('none')
    }
    else {
      setFilterdisplay('block')
    }
  }


  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Vertical>
        <Top/>
        <Header menuClick={onMenuClick} filterClick={onFilterClick}/>
        {/* <Separator/> */}
        <Horizontal style={{width:'100%',background:'blue'}}>
          {/* <Menu/> */}
          <Vertical style={{display:menudisplay,height:'100%',background:'black'}}>
            <div style={{height:'50px'}}></div>
            <SideMenu
              items={items}
              collapse={false}
              onMenuItemClick={onMenuItemClick}
              activeItem={activemenu}
            />
          </Vertical>
          <Splitter/>
          {/* <Center/> */}
          <Switch>
            <Route exact path="/"><Redirect to="/login" /></Route>
            <Route path="/login" default component={Login} />
            {/* <Route path="/" component={() => <Home/>} exact /> */}
            <PrivateRoute path="/cardcnasme" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' SMEOnly={true} showlob={false}/>} />
            <PrivateRoute path="/cardcna" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' showlob={true}/>} />
            <PrivateRoute path="/cardgmi" component={() => <CardReport Partner={PartnerGMIsb} PartnerID='434' showlob={false}/>} />
            <PrivateRoute path="/benchmarkcna" component={() => <Dashboard Partner={PartnerCNA}/>}  />
            <PrivateRoute path="/benchmarkgmisb" component={() => <Dashboard Partner={PartnerGMIsb}/>}  />
            <PrivateRoute path="/covidcnaprevisit"  component={() => <CovidReportPreVisit  filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/covidcnahealth"    component={() => <CovidReportHealth    filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/covidcnapostvisit" component={() => <CovidReportPostVisit filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/covidcnacomply"    component={() => <CovidReportComply    filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/covidcnadetail"    component={() => <CovidReportDetail    filterdisplay={filterdisplay} Partner={PartnerCNA}/>} />
            <PrivateRoute path="/loginx" component={() => <Login Partner={PartnerCNA}/>} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
          {/* center */}
          {/* <Splitter/>
          <Context/> */}
        </Horizontal>
        {/* <Splitter/>
        <div>footer</div> */}
      </Vertical>
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
