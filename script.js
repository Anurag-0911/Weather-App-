
var input = document.getElementById("myinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchbtn").click();
  }
});
var currcity = '';

apiKey = "b26e3a7c703f06d4bed0c354e5b328f9"
  const search = ()=>
  {
    
    // fetch the data
    data = "";
    if(document.querySelector(".search_bar").value == '')
    {
      city = currcity
    }
    else{
      city = document.querySelector(".search_bar").value;
    }

   
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
           apiKey
    )
      .then ((response) => response.json())
      .then ((result) => {data = result
      // console.log(data)

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
      document.getElementById("myinput").value = '';
    }).catch((err)=>
    
    {
      document.getElementById("myinput").value = '';
      alert("invalid location")
      
    })
  }
  var lat = 23.53434;
  var longi = 40.2332;
  // getting current location;
  if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
         lat = position.coords.latitude;
         longi = position.coords.longitude;
         dflt();
  
        // Do something with the location data, e.g. display on a map
        console.log(`Latitude: ${lat}, longitude: ${longi}`);
      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }
  



  function dflt() {
   
    fetch(
      "http://api.openweathermap.org/geo/1.0/reverse?lat="+lat+"&lon="+longi+"&limit=5&appid=b26e3a7c703f06d4bed0c354e5b328f9"
      ).then ((response) => response.json())
      .then ((result) => {
      console.log(result);
      console.log(result[0].name);
      currcity =  result[0].name;
      search();
      }
      
      )
      
    }


  

