import Header from "./Components/Header";
import Image from 'next/image'
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckOutProduct from "./Components/CheckOutProduct";
import { useSession } from "next-auth/client";
import Currency from 'react-currency-formatter'

function CheckOut() {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const [session] = useSession()
    return (
        <div className='bg-gray-100 '>
            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto  w-11/12 mx-auto bg-gray-100'>
                <div className='flex-grow lg:w-2/3 flex-col m-5 shadow-md bg-white '>
                    <Image width={1020} height={250} objectFit="contain"  src='https://links.papareact.com/ikj'/>
                    <div className='flex flex-col p-5 bg-white space-y-10'>
                    <h1 className='text-3xl border-b pb-4 font-bold'>
                        { items.length ===0 ? 'Your Amazon Basket is Empty' : 'Shopping Basket '}
                    </h1>

                    {items?.map((item, i)=>{
                        return(
                        <CheckOutProduct

                        key={i}
                        id={item.id}
                        description={item.description}
                        category ={item.category}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                         />
                     
                        )
                    })}
                </div>
                </div>
               

                <div className='flex flex-col bg-white py-10 px-4'>
                    <h3>Subtotal ({items.length}) items : <Currency quantity={total}/> </h3>
                    <button disabled={!session}  className={`bg-gradient-to-b text-xs from-yellow-200 to-yellow-400 px-1 py-2 w-full font-bold  text-black rounded text-center border-yellow-300 border focus:ring-2 focus:ring-500 focus:outline-none active:from-yellow-500 ${ !session && 'from-gray-300 to-gray-500 border-gray-300 cursor-not-allowed' }`}> {!session? 'Sign In to check Out' : 'Check Out'}</button>
                </div>
            </main>
        </div>
    )
}

export default CheckOut
