import React from 'react';
// import Papa from 'papaparse';
// import { DataGrid } from '@material-ui/data-grid';
// import { API, graphqlOperation } from 'aws-amplify'
// import { createOperator, deleteOperator, updateOperator } from '../../graphql/mutations'
// import { listOperators } from '../../graphql/queries'
import { styles } from './styles';
import CsvDataOperator from './CsvDataOperator';
import CsvDataSkill from './CsvDataSkill';

const CsvData = (props) => {
  return (
    <div className='app' style={{...styles.v,width:'100%',height:'100%'}}>
      <CsvDataOperator/>
      <CsvDataSkill/>
    </div>
  )
}

export default CsvData