import { CHANGE_DATE, CHANGE_LOCATION } from "../store/type"

const defaultState = {
  temperature: 0,
  humidity: 0,
  cloud: 0,
  wind_kph: 0,
  precip_mm: 0,
  location: "Lviv",
  time: "00:00",
  day: "",
  month: "",
  dayNum: 0,
  condition: "Sunny",
  back: ''
}

export const mainReducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_DATE:
      return {
        ...state,
        time: action.time,
        day: action.day,
        month: action.month,
        dayNum: action.dayNum,
        temperature: action.temperature,
        cloud: action.cloud,
        wind_kph: action.wind_kph,
        precip_mm: action.precip_mm,
        humidity: action.humidity,
        condition: action.condition,
        back: action.back
      }
    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.location
      }
    default: 
      return state
  }
}