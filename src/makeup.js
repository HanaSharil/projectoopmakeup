function buttonClicked(){
    //const cityForm  = document.querySelector("#foodForm")
    //const getWeatherConditions = async(city) => {
    let brands = document.getElementById("brands").value
    let category = document.getElementById("category").value
    fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brands}&product_type=${category}`)
        .then (response => response.json())
        .then (data =>{
            console.log(data)
            console.log("Brand:",data[0].brand)
            console.log("Category:",data[0].product_type)
            document.getElementById("display").append((data[0].brand))
            document.getElementById("display1").append((data[0].product_type))
        })
}