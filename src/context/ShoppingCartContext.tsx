import { PropsWithChildren, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'
import storeItems from '../data/items.json'

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  decreaseCartQuantity: (id: number) => void
  increaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  quantity: number
  openCart: () => void
  closeCart: () => void
  cartItems: CartItem[]
  totalPrice: number
  clearCartItems: () => void
}

type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )
  const [isOpen, setIsOpen] = useState(false)

  const getItemQuantity = (id: number) => {
    return cartItems?.find((item) => item.id === id)?.quantity || 0
  }

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.id === id) &&
        currItems.find((item) => item.id === id)?.quantity !== 0
      ) {
        return [
          ...currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        ]
      } else {
        return currItems.filter((item) => item.id !== id)
      }
    })
  }

  const clearCartItems = () => {
    setCartItems([])
  }

  const totalPrice = cartItems?.reduce((acc, currItem) => {
    const item = storeItems.find((item) => item.id === currItem.id)
    const totalOfItem = item?.price ? item.price * currItem.quantity : 0
    return totalOfItem + acc
  }, 0)

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return [
          ...currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        ]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  const openCart = () => setIsOpen(true)

  const closeCart = () => setIsOpen(false)

  const quantity = cartItems.reduce((a, c) => a + c.quantity, 0)

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        decreaseCartQuantity,
        increaseCartQuantity,
        removeFromCart,
        quantity,
        cartItems,
        openCart,
        closeCart,
        totalPrice,
        clearCartItems
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
