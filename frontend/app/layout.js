'use client'
import { useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Vending Master',
//   description: 'Group Project',
// }

export default function RootLayout({ children }) {
  const [theme,setTheme] = useState('light')
  const changeTheme=()=>{
    if (theme=='dark') setTheme('light')
    else setTheme('dark')
  }
  return (
    <html lang="en" className={theme} >
      <body 
      // className={inter.className}
      >

        
        <div className='text-black dark:text-white bg-gray-100 dark:bg-black min-h-screen '>
          <div className='fixed top-0'>
            <button onClick={()=>changeTheme()} className='opacity-5'>__</button>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
