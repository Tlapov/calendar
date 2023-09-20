import { Months }  from "./Calendar/Months.js"
import { Weekdays }  from "./Calendar/Weekdays.js"
import { initCalendar } from "./Calendar/initCalendar.js"

const monthEl = document.querySelector(".month")
const nextMonthEl = document.querySelector(".next-month")
const prevMonthEl = document.querySelector(".prev-month")

const yearEl = document.querySelector(".year")

const weekdaysEl = document.querySelector(".weekdays")

const month = new Months(monthEl, yearEl)
    new Weekdays(weekdaysEl)
    new initCalendar(month.month, month.year)

nextMonthEl.addEventListener("click", () => {
    month.increaseMonth()
    new initCalendar(month.month, month.year)
})

prevMonthEl.addEventListener("click", () => {
    month.decreaseMonth()
    new initCalendar(month.month, month.year)
})








