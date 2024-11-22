import CurrentWeather from "@/components/current-weather"
import { useForecastQuery, useWeatherQuery } from "@/components/hooks/use-weather"
import HourlyTemprature from "@/components/hourly-temperature"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import WeatherSkeleton from "@/components/ui/loading-skeleton"
import WeatherDetails from "@/components/weather-details"
import WeatherForecast from "@/components/weather-forecast"
import { AlertTriangle } from "lucide-react"
import { useParams, useSearchParams } from "react-router-dom"

function CityPage() {
  const [searchParams] = useSearchParams()
  const params = useParams()

  const lat = parseFloat(searchParams.get("lat")|| "0")
  const lon = parseFloat(searchParams.get("lon")|| "0")

  const coordinates = {lat,lon} 

  const weatherQuery = useWeatherQuery(coordinates)
  const forecastQuery = useForecastQuery(coordinates)

  if(weatherQuery.error || forecastQuery.error){
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again.</p>
        </AlertDescription>
      </Alert>
    )
  }


  if(!weatherQuery.data || !forecastQuery.data || !params.cityName){
    return <WeatherSkeleton/>
  }

  return (
    <div className="space-y-4">
      {/* FavoriteCities */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold ml-3">{params.cityName}, {weatherQuery.data.sys.country}</h1>
      </div>

      {/* currently and hourly weather */}
      <div className="grid gap-6">
        <div className="flex flex-col gap-4">
          {/* current weather */}
          <CurrentWeather data={weatherQuery.data} locationName={" "}/>
          <HourlyTemprature data={forecastQuery.data}/>
          {/* hourly temprature */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* details */}
          <WeatherDetails data={weatherQuery.data}/>

          {/* forecast */}
          <WeatherForecast data={forecastQuery.data}/>
        </div>
      </div>
    </div>
  )
}

export default CityPage