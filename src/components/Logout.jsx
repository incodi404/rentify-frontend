import React, { useEffect } from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import { SERVER_LINK } from '@/constant'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '@/store/authSlice'

function Logout() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function userLogout() {
        const res = await axios({
            url: `${SERVER_LINK}/user/logout`,
            method: "get",
            withCredentials: true
        })

        dispatch(logout())
        navigate("/")
    }

  return (
    <Button variant="ghost" onClick={userLogout} className="w-full text-red-600">Log Out</Button>
  )
}

export default Logout