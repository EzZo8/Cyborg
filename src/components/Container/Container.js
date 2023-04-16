import React from 'react'
import './Container.css'


const Container = (props) => {
  return (
    <div className='container mt-93px main-container'>
     {props.children}
    </div>
  )
}

export default Container
