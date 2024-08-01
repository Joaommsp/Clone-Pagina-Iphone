const btnMobile = document.getElementById("btn-mobile")

function toglleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault()
  }
  const nav = document.getElementById("nav")
  nav.classList.toggle("active")

  const active = nav.classList.contains("active")
  event.currentTarget.setAttribute("aria-expanded", active)

  if (active) {
    event.currentTarget.setAttribute("aria-label", "fechar menu")
  } else {
    event.currentTarget.setAttribute("aria-label", "abrir menu")
  }
}

btnMobile.addEventListener("click", toglleMenu)
btnMobile.addEventListener("touchstart", toglleMenu)

// dropdown

let main = document.querySelector("main")
let dropdownMenu = document.querySelector(".dropDown")


  let container = document.createElement("div")
  container.classList.add("container__dropdown")

  let input = document.createElement("input")
  input.type = "text"
  input.classList.add("search-input")

  let links = document.createElement("ul")
  links.classList.add("search-link")


  container.append(input, links)
  dropdownMenu.appendChild(container)


let btnSearch = document.getElementById("btn-search")
btnSearch.addEventListener("mouseenter", () => {

  main.classList.add('blur')

  dropdownMenu.style.height = "700%"

   input.placeholder = "Buscar em Apple.com"
   input.disabled = false

  links.innerHTML = `
  <li><img src="imagens/svg/arrowleft.svg">Encontre uma Loja</li>
   <li><img src="imagens/svg/arrowleft.svg">Compre na Apple Store Online</li>
   <li><img src="imagens/svg/arrowleft.svg">Asessórios</li>
   <li><img src="imagens/svg/arrowleft.svg">AirPods</li>
   <li><img src="imagens/svg/arrowleft.svg">AirTag</li>
  `
})

let btnCart = document.getElementById("btn-cart")

btnCart.addEventListener("mouseenter", () => {
   main.classList.add("blur")

  input.value = "" 
  input.placeholder = "Seu Carrinho está vazio"
  input.disabled = true

  dropdownMenu.style.height = "700%"
  links.innerHTML = `
  <li>Meu Perfil</li>
   <li><img src="imagens/svg/box.svg">Pedidos</li>
   <li><img src="imagens/svg/saves.svg">Items Salvos</li>
   <li><img src="imagens/svg/signin.svg">Conta</li>
   <li><img src="imagens/svg/login.svg">Entrar</li>
  `
})

if (window.innerWidth <= 1086) {
  dropdownMenu.style.width = 0
  input.style.display = "none"
  btnSearch.style.display = "none"
  btnCart.style.display = "none"
} else {
  btnSearch.style.display = "block"
  btnCart.style.display = "block"
}

dropdownMenu.addEventListener("mouseleave", () => {
  main.classList.remove("blur")
  dropdownMenu.style.height = "0"
})
