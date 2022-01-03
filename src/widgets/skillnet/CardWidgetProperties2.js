import React, { useState, useEffect } from 'react';
import axios from "axios";
import './CardWidget.css'

//import CheckboxWidget from './CheckboxWidget'
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
//import TreeItem from '@material-ui/lab/TreeItem';
//import { getDefaultLocale } from 'react-datepicker';
//import TreeView from '@material-ui/lab/TreeView';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';


//const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
//const checkedIcon = <CheckBoxIcon fontSize="small" />;

const DropDown = (props) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const { who, onChanged, options, name, multiple} = props

  return (
    <Autocomplete
      //ref={refSegments}
      name={who}
      onChange={onChanged}
      style={{width:'100%',marginTop:'20px'}}
      multiple={multiple}
      disableCloseOnSelect={true}
      options={options}
      getOptionLabel={options => typeof options === 'string' ? options : options[name]}
      //defaultValue={[]}
      renderOption={multiple === true ?
        (options, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              name={who}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {options[name]}
          </React.Fragment>
        ) : undefined}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={who}
          placeholder=""
        />
      )}
    />
  )
}

const CardWidgetProperties2 = (props) => {
  const {SMEOnly, showlob, Partner} = props
  const { PartnerID, PartnerName, PersonID, GroupID } = Partner;

  const [dropdowns, setDropdowns] = useState(null);
  const [filters, setFilters] = useState([]);

  const [numberofusersdisplayed, setNumberofusersdisplayed] = useState(null)
  const [buttonlabel, setButtonLabel] = useState('Loading...')
  //const [checkboxdisplay, setCheckboxdisplay] = useState('none')
  //const [arrowclass, setArrowclass] = useState('')
  
  //const [treedata, setTreeData] = useState(null)

  // const [leaders, setLeaders] = useState(null)
  // const [smes, setSmes] = useState(null)
  // const [lobs, setLobs] = useState(null)


  // const [positions, setPositions] = useState(null)
  // const [locations, setLocations] = useState(null)
  // const [managers, setManagers] = useState(null)
  // const [percents, setPercents] = useState(null)
  // const [competencygroups, setCompetencyGroups] = useState(null)

  //const [subjectmatterexperts, setSubjectmatterexperts] = useState(null)
  //const [filteredsubjectmatterexperts, setFilteredsubjectmatterexperts] = useState([])

  // const [segments, setSegments] = useState(null)
  // const [functions, setFunctions] = useState(null)
  // const [subfunctions, setSubfunctions] = useState(null)

  // const [ratingsourcesstring, setRatingsourcesString] = useState('')
  // const [leaderidsstring, setLeaderidsString] = useState('')
  // const [smeidsstring, setSmeidsString] = useState('')
  // const [lobidsstring, setLobidsString] = useState('')
  // const [jobidsstring, setJobidsString] = useState('')
  // const [locationidsstring, setLocationidsString] = useState('')
  // const [manageridsstring, setManageridsString] = useState('')
  // const [percentidsstring, setPercentidsString] = useState('')
  // const [segmentidsstring, setSegmentidsString] = useState('')
  // const [functionidsstring, setFunctionidsString] = useState('')
  // const [subfunctionidsstring, setSubfunctionidsString] = useState('')
  // const [skillidsstring, setSkillidsString] = useState('')

  const filterChanged = (event,checked,reason,details) => {
    console.log('filterChanged',event,checked,reason)
    console.log('reason',reason)
    console.log('details',details)
    //var who = event.target.name;
    var who = details.option.attributename;
    console.log({attribute:who,values:checked})
    //var newfilters = filters.slice();
    //console.log(newfilters)

    var objIndex = filters.findIndex((obj => obj.attribute === who));
    console.log(objIndex)
    if (objIndex !== -1) {
      filters[objIndex].values = checked
    }
    else {
      filters.push({attribute:who,values:checked})
    }
    setFilters(filters)
    console.log(filters)
    setButtonLabel('Click to Apply All Filters')
  };



  useEffect(() => {

    async function doData() {
      try {
        const resp = await axios.get('http://skillnetusersapi.azurewebsites.net//api/customattributes?partnerid=' + PartnerID);
        //console.log(resp.data);
        var d = []
        var attributes = resp.data
        for (let i = 0; i < attributes.length; i++) {
          var attributename = attributes[i].CustomAttributeName
          var CustomAttributeValues = attributes[i].clsCustomAttributeValues
          var values = []
          for (let j = 0; j < CustomAttributeValues.length; j++) {
            var id = CustomAttributeValues[j].CustomAttributeValueID
            var value = CustomAttributeValues[j].CustomAttributeValue
            values.push({id:id,value:value,attributename:attributename})
          }
          //console.log(attributename)
          //console.log(values)
          d.push(<DropDown multiple={true} key={i} name='value' who={attributename} options={values} onChanged={(event,checked,reason,details) => {
            filterChanged(event,checked,reason,details)
          }}/>)
        }
        //console.log(d)
        setDropdowns(d)
      } catch (err) {
        console.error(err);
      }
    }
    doData()
  }, [PartnerID, PartnerName]);

  const SendIt = (type, payload) => {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));
  }

  const onApplyClick = (event) => {
    if (buttonlabel === 'No Filters Selected') {return}

    SendIt('fromcardwaiting', {})

    console.log('filters to send')
    console.log(filters)
    setButtonLabel('Apply All Filters')
    return

    var url = 'https://skillnetusersapi.azurewebsites.net/api/cardreportusers?' +
    ''
    // 'personid=' + PersonID + '&' +
    // 'groupid=' + GroupID + '&' +
    // 'lobids=' + lobidsstring + '&' +
    // 'leaderids=' + leaderidsstring + '&' +
    // 'smeids=' + smeidsstring  + '&' +
    // 'ratingsources=' + ratingsourcesstring + '&' +
    // 'segmentids=' + segmentidsstring  + '&' +
    // 'functionids=' + functionidsstring  + '&' +
    // 'subfunctionids=' + subfunctionidsstring  + '&' +
    // 'jobids=' + jobidsstring  + '&' +
    // 'partnerlocationids=' + locationidsstring + '&' +
    // 'managerids=' + manageridsstring + '&' +
    // 'percentages=' + percentidsstring + '&' +
    // 'skillids=' + skillidsstring
    console.log('url',url)

    axios
    .get(url, {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      //console.log('filtered users', response)
      setNumberofusersdisplayed(response.data.length)
      //console.log('dummy data here')
      //console.log(response.data)
      SendIt('fromcardfilteredusers', {users: response.data})
      setButtonLabel('Apply All Filters')
    })
    .catch((error) => {
      console.log(error)
    })
  };

  // const labelIt = (node) => {
  //   console.log(node)
  //   return (
  //     <div style={{ display: 'flex', alignItems: 'center' }}>
  //     <Checkbox
  //       id={`checkbox-${node.id}`}
  //       //checked={isChecked}
  //       onChange={(e, checked) => console.log('you checked it!', checked)}
  //       onClick={e => (e.stopPropagation())}
  //       color="primary"
  //     />
  //     <Typography variant="caption">{node.name}</Typography>
  //   </div>
  //   )
  // };

  // const label = (
  //   <div style={{ display: 'flex', alignItems: 'center' }}>
  //     <Checkbox
  //       color="primary"
  //     />
  //     <Typography variant="caption"></Typography>
  //   </div>
  // );

  // const renderTree = (nodes) => (
  //   <TreeItem className="smallfont" style={{marginTop:'15px',fontSize:'11px'}} key={nodes.id} nodeId={nodes.id} label={labelIt(nodes)}>
  //     {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
  //   </TreeItem>
  // );

  // const changeIt = () => {
  //   if (checkboxdisplay === 'none') {
  //     setCheckboxdisplay('block')
  //     setArrowclass('MuiAutocomplete-popupIndicatorOpen')
  //   }
  //   else {
  //     setCheckboxdisplay('none')
  //     setArrowclass('')
  //   }
  // };

  //console.log(positions)
  //console.log(leaders)
  //    <div style={{width:propertywidth,padding:'10px'}}>

  return (
    <div style={{width:'100%',padding:'10px'}}>
      <Button
        // ref={refApplyButton}
        style={{width:'100%'}}
        variant="contained"
        onClick={onApplyClick}
      >
        {buttonlabel}
      </Button>

      <div style={{display:'flex',flexDirection:'column'}}>
        {dropdowns && dropdowns}
      </div>

      {false !== true &&
        numberofusersdisplayed !== null &&
        <div style={{marginTop:'40px'}}>Number of Users Displayed: {numberofusersdisplayed}</div>
      }
    </div>
  )
}

export default CardWidgetProperties2
