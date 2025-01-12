import PropTypes from 'prop-types';
import { ShoppingCart as CartIcon } from 'lucide-react';
import Cart from './Cart';

function CartModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <CartIcon size={24} />
            </button>
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartModal;