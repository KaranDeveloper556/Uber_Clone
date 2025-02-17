import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const logout = async () => {
            const token = localStorage.getItem('token')
            if (!token) return;

            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response.status === 200 || response.status === 201) {
                    localStorage.removeItem('token')
                    navigate('/user-login')
                }
            } catch (error) {
                console.error('Error during logout:', error)
            }
        }

        logout()
    }, [navigate])

    return (
        <div>
            User Log Out
        </div>
    )
}

export default UserLogout
