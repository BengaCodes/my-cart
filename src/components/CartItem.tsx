import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formatCurreny } from '../utilities/helper'

const CartItem = ({ id, quantity }: { id: number; quantity: number }) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((item) => item.id === id)
  const totalPrice = item?.price ? item.price * quantity : 0

  if (!item) return null

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className='me-auto'>
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '.75rem' }}>
          {formatCurreny(item.price)}
        </div>
      </div>
      <div className='d-flex align-items-center' style={{ gap: '.25rem' }}>
        <div>{formatCurreny(totalPrice)}</div>
        <Button
          variant='outline-danger'
          size='sm'
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  )
}

export default CartItem
