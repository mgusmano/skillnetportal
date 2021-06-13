import React from 'react';
import './Slice.css'

export const Slice = React.memo((props) => {

  const { transform, angle, radius, ...rest } = props
  const r = radius
  const dx = r * Math.sin(angle)
  const dy = r * (1 - Math.cos(angle))
  return (
    <path
      {...rest}
      className="slice"
      onClick={(e) => {
        console.log('click')
      }}
      onMouseEnter={() => console.log('over')}
      strokeOpacity="1"
      d={`M${r} ${r}V0a${r} ${r} 0 0 1 ${dx} ${dy}z`}
    />
  )
})