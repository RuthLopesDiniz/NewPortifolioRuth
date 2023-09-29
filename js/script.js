const burger = document.querySelector(".burger")
const navbar = document.querySelector(".links")

const btnUp = document.getElementById("btn-top")

let configuracao = {
    // A lista de frases que aparecerão
    // está string podem conter tags html
    strings: ["Programadora Front-end", "Desenvolvedora Front-end"],
    // A velocidade que é digitado
    typeSpeed: 100,
    startDelay: 500,
    backDelay: 1000,
    showCursor: true, 
    loop: true    
}
// O Objeto precisará recebe 2 parametros,
// 1º: Uma string começando com # para id ou . para classe html
// 2º: o objeto de configuração
let typed = new Typed(".multiple-text", configuracao);

    burger.addEventListener("click", () =>{
    burger.classList.toggle("active")
    navbar.classList.toggle("active")
})

btnUp.addEventListener("click", () => {
   window.scrollTo(0, 0)
    document.removeEventListener("scroll", ocult)
})

    /*btn arrow*/ 
    const ocult = () => {
        if(window.scrollY > 10){
            btnUp.style.display= "flex"
        }else{
         btnUp.style.display= "none"
        } 
    }
    
    document.addEventListener("scroll", () => {
        ocult()
        document.removeEventListener("scroll", ocult)
    })
ocult()


