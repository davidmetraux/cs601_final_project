import { useEffect, useState } from "react"
import "../style/Weather.css"

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
                setWeather(json.properties);
                setDataIsLoaded(true);
            });
    }, []);

    const getWeek = () => {
        let days = weatherProperties?.periods.map((period)=>{
            return <div className="day" key={period.number}>{getDay(period)}</div>
        })

        return (
            <div className="weatherList">
                {days}
            </div>
        )
    }
    
    const getDay = (period: WeatherPeriod) => {
        return (
            <>
                <div className="icon">
                    <img src={period.icon}  />
                </div>
                <div className="dayInfo">
                    <div>
                        <h3>{period.name}</h3>
                    </div>
                    <div>
                        {period.shortForecast}
                    </div>
                    <div>
                        {period.temperature} ° {period.temperatureUnit}
                    </div>
                </div>

            </>
        )

    }



    if (!dataIsLoaded) {
        return (
            <div>
                <h2>Boston Weather Loading</h2>
            </div>
        );
    } else {
        return (
            <div className="background">
                <h2>Boston Weather</h2>
                <p>Source: <a href="https://www.weather.gov/documentation/services-web-api">https://www.weather.gov/documentation/services-web-api</a></p>
                <div></div>
                {getWeek()}
            </div>
        );
    }

}

export default Weather