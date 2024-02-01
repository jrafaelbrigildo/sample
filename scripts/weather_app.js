const weatherForm = document.getElementById("weatherForm");
        const cityInput = document.getElementById("cityInput");
        const weatherInfo = document.querySelector(".weatherInfo");
        const apiKey = 'e5abe1ae18c120d832cccdffd87a937b';

        weatherForm.addEventListener("submit",  async event => {
            event.preventDefault();
            const city = cityInput.value.trim();
                if(city){
                    try {
                        const weatherData = await getWeatherData(city);
                        displayWeather(weatherData);
                        } 
                    catch (error) {
                        console.error(error);
                        errorMessage(error);
                        }
                    }else{
                        showError("Please enter a city");
                    }

        });
        
        async function getWeatherData(city){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            
            const response = await fetch(apiUrl);
            
            if(!response.ok){
                throw new Error("Could not fetch weather data");
            }
            return await response.json();
        }

        function displayWeather(data) {
            console.log(data)
            const {name: city, 
                   main: {temp, humidity}, 
                   weather: [{description, id}]} = data;
            
            weatherInfo.textContent = "";
            weatherInfo.style.display = "flex";
            
            const cityDisplay = document.createElement("h2");
            const tempDisplay = document.createElement("p");
            const humidDisplay = document.createElement("p");
            const descDisplay = document.createElement("p");
            const weatherEmojiDisplay = document.createElement("p");

            cityDisplay.textContent =city;
            cityDisplay.classList.add("city");
            weatherInfo.appendChild(cityDisplay);
            
            tempDisplay.textContent =`${(temp - 273.15).toFixed(1)}°C`;
            tempDisplay.classList.add("degree");
            weatherInfo.appendChild(tempDisplay);

            humidDisplay.textContent =`${humidity}%`;
            humidDisplay.classList.add("humid");
            weatherInfo.appendChild(humidDisplay);

            descDisplay.textContent = description;
            descDisplay.classList.add("stat");
            weatherInfo.appendChild(descDisplay);

            weatherEmojiDisplay.textContent = getWeatherEmoji(id);
            weatherEmojiDisplay.classList.add("weather-emoji");
            weatherInfo.appendChild( weatherEmojiDisplay);
           
        }
        function getWeatherEmoji(weatherId){
            switch(true){
                case(weatherId >= 200 && weatherId < 300):
                return "⛈";
                case(weatherId >= 300 && weatherId < 600):
                return "🌧";
                case(weatherId >= 600 && weatherId < 630):
                return "❄";
                case(weatherId == 741 ):
                return "🌫";
                case(weatherId == 781 ):
                return "🌪";
                case(weatherId == 800 ):
                return "☀";
                case(weatherId == 801):
                return "🌤";
                case(weatherId >= 802 && weatherId < 805):
                return "☁";
            }
        }
        function showError(message) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = message;
            errorMessage.classList.add("errorMessage");

            weatherInfo.textContent = "";
            weatherInfo.style.display = "flex";
            weatherInfo.appendChild(errorMessage);
        }