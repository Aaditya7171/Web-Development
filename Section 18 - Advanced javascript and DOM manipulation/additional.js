// var houseKeeper1 = {
//     name : "Kanta Bai",
//     age : 36,
//     workExperience : 9,
//     languages : ["Spanish", "English"]
// };
// alert("Hello! I am " + houseKeeper1.name + ", An house keeper with over " + houseKeeper1.workExperience + " years of experience.");

function HouseKeeper(name, cleaningRepertoire, workExperience, languages){
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.workExperience = workExperience;
    this.languages = languages;
    this.clean = function(){
        alert(this.name + ": Cleaning in progress...");
    }
}
var houseKeeper1 = new HouseKeeper("Jane", "Kitchen, Dining Room, Bed Room", 13, "French, English");
var houseKeeper2 = new HouseKeeper("Rachel", "Balcony,  Lounge Area, Gym", 9, "Spanish, English");
var houseKeeper3 = new HouseKeeper("Rosy", "Guest Room, Party Area, Pool", 7, "Japanese, English");
var houseKeeper4 = new HouseKeeper("Martha", "Lobby, Bedroooms", 6, "English");