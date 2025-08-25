const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPromocao")

frm.addEventListener("submit", (e) => {
    const medicamento =(frm.inMedicamento.value)
    const preco = Number(frm.inPreco.value)

    const promocao = math.floor(preco * 2)
    resp1.innerText = "ujbbbbbninmpoimp"

    // resp1.innerText = `promocao de ${medicamento}`
    // resp2.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`

    e.preventDefault()
})