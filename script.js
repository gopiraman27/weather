// console.log("hello ji");

// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";


// function renderWeatherInfo(data){

//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

//     document.body.appendChild(newPara);
// }
// async function showWeather() {
//     // let latitude = 15.3333;
//     // let longitude = 74.0833;
//     // to handle the error try and catch will be use 
//     try{
//         const city = "goa";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();

//         //await key word -- jab tak yeh nhi huya hai tab tak aage nhi bdhega 
//         console.log("Weather data : -> ", data);
//         renderWeatherInfo(data);
//     }
//     catch(ere){
//         console.log("Error occur -> ", ere);
//     }

// }
// showWeather();


// async function getCustomerWeatherDetails() {
//     try{
//         let lat = 17.6333;
//         let lon = 18.3333;

//         //call api 
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();

//         console.log(data);
//         renderWeatherInfo(data);
//     }
//     catch(ere){
//         console.log("Error occur -> ", ere);
//     }
    
// }


