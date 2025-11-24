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



const forecastBoston = 'https://api.weather.gov/gridpoints/BOX/72,90/forecast'

function Weather(){
    const [weatherPeriods, setWeather] = useState<WeatherPeriod[]>()
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [dataFailedToLoad, setDataFailedToLoad] = useState(false);

    useEffect(() => {
        async function getWeather(){
            try {
                const response = await fetch(forecastBoston)
                if (!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else {
                    let json = await response.json()
                    setWeather(json.properties.periods);
                    setDataIsLoaded(true);
                }
            } catch (err) {
                setDataFailedToLoad(true)
                console.log(err)
            }
        }
        getWeather()
    }, []);

    const getWeek = () => {
        let days = weatherPeriods?.map((period)=>{
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
                <div className="icon">
                    <img width={100} src={period.icon}  alt={period.detailedForecast}/>
                </div>

            </>
        )

    }



    if (!dataIsLoaded) {
        return (
            <div>
                {dataFailedToLoad ? <h2>Data Failed To Load</h2> : <h2>Boston Weather Loading</h2>}
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