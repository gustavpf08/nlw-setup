const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const ifDayExists = nlwSetup.dayExists(today)

  if (ifDayExists) {
    alert("Dia já incluso")
    return
  } else {
    nlwSetup.addDay(today)
  }
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const dataSave = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(dataSave)
nlwSetup.load()

