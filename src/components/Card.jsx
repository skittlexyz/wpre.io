import { Sun, CloudSun, CloudFog, CloudDrizzle, CloudRain, CloudSnow, CloudHail, CloudLightning } from 'lucide-react'

/*

0	         Clear sky                                             Sun

1, 2, 3	     Mainly clear, partly cloudy, and overcast             CloudSun

45, 48	     Fog and depositing rime fog                           CloudFog

51, 53, 55	 Drizzle: Light, moderate, and dense intensity         CloudDrizzle
56, 57	     Freezing Drizzle: Light and dense intensity           CloudDrizzle

61, 63, 65	 Rain: Slight, moderate and heavy intensity            CloudRain
66, 67	     Freezing Rain: Light and heavy intensity              CloudRain
80, 81, 82	 Rain showers: Slight, moderate, and violent           CloudRain

71, 73, 75	 Snow fall: Slight, moderate, and heavy intensity      CloudSnow
77	         Snow grains                                           CloudSnow
85, 86	     Snow showers slight and heavy                         CloudSnow

95 *	     Thunderstorm: Slight or moderate                      CloudLightning

96, 99 *	 Thunderstorm with slight and heavy hail               CloudHail

*/

const iconData = [
    {
        codes: [0],
        icon: (props) => <Sun {...props}/>
    },
    {
        codes: [1,2,3],
        icon: (props) => <CloudSun {...props}/>
    },
    {
        codes: [45,48],
        icon: (props) => <CloudFog {...props}/>
    },
    {
        codes: [51,53,55,56,57],
        icon: (props) => <CloudDrizzle {...props}/>
    },
    {
        codes: [61,63,65,66,67,80,81,82],
        icon: (props) => <CloudRain {...props}/>
    },
    {
        codes: [71,73,75,77,85,86],
        icon: (props) => <CloudSnow {...props}/>
    },
    {
        codes: [95,"*"],
        icon: (props) => <CloudLightning {...props}/>
    },
    {
        codes: [96,99,"*"],
        icon: (props) => <CloudHail {...props}/>
    },
    
]

function Card({ size, day, weather, temperature, windSpeed, rainChance, rainMm }) {
    /*
    
    TODO: ASSOCIATE WEATHER CODE WITH LUCIDE ICONS

    */

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
            <Sun width={100} height={100} className="stroke-secondary" />
            <div className="flex flex-col w-full justify-between">
                <h3 className="w-full text-end font-bold text-tertiary">
                    {day}
                </h3>
                <p className="text-primary">
                    {weather}<br />
                    {temperature}º C<br />
                    {windSpeed} km/h<br />
                    {rainChance}% / {rainMm} mm
                </p>
            </div>
        </div>
    )
}

export default Card