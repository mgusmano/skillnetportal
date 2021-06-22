import React, { useEffect } from 'react';
import { useModal } from "react-modal-hook";
import PieDetailsDialog from './PieDetailsDialog'

export const MatrixCell = React.memo(({rowid, colid, bandX, bandY, type, data, widgetData, clickFunction,x, stroke}) => {

  var sColor = 'black'
  useEffect(() => {
    //console.log(stroke)
    if (stroke !== undefined) {
      sColor = stroke;
    }
  });


  const [showModalPieDetails, hideModalPieDetails] = useModal(({ in: open, onExited }) => (
    <PieDetailsDialog
      widgetData={widgetData}
      type={type}
      data={data}
      rowid={rowid}
      colid={colid}
      showModal={showModalPieDetails}
      hideModal={hideModalPieDetails}
      onExited={onExited}
      open={open}
    />
  ));

  return (
    <rect
      rowid={rowid}
      colid={colid}
      opacity="0"
      fillOpacity=".5"
      x={x}
      width={bandX}
      height={bandY}
      style={{fill:'rgb(0,0,255)',strokeWidth:'3',stroke:sColor}}
      onClick={(e) => {
        {clickFunction !== undefined && clickFunction(e,colid,rowid,type,data)}
        // {clickFunction == undefined && showModalPieDetails(e)}
      }}
      onMouseEnter={(e) => {
        //console.log(testID)
        //let testid = e.target.getAttribute('testid');
        //let studentid = e.target.getAttribute('studentid');
        e.target.style.opacity = '.5'
      }}
      onMouseOut={(e) => {
        e.target.style.opacity = '0'
      }}
    />
  )
})