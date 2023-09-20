
export class initCalendar{
    constructor(month, year){
        const daysEl = document.querySelector(".days")
        this.month = month
        this.year = year
        this.lastDate = new Date(this.year, this.month + 1, 0).getDate()
        this.firstDay = new Date(this.year, this.month, 1).getDay()
        this.lastDay = new Date(this.year, this.month + 1, 0).getDay()
        
        daysEl.innerHTML= ""

        if(this.firstDay == 0){
            this.firstDay = 7
        }
        
        for(let i = this.firstDay - 2; i >= 0; i--){
            daysEl.innerHTML += `<div><span class="prev-days">${new Date(this.year, this.month, 0 - i).getDate()}</span></div>`
        }

        for(let i = 1; i <= this.lastDate; i++){
            daysEl.innerHTML += `<div><span data-date="${new Date(this.year, this.month, i).toLocaleDateString()}" class="day">${i}</span></div>`
        }

        if(this.lastDay == 0){
            this.lastDay = 7
        }
        
        for(let i = 1; i <= (7 - this.lastDay); i++){
            daysEl.innerHTML += `<div><span class="prev-days">${new Date(this.year, this.month, i).getDate()}</span></div>`
        }

        let day = daysEl.querySelectorAll('.day');

        day.forEach((d) => {
            d.addEventListener('click', (e) => {
                this.onClickDate(e)
            })
        })

    }
    onClickDate(e){
        const date = e.target.dataset.date
        const valueDateEl = document.querySelector('p')
        valueDateEl.innerHTML = date
    }
    
}

