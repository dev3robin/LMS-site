
import { Dialog } from '@headlessui/react'
import CloseIcon from '@mui/icons-material/Close'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const AddedToCartDialog = ({ isOpen, setIsOpen,course,selectedCourses }) => {
  const dispatch=useDispatch()
  const Addtocart=(course)=>{
    dispatch(addToCart(course))
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Dialog box */}
      <div className="fixed inset-0 flex items-center justify-center px-4">
        <div
          className=" w-[60%] bg-[#F6F7F9] rounded-lg p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="added-to-cart-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 id="added-to-cart-title" className="text-lg font-bold">
              Added to cart
            </h2>
            <button className='hover:bg-red-500 rounded-4xl' onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="grid grid-cols-7 grid-rows-1 gap-2 mb-5 ">
            <div className="col-span-2 "><img className='aspect-[5/3]' src={course.thumbnail} alt="" /></div>
            <div className="col-span-4 col-start-3">
                <h1>{course.title}</h1>
                <p className="">By {course.creator}</p>
                <p className="">Rating: ⭐ {course.rating}</p>
            </div>
            <p className="font-bold">{course.price}</p>
          </div>

          <div className='flex items-center justify-between gap-10'>
            <button className='py-2.5 w-full items-center border-1 border-purple-700 active:bg-purple-400 text-purple-700'>Proceed to checkout <ArrowRightAltIcon /></button>
            <button 
              className='py-2.5 w-full items-center bg-purple-700 hover:bg-purple-600 active:bg-purple-900 text-white'
              onClick={()=>Addtocart(course)}
              >Add to cart <ShoppingCartIcon /></button>
          </div>
          <hr className='mt-5 mb-5 text-gray-300'/>
          <div className='flex bg-white p-4 flex-col gap-2'>
            <h2 className='font-bold'>Frequently Bought Together</h2>
            {selectedCourses
              .filter(item => item.id !== course.id)
              .slice(0, 3)
              .map((item) => (
                <div class="grid grid-cols-9 grid-rows-3 gap-5" key={item.id}>
                  <div class="col-span-3 row-span-3"><img className='aspect-[5/3]' src={item.thumbnail} alt="" /></div>
                  <div class="col-span-4 row-span-3 col-start-4">
                    <p className='font-bold text-sm'>{item.title}</p>
                    <p className='text-sm'>{item.creator}</p>
                    <p className="text-sm">Rating: ⭐ {item.rating}</p>
                  </div>
                  <div class="row-span-3 col-start-8 flex justify-center font-bold">{item.price}</div>
                  <div class="row-span-3 col-start-9 flex items-start justify-center">
                    <button className='border-1 active:bg-emerald-400 hover:bg-purple-300 border-purple-900 rounded-4xl'
                    onClick={()=>Addtocart(item)}
                    ><AddIcon  sx={{color:"purple"}}/></button></div>
                </div>

            ))}


          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default AddedToCartDialog
