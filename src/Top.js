import React from 'react';
//import logoImg from "./images/SkillNetBall.jpeg";
//import { Logo } from "./components/AuthForms";
//import SKILLNETBALL from './images/SkillNetBall.jpeg';
import SWIPE from './images/swipe-logo-normal.svg';

const Top = (props) => {

  return (
    <div style={{display:'flex',alignItems:'center',xjustifyContent:'center',height:'60px',background:'white',color:'rgb(51,124,182)',fontSize:'24px'}}>
      {/* <img src={SKILLNETBALL} style={{marginLeft:'80px',width:'50px'}} alt="SKILLNETBALL" /> */}
      <img src={SWIPE} style={{marginLeft:'20px',width:'200px'}} alt="SWIPE" />
      20210927a <div style={{margin:'30px 1px 1px 1px',fontSize:'11px'}}>01-28-2022(a)</div>
    </div>
  )
}

export default Top