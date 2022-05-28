import React from "react";
import "../../styles/weather.css"
import { useSelector, useDispatch} from "react-redux";
import { changeDate } from "../../store/actions";

export default function Weather() {
  const location = useSelector((state) => state.location)

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
  
  dispatch(changeDate(time, day, month, dayNum, temperature, humidity, cloud, wind_kph, precip_mm, condition))
  } 
  webApi()
  
  const dispatch = useDispatch()
  
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