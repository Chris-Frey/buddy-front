import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const ProfileEdit = ({currentUser}) => {

  const { id } = useParams

    const [changeUser, setChangeUser] = useState({
      name: currentUser?.name,
      username: currentUser?.username,
      genderIdentity: currentUser?.genderIdentity


    })
    const handleChange = (e) => {
      console.log(e.target.value);
      setChangeUser({...changeUser, [e.target.name]: e.target.value})
    }

  return (
    <>
    <div>ProfileEdit</div>
    <div>
      <label>Name: </label>
      <input
      onChange={handleChange}
      type='text'
      name='name'
      placeholder={currentUser?.name}
      />
    </div>
    <div>
      <label>Username: </label>
      <input
      onChange={handleChange}
      type='text'
      name='username'
      placeholder={currentUser?.username}
      />
    </div>
    <div>
      <label>Gender Identity: </label>
      <input
      onChange={handleChange}
      type='text'
      name='gender'
      placeholder={currentUser?.genderIdentity}
      />
    </div>
    <div>
      <NavLink to={`/buddyprofile/${id}`}>
        <button>CANCEL</button>
      </NavLink>

      <NavLink to={`/buddyprofile/${id}`}>
        <button >SAVE</button>
      </NavLink>
    </div>
  </>
  )
}

export default ProfileEdit