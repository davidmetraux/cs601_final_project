import { useEffect, useState } from "react"

interface WeatherPeriod {
    number: number;
    detailedForecast: string,
    icon: string,
    name: string,
    shortForecast: string,
    temperature: number,
    temperatureUnit: string
}

interface WeatherProperties {
    periods: WeatherPeriod[]
}



const forecastBoston = 'https://api.weather.gov/gridpoints/BOX/72,90/forecast'

function Weather(){
    const [weatherProperties, setWeather] = useState<WeatherProperties>()
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        fetch(forecastBoston)
            .then((res) => {return res.json()})
            .then((json) => {
                debugger
                setWeather(json.properties);
                setDataIsLoaded(true);
            });
    }, []);

    const getWeek = () => {
        let days = weatherProperties?.periods.map((period)=>{
            return <li key={period.number}>{getDay(period)}</li>
        })

        return (
            <ul>
                {days}
            </ul>
        )
    }
    
    const getDay = (period: WeatherPeriod) => {
        return (
            <ul>
                <li>
                    {period.name}
                </li>
                <li>
                    {period.shortForecast}
                </li>
                <li>
                    {period.temperature} ° {period.temperatureUnit}
                </li>
            </ul>
        )

    }



    if (!dataIsLoaded) {
        return (
            <div>
                <h2>Boston Weather</h2>
                <h1>Please wait some time....</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>data loaded</h1>
                {getWeek()}
            </div>
        );
    }

}

export default Weather