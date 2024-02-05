const inputbox = document.getElementsByClassName('input-box');
const searchbtn = document.getElementById('searchbtn');
const whether_img = document.getElementById('whether-img');
const temp = document.getElementsByClassName('temp');
const whether = document.getElementsByClassName('whether');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

// const location_not_found = document.getElementsByClassName('location_not_found');

// const whether_body = document.getElementsByClassName('whether-body');

async function checkWhether(city)
{
    const api = "d7c48610286a1b8426baed99e8477a41";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const whether_data = fetch(`${url}`).then(response => response.json());

    console.log(whether_data);

    // if(whether_data.cod === '404')
    // {
    //     location_not_found.style.display = "flex";
    //     whether_body.style.display = "none";
    //     console.log("error");
    //     return;
    // }

    // location_not_found.style.display = "none";
    // whether_body.style.display = "flex";

    // temp.innerHTML = `${Math.round(whether_data.main.temp - 273.15)}`;

    // whether.innerHTML = `${whether_data.weather[0].description}`;

    // humidity.innerHTML = `${whether_data.humidity}%`;
    // wind_speed.innerHTML = `${whether_data.wind.speed}km/hr`;

    // for image
    // switch(whether_data.weather[0].main)
    // {
    //     case 'Clouds':
    //         whether_img.scr = "images/cloud.png";
    //         break;
    //     case 'clear':
    //         whether_img.scr = "images/clear.png";
    //         break;
    //     case 'mist':
    //         whether_img.scr = "images/mist.png";
    //         break;
    //     case 'rain':
    //         whether_img.scr = "images/rain.png";
    //         break;
    //     case 'snow':
    //         whether_img.scr = "images/snow.png";
    //         break;
    // }

}


searchbtn.addEventListener('click', ()=>{
    checkWhether(inputbox.value);
});