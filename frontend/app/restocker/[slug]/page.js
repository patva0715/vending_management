'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const [machine, setMachine] = useState({})
  const fetchItem = async () => {
    const data = await fetch(`http://localhost:5001/machine/${params.slug}`).then((res) => res.json())
    setMachine(data)
  }
  useEffect(() => {
    fetchItem()
  }, [params.slug])
  return (
    <div>
      <div className='p-6 bg-gray-600 text-3xl text-white mb-4'>
        <h1 className='max-w-xl mx-auto'>Restocking Machine #{params.slug}</h1>
      </div>
      <div className='flex flex-col max-w-xl mx-auto gap-2'>
        {machine.items && machine.items.map((item, index) => (
          <button key={index} className='disabled:bg-gray-300 bg-gray-200 dark:bg-green-500 border-4 p-2 flex items-center' >
            {/* <div className=''>
              <div>
                <Image alt='icon' src='/icons/chips-1.png' width={100} height={100} className='icon' />
              </div>
            </div> */}
            <div className='self-stretch'>
              <Indicator itemStock={item.stock}/>
            </div>
            <div className='grow text-left flex flex-col'>
              <span className='text-lg font-bold'>{item.name}</span>
              <span>stock: {item.stock}</span>
            </div>
            <div>
              <button className='bg-slate-500 p-2 rounded-sm text-green-50 mr-1'>Add</button>
              <button className='bg-red-400 p-2 rounded-sm text-green-50'>Remove</button>
            </div>

          </button>
        ))}
      </div>
    </div>
  )
}
const Indicator = ({itemStock}) => {
  const [color,setColor] = useState('green') 
  useEffect(()=>{
    if(itemStock==0)setColor('red')
    else if(itemStock<3) setColor('orange')
    else setColor('green')
  },[itemStock])
  return (
    <div className='min-w-[15px] h-full mr-2 rounded-sm opacity-80' style={{backgroundColor:color}}></div>

  )
}
export default page