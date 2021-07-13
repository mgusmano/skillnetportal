import React, { useState } from 'react';
import { Matrix } from './Matrix';
import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
import { styles } from './styles';

export const RightTotalsSheet = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  const {col1,row2,fontsize,bandY} = matrixState.dimensions;

  return (
    <div></div>
  )
}
