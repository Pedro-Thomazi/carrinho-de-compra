const qtdProducts = document.querySelector("#qtdProducts")
let allQtd = 0
qtdProducts.innerHTML = allQtd



const priceTotal = document.querySelector('.priceTotal')
let totalPrice = 0
priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


const remove1 = document.querySelector('.remove1')
const add1 = document.querySelector('.add1')
const qtd1 = document.querySelector('#qtd1')
const price1 = document.querySelector('#price1')
const btnAdd1 = document.querySelector('#btnAdd1')
const prod1 = document.querySelector('.prod1')
let price1Inital = 1415.99
let contQtd1 = 0

const priceReplace1 = price1.innerHTML.replace('.', '').replace(',', '.')
console.log(priceReplace1)

remove1.addEventListener("click", () => {
  contQtd1--
  allQtd--
  if (allQtd < 0) {
    allQtd = 0
    qtdProducts.innerHTML = allQtd
  }
  qtdProducts.innerHTML = allQtd
  if (contQtd1 < 0) {
    contQtd1 = 0
    prod1.classList.add('none')
  }
  qtd1.innerHTML = contQtd1
  totalPrice = totalPrice - price1Inital
  if (totalPrice < 0) {
    totalPrice = 0
    priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price1.innerHTML = (price1Inital * contQtd1).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("remove 1")
})
add1.addEventListener("click", () => {
  contQtd1++
  allQtd++
  qtdProducts.innerHTML = allQtd
  qtd1.innerHTML = contQtd1
  totalPrice = totalPrice + price1Inital
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  console.log(totalPrice)
  price1.innerHTML = (price1Inital * contQtd1).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("add 1")
})
btnAdd1.addEventListener("click", () => {
  contQtd1++
  allQtd++
  qtdProducts.innerHTML = allQtd
  prod1.classList.remove('none')
  qtd1.innerHTML = contQtd1
  totalPrice = totalPrice + price1Inital
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price1.innerHTML = (price1Inital * contQtd1).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("add 1")
})


// ---------------------------------------------------------------------------------------------------------



const remove2 = document.querySelector('.remove2')
const add2 = document.querySelector('.add2')
const qtd2 = document.querySelector('#qtd2')
const price2 = document.querySelector('#price2')
const btnAdd2 = document.querySelector('#btnAdd2')
const prod2 = document.querySelector('.prod2')
let price2Inital = 2554.65
let contQtd2 = 0
const priceReplace2 = price2.innerHTML.replace('.', '').replace(',', '.')
console.log(priceReplace2)

remove2.addEventListener("click", () => {
  contQtd2--
  allQtd--
  if (allQtd < 0) {
    allQtd = 0
    qtdProducts.innerHTML = allQtd
  }
  qtdProducts.innerHTML = allQtd
  if (contQtd2 < 0) {
    contQtd2 = 0
    prod2.classList.add('none')
  }
  qtd2.innerHTML = contQtd2
  totalPrice = totalPrice - price2Inital
  if (totalPrice < 0) {
    totalPrice = 0
    priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price2.innerHTML = (price2Inital * contQtd2).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("remove 2")
})
add2.addEventListener("click", () => {
  contQtd2++
  allQtd++
  qtdProducts.innerHTML = allQtd
  qtd2.innerHTML = contQtd2
  totalPrice = totalPrice + price2Inital
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price2.innerHTML = (price2Inital * contQtd2).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("add 2")
})
btnAdd2.addEventListener("click", () => {
  contQtd2++
  allQtd++
  qtdProducts.innerHTML = allQtd
  prod2.classList.remove('none')
  qtd2.innerHTML = contQtd2
  totalPrice = totalPrice + price2Inital
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price2.innerHTML = (price2Inital * contQtd2).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("add 2")
})

// ----------------------------------------------------------------------------------------------------

const remove3 = document.querySelector('.remove3')
const add3 = document.querySelector('.add3')
const qtd3 = document.querySelector('#qtd3')
const price3 = document.querySelector('#price3')
const btnAdd3 = document.querySelector('#btnAdd3')
const prod3 = document.querySelector('.prod3')
let price3Inital = 245.41
let contQtd3 = 0
const priceReplace3 = price3.innerHTML.replace('.', '').replace(',', '.')
console.log(priceReplace3)

remove3.addEventListener("click", () => {
  console.log("remove 3")
})
remove3.addEventListener("click", () => {
  contQtd3--
  allQtd--
  if (allQtd < 0) {
    allQtd = 0
    qtdProducts.innerHTML = allQtd
  }
  qtdProducts.innerHTML = allQtd
  if (contQtd3 < 0) {
    contQtd3 = 0
    prod3.classList.add('none')
  }
  qtd3.innerHTML = contQtd3
  totalPrice = totalPrice - price3Inital
  if (totalPrice < 0) {
    totalPrice = 0
    priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price3.innerHTML = (price3Inital * contQtd3).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("remove 3")
})
add3.addEventListener("click", () => {
  contQtd3++
  allQtd++
  qtdProducts.innerHTML = allQtd
  qtd3.innerHTML = contQtd3
  totalPrice = totalPrice + price3Inital
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price3.innerHTML = (price3Inital * contQtd3).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("add 3")
})
btnAdd3.addEventListener("click", () => {
  contQtd3++
  allQtd++
  qtdProducts.innerHTML = allQtd
  prod3.classList.remove('none')
  qtd3.innerHTML = contQtd3
  totalPrice = totalPrice + price3Inital
  priceTotal.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  price3.innerHTML = (price3Inital * contQtd3).toLocaleString('pt-br', { minimumFractionDigits: 2 })
  console.log("add 3")
})

// ------------------------------------------------------------------------------------------------

// Alert
const btnBuy = document.querySelector(".btnBuy")
const btn_close = document.querySelector(".btn-close")
const alertDiv = document.querySelector(".alert")
const alertPrice = document.querySelector("#alertPrice")


btnBuy.addEventListener("click", () => {
  if (totalPrice > 0) {
    alertPrice.innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    alertDiv.classList.add('show')
  }
  else {
    alert('Adicione algo ao carrinho para prosseguir a compra')
  }

})

btn_close.addEventListener("click", () => {
  location.reload()
})