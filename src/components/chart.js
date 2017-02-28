import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

const average = (data) => _.round(_.sum(data) / data.length)

const Chart = ({ data, height, weight, color, units }) => (
  <div>
    <Sparklines
      data={ data }
      height={ height || 120 }
      width={ weight || 180 }>
      <SparklinesLine color={ color } />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>Average: { `${average(data)} ${ units }` }</div>
  </div>
)

export default Chart