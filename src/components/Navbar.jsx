// complete status : done 
// responsive status : done

import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='h-12 w-full p-5 bg-slate-800 flex items-center justify-between'>
       <div className='text-white text-2xl font-bold'>
         &lt;Pass<span className='text-green-400'>Op</span>/&gt;
       </div>

       <div>
            <ul className='lg:flex hidden items-center gap-7 mr-20  text-white'>
            <li className='hover:text-green-400 cursor-pointer'>Home</li>
            <li className='hover:text-green-400 cursor-pointer'>About</li>
            <li className='hover:text-green-400 cursor-pointer'>Contact</li>
            </ul>
            <div className={`lg:hidden flex`} onClick={()=>setToggle(true)}>
        <img className='invert' src="/hamburger.svg" alt=" hamburger image"  width={20} height={20}/>
       </div>
       </div>

       <div className={`h-screen w-full bg-slate-800 fixed top-0 right-0 text-white flex flex-col gap-5  p-5 lg:hidden text-xl font-bold1 ${toggle ? "translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out font-bold`}>
          <div className='flex justify-end' onClick={()=>setToggle(false)}>
             <img src="/close.svg" alt="" height={30} width={30} />
          </div>

          <a  href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
       </div>
    </div>
  )
}

export default Navbar
