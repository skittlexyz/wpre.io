/*

props: {
    size: regular | mini,
    day
    weather: ?
    temperature
    windSpeed
    rainChance
    rainMm
}

*/

import { Sun } from 'lucide-react'

function Card({ size, day, weather, temperature, windSpeed, rainChance, rainMm, child }) {
    if (size === 'regular') return (
        <div className="flex gap-4">
                <Sun width={300} height={175} className="stroke-secondary flex" />
                <div className="flex flex-col w-full justify-between">
                    <h3 className="w-full text-end text-3xl text-tertiary">
                        {day}
                    </h3>
                    <p className="text-2xl text-primary">
                        {weather}<br />
                        {temperature}º C<br />
                        {windSpeed} km/h<br />
                        {rainChance}% / {rainMm} mm
                    </p>
                </div>
        </div>
    )
    if (size === 'mini') return (
        <div className="flex gap-4 items-center">
              <Sun width={100} height={100} className="stroke-secondary"/>
              <div className="flex flex-col w-full justify-between">
                <h3 className="w-full text-end font-bold text-tertiary">
                  {day}
                </h3>
                <p className="text-primary">
                    {weather}<br/>
                  {temperature}º C<br/>
                  {windSpeed} km/h<br/>
                  {rainChance}% / {rainMm} mm
                </p>
              </div>
        </div>
    )
}

export default Card