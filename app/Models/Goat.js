import { generateId } from "../utils.js";

export default class Goat {

  constructor({power, size, specialty, img, price}){
    this.id = generateId()
    this.power = power
    this.size = size
    this.specialty = specialty
    this.img = img
    this.price = price
  }
  get Template () {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.power} Goat Power, ${this.size} Goat for  $${this.price}</h4>
              <p class="card-text">${this.specialty}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.GoatController.removeGoat('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.GoatController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}