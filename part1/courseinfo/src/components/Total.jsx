import React from 'react'

export const Total = ({parts}) => {
	const numTotal = parts[0].exercises + parts[1].exercises + parts[2].exercises
	return (
    	<p>Number of exercises {numTotal}</p>
  	)
}
