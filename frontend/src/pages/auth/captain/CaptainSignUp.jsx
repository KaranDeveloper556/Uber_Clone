import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [CaptainData, setCaptainData] = useState({})

  const SubmitHandle = (e) => {
    e.preventDefault()
    const UpdatedCaptainData = {
      fullName: {
        firstName: FirstName,
        lirstName: LastName,
      },
      email: Email,
      password: Password
    }
    setCaptainData(UpdatedCaptainData)
    setPassword("")
    setEmail("")
    setFirstName("")
    setLastName("")
  }

  useEffect(() => {
    console.log(CaptainData)
  }, [CaptainData])

  return (
    <section className="captain-login w-full relative min-h-screen min-w-dvh">
      <div className="relative mb-auto pt-4 ml-4">
        <img src="/uber-logo-black.png" alt="uber-logo" className="h-10" />
      </div>
      <form onSubmit={(e) => SubmitHandle(e)} className="relative w-full p-4 pb-2 mt-8 mx-auto">
        <div className="mb-2 relative w-full flex justify-center items-center flex-col">
          <div className="firstname-input relative w-full mb-2" id="firstName">
            <label htmlFor="first-input" className="inline-block relative w-full mb-2 text-lg font-medium text-black">Captain's First Name</label>
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
            <label htmlFor="last-input" className="inline-block relative w-full mb-2 text-lg font-medium text-black">Captain's Last Name</label>
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
          <label htmlFor="email-input" className="block mb-2 text-lg font-medium text-black">Captain's Email</label>
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
          <label htmlFor="base-input" className="block mb-2 text-lg font-medium text-black">Captain's Password</label>
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
          <button type="submit" className="py-4 px-5 w-full rounded-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold"> Create Account As Captain</button>
        </div>
      </form>
      <div className="register-ask text-center mt-4 mb-4">
        <p>already have captain account ? <Link to={'/captain-login'} className='text-blue-800 font-bold'>Login Captain Account</Link></p>
      </div>
      <div className="relative bottom-0 buttons text-center">
        <Link to={"/user-register"} className="inline-block py-4 w-[92%] rounded-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold"> Register As User </Link>
      </div>
    </section>
  )
}

export default CaptainSignUp