function getWeekDay(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1)
    if (isNaN(date.getTime())) throw new Error("Invalid date string.");
    const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' });
    let day = formatter.format(date);
    if (day.includes("-")) day = day.split("-")[0]
    return day.charAt(0).toUpperCase() + day.slice(1)
}

export default getWeekDay