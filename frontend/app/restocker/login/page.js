'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { login } from '@/states/actions/userActions'

const Page = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const router = useRouter()

    const handleSubmit = () => {
        // dispatch(login({ username, password }))
        router.pusy('/restocker')
        return
    }


    useEffect(() => {

        // if (user.isAuth) router.push('/restocker')
        // if (user.error) setError("Invalid username or password.")
        // if (user.error) setError(user.error);
    }, [user])

    return (
        <div className="bg-gray-200 dark:bg-black flex flex-col items-center justify-center mx-auto grow w-full ">
            <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 max-w-5xl'>
                <h1 className="text-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
                    Restocker Panel
                </h1>
                {error && <div className='my-2 flex bg-red-200 text-red-900 p-2 sm:p-3 rounded-sm md:rounded-md'>
                    <span className='grow'>{error}</span>
                    <button onClick={() => setError("")}>X</button>
                </div>}

                <div className="w-full bg-white rounded-sm md:rounded-md  dark:bg-gray-950 dark:border-gray-700">
                    <div className="p-6  sm:p-8 flex flex-col gap-2">
                        <div>
                            <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                            <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white " placeholder="username" required="" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white " required="" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="flex items-center justify-between">
                        </div>
                        <button
                            className='bg-blue-200 p-2 rounded-sm'
                            onClick={() => handleSubmit()}
                        >
                            Sign in
                        </button>
                        <button
                            className='underline rounded-sm w-min p-2 place-self-end text-sm'
                            onClick={() => {
                                setUsername('admin1')
                                setPassword('admin')
                            }}
                        >
                            Admin
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page