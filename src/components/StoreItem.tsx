import { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'
import { formatCurreny } from '../utilities/helper'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 1
  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{
          objectFit: 'cover'
        }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurreny(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {!quantity ? (
            <Button className='w-100'> + Add To Cart</Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{
                gap: '.5rem'
              }}
            >
              <div className='d-flex align-items-center justify-content-center'>
                <Button>-</Button>
                <div>
                  <span className='fs-3'>{quantity}</span> in cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant='danger' size='sm'>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem
