export class Weekdays{
    constructor(weekdaysEl){
        this.weekdaysEl = weekdaysEl
        this.weekdays = [
            "Ponedjeljak",
            "Utorak",
            "Srijeda",
            "Cetvrtak",
            "Petak",
            "Subota",
            "Nedjelja"
        ];
        for(let i = 0; i < this.weekdays.length; i++){
            weekdaysEl.innerHTML += `<h3>${this.weekdays[i]}</h3>`
        }
    }
}