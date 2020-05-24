import React from 'react'

export default function Update(props) {
  return (
    <div className='update'>
      <input name="updatedZip" type="text" placeholder='10036'
                 value={props.value} onChange={props.handleChange}
      />
      <button onClick={props.handleUpdate}>Update</button>
    </div>
  )
}