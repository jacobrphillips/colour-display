import React from 'react'
import './Square.css'

const Square = ({ currentColor }) => {
  return (
    <div>
      {currentColor.length ? (
         <div className='color-square' style={{ backgroundColor: currentColor }}>
              <span>{currentColor}</span>
          </div>
          ) : (
            <div className='color-square'>
            <span>Empty Value</span>
        </div>
          )}
    </div>
  )
}

export default Square