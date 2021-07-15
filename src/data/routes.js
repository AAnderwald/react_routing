
import Home from "../pages/Home";
import Films from "../pages/Films";
import People from "../pages/People";
import Species from "../pages/Species";
import Locations from "../pages/Locations";
import Vehicles from "../pages/Vehicles";
import SingleFilm from "../pages/SingleFilm";
import SingleCharacter from "../pages/SingleCharacter";
import SingleSpecies from "../pages/SingleSpecies";
import SingleVehicles from "../pages/SingleVehicles";
import SingleLocation from "../pages/SingleLocation";

class Route 
{
    constructor (component, path, label) 
    {
        this.component = component;
        this.path = path;
        this.label = label;
    }
}

class Routes {
    constructor() {
        this.list = [];
    }

    addRoute(route) {
        this.list.push(route);
        return this;
    }
}


export const routes = new Routes()
    .addRoute (new Route(Home, "/home", "Home"))
    .addRoute (new Route(Films, "/films", "Films"))
    .addRoute (new Route(SingleFilm, "/films/:id", "", false))  //blank label do it does not show up on the navbar
    .addRoute (new Route(People, "/people", "People"))
    .addRoute (new Route(SingleCharacter, "/people/:id", "", false))
    .addRoute (new Route(Species, "/species", "Species"))
    .addRoute (new Route(SingleSpecies, "/species/:id", "", false))
    .addRoute (new Route(Locations, "/locations", "Locations"))
    .addRoute (new Route(SingleLocation, "/locations/:id", "", false))
    .addRoute (new Route(Vehicles, "/vehicles", "Vehicles"))
    .addRoute (new Route(SingleVehicles, "/vehicles/:id", "", false));
   

