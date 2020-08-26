import CarsController from "./Controllers/CarsController.js";
import HouseController from "./Controllers/HouseController.js";
import GoatController from "./Controllers/GoatController.js"
console.log(4)
class App {
  carsController = new CarsController();
  HouseController = new HouseController();
  GoatController = new GoatController();
}

window["app"] = new App();
