import React from "react";
import "../../styles/weather.css"
import { useSelector, useDispatch} from "react-redux";
import { changeDate } from "../../store/actions";

export default function Weather() {
  const location = useSelector((state) => state.location)
  const dispatch = useDispatch()

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  let apiCall = `http://api.weatherapi.com/v1/current.json?key=f2ccb9bcfb884abc96d61924222805&q=${location}&aqi=no`
  async function webApi() {
  const response = await fetch(apiCall)
  const data = await response.json()
  const time =  data.location.localtime[11] + data.location.localtime[12] + data.location.localtime[13] + data.location.localtime[14] + data.location.localtime[15]
  const day = days[new Date().getDay()]
  const dayNum = parseInt(data.location.localtime[8] + data.location.localtime[9])
  const month = mS[parseInt(data.location.localtime[6] - 1)]
  const temperature = data.current.temp_c
  const humidity = data.current.humidity
  const cloud = data.current.cloud
  const wind_kph = data.current.wind_kph
  const precip_mm = data.current.precip_mm
  const condition = data.current.condition.text
  
  let back = ""

  if (data.current.condition.text === "Partly cloudy") {
    back = "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  } else if (data.current.condition.text === "Sunny") {
    back = "https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  } else if (data.current.condition.text === "Moderate rain") {
    back = "https://images.pexels.com/photos/4172579/pexels-photo-4172579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  } else if (data.current.condition.text === "Clear") {
    back = "http://images.gawker.com/h9sqy5i4ohhnympbldoc/c_scale,fl_progressive,q_80,w_800.png"
  } else if (data.current.condition.text === "Moderate or heavy rain with thunder") {
    back = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Cloud_to_ground_lightning_strikes_south-west_of_Wagga_Wagga.jpg"
  } else if (data.current.condition.text === "Patchy rain possible") {
    back = "https://live.staticflickr.com/6125/6001185409_9d8c770255_b.jpg"
  } else if (data.current.condition.text === "Overcast") {
    back = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Overcast_Mehamn.jpg"
  } else if (data.current.condition.text === "Fog") {
    back = "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/fog-on-a-country-road.jpg"
  } else if (data.current.condition.text === "Moderate or heavy rain shower") {
    back = "https://cbsnews1.cbsistatic.com/hub/i/r/2020/02/10/7d42b2b9-cc37-4bec-accd-3fae647f38f8/thumbnail/1200x630/016cceba0a513dc82c08653b3ae9e58e/gettyimages-1204943963.jpg"
  } else if (data.current.condition.text === "Mist") {
    back = "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg"
  } else if (data.current.condition.text === "Thundery outbreaks possible") {
    back = "https://max.nwstatic.co.uk/newsimages2016/rain/showercloudsatsea.jpg?w=1200"
  } else if (data.current.condition.text === "Light rain") {
    back = "https://www.dailynews.com/wp-content/uploads/2018/04/ldn-l-weather-rain-dc-11.jpg"
  }

  dispatch(changeDate(time, day, month, dayNum, temperature, humidity, cloud, wind_kph, precip_mm, condition, back))
  } 
  webApi()
  
  let time = useSelector((state) => state.time)
  const day = useSelector((state) => state.day)
  const dayNum = useSelector((state) => state.dayNum)
  const month = useSelector((state) => state.month)
  const temperature = useSelector((state) => state.temperature)

  return (
    <div className="weather">
      <h6 className="weather--title">the.weather</h6>
      <div className="weather--current">
        <span className="weather--c">{temperature}°</span>
        <div className="weather--location">
        <h5 className="weather--city">{location}</h5>
        <p className="weather--date">{`${time} - ${day}, ${dayNum} ${month} '22`}</p>
        </div>
      </div>
    </div>
  )
}