import { Minus, Plus, X } from 'lucide-react';
import CheckoutButton from './CheckoutButton';
import { useCart } from '@/context/cartContext';

function Cart() {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  if (state.items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        {state.items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-4 py-4 border-b">
            <img
              src={item.product.images[0]}
              alt={item.product.name}
              className="w-20 h-20 object-contain rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus size={20} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus size={20} />
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.product.id })}
              className="p-1 rounded-full hover:bg-gray-100 text-red-500"
            >
              <X size={20} />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <p className="text-xl font-bold text-right">
          Total: ${state.total.toFixed(2)}
        </p>
        <CheckoutButton total={state.total} items={state.items} />
      </div>
    </div>
  );
}

export default Cart;