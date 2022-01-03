import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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
  const { Partner } = props
  const { PartnerID } = Partner;
  const [dropdowns, setDropdowns] = useState(null);
  const [filters, setFilters] = useState([]);
  const [numberofusersdisplayed, setNumberofusersdisplayed] = useState(null)
  const [buttonlabel, setButtonLabel] = useState('Loading...')


  useEffect(() => {
    async function doData() {
      try {
        const resp = await axios.get('https://skillnetusersapi.azurewebsites.net//api/customattributes?partnerid=' + PartnerID);
        var d = []
        var attributes = resp.data
        console.log(attributes)
        for (let i = 0; i < attributes.length; i++) {
          var attributename = attributes[i].CustomAttributeName
          var attributeid = attributes[i].CustomAttributeID
          var CustomAttributeValues = attributes[i].clsCustomAttributeValues
          var values = []
          for (let j = 0; j < CustomAttributeValues.length; j++) {
            var id = CustomAttributeValues[j].CustomAttributeValueID
            var value = CustomAttributeValues[j].CustomAttributeValue
            values.push({id:id,value:value,attributeid:attributeid,attributename:attributename})
          }
          d.push(<DropDown multiple={true} key={i} name='value' who={attributename} options={values} onChanged={(event,checked,reason,details) => {
            filterChanged(event,checked,reason,details)
          }}/>)
        }
        setDropdowns(d)
      } catch (err) {
        console.error(err);
      }
    }
    doData()
  }, [PartnerID]);


  const filterChanged = (event,checked,reason,details) => {
    // console.log('filterChanged',event,checked,reason)
    // console.log('reason',reason)
    // console.log('details',details)
    //var who = details.option.attributename;
    //console.log({attribute:who,values:checked})
    var objIndex = filters.findIndex((obj => obj.attributeid === details.option.attributeid));
    //console.log(objIndex)
    if (objIndex !== -1) {
      filters[objIndex].values = checked
    }
    else {
      filters.push({attributeid:details.option.attributeid,attributename:details.option.attributename,values:checked})
    }
    setFilters(filters)
    //console.log(filters)
    setButtonLabel('Click to Apply All Filters')
  };

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
