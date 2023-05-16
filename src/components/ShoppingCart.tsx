import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import { formatCurreny } from '../utilities/helper'
import storeItems from '../data/items.json'

const ShoppingCart = ({ isOpen }: { isOpen: boolean }) => {
  const { closeCart, cartItems } = useShoppingCart()
  const totalPrice = cartItems.reduce((acc, currItem) => {
    const item = storeItems.find((item) => item.id === currItem.id)
    const totalOfItem = item?.price ? item.price * currItem.quantity : 0
    return totalOfItem + acc
  }, 0)
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems?.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <div className='ms-auto fw-bold fs-5'>
          Total {formatCurreny(totalPrice)}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart
