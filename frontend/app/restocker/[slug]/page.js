'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const machine_dict = {
  1: {
    id: 1,
    items: [
      {
        name: "Doritos",
        stock: 8,
        price: 3,
        id: 1,
        icon: "/icons/chips-1.png",
      },
      {
        name: "Ruffles",
        stock: 0,
        price: 1.5,
        id: 2,
        icon: "/icons/chips-2.png",
      },
      {
        name: "Sneakers",
        stock: 3,
        price: 2.29,
        id: 3,
        icon: "/icons/chips-3.png",
      },
      {
        name: "Pop-Tarts",
        stock: 9,
        price: 1.29,
        id: 4,
        icon: "/icons/chips-3.png",
      },
      {
        name: "SunChips",
        stock: 5,
        price: 1.29,
        id: 5,
        icon: "/icons/chips-3.png",
      },
      {
        name: "Granola Bars",
        stock: 2,
        price: 1.29,
        id: 6,
        icon: "/icons/chips-3.png",
      },
      {
        name: "Cookies",
        stock: 2,
        price: 1.29,
        id: 7,
        icon: "/icons/energy-bar.png",
      },
      {
        name: "Cheetos",
        stock: 10,
        price: 1.29,
        id: 8,
        icon: "/icons/energy-bar.png",
      },
      {
        name: "Ruffles",
        stock: 8,
        price: 1.29,
        id: 9,
        icon: "/icons/energy-bar.png",
      },
    ],
    theme: {
      primary_color: "#444",
    },
    properties: {
      location: "1234 Foo st., Anaheim",
      Status: "Operational",
    },
  },
  2: {
    id: 2,
    items: [
      {
        name: "Gatorade",
        stock: 8,
        price: 3,
        id: 10,
        icon: "/icons/energy-drink.png",
      },
      {
        name: "Iced Tea",
        stock: 3,
        price: 2,
        id: 11,
        icon: "/icons/energy-drink.png",
      },
      {
        name: "Monster",
        stock: 7,
        price: 1.29,
        id: 12,
        icon: "/icons/energy-drink.png",
      },
      {
        name: "Water",
        stock: 10,
        price: 1.29,
        id: 13,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Sprite",
        stock: 10,
        price: 1.5,
        id: 14,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
    ],
    theme: {
      primary_color: "#33c",
    },
  },
  3: {
    id: 3,
    items: [
      {
        name: "Chips Ahoy",
        stock: 2,
        price: 2.49,
        id: 13,
        icon: "/icons/cookies.png",
      },
      {
        name: "Pepsi",
        stock: 15,
        price: 1.99,
        id: 14,
        icon: "/icons/soda.png",
      },
      {
        name: "Oatmeal",
        stock: 4,
        price: 3.49,
        id: 15,
        icon: "/icons/oatmeal.png",
      },
      {
        name: "Yogurt",
        stock: 10,
        price: 1.79,
        id: 16,
        icon: "/icons/yogurt.png",
      },
      {
        name: "Oranges",
        stock: 0,
        price: 0.79,
        id: 17,
        icon: "/icons/fruit.png",
      },
      {
        name: "Cereal",
        stock: 0,
        price: 2.99,
        id: 18,
        icon: "/icons/cereal.png",
      },
      {
        name: "Bottled Water",
        stock: 18,
        price: 0.99,
        id: 19,
        icon: "/icons/water.png",
      },
      {
        name: "Frozen Pizza",
        stock: 3,
        price: 4.99,
        id: 20,
        icon: "/icons/pizza.png",
      },
      {
        name: "Ice Cream",
        stock: 8,
        price: 3.49,
        id: 21,
        icon: "/icons/ice-cream.png",
      },
      {
        name: "Cucumbers",
        stock: 10,
        price: 0.99,
        id: 22,
        icon: "/icons/vegetables.png",
      },
      {
        name: "Soda",
        stock: 12,
        price: 1.49,
        id: 23,
        icon: "/icons/soda.png",
      },
      {
        name: "Eggs",
        stock: 14,
        price: 2.29,
        id: 24,
        icon: "/icons/eggs.png",
      },
    ],
    theme: {
      primary_color: "#666",
    },
    properties: {
      location: "5678 Bar St., Springfield",
      Status: "Operational",
    },
  },
};
const Page = ({ params }) => {
  const [machine, setMachine] = useState({})
  const fetchItem = async () => {
    setMachine(machine_dict[params.slug])
    return
    const data = await fetch(`http://localhost:5001/machine/${params.slug}`).then((res) => res.json())
    setMachine(data)
  }
  useEffect(() => {
    fetchItem()
  }, [params.slug,fetchItem])
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
              <button className='bg-slate-500 p-2 rounded-sm text-green-50 mr-1'>Modify</button>
              {/* <button className='bg-red-400 p-2 rounded-sm text-green-50'>Remove</button> */}
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
export default Page