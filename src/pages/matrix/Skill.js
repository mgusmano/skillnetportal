import React from 'react';

export const Skill = React.memo((props) => {
  const {skill,num} = props.skillData

  const result = num % 2;
  var src;
  if (result == 1) {
    src="https://app.swipeguide.com/guide/example-guide-line-1-wort-cooling-wort-aeration/safety/attach-lock/2"
  }
  else {
    src="https://app.swipeguide.com/guide/multipacker-ocme/getting-started/copy%20500e%20of%20prepare-the-machine"
  }
  return (
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
      <div style={{height:'50px',fontSize:'24px'}}>{skill.text}</div>
      <iframe
        width="100%"
        style={{flex:'1',border:'1'}}
        src={src}
        xsrc={"https://app.swipeguide.com/embed/guide/46e3b328-9e74-4875-a774-99418940d9f4/279b3f82-e4e1-4468-b166-419372c57c39?embed=true&locale=EN_US&isolatedInstruction=true"}>
      </iframe>
    </div>


  )
})
