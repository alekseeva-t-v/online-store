class CartService {
  constructor() {
    this.cart = {}
  }

  add(product) {
    const key = product.id
    if (this.cart[key]) {
      this.cart[key].amount++
      return
    }
    this.cart[key] = {
      title: product.title,
      price: product.price,
      amount: 1
    }
  }

  remove(productId) {
    const amout = this.cart[productId].amount
    if (amout === 1) {
      delete this.cart[productId]
    } else {
      this.cart[productId].amount--
    }
  }

  clear() {
    this.cart = {}
  }

  getInfo() {
    const items = Object.keys(this.cart).map(id => {
      return {
        id,
        ...this.cart[id]
      }
    })
  
    const totalPrice = items.reduce((sum, item) => {
      return sum += item.amount * item.price}, 0)

    return { items, totalPrice }
  }
}

