'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [uname, setUname] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = () => {
    console.log("HELLO")
    router.push('/restocker')
  }

  return (
    <div className="bg-gray-50 dark:bg-black flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
        Restocker Panel
      </h1>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-950 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1> */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="name@company.com" required="" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " required="" />
          </div>
          <div className="flex items-center justify-between">
          </div>
          <button
          className='bg-blue-200 p-4 rounded-sm'
            onClick={() => handleSubmit()}
          // className="w-full text-black dark:text-white bg-blue-200 dark:bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Sign in
          </button>

        </div>
      </div>
    </div>
  )
}

export default Page