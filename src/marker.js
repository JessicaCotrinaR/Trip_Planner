function hotelMarker () {
    const hotel = document.createElement('img')
    hotel.src = "https://i.imgur.com/D9574Cu.png"
    hotel.classList.add('image')
    // const marker1 = new mapboxgl.Marker(hotel).setLngLat([-74.010, 40.707]).addTo(map);
    return hotel
}

function restaturantMarker () {
    const restaurant = document.createElement('img')
    restaurant.src = "https://i.imgur.com/cqR6pUI.png"
    restaurant.classList.add('image')
    // const marker2 = new mapboxgl.Marker(restaurant).setLngLat([-74.009, 40.705]).addTo(map)
    return restaurant
}

function activityMarker() {
    const activity = document.createElement('img')
    activity.src = "https://i.imgur.com/WbMOfMl.png"
    activity.classList.add('image')
    // const marker3 = new mapboxgl.Marker(activity).setLngLat([-74.015, 40.703]).addTo(map)
    return activity
}

    
export { hotelMarker, restaturantMarker, activityMarker }