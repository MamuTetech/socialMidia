const botaoWhats = document.querySelector("#botaoWhats")
const botaoInst = document.querySelector("#botaoInst")
const botaoFaceb = document.querySelector("#botaoFaceb")

botaoWhats.addEventListener("click",()=>{
    const numeroTelefone = "5562991001654"
    const menssagem = "olá, venho do site da sua empresa"
    const whatsappUrl = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(menssagem)}`
     location.href = whatsappUrl
})

botaoInst.addEventListener("click",()=>{
    const instagramUrl = "https://www.instagram.com/gleitonbritotattoo/"
    location.href = instagramUrl
})

botaoFaceb.addEventListener("click",()=>{
    const facebookUrl = "https://www.facebook.com/gleiton.britobernardes.3?locale=pt_BR"
   location.href = facebookUrl
})