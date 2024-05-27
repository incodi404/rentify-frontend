import React from 'react'

function Container({children}) {
  return (
    <div className='flex flex-col justify-center items-center px-5'>{children}</div>
  )
}

export default Container