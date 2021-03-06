export default class Products {
  constructor() {
    this.products = [
    {
      id: 1,
      name: "Coca Cola",
      code: "1",
      stock: 10,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 300
    },
    {
      id: 2,
      name: "Coca Cola Zero",
      code: "90413",
      stock: 4,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 300
    },
    {
      id: 3,
      name: "Guaraná Antarctica",
      code: "24352",
      stock: 6,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 250
    },
    {
      id: 4,
      name: "Guarana Antartica Zero",
      code: "2332",
      stock: 8,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 225
    },
    {
      id: 5,
      name: "Fanta Laranja",
      code: "44212",
      stock: 3,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 240
    },
    {
      id: 6,
      name: "Fanta Uva",
      code: "03432",
      stock: 5,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 275
    },
    {
      id: 7,
      name: "Guarana Jesus",
      code: "12984",
      stock: 7,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 200
    },
    {
      id: 8,
      name: "Pepsi",
      code: "94334",
      stock: 4,
      src: "//placehold.it/300x150/19274C/ffffff",
      price: 300
    }
  ]

  this.totalPrice = 0
  this.outOfStock = false
  }

  showProducts() {
    return this.products
  }

  getProduct(value) {
    let product = this.products.filter(product => value === product.code)
    let empytProduct = product.filter(product => product.stock > 0)

    if (product.length >= 1 && empytProduct.length >= 1) {
      this.outOfStock = false
  
      return { product: product[0], outOfStock: this.outOfStock }
  
    } else {
      return false
    }
  }

  addProduct(product) {
    product = this.products.find(item => item.id == product.id)
    
    this.totalPrice += product.price
    product.stock -= 1
    
    if (product.stock < 1) {
      this.outOfStock = true
    }

    return  { totalPrice: this.totalPrice, outOfStock: this.outOfStock }
  }
}
