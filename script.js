let corpo = document.querySelector("body")
let corFundo = document.querySelector("i#corFundo")
let iconeSolELua = document.querySelector("i.bi-moon-stars-fill")
let setaLg = document.getElementById("depoimentos")
let setaSm = document.getElementById("depoimentosSm")

corFundo.addEventListener("click", () => {
    if (corpo.className == "text-bg-white"){
        // Ir para o modo dark
        corpo.classList.remove("text-bg-white")
        corpo.classList.add("text-bg-dark")

        //Icone
        iconeSolELua.classList.remove("bi-moon-stars-fill")
        iconeSolELua.classList.add("bi-brightness-high-fill")

        // Seta
        setaLg.classList.remove("carousel-dark")
        setaSm.classList.remove("carousel-dark")
    } else {
        // Ir para o modo light
        corpo.classList.remove("text-bg-dark")
        corpo.classList.add("text-bg-white")

        //Icone
        iconeSolELua.classList.remove("bi-brightness-high-fill")
        iconeSolELua.classList.add("bi-moon-stars-fill")

        // Seta
        setaLg.classList.add("carousel-dark")
        setaSm.classList.add("carousel-dark")
    }
})
