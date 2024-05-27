import React from 'react'
import { useSelector } from 'react-redux'

function UserInfo({
    firstName,
    lastName
}) {

  return (
    <div>
        <h3>{`${firstName?.toUpperCase()} ${lastName?.toUpperCase()}`}</h3>
    </div>
  )
}

export default UserInfo