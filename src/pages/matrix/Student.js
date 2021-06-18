import React from 'react';

export const Student = React.memo((props) => {
  const {student} = props;
  return (
    <div>and this is the {student.text} form</div>
  )
})
