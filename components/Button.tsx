import React from 'react'

function ButtonLogin({ handleClick, children, ...props }: any) {
  return (
    <div>
      <button
      {...props}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  )
}

export default ButtonLogin
