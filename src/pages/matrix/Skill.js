import React from 'react';

export const Skill = React.memo((props) => {
  const {skill} = props;
  return (
    <div>this is the {skill.text} form</div>
  )
})
