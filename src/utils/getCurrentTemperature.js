function getCurrentTemperature(hourArray, temperatureArray) {
    const date = new Date();
    hourArray = hourArray.slice(0, 24);
    hourArray = hourArray.map((element) => {
        return element.slice(-5, 13);
    });
    for (let index = 0; index < hourArray.length; index++) {
        if (hourArray[index] == date.getHours()) {
            return temperatureArray[index].toFixed(1)
        }
    }
}

export default getCurrentTemperature;