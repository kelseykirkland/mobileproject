var SelectList = [{key: "Harveys"}, {key: "McD"}, {key: "Wendys"}, {key: "Tims"}, {key: "A&W"}, {key: "5Guy"}, {key: "Burger Priest"}, {key: "Subway"}, 
{key: "Doninos"}, {key: "Pizza Hut"}, {key: "Little Ceasers"}, {key: "Montanas"}, {key: "TJ"}, {key: "Boston Pizza"}, {key: "Dairy Queen"}, {key: "StarBucks"}];

class SelectController {
    getSelectList() {
        return SelectList;
    }

    //This is a function used for testing if the favourite list being changed will reflect
    //in the view.
    setSelectList() {
        SelectList = [{key: "Delta"}, {key: "Echo"}, {key: "Fox"}];
    }
}

const selectController = new SelectController();
export { selectController };