'use client'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'

const Page = () => {
  const [machineIds, setMachineIds] = useState([])
  const fetchIds = async () => {
    try {
      const data = await fetch("http://localhost:5001/machine").then((res) => res.json())
      setMachineIds(data)
    } catch (err) {
      console.log(err.message)
    }

  }
  useEffect(()=>{fetchIds()},[])
  return (
    <div className=" dark:bg-black  h-screen">

      <div className='bg-gray-600 p-6 text-white text-3xl flex'>
        <div className='grow'>
          <h1>Restocker John Doe</h1>
        </div>
        <div className='text-base'>
          <button>Profile</button>
        </div>
      </div>

      <div className='flex flex-col justify-start mx-auto max-w-7xl p-6'>
        <h1 className='text-xl'>Machines to restock</h1>
        <div className='flex flex-col w-full '>
          {machineIds.map((value,index) => (
            <div key={index} className='p-2 '>
              <Link href={`/restocker/${value}`} className='w-full hover:bg-blue-300 p-2 rounded-md bg-gray-300 flex flex-col'>
                <span className='text-lg font-semibold'>Machine #{value}</span>
                <span className='text-red-600 font-semibold'>Empty slots: 3</span>
                <span className='text-orange-400 font-semibold'>Low in stock: 2</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Page