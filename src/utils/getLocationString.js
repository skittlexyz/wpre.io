async function getLocationString(latitude, longitude) {
    const cityUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=10`;
    const stateUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=5`;
    const countryUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=8`;

    try {
        const cityResponse = await fetch(cityUrl);
        const stateResponse = await fetch(stateUrl);
        const countryResponse = await fetch(countryUrl);
        const cityData = await cityResponse.json();
        const stateData = await stateResponse.json();
        const countryData = await countryResponse.json();

        const cityName = cityData?.address?.municipality || 'Unknown City';
        const stateName = stateData?.address?.state || 'Unknown State';
        const countryName = countryData?.address?.country || 'Unknown Country';

        return `${cityName}, ${stateName}, ${countryName}`;
    } catch (error) {
        console.error('Failed to get location name:', error);
        return 'Location Unknown';
    }
}

export default getLocationString;
