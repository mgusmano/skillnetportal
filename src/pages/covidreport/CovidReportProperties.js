import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TreeItem from '@material-ui/lab/TreeItem';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DropDown = (props) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const { who, onChanged, options, name, multiple} = props

  return (
    <Autocomplete
      //ref={refSegments}
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

const CovidReportProperties = (props) => {
  const [buttonlabel, setButtonLabel] = useState('NO FILTERS SELECTED')
  const [selectedstartdate, setSelectedstartdate] = useState(new Date('1/1/2020'))
  const [selectedenddate, setSelectedenddate] = useState(new Date('12/31/2020'))
  const [divisions, setDivisions] = useState(null)
  const [countries, setCountries] = useState(null)
  const [divisionsstring, setDivisionsString] = useState('')
  const [countriesstring, setCountriesString] = useState('')

  useEffect(() => {
    console.log('useEffect CovidReportProperties')

    axios
    .get('data/covidsummary.json', {})
    .then((response) => {

      var arrayCountries = response.data.countryofvisitArray.map(item => {
        return {
          CountryName: item
        }
      })
      setCountries(arrayCountries)

      var arrayDivisions = response.data.jobroleArray.map(item => {
        return {
          DivisionName: item
        }
      })
      setDivisions(arrayDivisions)

    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  const SendIt = (type, payload) => {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));
  }

  const onApplyClick = (event) => {
    if (buttonlabel === 'No Filters Selected') {return}

    var o = {
      startdate: null,
      enddate: null,
      divisions: divisionsstring,
      countries: countriesstring
    }

    console.log(o)

    SendIt('fromcovidfilters', o)
    setButtonLabel('Apply All Filters')

  }

  const handleStartDateChange = (date) => {
    setSelectedstartdate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedenddate(date);
  };

  const filterChanged = (checked, who) => {
    console.log(checked,who)

    switch(who) {
      case 'job role':
        if (checked == null) {
          setDivisionsString('')
        }
        else {
          setDivisionsString(checked.DivisionName)
        }
        break;
      case 'countries':
        if (checked == null) {
          setCountriesString('')
        }
        else {
          setCountriesString(checked.CountryName)
        }
        break;
      default:
    }

    setButtonLabel('Click to Apply All Filters')
  }


  return (
    <>
    <div style={{display:'flex',width:'100%',flexDirection:'column'}}>
      <div style={{height:'30px',display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(59,110,143)',color:'white',textAlign:'center',fontSize:'24px'}}>
        Filters
      </div>

      <div style={{flex:'1',display:'flex',flexDirection:'column',border:'0px solid red',padding:'10px'}}>
        <Button
          // ref={refApplyButton}
          style={{width:'100%'}}
          variant="contained"
          onClick={onApplyClick}
        >
          {buttonlabel}
        </Button>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {selectedstartdate !== null &&
            <KeyboardDatePicker
              style={{width:'100%',marginTop:'20px'}}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="start-date"
              label="Start Date"
              value={selectedstartdate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          }
          {selectedenddate !== null &&
              <KeyboardDatePicker
                style={{width:'100%',marginTop:'20px'}}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="end-date"
                label="End Date"
                value={selectedenddate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
          }
        </MuiPickersUtilsProvider>


        {divisions !== null &&
          <DropDown multiple={false} who="Job Role" onChanged={(event,checked) => filterChanged(checked,'job role')} options={divisions} name="DivisionName"/>
        }

        {countries !== null &&
          <DropDown multiple={false} who="Country" onChanged={(event,checked) => filterChanged(checked,'countries')} options={countries} name="CountryName"/>
        }


      </div>

    </div>

    {/* <div style={{width:'100%'}}>
          <Button
            // ref={refApplyButton}
            style={{width:'100%',padding:'10px'}}
            variant="contained"
            onClick={onApplyClick}
          >
            {buttonlabel}
          </Button>
    </div> */}
</>
          )




}

export default CovidReportProperties