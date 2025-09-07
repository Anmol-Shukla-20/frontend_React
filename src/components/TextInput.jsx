import React from 'react'

const TextInput = ({label,id,type}) => {
  return (
    <div>
        <label htmlFor = {id}>{label}</label>
        <input 
        className = 'border rounded px-4 py-2 w-full'
        type = {type} id = {id}/>
    </div>
  )
}

export default TextInput;