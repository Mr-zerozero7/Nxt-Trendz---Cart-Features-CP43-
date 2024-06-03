// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItemsPrice = cartList.reduce(
        (total, item) => total + item.quantity * item.price,
        0,
      )
      return (
        <div className="cart-summary-container">
          <div className="summary-content">
            <h1 className="order-total-tag">
              Order Total:
              <span className="total-price-span-tag">
                Rs {totalItemsPrice}/-
              </span>
            </h1>
            <p className="items-count">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
