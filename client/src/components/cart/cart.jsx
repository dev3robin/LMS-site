import { gsap } from 'gsap';
import { useState,useEffect,useRef} from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch, useSelector } from 'react-redux';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { removeFromCart,clearCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.cart.cartItems)
  const totalBill = cartItems.reduce((acc, item) => {
    if (!item || !item.price) return acc;
    const price = parseFloat(item.price.replace('$', ''));
    return acc + (isNaN(price) ? 0 : price);
  }, 0).toFixed(2);
  
  const cartRef = useRef(null);
  useEffect(() => {
    if (cartRef.current) {
      gsap.fromTo(
        cartRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);
  
  const len=cartItems.length
  return (
    <div className='cartcomponent  flex flex-col w-[90%]  max-w-[1260px]'ref={cartRef}>
      <header className='mt-5 mb-6 text-5xl font-bold'>Your Cart wallet</header>
      <div className="itemdetails flex flex-col md:grid md:grid-cols-6 md:grid-rows-7 gap-1 mb-5">
        <div className="itemspart  md:col-span-4 md:row-span-7">
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
          <div className="billingpart flex flex-col md:col-span-2 md:px-1 md:py-1 md:row-span-7 md:col-start-5 gap-2">
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
      {cartItems.length == 0 &&
        <div className="border-1 border-gray-200 w-full mb-10 flex flex-col gap-3 items-center justify-center">
          <div><img src="./public/continue.PNG" alt="" /></div>
          <p>Your cart is empty. Keep shopping to find a course!</p>
          <Link to='/'>
            <button  className='bg-purple-700 text-white px-3 py-3 font-bold rounded mb-10
            '>Keep shopping</button>
          </Link>
        </div>
      }
      <div className="suggestionCompo mb-5">
        <h1>You might also like</h1>
      </div>
    </div>
  )
}

export default Cart