// components/cart/cartPop.js
import { Dialog } from '@headlessui/react'
import CloseIcon from '@mui/icons-material/Close'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AddedToCartDialog = ({ isOpen, setIsOpen,course }) => {
  console.log(isOpen);
  
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
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className='flex items-center justify-between gap-10'>
            <button className='py-2.5 w-full items-center border-1 border-purple-700 text-purple-700'>Proceed to checkout <ArrowRightAltIcon /></button>
            <button className='py-2.5 w-full items-center bg-purple-700 text-white'>Add to cart <ShoppingCartIcon /></button>
          </div>
          <hr className='mt-5 mb-5 text-gray-300'/>
          <div className='flex bg-white p-4 flex-col'>
            <h2 className='font-bold'>Frequently Bought Together</h2>
            <div className='flex flex-col'>
              <img src="" alt="" />
              <div>
                <div>title</div>
                <div>creator</div>
                <div>rattings</div>
                <button>Bestseller</button>
              </div>
              <p>$299.66</p>
              <button></button>
            </div>

          </div>
          
          
        </div>
      </div>
    </Dialog>
  )
}

export default AddedToCartDialog
