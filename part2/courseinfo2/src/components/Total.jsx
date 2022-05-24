import React from 'react'

export const Total = ({parts}) => {
	const numTotal = (parts.map(item=>item.exercises)).reduce((a,b) => a + b)
	return (
    	<p>Number of exercises total {numTotal}</p>
  	)
}
