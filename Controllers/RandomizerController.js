
export default class RandomizerController {

    location = null;
    winner = null;
    randomizerList = new Array;

    getRandomizerList() {
        return  this.randomizerList;
    }

    clearRandomizerList() {
        this.randomizerList = [];
    }

    getWinner() {
        return this.winner;
    }

    // possibly useless
    getWinnerName() {
        return this.winner.name;
    }

    clearWinner() {
        this.winner = null;
    }

    setWinner(restaurant) {
        this.winner = restaurant;
        console.log("Set Winner: "+JSON.stringify(this.winner));
    }

    // It doesnt use this
    // This is useless
    // Param: array of restraunt object 
    setRandomizerList(data) {
        this.randomizerList = [{key: "Delta"}, {key: "Echo"}, {key: "Fox"}];
        //this.randomizeList = data;
        //console.log("RandomizeList")
        //console.log(this.randomizeList);
    }

    addRestaurant(restaurant) {
        console.log(restaurant);
        // var rest = {name: restaurant};
        this.randomizerList.push(restaurant);
        console.log(this.randomizerList);
        //restObjList.push(rest);
    }

    randomize() {
        if(this.randomizerList.length == 0) {
            console.log("No restaurants selected");
            this.winner = null;
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.randomizerList.length);
        var randomWinner = this.randomizerList[randomIndex];
        console.log(randomWinner);
        this.setWinner(randomWinner);
        console.log(this.getWinnerName());
        return this.winner;
    }

    removeFromRandomize(restaurant) {
        console.log("Removing "+restaurant);
        for (var i = 0; i < this.randomizerList.length; i++) {
            if(restaurant.key == this.randomizerList[i].key) {
                this.randomizerList.splice(i,1);
            }
        }
        console.log(this.randomizerList);
    }
    
}

const randomizerController = new RandomizerController();
export { randomizerController };
