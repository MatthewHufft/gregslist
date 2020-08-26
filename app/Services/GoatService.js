import Goat from "../Models/Goat.js"
import STORE from "../store.js";

class GoatService {
  bid(id) {
    let goat = STORE.State.goats.find(g => g.id === id);
    goat.price += 10;
  }
  removeGoat(id) {
    let goatIndex = STORE.State.goats.findIndex(g => g.id === id)
    if (goatIndex === -1) {
      return
    } 
    STORE.State.goats.splice(goatIndex,1)
  }
  createGoat(rawGoat) {
    let goat = new Goat(rawGoat);
    STORE.State.goats.push(goat)
  }

}

const SERVICE = new GoatService();
export default SERVICE;