import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'

const Cart = () => {
    const cartData = useSelector((state) => state.cartData)
    let amount = cartData.length && cartData.map((item) => parseFloat(item.price)).reduce((prev, next) => prev + next)
    console.log("cart page", amount)
    return (
        <>

            <div className='cart_data_list mb-5'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Brand</td>
                    </tr>
                    {
                        cartData.map((item) =>
                            <tr key={item.key}>
                                <td>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                            </tr>)
                    }
                </table>

                <div className='price_detail'>
                    <div className='adjust_price'>
                        <span>Amount</span><span>{amount}</span>
                    </div>
                    <div className='adjust_price'>
                        <span>Discount</span><span>{amount / 10}</span>
                    </div>
                    <div className='adjust_price'>
                        <span>Tax</span><span>000</span>
                    </div>
                    <div className='adjust_price'>
                        <span>Total</span><span>{amount - (amount / 10)}</span>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Cart