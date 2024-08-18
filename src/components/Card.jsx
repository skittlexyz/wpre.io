import React from 'react';
import { Sun, CloudSun, CloudFog, CloudDrizzle, CloudRain, CloudSnow, CloudHail, CloudLightning } from 'lucide-react';

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
    <Sun key="0" />,
    <CloudSun key="1" />,
    <CloudFog key="2" />,
    <CloudDrizzle key="3" />,
    <CloudRain key="4" />,
    <CloudSnow key="5" />,
    <CloudLightning key="6" />,
    <CloudHail key="7" />
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

const colorCombinations = [
    "secondary",
    "secondary",
    "tertiary",
    "primary",
    "primary",
    "tertiary",
    "primary",
    "tertiary"
]

function Card({ size, day, weather, temperature, windSpeed, rainChance, rainMm }) {
    let Icon = null;
    let text = null;
    let color = null;

    for (let index = 0; index < codeCombinations.length; index++) {
        if (codeCombinations[index].includes(weather)) {
            Icon = iconCombinations[index];
            text = textCombinations[index];
            color = colorCombinations[index];
            break;
        }
    }

    if (!Icon) {
        console.error("No icon found for weather code:", weather);
        return null;
    }

    const iconSize = size === 'regular' ? { width: 200, height: 175 } : { width: 100, height: 100 };
    const textSize = size === 'regular' ? 'text-2xl' : '';
    const titleSize = size === 'regular' ? 'text-3xl' : 'font-bold';
    const containerClass = size === 'mini' ? 'items-center' : '';

    return (
        <div className={`flex gap-4 ${containerClass}`}>
            <div className="flex">
                {React.cloneElement(Icon, { ...iconSize, className: "stroke-" + color })}
            </div>
            <div className="flex flex-col w-full justify-between">
                <h3 className={`w-full text-end ${titleSize} text-tertiary`}>
                    {day}
                </h3>
                <p className={`text-primary ${textSize}`}>
                    {text}<br />
                    {temperature}º C<br />
                    {windSpeed} km/h<br />
                    {rainChance}% / {rainMm} mm
                </p>
            </div>
        </div>
    );
}

export default Card;
