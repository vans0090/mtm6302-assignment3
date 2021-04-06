const $form = document.getElementById('form')
const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $day = document.getElementById('day')
const $submit = document.getElementById('submit')
const $result = document.getElementById('result')
const $reset = document.getElementById('reset')

let newDate 
const newDateString = localStorage.getItem('newDate')
const newDateAfterString = Date(newDateString)



function retrieveDate() {
    if (newDateString) {
        newDate = newDateAfterString
    }
    else {
        newDate = ($year.value, $month.value - 1, $day.value) 
    }}
retrieveDate ()

console.log (newDate)


$month.addEventListener('click', function (){

    function printDays() {
        if ($month.value == '1' || $month.value == '3' || $month.value == '5' || $month.value == '7' || $month.value == '8' || $month.value == '10' || $month.value == '12' ) {
        
            let numberOf31Days = []
            for (let i=1; i <=31; i++){
                numberOf31Days.push(`<option value = ${i} id = ${i}>${i}</option>`)
            }
        
            $day.innerHTML = numberOf31Days.join('')

        }
        
        else if ($month.value == '4' || $month.value == '6' || $month.value == '9' || $month.value == '11') {

            let numberof30Days = []
            for (let i=1; i <=30; i++){
                numberof30Days.push(`<option value = ${i} id = ${i}>${i}</option>`)
            }
            
            $day.innerHTML = numberof30Days.join('')
        }

        else {
        
            let numberof28Days = []
        
        for (let i=1; i <=28; i++){
            numberof28Days.push(`<option value = ${i} id = ${i}>${i}</option>`)
        }
        $day.innerHTML = numberof28Days.join('')
        }
    }

        printDays()
})


// get date 

$submit.addEventListener('click', function(event){
    event.preventDefault()

    $form.style.display = 'none'
    $result.style.display = 'block'
    $reset.style.display = 'block'

    newDate = ($year.value, $month.value - 1, $day.value)

    localStorage.setItem('newDate', newDate) 

   setInterval(function (){ 

    const currentDate = new Date()
    const difference = newDate.getTime() - currentDate.getTime()

   

function toDays(ms) {
    return Math.floor(ms/ 1000/ 60/ 60/ 24)
}

function toHours(ms) {
    const days = toDays(ms)
    const hours = Math.floor(ms/ 1000/ 60/ 60)

    const remainingHours = hours - (days * 24)

    return remainingHours
    
}

function toMinutes(ms) {
    const days = toDays(ms)
    const hours = toHours(ms)
    const minutes = Math.floor(ms/ 1000/ 60)

    const remainingMinutes = minutes - ((days * 24* 60)+(hours*60))

    return remainingMinutes
    
}

 function toSeconds(ms) {
    const days = toDays(ms)
    const hours = toHours(ms)
    const minutes = toMinutes(ms)
    const seconds = Math.floor(ms/ 1000)

    const remainingSeconds = seconds - ((days * 24* 60*60)+(hours*60*60)+(minutes*60))

    return remainingSeconds
}



$result.innerHTML = `<h3 class='result'>Time Remaining</h3>
                    <p><span>${toDays(difference)}</span>:<span> ${toHours(difference)} </span> : <span> ${toMinutes(difference)} </span> : <span> ${toSeconds(difference)}</span></p>`
                }, 1000)

                setTimeout(function () {
                    $reset.innerHTML = `<button type='submit' id='reset'>Select a new date</button>`
                }, 1000)
                
                
                $reset.addEventListener('click', function(){
                    $reset.style.display = 'none'
                    $result.style.display = 'none'
                
                    document.getElementById ('form').reset();
                    $form.style.display = 'block'

                    // newDate = ''
                    
                })
              
            })








