import React, { useState } from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'
// import {addToBasket } from ''

function Product({ title, image, description, category, price, id }) {
    const dispatch = useDispatch()

    const Max = 5
    const Min = 1
    const [rating ] = useState(
        Math.floor(Math.random() * (Max - Min + 1 ) + Min
    ))
    const [hasPrime ] = useState(Math.random() < 0.5);

    const addItemToBasket = ()=>{
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating
        }
       dispatch(addToBasket(product))
    }

    return (
        <div key={ id } className='relative flex flex-col items-center rounded-md bg-white p-10 z-30 m-5'>
            <p className='absolute top-2 right-2 text-sm text-gray-400'>{category}</p>
            <Image src={image} width={200} height={200} />
            <h3 className='text-sm my-3'>{ title }</h3>
           <div className='flex items-center text-yellow-400 mb-5'>
           { Array(rating).fill().map((_, i)=>(
                <StarIcon width={20} height={20}/>
            ))}
           </div>

           <Currency quantity={price} currency='GBP'/>
            
            <p className='text-xs my-2 line-clamp-2'>{ description }</p>

            <button className='bg-gradient-to-b from-yellow-200 w-full hover:shadow-xl to-yellow-400 text-xs px-4 py-2 font-bold  text-black rounded text-center border-yellow-300 border focus:ring-2 focus:ring-500 focus:outline-none active:from-yellow-500' onClick={addItemToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
