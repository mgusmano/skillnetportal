import React, { useEffect } from 'react';
import { SimpleProvider } from './state/SimpleProvider';
import { useSimpleState } from './state/SimpleProvider';
//import { useAppState } from '../../state/AppProvider';
import LoadingOverlay from 'react-loading-overlay';
import { North } from './North'
import { Data } from './Data'
import { South } from './South'

export const Simple = (() => (<SimpleProvider><Main/></SimpleProvider>))

const Main = (() => {
  const simpleState = useSimpleState();
  //const appState = useAppState();

  useEffect(() => {
    simpleState.setActive(true)
    simpleState.setAll(false,false)
  },[])

  return (
    <LoadingOverlay
      styles={{wrapper: {width:'100%',height:'100%',zIndex:'10'}}}
      active={simpleState.active}
      spinner
      text='Loading...'
    >
      <div className='app' style={{...simpleState.styles.v,width:'100%',height:'100%'}}>
        <div className='north' style={{...simpleState.styles.v,height:'50px'}}>
          <North/>
        </div>
        <div style={{...simpleState.styles.h,flex:1,overflow:'hidden'}}>
          <div className='west' style={{...simpleState.styles.v,width:'200px',height:'100%',background:'rgb(51, 124, 182)'}}>
            {simpleState.userName}
          </div>
          <div className='center' style={{...simpleState.styles.v,flex:1,width:'100%',height:'100%',overflow:'auto'}}>
            <Data/>
          </div>
          <div className='east' style={{...simpleState.styles.v,width:'200px',height:'100%'}}>
            {simpleState.userName}
          </div>
        </div>
        <div className='south' style={{height:'50px'}}>
          <South/>
        </div>
      </div>
    </LoadingOverlay>
  )
})