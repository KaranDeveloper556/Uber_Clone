import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../../contex/UserContext'

const UserLogin = () => {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const { Data, setData } = useContext(UserDataContext)
  const navigate = useNavigate()


  const SubmitHandle = async (e) => {
    e.preventDefault()

    const UpdatedUserData = {
      email: Email,
      password: Password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, UpdatedUserData, { withCredentials: true })
    if (response.status === 200 || response.status === 201) {
      const data = response.data
      setData(data.user)
      console.log(response.data);
      const token = data.token.accessToken || data.token.jwt || data.token;
      localStorage.setItem("token", token);
      navigate('/home')
    }

    setPassword("")
    setEmail("")
  }

  return (
    <section className="user-login relative min-h-screen min-w-dvh">
      <div className="relative mb-auto pt-4 ml-4">
        <img src="/uber-logo-black.png" alt="uber-logo" className="h-10" />
      </div>
      <form onSubmit={(e) => SubmitHandle(e)} className="p-4 pb-2 relative mt-8 mx-auto">
        <div className="mb-2">
          <label htmlFor="email-input" className="block mb-2 text-lg font-medium text-black">Email</label>
          <input
            type="email"
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-sm focus:ring-blue-500"
            id="email-input"
            value={Email}
            autoComplete='email'
            placeholder='Enter email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-lg font-medium text-black">Password</label>
          <input
            type="password"
            className="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2"
            id="base-input"
            value={Password}
            autoComplete='current-password'
            placeholder='Enter password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="py-4 px-5 w-full rounded-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold"> Login As User</button>
        </div>
      </form>
      <div className="register-ask text-center mt-4 mb-4">
        <p>create new account ? <Link to={'/user-register'} className='text-blue-800 font-bold'>Register account</Link></p>
      </div>
      <div className="relative bottom-0 buttons text-center">
        <Link to={"/captain-login"} className="inline-block py-4 w-[92%] rounded-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold"> Login As Captain </Link>
      </div>
    </section>
  )
}

export default UserLogin