import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={12} md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our ecommerce store! We are dedicated to providing
            high-quality products and excellent customer service. With a wide
            range of products to choose from, we aim to meet all your shopping
            needs.
          </p>
          <p>
            Our team is passionate about delivering a seamless shopping
            experience. We strive to ensure that every customer has a positive
            experience and finds the perfect products they are looking for.
          </p>
          <p>
            If you have any questions or feedback, please don't hesitate to
            reach out to our customer support team. We are here to assist you
            and make your shopping experience enjoyable.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img
            src='https://source.unsplash.com/featured/?product'
            alt='About Us'
            className='img-fluid rounded'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage
