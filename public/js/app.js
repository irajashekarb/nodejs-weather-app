const weatherForm = document.querySelector('form')
const search  = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

// messageOne.textContent = 'From JS'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    const url = 'http://localhost:3000/weather?address=' + location

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(url).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        }
        else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }     
    })
})
    console.log(location)
})
