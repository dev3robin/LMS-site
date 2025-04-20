import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch, useSelector } from 'react-redux';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { removeFromCart,clearCart } from '../../redux/cartSlice';
const Cart = () => {
  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.cart.cartItems)
  const totalBill = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));//as $ is in my price
    return acc + (isNaN(price) ? 0 : price);
  }, 0).toFixed(2);
  
  const len=cartItems.length
  return (
    <div className='cartcomponent  flex flex-col w-[90%]  max-w-[1260px]'>
      <header className='mt-5 mb-6 text-5xl font-bold'>Your Cart wallet</header>
      <div className="itemdetails grid grid-cols-6 grid-rows-7 gap-1 mb-5">
        <div className="itemspart col-span-4 row-span-7">
          <h2 className='mt-2 mb-2'><span>{len}</span> Courses in cart</h2>
          {cartItems.map((item,index)=>{
            return(
              <>
              <hr className='w-[90%]' />
              <div className="courseinfo py-5 px-2 gap-2 grid grid-cols-6 grid-rows-7" key={index}>
                <div className="row-span-7"><img src={item.thumbnail} width="150px" alt="" /></div>
                <div className="col-span-4 row-span-7">
                  <h2 className='font-bold'>{item.title}</h2>
                  <p>by {item.creator}</p>
                  <p>{item.rating}</p>
                  <button className='bg-emerald-200 px-2 py-1 rounded text-sm'>Update info</button>
                  <p className='text-sm'><span>34 hours</span> <FiberManualRecordIcon sx={{ fontSize: 10 }}/><span> 27 lecture</span> <FiberManualRecordIcon sx={{ fontSize: 10 }}/><span>126 videos</span></p>
                  <div className="btndiv mt-2.5 flex gap-10 text-purple-800">
                    <button className=' hover:bg-purple-200 px-1.5 rounded' onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
                    <button className=' hover:bg-purple-200  px-1.5 rounded'>Save for Later</button>
                  </div>
                </div>
                <div className="price row-span-7 col-start-6">{item.price}</div>
              </div>
              </>
            )
          })}
        </div>
        {cartItems.length > 0 &&
          <div className="billingpart  flex flex-col col-span-2 px-1 py-1 row-span-7 col-start-5 gap-2">
            <h2>Total</h2>
            <h1>${totalBill}</h1>
            <button className='py-2 bg-purple-700 w-full rounded font-bold text-white'>Proceed to Checkout<ArrowRightAltIcon /></button>
            <p className='mb-2 text-xs'>You won't be changed yet</p>
            <hr  />
            <h2 className='mt-2 font-bold'>Promotions</h2>
            <div className="discount flex gap-2.5 mt-">
              <input className='border-1 px-2 rounded' type="text"placeholder='Enter Coupon' />
              <button className=' bg-purple-700 w-full rounded text-white py-1.5'>Apply</button>

            </div>
          
          </div>}
      </div>
      {cartItems.length ==0 &&
        <div className="border-1 border-gray-200 w-full mb-10 flex flex-col gap-3 items-center justify-center">
          <div><img src="./public/continue.PNG" alt="" /></div>
          <p>Your cart is empty. Keep shopping to find a course!</p>
          <button className='bg-purple-700 text-white px-3 py-3 font-bold rounded mb-10
          '>Keep shopping</button>
        </div>
      }
      <div className="suggestionCompo mb-5">
        <h1>You might also like</h1>
      </div>
    </div>
  )
}

export default Cart