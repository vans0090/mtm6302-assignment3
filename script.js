const $form = document.getElementById('form')
const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $day = document.getElementById('day-container')
const $submit = document.getElementById('submit')


//declaring months

const $jan = document.getElementById('m1')
const $feb = document.getElementById('m2')
const $mar = document.getElementById('m3')
const $apr = document.getElementById('m4')
const $may = document.getElementById('m5')
const $jun = document.getElementById('m6')
const $jul = document.getElementById('m7')
const $aug = document.getElementById('m8')
const $sep = document.getElementById('m9')
const $oct = document.getElementById('m10')
const $nov = document.getElementById('m11')
const $dec = document.getElementById('m12')

let numberOfDays = []
$month.addEventListener('click', function (){

    function printDays() {
        if ($month.value == 'jan' || $month.value == 'march' || $month.value == 'may' || $month.value == 'july' || $month.value == 'aug' || $month.value == 'oct' || $month.value == 'dec' ) {
        
        numberOfDays.push(` <select name="day" id="day">`)
            for (let i=1; i <=31; i++){
                numberOfDays.push(`<option value = ${i} id = ${i}>${i}<option>`)
            }
        numberOfDays.push(`</select>`)
            $day.innerHTML = numberOfDays.join('')

        }
        
        else if ($month.value == 'apr' || $month.value == 'june' || $month.value == 'sep' || $month.value == 'nov') {

            numberOfDays.push(` <select name="day" id="day">`)
            for (let i=1; i <=30; i++){
                numberOfDays.push(`<option value = ${i} id = ${i}>${i}<option>`)
            }
            numberOfDays.push(`</select>`)
            $day.innerHTML = numberOfDays.join('')
        }

        else {
        
        numberOfDays.push(` <select name="day" id="day">`)
        for (let i=1; i <=28; i++){
            numberOfDays.push(`<option value = ${i} id = ${i}>${i}<option>`)
        }
        numberOfDays.push(`</select>`)
        $day.innerHTML = numberOfDays.join('')
        }
    }

        printDays()
})
