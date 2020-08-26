import { generateId } from "../utils.js";
export default class House {
  constructor({bedrooms, bathrooms, price, img, description }) {
    this.id = generateId()
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.price = price
    this.img = img
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.bedrooms} Bedroom, ${this.bathrooms} Bathroom House $${this.price}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.HouseController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.HouseController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}