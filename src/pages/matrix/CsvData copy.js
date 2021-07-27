import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { DataGrid } from '@material-ui/data-grid';
import { API, graphqlOperation } from 'aws-amplify'
import { createOperator, deleteOperator, updateOperator } from '../../graphql/mutations'
import { listOperators } from '../../graphql/queries'
import { styles } from './styles';
import CsvDataOperator from './CsvDataOperator';

const CsvData = (props) => {

  const [csvitems, setCSVItems] = useState([])
  const [operators, setOperators] = useState([])

  useEffect(() => {
    getDataOperators()
  },[])

  async function updateCert(payload) {
    await API.graphql(graphqlOperation(updateOperator, { input: payload } ))
    getDataOperators()
  }


  async function getDataOperators() {
    const operatorData = await API.graphql(graphqlOperation(listOperators,{type: 'id',sortDirection: 'ASC'}))
    var o = operatorData.data.listOperators.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
    setOperators(o)
  }

  async function onClickDeleteAllOperators() {
    var result = window.confirm('Are you sure you want to delete?  This cannot be undone!');
    if (result == false) { return }

    Promise.allSettled(operators.map(item => {
      return API.graphql(graphqlOperation(deleteOperator, { input: {id: item.id } } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        console.log(result)
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataOperators()
    })
  }

  async function onClickAddAllOperators() {
    console.log(csvitems.length)
    if (csvitems.length === 0) {
      alert('No CSV data has been selected')
      return
    }

    console.log(operators.length)
    if (operators.length !== 0) {
      alert('Cannot import CSV when there are existing rows in the database')
      return
    }

    Promise.allSettled(csvitems.map((item,i) => {
      return API.graphql(graphqlOperation(createOperator, { input: {id: i+1, operatorName: item.operatorName} }))
    }))
    .then((results) => {
      results.forEach((result) => {
        console.log(result)
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      setCSVItems([])
      getDataOperators()
      document.getElementById("fileinput").value = "";
    })
  }

  const parseIt = (file) => {
    Papa.parse(file, {
      header: true,

      error: function(results, file) {
        console.log(results)
      },

      complete: function(results, file) {
        if (results.meta.fields[0] !== 'operatorName') {
          setCSVItems([])
          document.getElementById("fileinput").value = "";

          alert('bad file - it is not correctly formatted as an operator CSV file')
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

  var operatorColumns = [
    {field: 'id',headerName: 'id',width: 100,editable: false},
    {field: 'operatorName',headerName: 'operatorName',width: 200,editable: true},
    {field: 'createdAt',headerName: 'createdAt',width: 200,editable: false},
    {field: 'updatedAt',headerName: 'updatedAt',width: 200,editable: false},
  ]





  return (
    <div className='app' style={{...styles.v,width:'100%',height:'100%'}}>

      {/* operator start */}
      <div style={{border:'1px solid rgb(51, 124, 182)',margin:10}}>
        <div className='toolbar' style={{...styles.h,height:50,background:'rgb(51, 124, 182)',color:'white'}}>
          <div style={{fontSize:24,margin:10}}>Operators</div>
        </div>
        <div className='toolbar' style={{...styles.h,height:40,marginTop: 5}}>
          <input id='fileinput' type="file" style={{marginLeft:'40px',marginTop:10,width:'190px',height:'30px'}}
            onChange={(event)=> {
              console.log(event.target.files[0])
              parseIt(event.target.files[0])
            }}
          />
          <button style={{marginLeft:'40px',width:'120px',height:'30px'}}
            onClick={()=>onClickAddAllOperators()}
          >
            Add From CSV
          </button>
          <button style={{marginLeft:'340px',width:'250px',height:'30px'}}
            onClick={()=>onClickDeleteAllOperators()}
          >
            Delete All Operators From Database
          </button>
        </div>
        <div className='data' style={{...styles.h,border:'0px solid red'}}>
          <div style={{...styles.v,width:'200px',margin:30}}>
            <div>Data from the CSV:</div>
              {csvitems.map((csvitem,i) => {
                return (
                  <div key={i}>{csvitem.operatorName}</div>
                )
              })}
          </div>
          {operators !== [] &&
            <div style={{ ...styles.v,height: 260,  flex:1 }}>
              <DataGrid
  onEditCellChangeCommitted={(params) => {
    var c = {
      id: params.id,
      operatorName: params.props.value
    }
    updateCert(c)
  }}
                headerHeight={25}
                rowHeight={25}
                hideFooter={true}
                pageSize={100}
                rows={operators}
                columns={operatorColumns}
                xcheckboxSelection
                xdisableSelectionOnClick
              />
            </div>
          }
        </div>
      </div>
      {/* operator end */}

    </div>
  )
}

export default CsvData