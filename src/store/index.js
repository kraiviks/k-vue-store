import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    items: [],
    cart: {
      products: [],
      totalPrice: 0,
      totalItems: 0,
      tax: 0
    },
    favorities: [],
    total: 0,
    tax: 0,
    category: 'All',
    isAdmin: true,
    hasChanged: true,
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
        // Існуючий товар
        this.cart.products[existingProductIndex].quantity += 1
      } else {
        // Новий товар
        const newItem = { ...item, quantity: 1 } // Встановлення кількості за замовчуванням
        this.cart.products.push(newItem)
      }

      this.cart.totalPrice += item.price
      this.cart.totalItems += 1
      this.cart.tax = this.cart.totalPrice * 0.05

      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeFromCart(id) {
      const productToRemove = this.cart.products.find((item) => item.id === id)

      if (productToRemove) {
        // Знайдено продукт
        productToRemove.quantity--

        if (productToRemove.quantity < 1) {
          // Quantity стає негативним, видаляємо товар
          this.cart.products = this.cart.products.filter((item) => item !== productToRemove)
        }
        // Оновлення totalPrice, totalItems та tax
        if (this.cart.totalItems > 0) {
          this.cart.totalPrice -= productToRemove.price
          this.cart.totalItems -= 1
          this.cart.tax = this.cart.totalPrice * 0.05
        }

        localStorage.setItem('cart', JSON.stringify(this.cart))
      } else {
        // Продукт не знайдено, нічого не робимо
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
      console.log(findItem)

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
      this.drawerIsOpen = !this.drawerIsOpen
    },
    handlerOpenAuth() {
      this.authIsOpen = !this.authIsOpen
    }
  }
})
