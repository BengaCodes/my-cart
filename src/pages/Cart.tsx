import { Container, Table, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import data from '../data/items.json'
import { formatCurreny } from '../utilities/helper'
import { useState } from 'react'
import CheckoutModal from '../components/CheckOutModal'

const Cart = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(true)

  const {
    cartItems,
    removeFromCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    totalPrice
  } = useShoppingCart()

  return (
    <Container>
      <Table responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Increase / Decrease</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            if (item.quantity === 0) return null
            return (
              <tr key={item.id}>
                <td>
                  <img
                    src={data.find((p) => p.id === item.id)?.imgUrl}
                    alt={data.find((p) => p.id === item.id)?.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td>{data.find((p) => p.id === item.id)?.name}</td>
                <td>${data.find((p) => p.id === item.id)?.price}</td>
                <td>{item.quantity}</td>
                <td>
                  $
                  {(data.find((p) => p.id === item.id)?.price as number) *
                    item.quantity}
                </td>
                <td>
                  <div
                    className='d-flex align-items-start flex-column'
                    style={{
                      gap: '.5rem'
                    }}
                  >
                    <div className='d-flex align-items-start justify-content-center'>
                      <Button onClick={() => decreaseCartQuantity(item.id)}>
                        -
                      </Button>
                      <div>
                        <span className='fs-3'>{item.quantity}</span> in cart
                      </div>
                      <Button onClick={() => increaseCartQuantity(item.id)}>
                        +
                      </Button>
                    </div>
                  </div>
                </td>
                <td>
                  <Button
                    variant='danger'
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div className='d-flex justify-content-between mt-4 w-100 flex-row-reverse'>
        <div className='fw-bold fs-5'>Total {formatCurreny(totalPrice)}</div>
        <Button
          onClick={handleShowModal}
          variant='primary'
          role='button'
          size='sm'
        >
          Pay Now
        </Button>
      </div>
      <CheckoutModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </Container>
  )
}

export default Cart
