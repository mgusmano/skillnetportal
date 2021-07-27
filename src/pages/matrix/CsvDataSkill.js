import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { DataGrid } from '@material-ui/data-grid';
import { API, graphqlOperation } from 'aws-amplify'
import { createSkill, deleteSkill, updateSkill } from '../../graphql/mutations'
import { listSkills } from '../../graphql/queries'
import { styles } from './styles';

const CsvDataSkill = (props) => {

  const [csvitems, setCSVItems] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    getDataSkills()
  },[])

  async function updateCert(payload) {
    await API.graphql(graphqlOperation(updateSkill, { input: payload } ))
    getDataSkills()
  }


  async function getDataSkills() {
    const skillData = await API.graphql(graphqlOperation(listSkills,{type: 'id',sortDirection: 'ASC'}))
    var o = skillData.data.listSkills.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
    setSkills(o)
  }

  async function onClickDeleteAllSkills() {
    var result = window.confirm('Are you sure you want to delete?  This cannot be undone!');
    if (result == false) { return }

    Promise.allSettled(skills.map(item => {
      return API.graphql(graphqlOperation(deleteSkill, { input: {id: item.id } } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        console.log(result)
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataSkills()
    })
  }

  async function onClickAddAllSkills() {
    console.log(csvitems.length)
    if (csvitems.length === 0) {
      alert('No CSV data has been selected')
      return
    }

    console.log(skills.length)
    if (skills.length !== 0) {
      alert('Cannot import CSV when there are existing rows in the database')
      return
    }

    Promise.allSettled(csvitems.map((item,i) => {
      return API.graphql(graphqlOperation(createSkill, { input: {id: i+1, skillName: item.skillName} }))
    }))
    .then((results) => {
      results.forEach((result) => {
        console.log(result)
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      setCSVItems([])
      getDataSkills()
      document.getElementById("fileinputskill").value = "";
    })
  }

  const parseIt = (file) => {
    Papa.parse(file, {
      header: true,

      error: function(results, file) {
        console.log(results)
      },

      complete: function(results, file) {
        if (results.meta.fields[0] !== 'skillName') {
          setCSVItems([])
          document.getElementById("fileinputskill").value = "";

          alert('bad file - it is not correctly formatted as an skill CSV file')
          return
        }
        var rowsL = []
        results.data.map((row,i)=>{
          row.id = i + 1
          rowsL.push(row)
        })
        setCSVItems(rowsL)
      }
    })
  }

  var skillColumns = [
    {field: 'id',headerName: 'id',width: 100,editable: false},
    {field: 'skillName',headerName: 'skillName',width: 200,editable: true},
    {field: 'createdAt',headerName: 'createdAt',width: 200,editable: false},
    {field: 'updatedAt',headerName: 'updatedAt',width: 200,editable: false},
  ]





  return (



      <div style={{border:'1px solid rgb(51, 124, 182)',margin:10}}>
        <div className='toolbar' style={{...styles.h,height:50,background:'rgb(51, 124, 182)',color:'white'}}>
          <div style={{fontSize:24,margin:10}}>Skills</div>
        </div>
        <div className='toolbar' style={{...styles.h,height:40,marginTop: 5}}>
          <input id='fileinputskill' type="file" style={{marginLeft:'40px',marginTop:10,width:'190px',height:'30px'}}
            onChange={(event)=> {
              console.log(event.target.files[0])
              parseIt(event.target.files[0])
            }}
          />
          <button style={{marginLeft:'40px',width:'120px',height:'30px'}}
            onClick={()=>onClickAddAllSkills()}
          >
            Add From CSV
          </button>
          <button style={{marginLeft:'340px',width:'250px',height:'30px'}}
            onClick={()=>onClickDeleteAllSkills()}
          >
            Delete All Skills From Database
          </button>
        </div>
        <div className='data' style={{...styles.h,border:'0px solid red'}}>
          <div style={{...styles.v,width:'200px',margin:30}}>
            <div>Data from the CSV:</div>
              {csvitems.map((csvitem,i) => {
                return (
                  <div key={i}>{csvitem.skillName}</div>
                )
              })}
          </div>
          {skills !== [] &&
            <div style={{ ...styles.v,height: 260,  flex:1 }}>
              <DataGrid
  onEditCellChangeCommitted={(params) => {
    var c = {
      id: params.id,
      skillName: params.props.value
    }
    updateCert(c)
  }}
                headerHeight={25}
                rowHeight={25}
                hideFooter={true}
                pageSize={100}
                rows={skills}
                columns={skillColumns}
                xcheckboxSelection
                xdisableSelectionOnClick
              />
            </div>
          }
        </div>
      </div>
  )
}

export default CsvDataSkill