import GoatService from "../Services/GoatService.js"
import STORE from "../store.js";

function _drawGoats() {
  let goats = STORE.State.goats
  let template = ''
  goats.forEach(g => template += g.Template)
  document.getElementById('goats').innerHTML = template
}

export default class GoatController {
  constructor() {
    _drawGoats();
  }

  createGoat() {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    let rawGoat = {
      // @ts-ignore
      power: form.power.value,
      // @ts-ignore
      size: form.size.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      specialty: form.specialty.value,
      // @ts-ignore
      img: form.image.value
    }
    GoatService.createGoat(rawGoat)
    _drawGoats()
  }
  removeGoat(id) {
    GoatService.removeGoat(id);
    _drawGoats();
  }

  bid(id) {
    GoatService.bid(id);
    _drawGoats();
  }
}