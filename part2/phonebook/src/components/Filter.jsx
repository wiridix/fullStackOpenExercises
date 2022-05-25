import React from 'react'

export const Filter = ({handle}) => {
  return (
    <div>filter shown with <input type="text" onChange={handle} /></div>
  )
}
