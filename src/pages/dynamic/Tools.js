import React from 'react';
//import { useGlobalState } from '../../globalstate/GlobalStateProvider';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import TodayIcon from '@material-ui/icons/Today';
//import GridOnIcon from '@material-ui/icons/GridOn';
//import BarChartIcon from '@material-ui/icons/BarChart';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Tools.css'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import SendIcon from '@material-ui/icons/Send';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

const Tools = (props) => {
  //const [{userName,dashboardData,widgetData}, dispatch] = useGlobalState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toolFontSize] = React.useState(18);
  //var widgetRecord = props.widgetRecord

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, who) => {
    setAnchorEl(null);
    if (who === 'closewidget') {
      console.log('close it')
      // props.fromWidget({
      //   id:widgetRecord.id,
      //   command:'delete'
      // })
      //dispatch({type: 'DELETE_WIDGET', payload: { id: 9 }});
      //dispatch({type: 'DELETE_WIDGET', payload: { id: widgetRecord.id }});
    }
  };


  const handleButton1Click = (event, who) => {
    //dispatch({type: 'appTitle', payload: who});

    // switch (who) {
    //   case 'GridOn':
    //     //dispatch({type: 'CHANGE_WIDGET_MODE', payload: { id: widgetRecord.id }});
    //     break;
    //   case 'geoWidget':

    //     break;
    // }
  }

  return (
    <div className="tools">
      <ArrowUpwardIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'Arrow Upward')}/>
      <ArrowDownwardIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'Arrow Downward')}/>
      <SpaceBarIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'Space Bar')}/>
      <TodayIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'Today')}/>
      {/* { widgetRecord.properties.mode === 'chart' &&
      <GridOnIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'GridOn')}/>
      }
      { widgetRecord.properties.mode === 'grid' &&
      <BarChartIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'GridOn')}/>
      } */}
      <FilterListIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'Filter List')}/>
      <SearchIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={(event) => handleButton1Click(event, 'Search')}/>
      <MoreVertIcon style={{cursor:'pointer',fontSize:toolFontSize,padding:'3'}} onClick={handleClick}/>


<Menu
  style={{zIndex:'5000'}}
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>

  <MenuItem onClick={handleClose}>
    <div style={{fontSize:'11px'}}>Another</div>
  </MenuItem>
  <Divider light />
  <MenuItem onClick={handleClose}>
  <div style={{fontSize:'11px'}}>Another</div>
  </MenuItem>
  <MenuItem onClick={(event) => handleClose(event, 'closewidget')}>
    <div style={{fontSize:'11px'}}>Close Widget</div>
  </MenuItem>
</Menu>



    </div>
  )
}

export default Tools
