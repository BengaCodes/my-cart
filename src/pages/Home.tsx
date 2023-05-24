import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import data from '../data/items.json'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to our Online Store</h1>
          <p>Discover amazing products at great prices!</p>
          <Button variant='primary'>
            <Link to={'/store'} className='text-white text-decoration-none'>
              Shop Now
            </Link>
          </Button>
        </Col>
        <Col>
          <Card.Img
            variant='top'
            src={data[0].imgUrl}
            height='500px'
            style={{
              objectFit: 'cover',
              maxWidth: '100%'
            }}
            alt={data[0].name}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Featured Products</h2>
        </Col>
      </Row>
      <Row>
        {data.slice(1, data.length).map((item) => (
          <ProductCard
            name={item.name}
            description={item.name}
            imgUrl={item.imgUrl}
          />
        ))}
      </Row>
    </Container>
  )
}

export default Home
