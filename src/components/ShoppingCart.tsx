import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import { formatCurreny } from '../utilities/helper'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

const ShoppingCart = ({ isOpen }: { isOpen: boolean }) => {
  const { closeCart, cartItems, totalPrice, clearCartItems } = useShoppingCart()

  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length ? (
          <Fragment>
            <Stack gap={3}>
              {cartItems?.map((item) => {
                if (item.quantity === 0) return null
                return <CartItem key={item.id} {...item} />
              })}
            </Stack>
            <div className='d-flex justify-content-between mt-4 w-100 flex-row-reverse'>
              <div className='fw-bold fs-5'>
                Total {formatCurreny(totalPrice)}
              </div>
              <Button variant='danger' size='sm'>
                <Link className='text-decoration-none text-white' to={'/cart'}>
                  Checkout
                </Link>
              </Button>
            </div>
            {cartItems.length ? (
              <Button
                variant='danger'
                className='w-100 mt-4'
                onClick={clearCartItems}
                size='sm'
              >
                Clear Basket
              </Button>
            ) : null}
          </Fragment>
        ) : (
          <p>No Items have been added to the cart.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart
