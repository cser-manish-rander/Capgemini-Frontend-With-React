import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, deleteUser, updateUser } from './feature/userSlice';

const ComponentRTK1 = () => {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  let data = useSelector(prev => prev)

  const handleSubmit = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      // UPDATE
      dispatch(updateUser({ index: editIndex, newValue: input }))
      setEditIndex(null)
    } else {
      // ADD
      dispatch(adduser(input))
    }
     setInput("")
  }
    // console.log(data);
    let dispatch = useDispatch()

    return (
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSubmit}>
          {editIndex !== null ? "Update User":"Add User"}
        </button>

        <ul>
          {data.user.user.map((item, index) => {
            return <li key={index}>{item}

              <button onClick={()=>{
                setInput(item)
                setEditIndex(index)
              }}>
                Edit
              </button>
              <button onClick={() => {
                dispatch(deleteUser(index));
              }}>Delete</button>
            </li>
          })}
        </ul>

      </div>
    )
  }

  export default ComponentRTK1
