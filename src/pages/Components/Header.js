import React from 'react'
import Image from 'next/image'
import { SearchIcon, ShoppingCartIcon, MenuIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../../slices/basketSlice'

function Header() {

    const router = useRouter()
    const [session] = useSession()
    const items  = useSelector(selectItems)

    return (
       <header className='sticky top-0 z-50'>

           {/* Top Header */}
           <div className='bg-amazon_blue w-full h-auto flex-shrink flex flex-grow p-1 px-2 items-center  md:px-8'>
               <div className='flex flex-grow sm:flex-grow mt-2 items-center'>
                    <Image 
                        src = 'https://links.papareact.com/f90'
                        width={100}
                        height={40}
                        objectFit='contain'
                        className='cursor-pointer'
                        onClick={()=> router.push('/')}
                    />
               </div>

               <div className='hidden sm:flex items-center flex-grow bg-yellow-400 mx-6 p-0 rounded-md hover:bg-yellow-500 cursor-pointer'>
               <input type="text" className='pt-0 flex-grow flex p-4 rounded-l-md focus:outline-none'/>
                <SearchIcon className='px-4 h-6'/>
               </div>

               <div className='text-white flex space-x-6 text-xs items-center space-x-2'>
                   <div onClick={!session ? signIn : signOut} className='p-1 cursor-pointer hover:underline'> 

                   
                       <p>
                            { session? `Hello ${session.user.name}` : 'Sign In'}   
                        </p>
                       <p className='font-bold'>Account & Lists</p>
                   </div>
                   <div className='p-1 cursor-pointer hover:underline'>
                       <p>Returns</p>
                       <p className='font-bold'>& Orders</p>
                   </div>
                   <div  onClick={()=>router.push('/checkout')} className='p-1 relative cursor-pointer hover:underline'>

                       <div className="absolute bg-yellow-400 rounded-full flex items-center text-sm font-bold p-1 py-0 top-0 right-1 text-black">
                           <p>{items.length}</p>
                       </div>
                        <ShoppingCartIcon />
                        <p className='font-bold inline-flex'>Basket</p>
                   </div>
               </div>
           </div>

           {/* Bottom Header*/}
           <div className='bg-amazon_blue-light text-white px-1  py-2 flex items-center space-x-6 text-xs'>
                <div className='flex items-center cursor-pointer'>
                    <MenuIcon className='h-6 right-1'/>
                    <p>All</p>
                </div>

                <div className='cursor-pointer'>
                    <p>Today's Deal</p>
                </div>

                <div className='cursor-pointer'>
                    <p>Customer Service</p>
                </div>

                <div className='cursor-pointer'>
                    <p>Gift Cards</p>
                </div>

                <div className='cursor-pointer hidden lg:inline-flex'>
                    <p>Register</p>
                </div>

                <div className='cursor-pointer hidden lg:inline-flex'>
                    <p>Sell</p>
                </div>
           </div>
       </header>
    )
}

export default Header
