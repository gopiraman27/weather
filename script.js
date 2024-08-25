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


// first work is switch into the both the tabs

// your weather and search weather

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm ]");
const searchInp = document.querySelector("[data-searchInput]");
const apiErrorContainer = document.querySelector(".api-error-container");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";



let currentTab = userTab;
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains(active)){
            userInfoContainer.classList.add(active);
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{ // pehle seaech wale tab pe tha ab your weather wale tab pe hu
            // search wale ko invisible krdo pehle
            searchForm.classList.remove("active");
            // user weather wale ko bhi hide krna hoga na  bcz isme purana wala logic hi rkha hoga pehle se 
            userInfoContainer.classList.remove(active); 
            // your weather wale ke liye liye location chahiye
            getFromSessionStorage();
        }


    }
}


userTab.addEventListener('click', ()=>{
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});
















