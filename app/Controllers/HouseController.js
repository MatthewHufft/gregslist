import HouseService from "../Services/HouseService.js";
import STORE from "../store.js";
console.log(3)
// private
function _drawHouses() {
  let houses = STORE.State.houses
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(c => template += c.Template)
  document.getElementById('houses').innerHTML = template
}


//Public
export default class HouseController {
  constructor() {
    _drawHouses();
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawhouse = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      houseDescription: form.houseDescription.value,
      // @ts-ignore
      image: form.image.value
    }
    HouseService.createHouse(rawhouse)
    _drawHouses();
  }

  removehouse(id) {
    HouseService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    HouseService.bid(id);
    _drawHouses();
  }
}
