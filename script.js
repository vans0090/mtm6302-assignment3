// declaring variables from the html document

const $form = document.getElementById('form')
const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $day = document.getElementById('day')
const $submit = document.getElementById('submit')
const $result = document.getElementById('result')
const $reset = document.getElementById('reset')


let newDate //variable to store the new date , (either from local storage or from user entry)

// variable to get and store if the date exists in the local storage
const newDateString = localStorage.getItem('newDate')
const newDateAfterString = new Date(newDateString)

//function retrieves(if) date from the local storage
function retrieveDate() {
    if (newDateString) {
        newDate = newDateAfterString
        $form.style.display = 'none'
        displayResult ()
    }

    return newDate
}


//adding event listener on month select tag to display a specific number of days as per the month selecetd
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


let firstTimeDate //varaiable to store new date if nothing is in local storage

//event listener to submit the form data 
$submit.addEventListener('click', function(event){
    event.preventDefault()

    //adjusting visibility modes
    $form.style.display = 'none'
    $result.style.display = 'block'
    $reset.style.display = 'block'

    firstTimeDate = new Date($year.value, $month.value - 1, $day.value)
    newDate = firstTimeDate

    //setting new date to local storage for further usage
    localStorage.setItem('newDate', new Date($year.value, $month.value - 1, $day.value)) 
})

$submit.addEventListener('click', displayResult)     //calling the function to get the timer work

//function to calculate the result and display it
function displayResult() {
    setInterval(function (){                    //setInterval() to get the countdown per second working

        const currentDate = new Date()
        
        const difference = newDate.getTime() - currentDate.getTime()
    
       
    //calculating the difference using various functions
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

    //displaying result on the html
    $result.innerHTML = `<h3 class='result'>Time Remaining</h3>
                        <h4>Days : Hours : Minutes : Seconds</h4>
                        <p><span>${toDays(difference)}</span>:<span> ${toHours(difference)} </span> : <span> ${toMinutes(difference)} </span> : <span> ${toSeconds(difference)}</span></p>`
                    }, 1000)
    
                    setTimeout(function () {       //setTimrout( to display the button with the result, 1 sec late)
                        $reset.innerHTML = `<button type='submit' id='reset'>Select a new date</button>`
                    }, 1000)

}


//reset function to select a new date 
$reset.addEventListener('click', function(){

    //adjusting visibility modes
    $reset.style.display = 'none'
    $result.style.display = 'none'

    //resetting the form to the original first time load
    document.getElementById ('form').reset();
    $form.style.display = 'block'
    
})

//calling the retrieve function to get item from local storage if item exists
//works when the page loads
retrieveDate ()




