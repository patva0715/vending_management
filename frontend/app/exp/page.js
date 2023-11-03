"use client"
import React, { useState, useRef, useEffect, useMemo } from 'react'
import Panel from './panel'
const items = [{
    name: "Doritos",
    stock: 10,
    price: 1.29,
    id: 1,
    icon: '/icons/chips-1.png'
}, {
    name: "Doritos",
    stock: 10,
    price: 1.29,
    id: 2,
    icon: '/icons/chips-2.png'
}, {
    name: "Doritos",
    stock: 10,
    price: 1.29,
    id: 3,
    icon: '/icons/chips-3.png'
}, {
    name: "Doritos",
    stock: 10,
    price: 1.29,
    id: 4,
    icon: '/icons/chips-3.png'
}, {
    name: "Doritos",
    stock: 10,
    price: 1.29,
    id: 5,
    icon: '/icons/chips-3.png'
}, {
    name: "Sneakers",
    stock: 10,
    price: 1.29,
    id: 6,
    icon: '/icons/chips-3.png'
}, {
    name: "Cookies",
    stock: 10,
    price: 1.29,
    id: 7,
    icon: '/icons/energy-bar.png'
}, {
    name: "Cheetos",
    stock: 10,
    price: 1.29,
    id: 8,
    icon: '/icons/energy-bar.png'
}, {
    name: "Ruffles",
    stock: 10,
    price: 1.29,
    id: 9,
    icon: '/icons/energy-bar.png'
}, {
    name: "Ruffles",
    stock: 10,
    price: 1.29,
    id: 10,
    icon: '/icons/energy-drink.png'
}, {
    name: "Ruffles",
    stock: 10,
    price: 1.29,
    id: 11,
    icon: '/icons/energy-drink.png'
}, {
    name: "Ruffles",
    stock: 10,
    price: 1.29,
    id: 12,
    icon: '/icons/energy-drink.png'
}, {
    name: "Ruffles",
    stock: 10,
    price: 1.29,
    id: 13,
    icon: '/icons/soda-1.png'
}, {
    name: "Ruffles",
    stock: 10,
    price: 1.29,
    id: 14,
    icon: '/icons/soda-1.png'
}, {
    name: "Ruffles",
    stock: 10,
    price: 1.29,
    id: 15,
    icon: '/icons/soda-1.png'
},]
const page = () => {
    const [selected, setSelected] = useState({
        name: "_________",
        price: 0.00,
        id: 1,
        icon: ''
    })
    const previousValue = useRef(null);
    const [payment, setPayment] = useState("cash")
    const [credit, setCredit] = useState(0)
    const [msg, setMsg] = useState('')
    const changeSelected = (item, e) => {
        setSelected({ ...item, target: e.target })
        e.target.classList.add("bg-gray-300")
        try { previousValue.current.target.classList.remove("bg-gray-300") } catch { }
    }
    const vend = (item) =>{
        if(item.price>credit){
            setMsg("Not enough credit")
            return
        }
        setMsg(`Vending \n Change:$${credit-item.price}`)
        setCredit(0)
        setSelected({price:0})

    }
    useEffect(() => {
        previousValue.current = selected;
    }, [selected]);

    return (
        <div className='w-[100vw] bg-black text-black flex items-center justify-center h-screen'>
            <div className='max-w-[1200px] xs:w-full sm:w-[70%] h-full max-h-full aspect-square flex bg-slate-600 rounded-md p-10 pr-2'>
                <div className='flex grow flex-wrap basis-5/6 overflow-scroll bg-white rounded-md'>
                    {items.map((item, index) => (
                        <div key={index} className='w-1/3 max-w-[1/3] p-2 aspect-square flex flex-col'>

                            <button className='p-4 flex flex-col h-full items-stretch rounded- overflow-hidden  text-white  hover:scale-[102%] duration-300'
                                onClick={(x) => vend(item, x)}
                            >
                                <div className='p-2 pointer-events-none grow overflow-hidden '>
                                    {/* <Image src={`https://picsum.photos/id/${index * 11}/200`} /> */}
                                    <Image src={item.icon} />

                                </div>
                                <div className='pointer-events-none rounded-sm py-1 flex flex-col bg-black  grow text-xs'>
                                    <span>{item.name}</span>
                                    <span>${item.price}</span>
                                </div>

                            </button>

                        </div>
                    ))}
                </div>

                <div className='grow basis-1/4 p-3 flex flex-col justify-center '>
                    <Panel selected={selected} Image={Image}
                    credit={credit}
                    setCredit={setCredit}
                    msg={msg}
                    setMsg={setMsg}/>

                    
                </div>
            </div>
        </div>
    )
}
const Image = React.memo(function Image({ src }) {
    return <img src={src} className="object-contain h-full w-full object-center grayscale-[35%]" />;
});
export default page