import React from 'react'
import {Search} from "lucide-react"

export const Header = () => {
  return (
    <header className='px-5 py-2 flex justify-between items-center bg-white'>
        <div>
            <h1 className='font-semibold'>WEBSCRAPPING</h1>
        </div>
        <div>
            <ul className="flex gap-6 items-center">
                <li className='font-normal text-sm hover:text-gray-500 transition duration-75 cursor-pointer'>Inicio</li>
                <li className='font-normal text-sm hover:text-gray-500 transition duration-75 cursor-pointer'>Política</li>
                <li className='font-normal text-sm hover:text-gray-500 transition duration-75 cursor-pointer'>Nacional</li>
                <li className='font-normal text-sm hover:text-gray-500 transition duration-75 cursor-pointer'>Internacional</li>
            </ul>
        </div>
        <div className="bg-[#EAEAEA] p-2 pr-4 rounded-2xl flex gap-4 items-center">
            <input type="text" placeholder="Pesquisar" className="bg-transparent px-4 outline-none border-none" />
            <Search size={20} color="gray" />
        </div>
    </header>
  )
}
