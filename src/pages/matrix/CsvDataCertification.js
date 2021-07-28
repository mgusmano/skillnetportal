import React, { useEffect } from 'react';
import { useMatrixState } from './state/MatrixProvider';
//import Papa from 'papaparse';
import { DataGrid } from '@material-ui/data-grid';
import { getDates } from './util';
import { API, graphqlOperation } from 'aws-amplify'

//import { listSkills } from '../../graphql/queries'
//import { createSkill, updateSkill, deleteSkill } from '../../graphql/mutations'
//import { listOperators} from '../../graphql/queries'
//import { createOperator, deleteOperator } from '../../graphql/mutations'
//import { listCertifications} from '../../graphql/queries'
import { createCertification, deleteCertification, updateCertification } from '../../graphql/mutations'

import { styles } from './styles';

const CsvDataCertification = (props) => {
  const matrixState = useMatrixState();
  const [greendate, yellowdate, reddate] = getDates();

  async function getDataCertifications() {
    matrixState.setActive(true)
    matrixState.setAll(false)
  }

  async function onClickGenerateAllCertifications() {
    if (matrixState.certifications.length !== 0) {
      alert('Cannot generate when there are existing rows in the database')
      return
    }

    if (matrixState.operators.length === 0) {
      alert('Cannot generate when there are no Operators in the database')
      return
    }

    if (matrixState.skills.length === 0) {
      alert('Cannot generate when there are no Skills in the database')
      return
    }

    var id = 1;
    matrixState.skills.map((skill, s) => {
      console.log(skill)
      matrixState.operators.map(async (operator,o) => {
        var c = {
          id: id,
          skillID: skill.id,
          operatorID: operator.id,
          meta: `{"status":"not started","start":"${greendate}","trainer":"false"}`,
          data: `[{"p":25,"s":0},{"p":50,"s":0},{"p":75,"s":0},{"p":100,"s":0}]`
        }
        id++;
        await API.graphql(graphqlOperation(createCertification, { input: c }))
      })
    })
    getDataCertifications()
  }

  async function onClickDeleteAllCertifications() {
    var result = window.confirm('Are you sure you want to delete?  This cannot be undone!');
    if (result == false) { return }

    Promise.allSettled(matrixState.certifications.map(item => {
      return API.graphql(graphqlOperation(deleteCertification, { input: {id: item.id } } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataCertifications()
    })
  }

  async function updateCert(payload) {
    await API.graphql(graphqlOperation(updateCertification, { input: payload } ))
    getDataCertifications()
  }

  var certificationColumns = [
    {field: 'id',headerName: 'id',width: 50,editable: false},
    {field: 'operatorID',headerName: 'o',width: 60,editable: false},
    {field: 'skillID',headerName: 's',width: 50,editable: false},
    {field: 'meta',headerName: 'meta',width: 400,editable: false},
    {field: 'data',headerName: 'data',width: 400,editable: false},
    {field: 'createdAt',headerName: 'createdAt',width: 200,editable: false},
    {field: 'updatedAt',headerName: 'updatedAt',width: 200,editable: false},
  ]

  return (
      <div style={{display:'flex',flexDirection:'column',flex:1,border:'1px solid rgb(51, 124, 182)',margin:10}}>
        <div className='toolbar' style={{...styles.h,height:50,background:'rgb(51, 124, 182)',color:'white'}}>
          <div style={{fontSize:24,margin:10}}>Certifications</div>
        </div>
        <div className='toolbar' style={{...styles.h,height:40,marginTop: 5}}>
          <button style={{marginLeft:'40px',width:'120px',height:'30px'}}
            onClick={()=>onClickGenerateAllCertifications()}
          >
            Generate
          </button>
          <button style={{marginLeft:'340px',width:'250px',height:'30px'}}
            onClick={()=>onClickDeleteAllCertifications()}
          >
            Delete All Certifications From Database
          </button>
        </div>
        <div className='data' style={{...styles.h,flex:1,border:'0px solid red'}}>
          {matrixState.certifications !== [] &&
          <div style={{ ...styles.v,flex:1}}>
            <DataGrid
              onEditCellChangeCommitted={(params) => {
                var c = {
                  id: params.id,
                  certificationName: params.props.value
                }
                updateCert(c)
              }}
              headerHeight={25}
              rowHeight={25}
              hideFooter={true}
              pageSize={100}
              rows={matrixState.certifications}
              columns={certificationColumns}
              xcheckboxSelection
              xdisableSelectionOnClick
            />
          </div>
          }
        </div>
      </div>
  )
}

export default CsvDataCertification