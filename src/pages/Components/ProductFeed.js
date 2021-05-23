import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
    return (
        <div className = 'bg-gray-200 grid md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 grid-flow-row-dense lg:-mt-52 md:-mt-32 p-5'>

                 {
                   products?.map(({ title, image, description, category, price, id })=>{
                    return(
                       <Product 
                        title={title}
                        image = {image}
                        description = { description }
                        category = { category }
                        price = { price }
                        id = { id }
                        
                       />
                    )
                })
            }

            <img src="https://links.papareact.com/dyz" className='w-full h-auto md:col-span-full p-5' alt="" />

            <div className='md:col-span-full'>
 {
                   products?.slice(4, 5).map(({ title, image, description, category, price, id })=>{
                    return(
                            <Product 
                        title={title}
                        image = {image}
                        description = { description }
                        category = { category }
                        price = { price }
                        key = { id }
                        id = { id }
                       /> 
                        
                      
                    )
                })
            }
            </div>

            
 {
                    products?.slice(5, products.length).map(({ title, image, description, category, price, id })=>{
                    return(
                       <Product 
                        title={title}
                        image = {image}
                        description = { description }
                        category = { category }
                        price = { price }
                        id = { id }
                       />
                    )
                })
            }
           
           
           
           
        </div>
    )
}

export default ProductFeed
