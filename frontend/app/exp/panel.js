'use-client'
import React, { useEffect, useState } from 'react'

const Panel = ({ selected, Image,credit,setCredit,msg,setMsg }) => {
    
    const handleAction = (value) =>{
        if(credit+value > 3){
            setMsg("Max credit reached")
        }else{
            setCredit((x)=>x+value)
        }
    } 
    useEffect(()=>{
        const timer = setTimeout(()=>setMsg(""),3000) 
        return(()=>clearTimeout(timer))
    },[msg])
    return (
        <>
            <div className='pointer-events-none flex flex-col text-center'>
                {/* <Image src={`https://picsum.photos/id/${selected.id * 11}/200/300`} /> */}
                <div className='bg-black aspect-video rounded-md text-green-300 flex flex-col'>
                    <span className='text-green-300'>Your credit: ${credit}</span>
                    <span>Item Price: ${selected.price}</span>
                    <span className='text-orange-300'>{msg}</span>

                </div>
                <div className='bg-white aspect-square p-4'>
                    {selected.icon && <Image src={selected.icon} />}

                </div>
            </div>


            <div className='flex flex-col mt-4 gap-2'>
                {[1, 5 ].map((value, index) => (
                <button onClick={()=>handleAction(value)} className='bg-green-300 p-2 text-center rounded-sm'>${value}</button>))}
                <button className='bg-red-200 rounded-sm p-2' onClick={() => setCredit(3)}>
                    Credit Card
                </button>
            </div>

        </>
    )
}

export default Panel