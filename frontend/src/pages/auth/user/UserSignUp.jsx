import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../../../contex/UserContext'

const UserSignUp = () => {

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const navigate = useNavigate()

  const { Data, setData } = useContext(UserDataContext)

  const SubmitHandle = async (e) => {
    e.preventDefault()

    const UpdatedUserData = {
      fullName: {
        firstName: FirstName,
        lastName: LastName,
      },
      email: Email,
      password: Password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, UpdatedUserData)
    if (response.status === 201) {
      const data = response.data
      setData(data.user)
      localStorage.setItem("token", data.token)
      navigate('/home')
    }

    setPassword("")
    setEmail("")
    setFirstName("")
    setLastName("")
  }

  return (
    <section className="user-login w-full relative min-h-screen min-w-dvh">
      <div className="relative mb-auto pt-4 ml-4">
        <img src="/uber-logo-black.png" alt="uber-logo" className="h-10" />
      </div>
      <form onSubmit={(e) => SubmitHandle(e)} className="relative w-full p-4 pb-2 mt-8 mx-auto">
        <div className="mb-2 relative w-full flex justify-center items-center flex-col">
          <div className="firstname-input relative w-full mb-2" id="firstName">
            <label htmlFor="first-input" className="inline-block relative w-full mb-2 text-lg font-medium text-black">First Name</label>
            <input
              type="text"
              className="inline-block w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-sm focus:ring-blue-500"
              id="first-input"
              value={FirstName}
              autoComplete='firstName'
              placeholder='Enter First Name'
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="lastname-input relative w-full" id="lastName">
            <label htmlFor="last-input" className="inline-block relative w-full mb-2 text-lg font-medium text-black">Last Name</label>
            <input
              type="text"
              className="inline-block w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-sm focus:ring-blue-500"
              id="last-input"
              value={LastName}
              autoComplete='lastName'
              placeholder='Enter Last Name'
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="email-input" className="block mb-2 text-lg font-medium text-black">Email</label>
          <input
            type="email"
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-sm focus:ring-blue-500"
            id="email-input"
            value={Email}
            autoComplete='userName'
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
          <button type="submit" className="py-4 px-5 w-full rounded-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold"> Create Account As User</button>
        </div>
      </form>
      <div className="register-ask text-center mt-4 mb-4">
        <p>already have account ? <Link to={'/user-login'} className='text-blue-800 font-bold'>Login Account</Link></p>
      </div>
      <div className="relative bottom-0 buttons text-center">
        <Link to={"/captain-register"} className="inline-block py-4 w-[92%] rounded-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold"> Register As Captain </Link>
      </div>
    </section>
  )
}

export default UserSignUp