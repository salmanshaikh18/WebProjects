if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let long = position.coords.longitude
        console.log(lat, long)
    })
} else {
    console.log("Please Allow the Permission!")
}