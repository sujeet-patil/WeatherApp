const icon_tag=document.getElementById("icon");
const temp = document.getElementById('temp');
const summary = document.getElementById('summary');
const place = document.getElementById('loc');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');

const search_btn = document.getElementById('search_btn');
const search_bar = document.getElementById('search_bar');
const date = document.getElementsByClassName('date');
const day_icon = document.getElementsByClassName('day_icon');
const day_temp = document.getElementsByClassName('day_temp');
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

let lon,lon1;
let lat,lat1;
let icon;
let base,base2;

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((position)=>{
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    console.log(lon);
    console.log(lat);

    base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=714489c472f93abdb1b3b6103edabd71&lang=en`;
    fetch(base)
    .then((response)=>{
    return (response.json())
    }).then((data)=>{
        console.log(data);
        console.log(Math.floor(data.main.temp-273.15)+"°C");
        temp.innerText = Math.floor(data.main.temp-273.15)+"°C";
        summary.innerText = data.weather[0].main;
        place.innerText = data.name+","+data.sys.country;
        icon = data.weather[0].icon;
        let url = `http://openweathermap.org/img/wn/${icon}@2x.png`
        icon_tag.innerHTML = `<img src=${url} style= 'height:10rem'/>`;
    })

    base2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=714489c472f93abdb1b3b6103edabd71&lang=en`;
    fetch(base2)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        min_temp.innerText = "M: "+Math.floor(data.daily[0].temp.min-273.15)+"°C";
        max_temp.innerText = "H: "+Math.floor(data.daily[0].temp.max-273.15)+"°C";
        dt = new Date(data.daily[1].dt*1000);
        date[0].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[1].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[0].innerHTML = `<img src=${url}>`;
        day_temp[0].innerHTML = Math.floor(data.daily[1].temp.day-273.15)+"°C";

        dt = new Date(data.daily[2].dt*1000);
        date[1].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[2].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[1].innerHTML = `<img src=${url}>`;
        day_temp[1].innerHTML = Math.floor(data.daily[2].temp.day-273.15)+"°C";

        dt = new Date(data.daily[3].dt*1000);
        date[2].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[3].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[2].innerHTML = `<img src=${url}>`;
        day_temp[2].innerHTML = Math.floor(data.daily[3].temp.day-273.15)+"°C";

        dt = new Date(data.daily[4].dt*1000);
        date[3].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[4].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[3].innerHTML = `<img src=${url}>`;
        day_temp[3].innerHTML = Math.floor(data.daily[4].temp.day-273.15)+"°C";
    })
  })
}

search_btn.addEventListener('click',()=>{
    let city_name = search_bar.value;
    base = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=714489c472f93abdb1b3b6103edabd71&lang=en`;
    fetch(base)
    .then((response)=>{
    return (response.json())
    }).then((data)=>{
    console.log(data);
    console.log(Math.floor(data.main.temp-273.15)+"°C");
    temp.innerText = Math.floor(data.main.temp-273.15)+"°C";
    min_temp.innerText = "M: "+Math.floor(data.main.temp_min-273.15)+"°C";
    max_temp.innerText = "H: "+Math.floor(data.main.temp_max-273.15)+"°C";
    summary.innerText = data.weather[0].main;
    place.innerText = data.name+","+data.sys.country;
    icon = data.weather[0].icon;
    let url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    icon_tag.innerHTML = `<img src=${url} style= 'height:10rem'/>`;
    lat1 = data.coord.lat;
    lon1 = data.coord.lon;
    base2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&appid=714489c472f93abdb1b3b6103edabd71&lang=en`;
    fetch(base2)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        min_temp.innerText = "M: "+Math.floor(data.daily[0].temp.min-273.15)+"°C";
        max_temp.innerText = "H: "+Math.floor(data.daily[0].temp.max-273.15)+"°C";

        dt = new Date(data.daily[1].dt*1000);
        date[0].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[1].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[0].innerHTML = `<img src=${url}>`;
        day_temp[0].innerHTML = Math.floor(data.daily[1].temp.day-273.15)+"°C";

        dt = new Date(data.daily[2].dt*1000);
        date[1].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[2].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[1].innerHTML = `<img src=${url}>`;
        day_temp[1].innerHTML = Math.floor(data.daily[2].temp.day-273.15)+"°C";

        dt = new Date(data.daily[3].dt*1000);
        date[2].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[3].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[2].innerHTML = `<img src=${url}>`;
        day_temp[2].innerHTML = Math.floor(data.daily[3].temp.day-273.15)+"°C";

        dt = new Date(data.daily[4].dt*1000);
        date[3].innerText = (String(dt.getDate()).padStart(2,'0')+" "+months[dt.getMonth()]);
        icon = data.daily[4].weather[0].icon;
        url = `http://openweathermap.org/img/wn/${icon}.png`
        day_icon[3].innerHTML = `<img src=${url}>`;
        day_temp[3].innerHTML = Math.floor(data.daily[4].temp.day-273.15)+"°C";
    })
    })    
})