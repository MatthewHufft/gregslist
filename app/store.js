import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Goat from "./Models/Goat.js"

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  /**@type {House[]} */
  houses: [
    new House({ bedrooms: 4, bathrooms: 2, price: 350000, img: 'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg', description: "this is a neat house"}),
    new House({ bedrooms: 2, bathrooms: 1, price: 150000, img: 'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg', description: "this is an okay house"}),
    new House({ bedrooms: 20, bathrooms: 15, price: 890000, img: 'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg', description: "this is a dope house"})
  ],
  goats: [
    new Goat({ power: 35, size: "Huge", specialty: "Excellent salsa dancer", img: "https://www.marylandzoo.org/wp-content/uploads/2017/10/dwarf_goat_web.jpg", price: 2500})
  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
