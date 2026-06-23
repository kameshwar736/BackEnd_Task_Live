import React from 'react'

const withHigherComponent = (WrappedComponent) => (props)=> {
  return <WrappedComponent {...props}/>
}

export default withHigherComponent