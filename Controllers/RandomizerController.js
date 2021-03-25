
export default class RandomizerController {

    location = null;
    winner = null;
    randomizerList = [];

    getRandomizerList() {
        return  this.randomizerList;
    }

    clearRandomizerList() {
        this.randomizerList = [];
    }

    getWinner() {
        return this.winner;
    }

    getWinnerName() {
        return this.winner.key;
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
        var rest = {key: restaurant};
        this.randomizerList.push(rest);
        console.log(this.randomizerList);
        //restObjList.push(rest);

    }

    randomize() {
        const randomIndex = Math.floor(Math.random() * this.randomizerList.length);
        var randomWinner = this.randomizerList[randomIndex];
        console.log(randomWinner);
        this.setWinner(randomWinner);
        console.log(this.getWinnerName())
    }
    
}

const randomizerController = new RandomizerController();
export { randomizerController };
