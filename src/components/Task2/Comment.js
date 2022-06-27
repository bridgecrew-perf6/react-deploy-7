import React from 'react'

export default function Comment(props) {
  console.log(props.children)
  return (
    <div className='box'>
        {props.children}
    </div>
  )
}