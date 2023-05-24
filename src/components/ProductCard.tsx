import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type ProductCardProp = {
  imgUrl: string
  name: string
  description: string
}

const ProductCard = ({ imgUrl, name, description }: ProductCardProp) => {
  return (
    <Col md={4}>
      <div className='product-card'>
        <Card.Img
          variant='top'
          src={imgUrl}
          height='200px'
          style={{
            objectFit: 'cover'
          }}
        />
        <h3>{name}</h3>
        <p>{description}</p>
        <Button variant='primary'>
          <Link to={'/store'} className='text-white text-decoration-none'>
            View Product
          </Link>
        </Button>
      </div>
    </Col>
  )
}

export default ProductCard
