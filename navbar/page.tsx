import React from 'react'

const Navbar = () => {
  return (
    

    <div className='bg-black h-12'>
        <div className='text-yellow-400 flex justify-between items-center'>
            <h1 className='text-xl m-2 cursor-pointer'>Navbar</h1>
            <ul className='flex gap-4 m-4 cursor-pointer'>
            <a className='hover:text-white'href="">Home</a>
                <a className='hover:text-white'href="">Contact</a>
                <a className='hover:text-white'href="">About</a>
                
                
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar