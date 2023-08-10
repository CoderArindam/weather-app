const API_KEY = '5205e11e6e3e40c59da145606231008'
const API_URL = `http://api.weatherapi.com/v1/current.json?key=5205e11e6e3e40c59da145606231008&aqi=no&q=`;

const searchBox = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
const weatherIcon= document.querySelector('.weather-icon');
const weatherInfo = document.querySelector('.weather-info');

async function checkWeather(cityName){
  weatherInfo.style.display ='block'
  const response = await fetch(API_URL + cityName);
  let data = await response.json();
  
  document.querySelector('.temperature').innerText = `${data.current.temp_c}°C`;

  document.querySelector('.city-name').innerText = data.location.name;

  document.querySelector('.humidity-info').innerText = `${data.current.humidity}%`;

  document.querySelector('.wind-info').innerText = `${data.current.wind_kph} km/h`;
  console.log(data);
  console.log(data.current.condition.text)
  
  if (data.current.condition.text==='Mist'){
    weatherIcon.src = 'images/mist.png'
  }

  else if(data.current.condition.text==='Partly cloudy'){
    weatherIcon.src = 'images/clouds.png'
  }
  else if(data.current.condition.text==='Sunny'){
    weatherIcon.src = 'images/clear.png'
  }
  else if(data.current.condition.text==='Drizzle'){
    weatherIcon.src = 'images/drizzle.png'
  }
  else if(data.current.condition.text==='Patchy rain possible'){
    weatherIcon.src = 'images/rain.png'
  }

  else if(data.current.condition.text==='Rain'){
    weatherIcon.src = 'images/rain.png'
  }
  
  else if(data.current.condition.text==='Snow'){
    weatherIcon.src = 'images/snow.png'
  }

  else if(data.current.condition.text==='Overcast'){
    weatherIcon.src = 'images/clouds.png'
  }
}

searchBtn.addEventListener('click',()=>{
  checkWeather(searchBox.value)
})



