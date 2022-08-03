import React from 'react'

import Counter from '../counter/counter.component'

const DimensionSelector = ({ min, max, initialValue, onHeightChange, onWidthChange }) => {
  return (
    <div className="card">
      <p className="title center mb-16">Dimensiones</p>
      <div className="flex">
        <div className="flex">
          <label htmlFor="height" className="label mr-8">Alto</label>
          <Counter
            min={min}
            max={max}
            initial={initialValue}
            onValueChange={onHeightChange}
          />
        </div>
        <div className="flex">
          <label htmlFor="width" className="label mr-8">Ancho</label>
          <Counter
            min={min}
            max={max}
            initial={initialValue}
            onValueChange={onWidthChange}
          />
        </div>
      </div>
    </div>
  )
}

export default DimensionSelector
