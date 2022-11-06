function usermakeup(){
    var brand = document.getElementById("brand").value;
    fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => response.json())
    .then (data =>{
        console.log(data)
            console.log("Brand:",data[0].brand)
            console.log("Product name:",data[0].name)
            console.log("Description:",data[0].description)
            console.log("Price:",data[0].price)
            console.log("Category:",data[0].product_type)
            console.log("Rating:",data[0].rating)
            document.getElementById("display").append((data[0].brand))
            document.getElementById("display1").append((data[0].product_type))
            document.getElementById("display2").append((data[0].name))
            document.getElementById("display3").append((data[0].description))
            document.getElementById("display4").append((data[0].price))
            document.getElementById("display5").append((data[0].rating))

})
}






