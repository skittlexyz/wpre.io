function Icon({ name, width, height, classString, timezone, spinning }) {
    if (!classString) classString = ""
    if (spinning) classString += " animate-[spin_150s_linear_infinite]"
    else spinning = ""
    let period = "day";
    if (parseInt((new Date()).toLocaleString([], { timeZone: timezone }).split(":")[0].split(",")[1]) > 18) {
        period = "night";
    }
    switch (name) {
        case "ClearSky":
            if (period == "night") {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-sun stroke-secondary ${classString.replace(" animate-[spin_150s_linear_infinite]", "")}`}>
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                );
            } else {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-sun stroke-secondary ${classString}`}>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                );
            }
        case "Cloudy":
            if (period == "night") {
                return (
                    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-drizzle stroke-secondary ${classString}`}>
                        <path d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"></path>
                        <path className="stroke-tertiary" d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"></path>
                    </svg>
                )
            } else {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-sun stroke-secondary ${classString}`}>
                        <path d="M12 2v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="M20 12h2"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                        <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
                        <path className="stroke-tertiary" d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
                    </svg>
                );
            }
        case "CloudFog":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-fog stroke-tertiary ${classString}`}>
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M16 17H7"></path>
                    <path d="M17 21H9"></path>
                </svg>
            );
        case "CloudDrizzle":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-drizzle stroke-primary ${classString}`}>
                    <path className="stroke-tertiary" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M8 19v1"></path>
                    <path d="M8 14v1"></path>
                    <path d="M16 19v1"></path>
                    <path d="M16 14v1"></path>
                    <path d="M12 21v1"></path>
                    <path d="M12 16v1"></path>
                </svg>
            );
        case "CloudRain":
            if (period == "night") {
                return (
                    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-drizzle stroke-primary ${classString}`}>
                        <path className="stroke-secondary" d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"></path>
                        <path d="M11 20v2"></path>
                        <path className="stroke-tertiary" d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"></path>
                        <path d="M7 19v2"></path>
                    </svg>
                )
            } else {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-rain stroke-primary ${classString}`}>
                        <path className="stroke-tertiary" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                        <path d="M16 14v6"></path>
                        <path d="M8 14v6"></path>
                        <path d="M12 16v6"></path>
                    </svg>
                );
            }
        case "CloudSnow":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-snow stroke-tertiary ${classString}`}>
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M8 15h.01"></path>
                    <path d="M8 19h.01"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M12 21h.01"></path>
                    <path d="M16 15h.01"></path>
                    <path d="M16 19h.01"></path>
                </svg>
            );
        case "CloudHail":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-hail stroke-tertiary ${classString}`}>
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M16 14v2"></path>
                    <path d="M8 14v2"></path>
                    <path d="M16 20h.01"></path>
                    <path d="M8 20h.01"></path>
                    <path d="M12 16v2"></path>
                    <path d="M12 22h.01"></path>
                </svg>
            );
        case "CloudLightning":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-cloud-lightning stroke-primary ${classString}`}>
                    <path className="stroke-tertiary" d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
                    <path className="stroke-secondary" d="m13 12-3 5h4l-3 5"></path>
                </svg>
            );
        default:
            return null;
    }
}

export default Icon;