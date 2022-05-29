import React from "react";
import "../../styles/city.css"
import { useDispatch} from "react-redux";
import { handleChangeLocation } from "../../store/actions"

export default function City() {
  const dispatch = useDispatch()

  function changeWeather(city) {
    dispatch(handleChangeLocation(city))
  }

  return (
    <div className="city">
      <p onClick={() => changeWeather("London")}>London</p>
      <p onClick={() => changeWeather("Berlin")}>Berlin</p>
      <p onClick={() => changeWeather("Kiev")}>Kiev</p>
      <p onClick={() => changeWeather("Dublin")}>Dublin</p>
      <p onClick={() => changeWeather("Lviv")}>Lviv</p>
      <p onClick={() => changeWeather("New-York")}>New-York</p>
    </div>
  )
}