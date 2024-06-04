import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    items: [],
    favorities: [],
    cart: {
      products: [],
      totalPrice: 0,
      totalItems: 0,
      tax: 0
    },
    category: 'All',
    filters: {
      byPrice: 'default',
      searchQuery: ''
    },
    searchValue: '',
    drawerIsOpen: false
  }),

  actions: {
    setItems(items) {
      this.items = items
    },
    setCart(localCart) {
      this.cart = localCart
    },
    addToCart(item) {
      const existingProductIndex = this.cart.products.findIndex((product) => product.id === item.id)

      if (existingProductIndex !== -1) {
        // Existing product
        this.cart.products[existingProductIndex].quantity += 1
      } else {
        // New product
        const newItem = { ...item, quantity: 1 }
        this.cart.products.push(newItem)
      }

      this.cart.totalPrice += item.price
      this.cart.totalItems += 1
      this.cart.tax = this.cart.totalPrice * 0.05

      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeOneProductFromCart(id) {
      const productToRemove = this.cart.products.find((item) => item.id === id)

      if (productToRemove) {
        // Find the product to remove
        productToRemove.quantity--

        if (productToRemove.quantity < 1) {
          // Quantity is 0, remove it from the cart
          this.cart.products = this.cart.products.filter((item) => item !== productToRemove)
        }
        // Update totalPrice, totalItems and tax
        if (this.cart.totalItems > 0) {
          this.cart.totalPrice -= productToRemove.price
          this.cart.totalItems -= 1
          this.cart.tax = this.cart.totalPrice * 0.05
        }

        localStorage.setItem('cart', JSON.stringify(this.cart))
      } else {
        // Product not found
        console.error(`Product with ID ${id} not found in cart`)
      }
    },
    removeProductFromCart(id) {
      const productToRemove = this.cart.products.find((item) => item.id === id)

      if (productToRemove) {
        this.cart.products = this.cart.products.filter((item) => item !== productToRemove)

        this.cart.totalPrice -= productToRemove.price * productToRemove.quantity
        this.cart.totalItems -= productToRemove.quantity
        this.cart.tax = this.cart.totalPrice * 0.05

        localStorage.setItem('cart', JSON.stringify(this.cart))
      } else {
        console.error(`Product with ID ${id} not found in cart`)
      }
    },
    setCategory(category) {
      this.category = category
    },
    addToFavorities(item) {
      const findItem = this.favorities.find((el) => el.id === item.id)
      if (!findItem) {
        this.favorities.push(item)
      }
      localStorage.setItem('favorities', JSON.stringify(this.favorities))
    },
    setFavorities(favorities) {
      this.favorities = favorities
    },
    removeFromFavorities(item) {
      this.favorities = this.favorities.filter((el) => el.id !== item.id)
      localStorage.setItem('favorities', JSON.stringify(this.favorities))
    },
    handlerOpenDrawer() {
      this.drawerIsOpen = true
    },
    handlerCloseDrawer() {
      this.drawerIsOpen = false
    },
    setSorting(value) {
      this.filters.byPrice = value
    },
    setSearchQuery(value) {
      this.filters.searchQuery = value
    }
  }
})
