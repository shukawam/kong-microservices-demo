import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchCartItems = () => {
    fetch('/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart items:', error));
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleRemoveFromCart = (id) => {
    console.log('Attempting to remove item with ID:', id);
    fetch(`/cart/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to remove item from cart');
        }
        alert('Item removed from cart!');
        fetchCartItems(); // Refresh cart items after removing
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
        alert('Error removing item from cart.');
      });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items before checking out.');
      return;
    }

    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems, total: cartItems.reduce((sum, item) => sum + item.price, 0) }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create order');
        }
        return response.json();
      })
      .then(order => {
        alert('Order placed successfully!');
        console.log('Order created:', order);
        // Clear the cart after successful order
        return fetch('/cart', { method: 'DELETE' }); // Assuming a DELETE /cart endpoint to clear all items
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to clear cart');
        }
        setCartItems([]); // Clear local cart state
        fetchCartItems(); // Refresh cart items in App.js
        navigate('/'); // Navigate back to home after checkout
      })
      .catch(error => {
        console.error('Error during checkout:', error);
        alert('Error during checkout.');
      });
  };

  return (
    <div className="cart-page-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <button onClick={() => navigate('/')}>Continue Shopping</button></p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-card">
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}</h3>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
