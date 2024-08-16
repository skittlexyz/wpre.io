import { Cloud, LoaderCircle } from "lucide-react"
import Card from "./components/Card"
import { useState, useEffect } from "react"
import getWeekDay from "./utils/getWeekDay";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_max,wind_speed_10m_max&timezone=America%2FSao_Paulo");
        const jsonData = await response.json();
        setWeatherData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData])

  return (
    <main className="bg-black w-screen h-screen flex flex-col justify-center items-center gap-4">
      <header className="flex items-center gap-2">
        <Cloud size={120} strokeWidth={2} className="stroke-primary" />
        <h1 className="text-7xl text-secondary font-bold">
          wpre.io
        </h1>
      </header>
      <main className="flex flex-col gap-4">
        {weatherData ? (
          <>
            <h2 className="text-3xl text-center">
              Campinas, São Paulo
            </h2>
            <section className="flex gap-4 justify-center items-center">
              <Card
                size={"regular"}
                day={"Hoje"}
                weather={weatherData.daily.weather_code[0]}
                temperature={((weatherData.daily.temperature_2m_max[0] + weatherData.daily.temperature_2m_min[0]) / 2).toFixed(1)}
                windSpeed={weatherData.daily.wind_speed_10m_max[0]}
                rainChance={weatherData.daily.precipitation_probability_max[0]}
                rainMm={weatherData.daily.rain_sum[0]}
              />
            </section>
            <section className="flex flex-col gap-8 justify-center items-center">
              <div className="flex gap-8">
                <Card
                  size={"mini"}
                  day={getWeekDay(weatherData.daily.time[1])}
                  weather={weatherData.daily.weather_code[1]}
                  temperature={((weatherData.daily.temperature_2m_max[1] + weatherData.daily.temperature_2m_min[1]) / 2).toFixed(1)}
                  windSpeed={weatherData.daily.wind_speed_10m_max[1]}
                  rainChance={weatherData.daily.precipitation_probability_max[1]}
                  rainMm={weatherData.daily.rain_sum[1]}
                />
                <Card
                  size={"mini"}
                  day={getWeekDay(weatherData.daily.time[2])}
                  weather={weatherData.daily.weather_code[2]}
                  temperature={((weatherData.daily.temperature_2m_max[2] + weatherData.daily.temperature_2m_min[2]) / 2).toFixed(1)}
                  windSpeed={weatherData.daily.wind_speed_10m_max[2]}
                  rainChance={weatherData.daily.precipitation_probability_max[2]}
                  rainMm={weatherData.daily.rain_sum[2]}
                />
              </div>
              <div className="flex gap-8">
                <Card
                  size={"mini"}
                  day={getWeekDay(weatherData.daily.time[3])}
                  weather={weatherData.daily.weather_code[3]}
                  temperature={((weatherData.daily.temperature_2m_max[3] + weatherData.daily.temperature_2m_min[3]) / 2).toFixed(1)}
                  windSpeed={weatherData.daily.wind_speed_10m_max[3]}
                  rainChance={weatherData.daily.precipitation_probability_max[3]}
                  rainMm={weatherData.daily.rain_sum[3]}
                />
                <Card
                  size={"mini"}
                  day={getWeekDay(weatherData.daily.time[4])}
                  weather={weatherData.daily.weather_code[4]}
                  temperature={((weatherData.daily.temperature_2m_max[0] + weatherData.daily.temperature_2m_min[0]) / 2).toFixed(1)}
                  windSpeed={weatherData.daily.wind_speed_10m_max[4]}
                  rainChance={weatherData.daily.precipitation_probability_max[4]}
                  rainMm={weatherData.daily.rain_sum[4]}
                />
              </div>
            </section>
          </>
        ) : (
          <div className="w-full h-24 flex justify-center items-center">
            <LoaderCircle size={50} className="animate-spin stroke-tertiary"/>
          </div>
        )}
      </main>
    </main>
  )
}

export default App
