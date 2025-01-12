import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard } from 'lucide-react';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key');

function CheckoutButton({ total, items }) {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      
      // This would typically call your backend to create a Stripe session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.product.name,
                images: [item.product.image],
              },
              unit_amount: Math.round(item.product.price * 100), // Stripe expects amounts in cents
            },
            quantity: item.quantity,
          })),
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
    >
      <CreditCard size={20} />
      Checkout (${total.toFixed(2)})
    </button>
  );
}

CheckoutButton.propTypes = {
  total: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CheckoutButton;