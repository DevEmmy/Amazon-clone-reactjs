import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../../slices/basketSlice'

function CheckOutProduct({
    id,
    description,
    category ,
    title,
    image,
    rating,
    price
}) {

    const dispatch = useDispatch()

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

    const removeItemFromBasket = ()=>{
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image width={200} height={200} objectFit='contain' src={image}/>

        <div className="col-span-3 mx-5">
            <p>{ title } </p>
            <div className='flex'>
                {Array(rating).fill().map((_, i)=>(
                        <StarIcon key={i} className='h-5 text-yellow-500'/>
                    )
                )

                    }
            </div>

            <p className='text-sm line-clamp-3 my-3'>{description}</p>
            <Currency quantity={price}/>
        </div>

        <div className='flex text-sm md:lg flex-col my-auto mx-auto justify-self-end space-y-2'>
        <button className='bg-gradient-to-b from-yellow-200 to-yellow-400 px-4 py-2 font-bold  text-black rounded text-center border-yellow-300 border focus:ring-2 focus:ring-500 focus:outline-none active:from-yellow-500' onClick={addItemToBasket}>Add to Basket</button>
        <button className='bg-gradient-to-b from-yellow-200 to-yellow-400 px-4 py-2 font-bold  text-black rounded text-center border-yellow-300 border focus:ring-2 focus:ring-500 focus:outline-none active:from-yellow-500' onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>



        </div>

    )
}

export default CheckOutProduct
