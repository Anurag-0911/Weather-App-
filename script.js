
var input = document.getElementById("myinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchbtn").click();
  }
});
  const search = ()=>
  {
    
    // fetch the data
    data = "";
    if(document.querySelector(".search_bar").value == '')
    {
      city = "delhi";
    }
    else{
      city = document.querySelector(".search_bar").value;
    }

    apiKey = "b26e3a7c703f06d4bed0c354e5b328f9"
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
           apiKey
    )
      .then ((response) => response.json())
      .then ((result) => {data = result
      console.log(data)

      const{ name }=data;
      const { icon, description} = data.weather[0];
      const { temp, humidity} = data.main;
      const { speed } = data.wind;
      console.log(name,icon,description,temp,humidity,speed)
      document.querySelector(".city").innerText = "Weather in "+ name;
      document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')"
    }).catch((err)=>
    
    {
      alert("invalid location")
    })





  }

  search();

