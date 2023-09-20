export class Months {
    constructor(monthEl, yearEl) {
        this.monthEl = monthEl
        this.yearEl = yearEl
        this.month = new Date().getMonth()
        this.year = new Date().getFullYear()
        this.monthsCro = [
            "Sijecanj",
            "Veljaca",
            "Ozujak",
            "Travanj",
            "Svibanj",
            "Lipanj",
            "Srpanj",
            "Kolovoz",
            "Rujan",
            "Listopad",
            "Studeni",
            "Prosinac"
        ];
        this.monthEl.innerHTML = this.monthsCro[this.month]
        this.yearEl.innerHTML = this.year
    }
    
    increaseMonth(){
        this.month++
        if(this.month > 11){
            this.month = 0
            this.year++
            this.yearEl.innerHTML = this.year
            this.monthEl.innerHTML = this.monthsCro[this.month] 
        }
        return this.monthEl.innerHTML = this.monthsCro[this.month]      
    }

    decreaseMonth(){
        this.month--
        if(this.month < 0){
            this.month = 11
            this.year--
            this.yearEl.innerHTML = this.year
            this.monthEl.innerHTML = this.monthsCro[this.month] 
        }
        return this.monthEl.innerHTML = this.monthsCro[this.month]      
    }
}


