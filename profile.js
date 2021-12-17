let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')


let favColor = evt => {
    alert('My Favorite Color is BLUE')
}

let favPlace = evt => {
    alert('My home')
}

let favRitual = evt => {
    alert('My favorite ritual is making coffee in the morning')
}

let randomRestaurant = evt => {
    evt.restaurantH3.innerHTML = 'hai'
    
   
    
}

colorBtn.addEventListener('click', favColor)

placeBtn.addEventListener('click', favPlace)

ritualBtn.addEventListener('click', favRitual)




