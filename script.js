console.log("Hello")
let input = document.querySelector(".input") ; 
let search = document.getElementById("search") ; 
let wimg = document.querySelector(".wimg") ; 
let temp = document.getElementById("temp") ; 
let humid = document.getElementById("humid") ; 
let wind = document.getElementById("wind") ; 
let des = document.getElementById("des") ; 
let sug = document.querySelector(".pp") ; 


async function checkWeather(city){
    const api = "your api key";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;


 let weatherdata =  await fetch(`${url}`).then(responce => 
    // coverting respnace by url to string 
    responce.json()) ;
   
   
 
  console.log(weatherdata) ; 
  temp.innerHTML = `<b> ${Math.round(weatherdata.main.temp - 273.15)} <sup class="sup">°C</sup></b> `
  des.innerHTML  = ` <h3>${weatherdata.weather[0].main} </h3>` 

  humid.innerHTML = ` <b> ${weatherdata.main.humidity }% </b>`

  wind.innerHTML=  `<b> ${weatherdata.wind.speed} Kmph </b>`


  switch(weatherdata.weather[0].main){
    case 'Clouds':
          wimg.src = "cloud.png" ; 
          des.innerHTML  = ` <h3> Cloudy Day </h3>`
          sug.innerHTML= `It may rain today in ${weatherdata.name}`
          break ; 
    case 'Clear':
          wimg.src = "sunny.png" ; 
         des.innerHTML  = ` <h3> Sunny Day </h3>`
         sug.innerHTML= `A perfect day to walk  in ${weatherdata.name}`
            break;
    case 'Rain':
          wimg.src = "rainy.png" ; 
         des.innerHTML  = ` <h3> Rainy Day  </h3>`
         sug.innerHTML= ` It's Rainning Now in ${weatherdata.name}`
            break;
    case 'Mist':
          wimg.src = "mist.png" ; 
         des.innerHTML  = ` <h3> Mist </h3>`
         sug.innerHTML= `A perfect day to walk in ${weatherdata.name}`
            break;
    case 'Snow':
          wimg.src = "snow.png" ; 
         des.innerHTML  = ` <h3> Snowy Day </h3>`
         sug.innerHTML= `Its time to create snow man  in ${weatherdata.name}`
            break;
    case 'Haze' :
         wimg.src="haze.png" ; 
         des.innerHTML  = ` <h3> Haze</h3>`
         sug.innerHTML= `Go for Walk in ${weatherdata.name}`
            break;

  }
  
}

search.addEventListener("click" , ()=>{
    checkWeather(input.value) ; 
})
