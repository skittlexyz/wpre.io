import { Cloud } from "lucide-react"
import Card from "./components/Card"
import { useState, useEffect } from "react"

function App() {
  const [ latitude, setLatitude ] = useState("");
  const [ longitude, setLongitude ] = useState("");
  useEffect(() => {
    console.log(navigator.geolocation.getCurrentPosition((position) => {return position}))
    setLatitude(navigator.geolocation.getCurrentPosition((position) =>
      {return position.coords.latitude;}
    ))
    setLongitude(navigator.geolocation.getCurrentPosition((position) =>
      {return position.coords.longitude;}
    ))
    console.log(latitude, longitude);
  }, [ latitude, longitude ])

  return (
    <main className="bg-black w-screen h-screen flex flex-col justify-center items-center gap-4">
      <header className="flex items-center gap-2">
        <Cloud size={120} strokeWidth={2} className="stroke-primary" />
        <h1 className="text-7xl text-secondary font-bold">
          wpre.io
        </h1>
      </header>
      <main className="flex flex-col gap-4">
        <h2 className="text-3xl text-center">
          Campinas, São Paulo
        </h2>
        <section className="flex gap-4 justify-center items-center">
          <Card
            size={"regular"}
            day={"Ontem"}
            weather={"chvnd bct"}
            temperature={"23"}
            windSpeed={"4"}
            rainChance={"100"}
            rainMm={"5"}
          />
        </section>
        <section className="flex flex-col gap-8 justify-center items-center">
          <div className="flex gap-8">
            <Card
              size={"mini"}
              day={"Ontem"}
              weather={"chvnd bct"}
              temperature={"23"}
              windSpeed={"4"}
              rainChance={"100"}
              rainMm={"5"}
            />
            <Card
              size={"mini"}
              day={"Ontem"}
              weather={"chvnd bct"}
              temperature={"23"}
              windSpeed={"4"}
              rainChance={"100"}
              rainMm={"5"}
            />
          </div>
          <div className="flex gap-8">
            <Card
              size={"mini"}
              day={"Ontem"}
              weather={"chvnd bct"}
              temperature={"23"}
              windSpeed={"4"}
              rainChance={"100"}
              rainMm={"5"}
            />
            <Card
              size={"mini"}
              day={"Ontem"}
              weather={"chvnd bct"}
              temperature={"23"}
              windSpeed={"4"}
              rainChance={"100"}
              rainMm={"5"}
            />
          </div>
        </section>
      </main>
    </main>
  )
}

export default App
