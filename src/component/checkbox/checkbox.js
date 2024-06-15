import React from 'react'

import './checkbox.scss'

export default function Checkbox(props) {
  const { children, id, callback, isActive } = props

  return (
    <label htmlFor={id} className="checkbox">
      <input id={id} className="toggle" type="checkbox" onChange={callback} checked={isActive} />
      <span className="text">{children}</span>
    </label>
  )
}
