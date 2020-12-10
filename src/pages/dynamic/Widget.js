import React from 'react'

const Widget = (props) => {
    
    return (
      
        <div key={index} data-grid={layoutitem}
        style={{
          display:'flex',
          flexDirection:'column',
          border:'1px solid lightgray',
          background:'whitesmoke',
          userSelect:'none',
          padding:'5px',
          margin:'0',
          borderRadius:'5px',
          boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19)'
      }}>
        <div 
          style={{
            background: 'rgb(5,55,75)',
            color: 'white',
            borderBottom: '0px solid lightgray',
            borderRadius: '5px 5px 0 0',
            fontSize: '18px',
            padding: '10px 0 10px 5px',
            height: '20px',
            display:'flex',
            justifyContent:'space-between',
        }}>
          <div className="layout-item-dragger" style={{cursor:'move',flex:'1',fontSize: '11px',fontWeight:'bold',paddingTop:'3px',marginLeft:'5px'}}>title</div>
          <Tools/>
        </div>         
        <ReactChildWindow></ReactChildWindow>     
        <div>footer</div>          
      </div>


    )
}
export default Widget