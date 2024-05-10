import React from 'react'
import {assets} from '../assets/assets'
export default function Navbar() {
  return (
    <nav>
        <div className='flex justify-between items-center bg-gradient-to-l from-green-400 to-green-200 p-3'>
            <img src={assets.oruva} alt="Logo" className='w-28 ' />
            <ul className='flex gap-3 items-center'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Mobile-app</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        
    </nav>
  )
}
