import React from 'react';
import Icon from './Icon';

const codeCombinations = [
    [0],
    [1, 2, 3],
    [45, 48],
    [51, 53, 55, 56, 57],
    [61, 63, 65, 66, 67, 80, 81, 82],
    [71, 73, 75, 77, 85, 86],
    [95],
    [96, 99]
];

const iconCombinations = [
    "ClearSky",
    "Cloudy",
    "CloudFog",
    "CloudDrizzle",
    "CloudRain",
    "CloudSnow",
    "CloudLightning",
    "CloudHail"
];

const textCombinations = [
    "Céu Limpo",
    "Ensolarado",
    "Nublado",
    "Chuva Leve",
    "Chuva",
    "Neve",
    "Tempestade",
    "Granizo"
]

function Card({ size, day, weather, temperature, windSpeed, rainChance, rainMm, timezone }) {
    let icon = null;
    let text = null;

    for (let index = 0; index < codeCombinations.length; index++) {
        if (codeCombinations[index].includes(weather)) {
            icon = iconCombinations[index];
            text = textCombinations[index];
            break;
        }
    }

    if (!Icon) {
        console.error("No icon found for weather code:", weather);
        return null;
    }

    const iconSize = size === 'regular' ? { width: 175, height: 175 } : { width: 100, height: 100 };
    const textSize = size === 'regular' ? 'text-2xl' : '';
    const titleSize = size === 'regular' ? 'text-3xl' : 'font-bold';
    const containerClass = size === 'mini' ? 'items-center' : '';

    return (
        <div className={`flex gap-4 ${containerClass}`}>
            <div className="flex">
                {text === "Céu Limpo" && size === "regular" ? (
                    <Icon spinning={true} timezone={timezone} name={icon} {...iconSize} classString="-ml-4 sm:ml-0" />
                ) : (
                    <Icon spinning={false} timezone={timezone} name={icon} { ...iconSize }/>
                )}
            </div>
            <div className="flex flex-col w-full justify-between">
                <h3 className={`w-full text-end ${titleSize} text-tertiary font-bold dark:font-normal`}>
                    {day}
                </h3>
                <p className={`${textSize} font-bold dark:font-normal dark:text-white text-black`}>
                    {text}<br />
                    {temperature}<br />
                    {windSpeed} km/h<br />
                    {rainChance}% / {rainMm} mm
                </p>
            </div>
        </div>
    );
}

export default Card;
