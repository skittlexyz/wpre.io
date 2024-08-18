import { Cloud, LoaderCircle } from "lucide-react";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import getWeekDay from "./utils/getWeekDay";
import getLocationString from './utils/getLocationString';
import getCurrentTemperature from './utils/getCurrentTemperature';
import tzlookup from "tz-lookup";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    const fetchData = async (lat, long) => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(2)}&longitude=${long.toFixed(2)}&current=temperature_2m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_max,wind_speed_10m_max&timezone=${tzlookup(lat,long).replace("/", "%2F")}`
        console.log(url)
        const response = await fetch(url);
        const jsonData = await response.json();
        setWeatherData(jsonData);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to fetch weather data.");
      }
    };

    const getLocationAndFetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const locationNameString = await getLocationString(lat, long);
            setLocationName(locationNameString);
            await fetchData(lat, long);
          },
          (error) => {
            setErrorMessage(error.message);
            console.error("Geolocation error:", error);
          }
        );
      } catch (error) {
        setErrorMessage(error.message);
        console.error("Failed to get location:", error);
      }
    };

    getLocationAndFetchData();
  }, []);

  const iconSize = { width: 200, height: 175 };

  return (
    <main className={`bg-black w-screen mx-max md:h-screen ${!weatherData ? "h-full" : ""} sm:py-20 py-10 flex flex-col justify-center items-center gap-4`}>
      <header className="flex items-center gap-2">
        <Cloud size={120} strokeWidth={2} className="stroke-primary sm:w-full sm:h-full sm:opacity-100 sm:static w-0 h-0 opacity-0 absolute" />
        <h1 className="text-7xl text-secondary font-bold">
          wpre.io
        </h1>
      </header>
      <main className="flex flex-col gap-4 items-center">
        {!errorMessage ? (
          <>
          {weatherData ? (
            <>
              <h2 className="text-3xl text-center text-wrap  sm:px-0 px-12">
                {locationName || 'Location Unknown'}
              </h2>
              <section className="flex gap-4 justify-center items-center">
                <Card
                  size={"regular"}
                  day={"Hoje"}
                  weather={weatherData.daily.weather_code[0]}
                  temperature={getCurrentTemperature(weatherData.hourly.time, weatherData.hourly.temperature_2m) + " ºC"}
                  // temperature={((weatherData.daily.temperature_2m_max[0] + weatherData.daily.temperature_2m_min[0]) / 2).toFixed(1)}
                  windSpeed={weatherData.daily.wind_speed_10m_max[0]}
                  rainChance={weatherData.daily.precipitation_probability_max[0]}
                  rainMm={weatherData.daily.rain_sum[0]}
                />
              </section>
              <section className="flex flex-col gap-8 justify-center items-center">
                <div className="flex gap-8 md:flex-row flex-col">
                  <Card
                    size={"mini"}
                    day={getWeekDay(weatherData.daily.time[1])}
                    weather={weatherData.daily.weather_code[1]}
                    temperature={weatherData.daily.temperature_2m_min[1].toFixed(0) + " / " + weatherData.daily.temperature_2m_max[1].toFixed(0) + " ºC"}
                    windSpeed={weatherData.daily.wind_speed_10m_max[1]}
                    rainChance={weatherData.daily.precipitation_probability_max[1]}
                    rainMm={weatherData.daily.rain_sum[1]}
                  />
                  <Card
                    size={"mini"}
                    day={getWeekDay(weatherData.daily.time[2])}
                    weather={weatherData.daily.weather_code[2]}
                    temperature={weatherData.daily.temperature_2m_min[2].toFixed(0) + " / " + weatherData.daily.temperature_2m_max[2].toFixed(0) + " ºC"}
                    windSpeed={weatherData.daily.wind_speed_10m_max[2]}
                    rainChance={weatherData.daily.precipitation_probability_max[2]}
                    rainMm={weatherData.daily.rain_sum[2]}
                  />
                </div>
                <div className="flex gap-8 md:flex-row flex-col">
                  <Card
                    size={"mini"}
                    day={getWeekDay(weatherData.daily.time[3])}
                    weather={weatherData.daily.weather_code[3]}
                    temperature={weatherData.daily.temperature_2m_min[3].toFixed(0) + " / " + weatherData.daily.temperature_2m_max[3].toFixed(0) + " ºC"}
                    windSpeed={weatherData.daily.wind_speed_10m_max[3]}
                    rainChance={weatherData.daily.precipitation_probability_max[3]}
                    rainMm={weatherData.daily.rain_sum[3]}
                  />
                  <Card
                    size={"mini"}
                    day={getWeekDay(weatherData.daily.time[4])}
                    weather={weatherData.daily.weather_code[4]}
                    temperature={weatherData.daily.temperature_2m_min[4].toFixed(0) + " / " + weatherData.daily.temperature_2m_max[4].toFixed(0) + " ºC"}
                    windSpeed={weatherData.daily.wind_speed_10m_max[4]}
                    rainChance={weatherData.daily.precipitation_probability_max[4]}
                    rainMm={weatherData.daily.rain_sum[4]}
                  />
                </div>
              </section>
            </>
          ) : (
            <div className="w-full h-24 flex justify-center items-center">
              <LoaderCircle size={50} className="animate-spin stroke-tertiary" />
            </div>
          )}
          </>
        ) : ( <p className="text-tertiary text-2xl">{errorMessage}</p> )}
      </main>
      <section className="flex gap-4 mt-4 flex-wrap justify-center items-center sm:px-0 px-12">
        <a href="https://github.com/skittlexyz/wpre.io" target="_blank"><img src="https://img.shields.io/static/v1?label=skittlexyz&amp;message=wpre.io&amp;color=4f72fc&amp;logo=github" alt="MichaelCurrin - badge-generator"/></a>
        <a href="https://www.linkedin.com/in/moisescorreagomes/" target="_blank"><img src="https://img.shields.io/static/v1?label=LinkedIn&amp;message=Mois%C3%A9s+Corr%C3%AAa+Gomes&amp;color=4f72fc&amp;logo=linkedin" alt="MichaelCurrin - badge-generator"/></a>
      </section>
    </main>
  );
}

export default App;
