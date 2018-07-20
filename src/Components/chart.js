import React, { Fragment } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

const average = (data) =>
    _.round(_.sum(data)/data.length)

const Chart = ({ data, height, width, color, limit, units }) => {
  return(
    <Fragment>
      <Sparklines data={data} height={height} width={width} limit={limit}>
        <SparklinesLine color={color}/>
        <SparklinesReferenceLine type="avg"/>
       </Sparklines>
       <div>{ average(data) } {units}</div>
    </Fragment>
  )
}

export default Chart
