import { CHANGE_DATE, CHANGE_LOCATION } from "./type"

export function changeDate(time, day, month, dayNum, temperature, humidity, cloud, wind_kph, precip_mm, condition, back) {
  return {
    type: CHANGE_DATE,
    time,
    day, 
    month, 
    dayNum, 
    temperature, 
    humidity, 
    cloud,
    wind_kph,
    precip_mm, 
    condition,
    back
  }
}

export function handleChangeLocation(location) {
  return {
    type: CHANGE_LOCATION,
    location
  }
}