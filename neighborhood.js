let restaurantBtn = document.querySelector('#restaurantBtn')
let restaurantH3 = document.querySelector('#restaurant')



let randomRestaurant = evt => {
    
    
    
    let laLupe = "https://www.lalupebk.com/"
    let elKucho = "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=2d8e061c-9320-4217-8645-b58d940f93fb"
    let Maite = "http://places.singleplatform.com/maite/menu?ref=google"
    
    
    let restaurantArr = [laLupe, elKucho, Maite]
   
    let random = Math.floor(Math.random() * restaurantArr.length);

   
    console.log(restaurantArr[random])

    restaurantH3.href= restaurantArr[random]

    
    
    
}



restaurantBtn.addEventListener('click', randomRestaurant)