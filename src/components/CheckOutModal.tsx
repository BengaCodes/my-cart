import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

interface CheckoutModalProps {
  showModal: boolean
  onClose: () => void
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  showModal,
  onClose
}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Checkout logic could go here in the future

    setFirstName('')
    setLastName('')
    setEmail('')
    setCardNumber('')
    setExpiration('')
    setCvv('')

    onClose()
  }

  return (
    <Modal show={showModal} onHide={onClose} className='h-100'>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-4'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mt-1' controlId='formFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mt-1' controlId='formLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mt-1' controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mt-1' controlId='formCardNumber'>
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter card number'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mt-1' controlId='formExpiration'>
            <Form.Label>Expiration</Form.Label>
            <Form.Control
              type='text'
              placeholder='MM/YY'
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mt-1' controlId='formCvv'>
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter CVV'
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant='primary' className='mt-4' type='submit'>
            Place Order
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default CheckoutModal
